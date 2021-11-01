// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack';
import { Button } from '@mui/material';
import Layout from './layouts/Layout';

import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";


const theme = createTheme({
  // Just a placeholder for global theme updtaes.

});

function App() {

  const notistackRef = React.createRef();
  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
  }

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        ref={notistackRef}
        action={(key) => (
          <Button onClick={onClickDismiss(key)}>Dismiss</Button>
        )}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        maxSnack={3}
      >

        <AmplifyAuthenticator>
          <AmplifySignIn slot="sign-in" hideSignUp></AmplifySignIn>
          <Router>
            <Layout />
          </Router>
        </AmplifyAuthenticator>

      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App
