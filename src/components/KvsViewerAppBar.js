// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
} from '@mui/material';

import { AmplifySignOut } from '@aws-amplify/ui-react';

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return {
        title: {
            padding: theme.spacing(2),
            width: "100%",
            textAlign: "left"
        },
        logo: {
            maxWidth: 120,
        },
        rhsButtons: {
            justifyContent: "flex-end",
            alignItems: "flex-end"
        }
    }
})

export default function KvsViewerAppBar() {

    const classes = useStyles();

    return (

        <AppBar
            position="fixed"
            elevation={1}
            sx={{
                backgroundColor: '#2E3B55',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Toolbar >
                <img src="assets/images/kvs-icon.png" alt="logo" className={classes.logo} />
                <Typography
                    className={classes.title}
                    variant="h6"
                    component="h1"
                    noWrap
                >
                    Amazon Kinesis Video Streams Viewer
                </Typography>


            <AmplifySignOut 
                className={classes.rhsButtons}
            />

            </Toolbar>


        </AppBar>
    )

}