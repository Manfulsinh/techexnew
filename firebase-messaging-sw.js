importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js";
//     import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics-compat.js";
//     import { getMessaging } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js";
//Remeber this part we have used above in our index.html
var firebaseConfig = {
  apiKey: "AIzaSyDrUOrEvp3T277JmKPOWVAZ90gBIKC9S50",
  authDomain: "fir-b6449.firebaseapp.com",
  projectId: "fir-b6449",
  storageBucket: "fir-b6449.appspot.com",
  messagingSenderId: "511184942927",
  appId: "1:511184942927:web:debcb811d15856fd86b73a",
  measurementId: "G-2TM34PV1YN"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();
console.log("in service worker")
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = 'Title';
  const notificationOptions = {
    body: payload.data.body,
    title: payload.data.title,
    icon: payload.data.icon,
    image: payload.data.image
  };

  // return self.registration.showNotification(notificationTitle, notificationOptions);
  self.registration.showNotification("hello,world")

});




// Check if the browser supports notifications
if ('Notification' in window) {
  // Request permission to show notifications
  Notification.requestPermission().then(function (permission) {
    if (permission === 'granted') {
      // Create a notification
      var notification = new Notification('Hello, World!', {
        body: 'This is a notification example.'
      });

      // Close the notification after a certain amount of time (optional)
      setTimeout(notification.close.bind(notification), 5000);
    }
  });
} else {
  console.log('This browser does not support notifications.');
}
