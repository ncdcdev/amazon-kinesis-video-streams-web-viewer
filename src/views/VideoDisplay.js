// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import KvsPlayerFrame from "../components/KvsPlayerFrame"
import KvsWebViewerQuickstart from '../components/KvsWebViewerQuickstart'

const useStyles = makeStyles({
  videoDisplayGrid: {
    border: "1px solid grey",
  }
});

export default function VideoDisplay(props) {

  const { kvsRegionClient, kvsStreams, vidsPerRow } = props;

  const classes = useStyles();

  return (
    <Grid container spacing={0} >
      {
        /* Display all of the selected KVS Streams  */
        kvsStreams.map((kvsStream) => (
          (kvsStream.displayChecked ?
            <Grid
              item
              key={`grid-item-${kvsStream.StreamName}`}
              className={classes.videoDisplayGrid}
              xs={12 / vidsPerRow}
            >
              <KvsPlayerFrame
                key={`kvs-player-${kvsStream.StreamName}`}
                kvsStream={kvsStream}
                kvsRegionClient={kvsRegionClient}
              />
            </Grid>
            : null
          )
        ))
      }

      {
        /* Display the quickstart after any video streams  */
        <KvsWebViewerQuickstart />
      }
    </Grid>
  )
}
