import { getMediumPosts } from "@/lib/medium";
import WritingCards from "@/components/sections/WritingCards";

export default async function Writing() {
  const posts = await getMediumPosts(4);

  return <WritingCards posts={posts} />;
}
