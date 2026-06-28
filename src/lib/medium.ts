import Parser from "rss-parser";
import { mediumPostsFallback, profile } from "@/lib/data";

export type MediumPost = {
  title: string;
  date: string;
  url: string;
  image: string;
};

const MEDIUM_FEED_URL = `${profile.medium.replace(/\/$/, "")}/feed`;
const REVALIDATE_SECONDS = 86_400;

const parser = new Parser({
  customFields: {
    item: [["content:encoded", "contentEncoded"]],
  },
});

function cleanMediumUrl(url: string): string {
  return url.split("?")[0] ?? url;
}

function formatMediumDate(pubDate: string | undefined): string {
  if (!pubDate) {
    return "";
  }

  return new Date(pubDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function extractCoverImage(html: string | undefined): string | null {
  if (!html) {
    return null;
  }

  const urls = [...html.matchAll(/https:\/\/cdn-images-1\.medium\.com[^"'\\s<>]+/g)].map(
    (match) => match[0],
  );

  if (urls.length === 0) {
    return null;
  }

  const stillImage = urls.find((url) => /\.(jpe?g|png|webp)/i.test(url));
  const imageUrl = stillImage ?? urls[0];

  return imageUrl.replace(/\/max\/\d+\//, "/max/1024/");
}

function mapFeedItem(item: Parser.Item & { contentEncoded?: string }): MediumPost | null {
  const url = item.link ? cleanMediumUrl(item.link) : "";
  const title = item.title?.trim();
  const image = extractCoverImage(item.contentEncoded ?? item.content);

  if (!url || !title || !image) {
    return null;
  }

  return {
    title,
    date: formatMediumDate(item.pubDate),
    url,
    image,
  };
}

export async function getMediumPosts(limit = 4): Promise<MediumPost[]> {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`Medium feed responded with ${response.status}`);
    }

    const feed = await parser.parseString(await response.text());
    const posts = (feed.items ?? [])
      .map((item) => mapFeedItem(item as Parser.Item & { contentEncoded?: string }))
      .filter((post): post is MediumPost => post !== null)
      .slice(0, limit);

    if (posts.length === 0) {
      throw new Error("Medium feed returned no usable posts");
    }

    return posts;
  } catch {
    return mediumPostsFallback.slice(0, limit).map(({ title, date, url, image }) => ({
      title,
      date,
      url,
      image,
    }));
  }
}
