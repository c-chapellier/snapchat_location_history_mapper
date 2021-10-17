# Snapchat location history mapper

Put your json file on a map

![alt text](https://github.com/c-chapellier/snapchat_location_history_mapper/blob/main/assets/map.png)

## Setup

Put your location_history.json at the root

```sh
.
├── README.md
├── 'location_history.json'
├── src
│   ├── index.html
│   ├── index.ts
│   └── style.css
├── tsconfig.json
├── ...
```

Then run

```sh
npm i
npm start  # development
npm run build  # production
```

The application is currently using the `.env` file to embed the API key in the
HTML document. This is a temporary key and is not valid for production usage. It
can be replaced by following these instructions to
[get an api key](https://developers.google.com/maps/documentation/javascript/get-api-key).
