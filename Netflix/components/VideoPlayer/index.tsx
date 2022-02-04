import { View, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';
import { Episode } from '../../types';
import {Video} from 'expo-av';
import { Playback } from 'expo-av/build/AV';
interface VideoPlayerProps{
    episode:Episode;

}
const VideoPlayer = (props:VideoPlayerProps) => {
    const {episode}=props
    const video = useRef<Playback>(null);
    const [status,setStatus]=useState({});
    useEffect(()=>
    {
        console.log("change")
        if(!video)
        {
            return;
        }
        (async()=>
        {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                {uri:episode.video},
                {},
               false

            )
        })();
    },[episode])
    // const handleVideoRef=(component:Playback)=>{
    //     const playbackObject = component;
    //     const source = {uri:episode.video}
    //     const initialStatus ={};
    //     playbackObject.loadAsync(source,initialStatus,false);
    // }   

  return (
    <View>
     <Video ref={video}
     style={styles.video}
     source={{uri:episode.video}}
     posterSource={{uri:episode.poster}}
    //  posterStyle={{resizeMode:'cover'}}
     usePoster={true}
     useNativeControls
     resizeMode='contain'
     onPlaybackStatusUpdate={status=>setStatus(()=>status)}
     />
    </View>
  );
};

export default VideoPlayer;
