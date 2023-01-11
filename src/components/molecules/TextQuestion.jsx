import React from "react";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

export const TextQuestion = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
      <Input type='text'></Input>
    </>
  );
};
