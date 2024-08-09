import React from "react";
import { Carousel } from "@mantine/carousel";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import Music from "./Music";

const Playlist = () => {
  const SOUNDS_LIST = [
    {
      cover: "https://ik.imagekit.io/dailyplace/covers/lofi-2.webm",
      videoID: "vkQcpY3T8T4",
      title: "Lo-fi",
    },
    {
      cover: "https://ik.imagekit.io/dailyplace/covers/coffee-shop-2.webm",
      videoID: "h2zkV-l_TbY",
      title: "Coffee shop",
    },
    {
      cover: "https://ik.imagekit.io/dailyplace/covers/forest-2.webm",
      videoID: "M0AWBnAv8VE",
      title: "Forest",
    },
    {
      cover: "https://ik.imagekit.io/dailyplace/covers/fireplace-2.webm",
      videoID: "L_LUpnjgPso",
      title: "Fireplace",
    },
    {
      cover: "https://ik.imagekit.io/dailyplace/covers/rain-2.webm",
      videoID: "nDq6TstdEi8",
      title: "Rain",
    },
    {
      cover: "https://ik.imagekit.io/dailyplace/covers/waves-.webm",
      videoID: "Nep1qytq9JM",
      title: "Waves",
    },
    {
      cover: "https://ik.imagekit.io/dailyplace/covers/vaporwave-2.webm",
      videoID: "zlxXwE0Oop8",
      title: "Vaporwave/Lofi/Synthwave",
    },
    ,
    {
      cover: "https://ik.imagekit.io/dailyplace/covers/asmr-2.webm",
      videoID: "-SYwOAe6V_4",
      title: "ASMR",
    },
  ];

  return (
    <>
      <div className=" flex justify-between">
        <h4 className="text-lg font-bold dark:text-[#e0e0e0]">Playlists</h4>
      </div>
      <hr className="mt-4" />
      <div className="flex flex-col mt-5">
        <Carousel
          className="playlist-carousel"
          slideSize={"33.3333%"}
          loop
          align="start"
          controlsOffset={"xl"}
          slideGap="md"
          controlSize={30}
          nextControlIcon={<CaretRightOutlined />}
          previousControlIcon={<CaretLeftOutlined />}
          styles={{
            control: {
              "&.mantine-Carousel-control": {
                backgroundColor: "white",
              },
            },
          }}
          dragFree
          breakpoints={[
            { maxWidth: 500, slidesPerPage: 1, slideSize: "100%" },
            { maxWidth: 768, slidesPerPage: 2, slideSize: "50%" },
            { maxWidth: 1024, slidesPerPage: 3, slideSize: "33.3333%" },
            { maxWidth: 1200, slidesPerPage: 4, slideSize: "25%" },
          ]}
          slidesToScroll={1}
        >
          {SOUNDS_LIST.map((sound, i) => (
            <Carousel.Slide key={i}>
              <Music {...sound} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Playlist;
