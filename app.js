var config = {
    apiKey: "AIzaSyAhrlMNKfaF8u0ZuPlG1unwcQS9uz-pV7w",
    authDomain: "authentication-7005e.firebaseapp.com",
    databaseURL: "https://authentication-7005e.firebaseio.com",
    projectId: "authentication-7005e",
    storageBucket: "authentication-7005e.appspot.com",
    messagingSenderId: "506777881062"
};

// Send to the Cloud
firebase.initializeApp(config);

// Login 
$('#login-button').on('click', function () {

    event.preventDefault();

    const email = $('#username').val();
    const password = $('#password').val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (result) {

            console.log(result)
            console.log(result.user.email)
            console.log(result.user.emailVerified)
            console.log(result.user.uid)
            console.log("It logged in!")
        })
        .catch(function (error) {

            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log("errorCode", errorCode);
            console.log("errorMessage", errorMessage);
        })
});


// Register 
$('#register-button').on('click', function () {

    event.preventDefault();

    const email = $('#username').val();
    const password = $('#password').val();

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (result) {

            console.log(result)
            console.log(result.user.email)
            console.log(result.user.emailVerified)
            console.log(result.user.uid)
            console.log("I'm registered!")
        })
        .catch(function (error) {

            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log("errorCode", errorCode);
            console.log("errorMessage", errorMessage);
        })
});


// Check when user hit the page
firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      console.log(displayName)
      console.log(email)
      console.log(emailVerified)
      console.log(photoURL)
      console.log(isAnonymous)
      console.log(uid)
      console.log(providerData)

      // ...
    } else {
      // User is signed out.
      // ...
    }
  });


// Sign Out 
$('#signOut-button').on('click', function () {

  firebase.auth().signOut().then(function() {

    console.log('Signed Out');
  }, function(error) {

    console.error('Sign Out Error', error);
  });
});