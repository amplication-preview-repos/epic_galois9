export type Comment = {
  authorId: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  postId: string | null;
  updatedAt: Date;
};
