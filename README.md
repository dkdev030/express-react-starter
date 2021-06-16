# Express with react starter

React base application generated with [Create React App](https://github.com/facebook/create-react-app)

Modified to show example with usage of proxy API and React hooks

## Getting started

Clone the repo

```bash
git clone https://github.com/dkdev030/express-react-starter.git

# OR

git clone https://github.com/dkdev030/express-react-starter.git 'enter-your-project-name'
```

Enter the directory and install dependencies

```bash
cd "express-react-starter"
yarn install    # npm install

#OR

cd "enter-your-project-name"
yarn install    # npm install
```

To start development and HMR run

```bash
yarn start    # npm run start
```

### How does it work?

The React App and the Express server running on different processes, so that because React can use Webpack to do HMR
All fetch requests to `/api` are sent back to the Express server which is serving all `/api` routes from the `api/index.js` file. To reconfigure change the `proxy` property in `package.json`

## Building For Production

In production, you want Express to serve up your app, so you need to reverse proxy to the specified host of Express after building the React application

### Build the application

```bash
yarn build:linux     # npm run build:linux
yarn build:win32     # npm run build:win32
```

### Start express with build application

```bash
cd ./server
yarn install    # npm install
yarn start      # npm run start
```
