import React from "react";
import ReactPlayer from 'react-player/youtube'

function Concept({ id }) {
  return (
    <div className="video justify-content-md-center" id={id}>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  );
}

export default Concept;