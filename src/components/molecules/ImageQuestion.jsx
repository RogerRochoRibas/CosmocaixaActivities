import React from "react";
import { ImageUpload } from "../atoms/ImageUpload";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

export const ImageQuestion = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
      <ImageUpload />
    </>
  );
};
