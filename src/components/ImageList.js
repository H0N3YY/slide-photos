import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function StandardImageList() {
  const [columns, setColumns] = useState(4);
  const [gap, setGap] = useState(20);

  useEffect(() => {
    function updateLayout() {
      const isSmallScreen = window.innerWidth < 600;
      if (isSmallScreen) {
        setColumns(1);
        setGap(10);
      } else {
        setColumns(4);
        setGap(20);
      }
    }

    updateLayout();

    window.addEventListener("resize", updateLayout);
    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  return (
    <ImageList variant="masonry" cols={columns} gap={gap} sx={{ backgroundColor: 'white', margin: '10' }} >
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
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
  {
    img: "https://images.squarespace-cdn.com/content/v1/64203d9600825f68e2488772/e2b52774-1c2d-4aed-b42f-b7bfa5e740f2/Wroclaw-Poland-bronwyn-townsend--2.jpg",
    title: "7 Photo",
  },
  {
    img: "https://i.pinimg.com/736x/0a/ac/a0/0aaca03ca2f371011f716c5dd2773b95.jpg",
    title: "8 Photo",
  },
  {
    img: "https://i.pinimg.com/564x/fe/2b/4a/fe2b4a6190999453b0092b0c273ef1b2.jpg",
    title: "9 Photo",
  },
  {
    img: "https://i.pinimg.com/originals/fa/e5/e2/fae5e25d3b5cb4459cf000a46d31ab3c.jpg",
    title: "10 Photo",
  },
  {
    img: "https://i.pinimg.com/originals/f1/fe/07/f1fe07af66aeec291923e338531e97e0.jpg",
    title: "11 Photo",
  },
  {
    img: "https://i.pinimg.com/originals/4b/00/6b/4b006bd06b1d55c5b23a3d9fbe6fede3.jpg",
    title: "12 Photo",
  },
  {
    img: "https://i.pinimg.com/originals/88/4f/6c/884f6c4eeea46df830ff433479844cf6.jpg",
    title: "13 Photo",
  },
  {
    img: "https://i.pinimg.com/564x/0a/f4/bf/0af4bffd25d2c6be6f7baafd98ddd599.jpg",
    title: "14 Photo",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5980e801d482e93f58785fef/1598223671216-UX7SE6R6SI32KPXG5QZZ/green+and+yellow+buildings+in+warsaw+poland",
    title: "15 Photo",
  },
  {
    img: "https://chelseadinen.com/wp-content/uploads/2019/07/Rynek-Wroclaw-Poland-2.jpg",
    title: "16 Photo",
  },
];
