import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAg4ld8hJaXTay-koZA6UIthMf-y_o3bDU",
    authDomain: "my-little-blog-81526.firebaseapp.com",
    databaseURL: "https://my-little-blog-81526.firebaseio.com",
    projectId: "my-little-blog-81526",
    storageBucket: "my-little-blog-81526.appspot.com",
    messagingSenderId: "1031355255411"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;