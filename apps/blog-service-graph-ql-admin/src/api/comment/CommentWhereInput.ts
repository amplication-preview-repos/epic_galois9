import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  authorId?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  postId?: StringNullableFilter;
};
