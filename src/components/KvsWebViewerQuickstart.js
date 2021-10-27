// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { 
  Grid, 
  Box, 
  Typography, 
  Card,
  CardContent
} from '@mui/material';

export default function KvsPlayerStats(props) {

  return (

    <Grid item xs={12} sx={{ m: 2 }}>

      <Typography
        variant='h4'
        noWrap
        align="center"
        color="primary"

      >
        QuickStart Guide
      </Typography>

      <Typography align="center" sx={{ mb: 1 }}>
        The Amazon Kinesis Video Streams Web Viewer provides a simple means to display
        all of your Amazon Kinesis Video Streams in a convenient single view.
      </Typography>

      {/* VIEW A KVS STREAM CARD */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant='h6' color="primary" >
            To View An Amazon Kinesis Video Stream:
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            Select the AWS region from the pull-down menu on the left. All available Kinesis Video Streams
            will be automatically listed below. To view a video stream, select the toggle switch adjacent to the stream name.
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            <img src="/assets/images/kvs-streams-list.png" alt="Kinesis Video Streams List" width="250" />
          </Box>

        </CardContent>
      </Card>

      {/* KINESIS VIDEO WEB VIEWER UI OVERVIEW CARD */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant='h6' color="primary" >
            Amazon Kinesis Video Stream Web Viewer User Interface
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            When selected, the video stream will be displayed with media time, controls and basic telemetry details.
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            <img src="/assets/images/kvs-viewer-screenshot.png" alt="Kinesis Video Stream View" width="700" />
          </Box>
          <Box >
            <ol>
              <li><strong>AWS Region Select:</strong> Selects the AWS Region to list available Kinesis Video Streams.</li>
              <li><strong>Video's Per Row:</strong> Sets the number of Kinesis Video Streams displayed per row of the user interface.</li>
              <li><strong>Kinesis Video Streams Selectors:</strong> Amazon Kinesis Video Streams list and view toggle, automatically populated on selection of AWS Region.</li>
              <li><strong>Kinesis Video Stream Title:</strong> Displays the Kinesis Video Stream title on the media view.</li>
              <li><strong>Kinesis Video Stream Selector:</strong> Sets the view and timestamp mode of the media and displays current media time.</li>
              <li><strong>Media Viewer:</strong> Media player for the selected Kinesis Video Stream at selected Date/Time.</li>
              <li><strong>Media Scrubber:</strong> Fast Forward, Play / Pause and Rewind functionality for the selected media.</li>
              <li><strong>Media Telemetry:</strong> Telemetry and statistics for the media stream.</li>
            </ol>
          </Box>

        </CardContent>

      </Card>

      {/* KINESIS VIDEO WEB VIEWER STREAM SELECTOR CARD */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant='h6' color="primary" >
            Amazon Kinesis Video Stream Web Viewer Stream Selector
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            The Stream Selector menus allow the user to configure Amazon Kinesis Video parameters of the displayed media.
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            <img src="/assets/images/stream-selector.png" alt="Kinesis Video Stream View" width="500" />
          </Box>
          <Box >
            <ol>
              <li><strong>Mode Select:</strong> Selects the Amazon Kinesis Video Mode, Live or On-Demand.</li>
              <ul>
                <li><strong>Live Mode: </strong>
                  <ul>
                    <li>Plays indefinitely at the live edge of the media stream.</li>
                    <li>Timestamp mode and Date/Time selectors are disabled in this mode as only the latest media is requested.</li>
                    <li> Will show an error if no live media being received on the given stream.</li>
                    <li>The media player holds a small buffer allowing very limited Rewind / Fast Forward functionality.</li>
                    <li>Use when the lowest level of latency from the live edge of the media possible is required.</li>
                    <li>The media player may over time fall behind the live edge of the media stream. In this case, click the fast forward button.</li>
                  </ul>
                </li>
                <li><strong>On-Demand Mode: </strong>
                  <ul>
                    <li>By default, will request 1000 media fragments at the requested Date/Time and timestamp mode.</li>
                    <li>Allows Fast forward and Rewind within the requested fragments.</li>
                    <li>This application will automatically request the next or previous block of media if Rewind or Fast Forward
                    outside of the selected time period. The user will see a short re-buffering when this happens.</li>
                    <li>Use this mode for extended Fast Forward and Rewind functions to view across long media streams.</li>
                  </ul>
                </li>
              </ul>

              <br />

              <li><strong>Timestamp:</strong> Sets one of the two supported Amazon Kinesis Video Timestamp modes of Server or Producer in On-Demand mode.
                <ul>
                  <li><strong>Server Timestamp Mode: </strong> Requests for media streams will use Server timestamp which is automatically set by Amazon 
                  Kinesis Video Streams when a fragment is uploaded to the service.</li>
                  <li><strong>Producer Timestamp Mode: </strong> Requests for media streams will use Producer timestamp which is set by the media producer
                  at the time of uploading to Kinesis Video Streams. By default, this is typically set to the current time for live media and so is almost 
                  identical to the Server Timestamp. However, this can be used by the stream producer to set the media time to some point in the past 
                  when uploading archived media previously reordered.</li>
                </ul>
              </li>

              <br />

              <li><strong>Date / Time:</strong> The start Date/Time for media requests when in On-Demand Mode.</li>
            </ol>
          </Box>

        </CardContent>

      </Card>

      <Card>
        <CardContent>
          <Typography variant='h6' color="primary" >
            FAQs
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>How many media streams can be viewed at once?</strong><br />
            The only limitation is the available bandwidth and the capability of the physical device. The <strong>Media Telemetry</strong> section shows the current
            bitrate for each media stream being displayed. Be aware of the total bandwidth being consumed as this impacts cost of the Amazon Kinesis Video service
            and can use significant bandwidth on the local network. If the local network can't support the requested bandwidth, the media display will be degraded.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>How much bandwidth is consumed per stream?</strong><br />
            This depends on the resolution and frame rate that the media stream was uploaded into Amazon Kinesis Video Streams. To reduce the 
            bandwidth of each stream, you need to limit the video metrics of the ingested media.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Why does my Kinesis Video Stream show a 'No Media Available Error'?</strong><br />
            You will get this when requesting media at a time that none has been uploaded to Amazon Kinesis Video Streams. This will occur
            for example, if Live mode is selected but there is no media currently being uploaded to the Kinesis Video Stream or if in On-Demand 
            mode and requesting a Date/Time before the stream was created.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Why does my Date/Time jump forward when I request a new On-Demand time?</strong><br />
            If you request media for a Date/Time that has no media available, Amazon Kinesis video Streams will search to find the next available
            media and return that which is why the requested Date/Time may sometimes jump forward for returned media.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Can I view Amazon Kinesis Video Streams from multiple AWS Regions at the same time?</strong><br />
            To avoid complexity in the user interface, a single instance of the Amazon Kinesis Video Streams Viewer can only display media streams from a single
            AWS region. You are able to open multiple tabs / browsers to the Amazon Kinesis Video Streams Viewer that display media from separate AWS Regions.
            In this case, be aware of the amount of bandwidth being consumed as this impacts cost of the Amazon Kinesis Video service
            and can use significant bandwidth on the local network.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Why Does the media re-buffer often when in On-Demand Mode?</strong><br />
            If in On-Demand mode and the requested time is very close to the current time it will continuously reach the end of the 
            available fragments and request the next media stream. To avoid this, use Live Mode if tracking the live edge of the media stream. 
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Can I refresh the Kinesis Video Streams list?</strong><br />
            Yes, instead of taking real-estate on the UI with a refresh button, you can just re-select the AWS Region and the Kinesis Video Streams list will be updated.
          </Typography>

          <Typography variant='h6' color="primary" >
            For the Developers:
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>How is media requested from Amazon Kinesis Video Streams and rendered in the user interface?</strong><br />
            This application requests and displays the Amazon Kinesis Video Streams media via a <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetHLSStreamingSessionURL.html" target="_blank">HLS URL request</a>.
            The application requests a HLS URL from Amazon Kinesis Video Streams and plays in the browser using <a href="https://www.npmjs.com/package/react-player" target="_blank">React-Player</a>.
            React-Player by default loads <a href="https://github.com/video-dev/hls.js/" target="_blank">HLS.js</a> to display HLS URL based media.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
           <strong>Can I fine tune he HLS.js media player configurations like buffer and latency settings?</strong><br />
            Yes, the full HLS.js config is injected into the application from the <strong>src/assets/data/hlsConfigs.js</strong> properties file. 
            Details of the HLS.js config can be found in the <a href="https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning" target="_blank">HLS.js API fine-tuning page</a> 
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Can I customise or use this application in my own project?</strong><br />
            Yes, this application is released under the MIT-0 open-source license. Subject to the requirements of that license, you may 
            use and modify the source code for your own requirements. The source code and how to deploy is detailed in the project GIT Repository.
            
            <br /><br />
            This application tries to find a balance between modularity and keeping the code simple and readable for developers of all 
            levels. Using this approach, the Amazon Kinesis Video Streams viewer is contained within the <strong>KvsPlayerFrame</strong> component.
            This component has all the logic required to interface to Amazon Kinesis Video Streams and display the requested media. To 
            import an individual stream viewer into your project, copy this component and all its dependencies.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>Can I use this media viewer on a mobile device?</strong><br />
            Yes, this web application uses a responsive design that will render on mobile devices but for best results is intended for mid to large screen devices.
            The ability to select 'Video's per Row' goes against responsive web design but allows the user to choose a setting that is best suited to the screen size
            and display requirements.
          </Typography>

        </CardContent>
      </Card>

    </Grid>
  )
}
