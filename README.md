<a id='top'></a>

# Table of Contents

1.  [Installation and Setup](#install)

2.  [Things to Know](#thingsToKnow)

3.  [App Flow](#flow)

4.  [Access Protected Resource](#url-resource)

<a id='install'></a>

# Installation and Setup

1.  Clone this project in development mode

1.  `cd` into the project root folder, and install packages with `yarn or npm install`

1)  Run `yarn dev` to boot up the server in dev mode. This will enable hot reloading when your code changes.

1)  Visit `[http://localhost:3030](http://localhost:3030)` to view the ui

## Running in production

1.  `cd` into the project root folder

1.  Build docker image with `docker build -t node-app .`

1.  Create container with `docker run -p 3030:3030 node-app`

1)  Visit `[http://localhost:3030](http://localhost:3030)` to view the ui

[back](#top)

<a id='thingsToKnow'></a>

# Things To Know

This app uses Oauth for authenticating users. User logs in from frontend form and send Oauth required params along with the user information payload and api validate it. I have used Oauth secret on frontend for simplicity but that operation must be done from backend when in production to secure the credentials. After successfully logging in, user can visit the secure pages.

[back](#top)

<a id='flow'></a>

# App Flow

First user clicks on **Login with Oauth Server** button which redirect to login page and required Oauth params in url. On login page, user can submit the form and app with send required Oauth params with request from the url. If something is missing or an error occoured, it will revert back with error message. After successfully loggin in, backend send autherization code in callback url. Frontend then exchange the code with backend to get access token. After getting token, it will redirect to secure page.

[back](#top)
<a id='flow'></a>

### Access Protected Resource

Requesting access to protected resources consists of making the request as usual, but adding the following header:

```js

{

Authorization:  `${tokenType}  ${token}`,

}

```

with the tokenType and token coming from the json response in the token request.

[back](#top)
