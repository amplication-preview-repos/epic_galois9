import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProcessedCommentWhereInput = {
  authorId?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  postId?: StringNullableFilter;
};
