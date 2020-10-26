# apns-tester

A lightweight tool to test if your APN keys are valid or if you're push notifications are working.

If you have encountered the error `InvalidApnsCredential` or other APN issues, eg. via Firebase, then this should help you debug and fix the those.

## Setup

Clone the repo

```
git clone https://github.com/joshuadeguzman/apns-tester/
```

Install dependencies

```
npm install
```

Copy `.env.example`

```
cp .env.example .env
```

Fill up the following

```
PATH_TO_KEY=path/to/AuthKey_XXXXXXXXXX.p8
KEY_ID=
TEAM_ID=
DEVICE_TOKEN=
BUNDLE_ID=
```

## Testing

```
node index.js
```

## License

BSD-3 [@joshuadeguzman](https://github.com/joshuadeguzman/apns-tester/blob/master/LICENSE)

