import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "authorId";

export const CommentTitle = (record: TComment): string => {
  return record.authorId?.toString() || String(record.id);
};
