import React from "react";
import {DefaultPlayer as Video} from 'react-html5video'
import videop from '../../assets/videoplaceholder.mp4'
import 'react-html5video/dist/styles.css';

const Videoplayer = () => {
    return(
        <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            //poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src={videop} type="video/webm" />
            {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
        </Video>
    )
}
export default Videoplayer