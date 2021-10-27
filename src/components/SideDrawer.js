// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useState } from 'react'
import {
    Toolbar,
    MenuItem,
    Box,
    Select,
    FormControl,
    FormControlLabel,
    InputLabel,
    Divider,
    Drawer,
    Switch,
    OutlinedInput,
    List,
    ListItem
} from '@mui/material';
import { makeStyles } from '@material-ui/core'
import { useSnackbar } from 'notistack';
import { drawerWidth, kvsRegions } from '../assets/data'
import { Auth } from 'aws-amplify';

// AWS Kinesis SDK objects
import {
    KinesisVideoClient,
    ListStreamsCommand
} from "@aws-sdk/client-kinesis-video";

const useStyles = makeStyles((theme) => {
    return {
        select: {
            marginTop: theme.spacing(1),
            spacing: theme.spacing(3)
        }
    }
})

export default function SideDrawer(props) {

    const {
        setKvsRegionClient,
        kvsStreams,
        setKvsStreams,
        vidsPerRow,
        setVidsPerRow
    } = props;

    const classes = useStyles();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [region, setRegion] = useState("");

    /**
     * Create Amazon Kinesis Video Steams(KVS) Client for selected region 
     * 
     * @param {*} event 
     */
    const handleRegionChange = async (event) => {

        // Get and Set the selected Region box. 
        const region = event.target.value
        setRegion(region)

        // Create and set a new regionbal AWS KVS SDK Client
        try {
            // Get the current AWS credentials
            const credentials = await Auth.currentCredentials();

            // Create the Kinesis Video Client for the selected region
            const kvsRegionClient = new KinesisVideoClient({
                region: region,
                credentials: credentials
            });

            // Get the list of available video streams from KVS in this region
            // TODO: Paginate and search / filter very large (thousands) of returned streams
            // For now, just limit number of returned streams to prevent performance issues.
            const inputs = {
                MaxResults: 100
            };

            // Create and process the KVS ListStreamsCommand in selected Region.
            const command = new ListStreamsCommand(inputs);
            let kvsStreams = await kvsRegionClient.send(command);

            // Set the setKvsRegionClient state.
            setKvsRegionClient({
                region: region,
                kvsClient: kvsRegionClient,
            });

            // Set the setKvsStreams state from returned streams list.
            setKvsStreams(kvsStreams.StreamInfoList)

        } catch (error) {
            console.log(error)
            const msg = `Error occurred selecting region: ${region}\nError Message: ${error}`
            enqueueSnackbar(msg, {
                variant: 'error',
                style: { whiteSpace: 'pre-line' }
            })
        }
    };

    /**
     * Sets the selected KVS stream object as active (Displayed) or not.
     * Then loops and updates activeKvsStreams state is parent layout
     * 
     * @param {*} event 
     */
    const handleStreamToggle = (event, kvsStream) => {

        // Set the displayChecked var on the kvsStream
        const streamToggled = event.target.checked;
        kvsStream.displayChecked = streamToggled;

        // Set clone of the updated kvsStreams array to parent
        setKvsStreams(kvsStreams.slice())

    }

    const handleVidsPerRowChange = (event) => {
        const value = event.target.value
        setVidsPerRow(value);
    }

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ m: 1, overflow: 'auto' }}>

                {/* AWS Region Select */}
                <FormControl sx={{ width: 210 }}>
                    <InputLabel
                        id="region-select-label"
                        className={classes.select}
                    >
                        Select Region
                    </InputLabel>
                    <Select
                        labelId="region-select-label"
                        id="region-select"
                        value={region}
                        onChange={handleRegionChange}
                        input={<OutlinedInput label="Select Region" />}
                        className={classes.select}
                        size="small"
                    >
                        {kvsRegions.map((regionItem) => (
                            <MenuItem
                                key={`item-${regionItem.region}`}
                                value={regionItem.region}
                            >
                                {regionItem.region}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Number of Video Displays per Row Select */}
                <FormControl sx={{ mt: 1, width: 210 }}>
                    <InputLabel
                        id="video-per-row-label"
                        className={classes.select}
                    >
                        Video's Per Row
                    </InputLabel>

                    <Select
                        labelId="video-per-row-label"
                        id="video-per-row-select"
                        value={vidsPerRow}
                        onChange={handleVidsPerRowChange}
                        input={<OutlinedInput label="Video's Per Row" />}
                        className={classes.select}
                        size="small"
                    >
                        {[1, 2, 3, 4, 6].map((numPerRow) => (
                            <MenuItem
                                key={numPerRow}
                                value={numPerRow}
                            >
                                {numPerRow}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* KVS Streams Toggle List */}
                <List dense sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper' }}>

                    <Divider />

                    {kvsStreams.map((kvsStream) => (
                        <ListItem
                            key={`listitem-${kvsStream.StreamName}`}
                            button
                            >
                            <FormControlLabel

                                label={kvsStream.StreamName}
                                key={`label-${kvsStream.StreamName}`}
                                control={
                                    <Switch
                                        color="primary"
                                        size="small"
                                        value={kvsStream}
                                        edge="start"
                                        checked={kvsStream.displayChecked ? true : false}
                                        onChange={(event) => handleStreamToggle(event, kvsStream)}
                                    />
                                }
                            />
                        </ListItem>
                    )
                    )}
                </List>
            
            </Box>
        </Drawer>
    )
}