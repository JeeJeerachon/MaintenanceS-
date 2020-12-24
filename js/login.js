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


// ล็อคอินจาก onclick login
function login() {

    // รับค่า
    var email = document.getElementById('exampleDropdownFormEmail2').value;
    var password = document.getElementById('exampleDropdownFormPassword2').value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in 
            // var uemail = user.uemail;
            // console.log(uemail);
            // location.href = "index.html";

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(errorMessage, errorCode);
        });

}

// เช็ค sescion ว่า มี user อยู่หรือไม่
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        var uemail = user.email;
        console.log(uid);
        console.log(uemail);
        location.href = "index.html"; //เมื่อมี user บังคับเปิดหน้า index
        // ...
    } else {
        // User is signed out
        // ...
    }
});