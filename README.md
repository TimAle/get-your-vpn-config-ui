# Get Your VPN Config UI

## Install
1. Clone this repo with `git clone git@github.com:TimAle/get-your-vpn-config-ui.git`
2. Install dependencies using `yarn install`

## Configure
1. Set backend URL through environment variable which will be used on app build `export REACT_APP_LAMBDA_URL=<lambda_with_backend_host>`

## Run
1. `yarn start` will start the app in development mode serving WDS on http://localhost:3000

## Build
1. `yarn build` will produce production-ready files to the `./build` directory

## Test
1. `yarn test` will run units
