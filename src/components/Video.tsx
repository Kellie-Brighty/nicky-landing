import React from "react";
import ShowcaseVideo from "../assets/showcase.mp4";

interface VideoProps {
  src?: string;
  width?: string;
  height?: string;
  controls?: boolean;
}

const Video: React.FC<VideoProps> = ({
  width = "1000px",
  height = "400px",
  controls = true,
}) => {
  return (
    <div
      className={`bg-black p-[100px] flex justify-center text-white`}
      id="video"
    >
      <div>
        <p
          className={`text-center text-[24px] lg:text-[34px] mb-[20px] font-thin`}
        >
          Here's a short clip of my interactions
        </p>
        <video
          width={width}
          height={height}
          controls={controls}
          className={`rounded-lg lg:rounded-[20px]`}
        >
          <source src={ShowcaseVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
