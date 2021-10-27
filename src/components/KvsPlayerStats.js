// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Grid, Typography } from '@mui/material';

export default function KvsPlayerStats(props) {

  const { mediaStats } = props;

  return (
    <Grid container sx={{ m: 2 }}>

      <Grid item xs={6} >
        <Typography
          fontSize="0.75rem"
          noWrap
        >
          Fragement #: {mediaStats.fragNumber} <br />
          Frag Duration: {mediaStats.fragDuration} <br />
          Resolution: {mediaStats.resolution}
        </Typography>
      </Grid>
      
      <Grid item xs={6} >
        <Typography
          fontSize="0.75rem"
          noWrap
        >
          FPS #: {mediaStats.frameRate} <br />
          Bitrate: {mediaStats.bitrate} kbs <br />
        </Typography>
      </Grid>
      
    </Grid>
  )
}
