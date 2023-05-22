import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  return (
    <ImageList variant="masonry" cols={4} gap={8} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://i.pinimg.com/564x/4e/0b/6d/4e0b6d4f059cac5b69d5d5cfe33d73ad.jpg",
    title: "1 Photo",
  },
  {
    img: "https://i.pinimg.com/564x/18/13/b8/1813b85bd3fd09da79608e161c0e1c14.jpg",
    title: "2 Photo",
  },
  {
    img: "https://i.pinimg.com/564x/1f/df/f7/1fdff78c94707f3a3561405cb1831b40.jpg",
    title: "3 Photo",
  },
  {
    img: "https://i.pinimg.com/564x/f1/d8/7e/f1d87efef8b5342129cc55f248de9f70.jpg",
    title: "4 Photo",
  },
  {
    img: "https://i.pinimg.com/564x/59/27/5b/59275b8bc1ba5a7f0270b6675beb413b.jpg",
    title: "5 Photo",
  },
  {
    img: "https://i.pinimg.com/564x/dc/2c/5d/dc2c5db3c4f8756babc7f06e541cefa0.jpg",
    title: "6 Photo",
  },
];
