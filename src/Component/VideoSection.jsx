import React from "react";

const VideoSection = () => {
  return (
    <div className="">
      <video
        src="src/assets/video.mp4"
        autoPlay
        muted
        controls
        loop
        width={800}
        className="mx-auto py-7 rounded-[76px] "
      />
    </div>
  );
};

export default VideoSection;
