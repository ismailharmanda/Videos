import React from "react";

const VideoDetail = (props) => {
  return (
    props.video && (
      <div className="ui segment">
        {" "}
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    )
  );
};

export default VideoDetail;
