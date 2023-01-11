import React, { useState, useEffect } from "react";

import styled from "styled-components";

const ImageUploadStyled = styled.input`
  &::-webkit-file-upload-button {
    display:none
  }
  &::before {
    content: "Pujar Imatges";
    display: inline-block;
    border: 1px solid #999;
    border-radius: 3px;
    padding: 6px 10px;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
    align-items: center;
    margin-right: 5px;
  }
  &:hover::before {
    border-color: black;
  }
  &:active::before {
    background: #f9f9f9;
    color: black
  }
`;
export const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [imageURLs, setImagesURLs] = useState([]);

  useEffect(() => {
    if (images.lenght < 1) return;
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImagesURLs(newImageURLs);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  return (
    <>
      <ImageUploadStyled
        type="file"
        multiple
        accept="image/*"
        onChange={onImageChange}
      />
      {imageURLs.map((imageSrc) => (
        <img sec={imageSrc} />
      ))}
    </>
  );
};
