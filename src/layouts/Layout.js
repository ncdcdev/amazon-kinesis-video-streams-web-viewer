// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useState } from 'react'
import { Switch as RouteSwitch, Route, Redirect } from 'react-router-dom'

// Material UI / UI components and imports. 
import {
    Toolbar,
    CssBaseline,
    Box,
} from '@mui/material';

import { makeStyles } from '@material-ui/core'
import KvsViewerAppBar from "../components/KvsViewerAppBar"
import VideoDisplay from "../views/VideoDisplay"
import SideDrawer from "../components/SideDrawer"

// Theme / styles
const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        }
    }
})

export default function Layout({ }) {

    const classes = useStyles();
    const [vidsPerRow, setVidsPerRow] = useState(2);
    const [kvsRegionClient, setKvsRegionClient] = useState({ region: "", kvsClient: null });
    const [kvsStreams, setKvsStreams] = useState([]);

    return (
        <Box className={classes.root}>
            <CssBaseline />
            <KvsViewerAppBar />
            <SideDrawer
                setKvsRegionClient={setKvsRegionClient}
                kvsStreams={kvsStreams}
                setKvsStreams={setKvsStreams}
                vidsPerRow={vidsPerRow}
                setVidsPerRow={setVidsPerRow}
            />
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Toolbar />
                <RouteSwitch>
                    <Route exact path="/">
                        <VideoDisplay
                            kvsRegionClient={kvsRegionClient}
                            kvsStreams={kvsStreams}
                            vidsPerRow={vidsPerRow}
                        />
                    </Route>
                </RouteSwitch>
            </Box>
        </Box>
    );
}