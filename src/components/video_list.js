import React from 'react';

const VideoList = (props) => {
   return (
    <ul className="col-md-4 list-group">
        {props.VideoList && props.VideoList.length}
    </ul>
    )
}
export default VideoList;