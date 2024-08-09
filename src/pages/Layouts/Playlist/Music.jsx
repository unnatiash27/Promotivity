import { useState } from "react";
import { Text, createStyles, Indicator } from "@mantine/core";
import ReactPlayer from "react-player/youtube";
const useStyles = createStyles((theme, _params) => {
  return {
    content: {
      position: "relative",
    },

    image: {
      borderRadius: 5,
    },

    cover: {
      width: "100%",
      borderRadius: 5,
    },

    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 6,
      backgroundImage:
        theme.colorScheme === "dark"
          ? "linear-gradient(180deg, rgba(0,0,0, 0) 0%, rgba(0,0,0, 0) 90%)"
          : "linear-gradient(180deg, rgba(80,80,80, 0) 0%, rgba(80,80,80, 0) 90%)",
      transition: "top 500ms ease",
      borderRadius: 5,
      cursor: "pointer",
      zIndex: 98,
    },

    indicator: {
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 10,
      zIndex: 99,
    },
  };
});

const Music = (props) => {
  const { cover, title, videoID } = props;
  const { classes } = useStyles();
  const [play, setPlay] = useState(false);

  return (
    <div className={classes.content}>
      <video muted autoPlay loop className={classes.cover}>
        <source src={cover} type="video/webm" />
      </video>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoID}`}
        loop={true}
        className={classes.video}
        width={0}
        height={0}
        style={{
          position: "absolute",
        }}
        playing={play}
      />
      <div
        className={classes.overlay}
        onClick={() => setPlay(!play)}
        data-splitbee-event={`Play ${title}`}
      />
      <div className={classes.indicator}>
        <>
          <Indicator
            color="teal"
            position="middle-start"
            size={10}
            processing
            disabled={!play}
          >
            <Text size="sm" c="white" pl={10}>
              {title}
            </Text>
          </Indicator>
        </>
      </div>
    </div>
  );
};

export default Music;
