import React from "react";

const VideoTitle = (props) => {
  const { overview, title } = props;
  return (
    <div className="w-full aspect-video  pt-[15%] px-24  absolute text-white bg-gradient-to-r from-black mx-auto">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-50">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
