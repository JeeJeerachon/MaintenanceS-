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
        var uemail = user.uemail;
        console.log(uemail);
        // ...
    } else {
        // User is signed out
        // ...
    }
});

// var email = "";
// var password = "";

// กด submit รับค่า id ทั้งหมดใน form
document.getElementById('loginForm').addEventListener('submit', submitForm);

function getInputVal(id) {
    return document.getElementById(id).value;
}

function submitForm(e) {
    e.preventDefault();

    // รับค่า
    var email = getInputVal('exampleDropdownFormEmail2');
    var password = getInputVal('exampleDropdownFormPassword2');
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in 
            
            location.href = "index.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(errorMessage, errorCode);
        });

}



