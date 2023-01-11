import React from "react";
import { ImageUpload } from "../atoms/ImageUpload";
import Text from "../atoms/Text";
import Input from "../atoms/Input";

export const ImageAndTextQuestion = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
      <ImageUpload />
      <div>
        <Input type="text"></Input>
      </div>
    </>
  );
};
