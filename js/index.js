var firebaseConfig = {
    apiKey: "AIzaSyAJVo7gUfpchbjE4LBRhuTIoiSn_7MVqK0",
    authDomain: "reportm-c5a61.firebaseapp.com",
    databaseURL: "https://reportm-c5a61-default-rtdb.firebaseio.com",
    projectId: "reportm-c5a61",
    storageBucket: "reportm-c5a61.appspot.com",
    messagingSenderId: "104110823846",
    appId: "1:104110823846:web:ed99d9201b9e3495385767",
    measurementId: "G-RV6PZCWD91"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });