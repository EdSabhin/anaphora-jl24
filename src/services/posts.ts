import type { Article } from "./models";

export const posts: Article[] = [
  {
    id: 1,
    url: "https://example.com/post1",
    articleName: "Post Title 1",
    articleHeadline: "Headline for Post 1",
    articleSubheadline: "Subheadline for Post 1",
    articleContent: "Content for the first post goes here."
  },
  {
    id: 2,
    url: "https://example.com/post2",
    articleName: "Post Title 2",
    articleHeadline: "Headline for Post 2",
    articleSubheadline: "Subheadline for Post 2",
    articleContent: "Content for the second post goes here."
  },
  {
    id: 3,
    url: "https://example.com/post3",
    articleName: "Post Title 3",
    articleHeadline: "Headline for Post 3",
    articleSubheadline: "Subheadline for Post 3",
    articleContent: "Content for the third post goes here."
  }
];