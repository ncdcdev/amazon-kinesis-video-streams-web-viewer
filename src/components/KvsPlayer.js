// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Grid } from '@mui/material';
import ReactPlayer from 'react-player/lazy'
import { hlsConfig } from '../assets/data/hlsConfigs'

export default function KvsPlayer(props) {

  const { hlsUrl, isPlaying, playbackRate, updatePlayerRef, handleMediaProgress } = props;

  // console.log('HLS CONFIGS: ')
  // console.log(hlsConfig);

  // Create empty ref component to attach to this ReactPlayer.
  const playerRef = React.createRef();

  const onMediaPlay = () => {
    updatePlayerRef(playerRef.current);
  };

  const onMediaError = (error) => {

    console.log('MEDIA ERROR from React-Player: Handler TBA....')
    console.log(error)
  }

  return (

    <Grid item xs={12}>

      <ReactPlayer
        ref={playerRef}
        url={hlsUrl}
        playing={isPlaying}
        playbackRate={playbackRate}
        controls
        onPlay={onMediaPlay}
        onError={onMediaError}
        onProgress={handleMediaProgress}
        progressInterval={500}
        width='100%'
        height='100%'
        config={{ 
          file: { 
            hlsOptions: hlsConfig
          }
        }}
      />
    </Grid>
  )
};
