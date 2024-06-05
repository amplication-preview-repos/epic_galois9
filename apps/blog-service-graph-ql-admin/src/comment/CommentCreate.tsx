import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="authorId" source="authorId" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="postId" source="postId" />
      </SimpleForm>
    </Create>
  );
};
