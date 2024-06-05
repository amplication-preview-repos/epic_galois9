import { ProcessedPost as TProcessedPost } from "../api/processedPost/ProcessedPost";

export const PROCESSEDPOST_TITLE_FIELD = "title";

export const ProcessedPostTitle = (record: TProcessedPost): string => {
  return record.title?.toString() || String(record.id);
};
