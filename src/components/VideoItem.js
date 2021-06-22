import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  console.log(props.video);
  const { height, width, url } = props.video.snippet.thumbnails.medium;
  return (
    <div className="video-item item">
      <img className="ui image" src={url}></img>
      <div className="content">
        <a className="header">{props.video.snippet.title}</a>
        <div className="description">
          {props.video.snippet.description.slice(0, 100)}...
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
