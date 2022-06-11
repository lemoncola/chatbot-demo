# chatbot-demo

## Features

- Get user physical location (geolocation) and address (reverse geocoding)

## Prerequisites

- node: v16.14.0
- npm: 8.11.0

## Setup

1. Google Maps Platform

- [Create project](https://developers.google.com/maps/documentation/geocoding/cloud-setup#create)
- [Enable billing](https://developers.google.com/maps/documentation/javascript/cloud-setup#billing)
- [Enable APIs](https://developers.google.com/maps/documentation/javascript/cloud-setup#enabling-apis)
    - Geocoding API
    - Maps JavaScript API
- [Create API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
- [Restrict API key](https://developers.google.com/maps/documentation/javascript/get-api-key#restrict_key)
- [Replace API key](https://developers.google.com/maps/documentation/javascript/get-api-key#add_key) in `public/index.html`

2. Customize Theme

- [ChatUI Theme Builder](https://market.m.taobao.com/app/chatui/theme-builder/index.html)
- Export theme CSS
- Paste content into `src/styles.css`

3. Node dependencies

`npm install`

## Run

`npm run start`

You can now view demo in the browser (http://localhost:3000)

## Build/Deploy

`npm run build`

The `build` folder is ready to be deployed.
Find out more about deployment [here](https://cra.link/deployment)

## Refereneces

- [Geolocation API: getCurrentPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples)
- [Reverse Geocoding](https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse)
