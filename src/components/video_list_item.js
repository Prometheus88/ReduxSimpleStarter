
import React from 'react';

const VideoListItem = (props) => {

  const video = props.video;
  const onVideoSelect = props.onVideoSelect;

  const ImageURL = video.snippet.thumbnails.default.url;
  const TitleURL = video.snippet.title;

  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ImageURL}/>
        </div>
        <div className="media-body">
          <div className="media-heading"> {TitleURL} </div>
        </div>
      </div>
    </li>

  );
};

export default VideoListItem;
