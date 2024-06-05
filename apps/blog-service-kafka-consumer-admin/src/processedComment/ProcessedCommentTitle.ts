import { ProcessedComment as TProcessedComment } from "../api/processedComment/ProcessedComment";

export const PROCESSEDCOMMENT_TITLE_FIELD = "authorId";

export const ProcessedCommentTitle = (record: TProcessedComment): string => {
  return record.authorId?.toString() || String(record.id);
};
