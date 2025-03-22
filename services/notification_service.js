const admin = require("firebase-admin");
const bodyParser = require("body-parser");
// const imageUrl = "firebasestorage.googleapis.com/v0/b/gupsup-app-be815.appspot.com/o/App%20Logo%202.png?alt=media&token=d249c431-e13a-493f-9614-3a98c97b8507"

// Firebase Admin Initialization
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Reusable function to send notifications
const sendNotification = async (deviceToken, title, body, imageUrl = null) => {
  if (!deviceToken || !title || !body) {
    throw new Error("Missing required fields");
  }

  const message = {
    notification: {
      title: title,
      body: body,
      image: imageUrl || undefined, 
    },
    token: deviceToken,
    android: {
      notification: {
        imageUrl: imageUrl || undefined, 
      },
    },
    apns: {
      payload: {
        aps: {
          "mutable-content": 1,
          "alert": {
            "title": title,
            "body": body,
          },
        },
      },
      fcm_options: {
        image: imageUrl || undefined,
      },
    },
  };

  try {
    const response = await admin.messaging().send(message);
    return { success: true, response };
  } catch (error) {
    console.error("Error sending notification:", error);
    throw new Error(error.message);
  }
};

module.exports = sendNotification;

  