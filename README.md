# Amazon Kinesis Video Streams Web Viewer

The Amazon Kinesis Video Streams Web Viewer is an AWS hosted web application with authenticated access to display and view AWS Kinesis Video Streams. 

A live demonstration of this application is available at: https://dev.d1c69kb8wg9cq7.amplifyapp.com/
* User authentication is enabled so you will need to complete the Sign-Up procedure to gain access.
* Demonstration test video sources are available to view by selecting the **us-east-1** region

**Amazon Kinesis Video Stream Web Viewer:**
![KVS Web Viewer Screen-Shot](git-readme-assets/kvs-viewer-screenshot.png)

**Supported Features:**
* Managed user authentication and access (Backed by AWS Cognito),
* Supports multiple Kinesis Video Streams displayed simultaneously,
* Automatically refreshes HLS URL if it expires,
* Fast-Forward / Rewind controls integrated to Kinesis Video Streams to automatically request media at given timestamp. 

## Deployment Guide

The AWS Kinesis Video Web Viewer is a React based web application that is deployed in AWS using AWS Amplify to automate serverless public web hosting and Amazon Cognito backed user authentication.

### Prerequisites

The following procedure assumes you are on a supported Linux or MacOS device and have installed:

* Node: v10.16.x or greater
* NPM: v6.13.x or greater
* Git: v2.23.0 or greater

You will also need:
* Access to an AWS Account: [Create and Activate a new AWS Account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).
* AWS credential profile configured: [Configure CLI Credential File](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

### Deploying the Kinesis Video Stream Web Application to AWS

1) **Clone the Kinesis Video Stream Web Viewer Project:**
```
git clone git@github.com:aws-samples/amazon-kinesis-video-streams-web-viewer.git
cd amazon-kinesis-video-streams-web-viewer
```

2) **Install the application dependencies:**
```
npm install
```

3) **Install AWS Amplify:**
```
npm install -g @aws-amplify
```

4) **Initialize AWS Amplify in this project:**

* Initialize AWS Amplify in the project directory.
```
amplify init
```

**Provide the below responses to the initialization questions:**

**Note:** In the below, ensure the selected **AWS profile** has a default AWS Region specified to determine where the application will be deployed. 

? Enter a name for the project: **KvsWebViewer**  
? Initialize the project with the above configuration? **Y**  
? Select the authentication method you want to use: **AWS profile**  
? Please choose the profile you want to use: **[Select Preferred AWS Profile]**  

5) **Add AWS Cognito Backed User Authentication:**
```
amplify add auth
```

**Provide the below responses to the Add Auth configuration questions:**
 
? Do you want to use the default authentication and security configuration? **Default configuration**  
? How do you want users to be able to sign in? **Email**  
? Do you want to configure advanced settings? **No, I am done.**  

6) **Add serverless Web Hosting using AWS Amplify:**

* Initialize AWS Amplify in the project directory.
```
amplify add hosting
```

**Provide the below responses to the Add Hosting configuration questions:**
 
? Select the plugin module to execute: **Hosting with Amplify Console**  
? Choose a type: **Manual deployment**  

7) **Publish the Kinesis Video Stream Viewer Application using AWS Amplify:**

```
amplify publish
```

**Provide the below responses to the Amplify Publish configuration questions:**
 
? Are you sure you want to continue? **Yes**  

### You're nearly there!
At this point, AWS Amplify has built the project files, publish them to be publicly hosted in AWS and will deploy and configure AWS Cognito to provide identity management and resource access. This process can take a few minutes to complete.   

When done, you will see a message similar to the below:
```
Deployment Complete!  
https://dev.123456abcdef.amplifyapp.com
```

The URL provided is the public address of your hosted Amazon Kinesis Video Stream Web Viewer application. Record the URL, we will need it after just a few more steps. 

### Update the AWS Cognito Authenticated Role.

AWS Amplify deployed an AWS Cognito instance with an Authenticated IAM Role that provides access to AWS services for users that are successfully authenticated in the application. We need to allow these users Read-Only access to Kinesis Video Streams so that they have access the media streams available in your AWS Account. 

1) Open the [Amazon IAM Roles Console](https://console.aws.amazon.com/iamv2/home?#/roles) 
* Search for the role that is similar to **amplify-kvswebviewer-dev-123456-authRole** and click on it.
    * **Note:** don't select the similar role ending with **-idp**.
* Click **Attach policies** and select **AmazonKinesisVideoStreamsReadOnlyAccess** policy.
* Click **Attach Policy** to confirm. 

![Update Auth Role](git-readme-assets/idm-auth-role-update.png)

### And That’s it!
Go to the URL that was generated earlier, you will see a Sign on / Sign Up page:

![Sign In / Sign Up](git-readme-assets/create-account.png)

* Click **Create Account** in the first instance to Sign Up a new user.
* Follow the instructions and validate your e-mail address. This will be registered in AWS Cognito.
* Log into the console and you will now be in the Amazon Kinesis Video Stream Web Viewer. Follow the Quick-Start guide there to access Kinesis Video Streams media in the web application.

**Note:** At any time you need to find the URL again just visit the AWS [Amplify Console](https://console.aws.amazon.com/amplify/) in your region and select the **KvsWebViewer** project that was created for you.
