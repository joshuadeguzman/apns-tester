require("dotenv").config();

var apn = require("apn");

var options = {
  token: {
    key: process.env.PATH_TO_KEY,
    keyId: process.env.KEY_ID,
    teamId: process.env.TEAM_ID,
  },
  production: false,
};

var apnProvider = new apn.Provider(options);
let deviceToken = process.env.DEVICE_TOKEN;

let notif = new apn.Notification();
notif.expiry = Math.floor(Date.now() / 1000) + 3600;
notif.badge = 3;
notif.sound = "default";
notif.alert = "You have a new message";
notif.payload = { messageFrom: "Joshua de Guzman" };
notif.topic = process.env.BUNDLE_ID;

apnProvider.send(notif, deviceToken).then((result) => {
    console.log("Result " + JSON.stringify(result));
  
    // Free up resources
    apnProvider.shutdown();
});
