const firebaseConfig = {
    apiKey: "AIzaSyAUKEuyKQM342RcEkyytIqcHJ9aLV7S3dU",
    authDomain: "portfolio-myself-6d972.firebaseapp.com",
    databaseURL: "https://portfolio-myself-6d972-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio-myself-6d972",
    storageBucket: "portfolio-myself-6d972.appspot.com",
    messagingSenderId: "971398235761",
    appId: "1:971398235761:web:63da84916928b9330ffdd0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Reference messages collection
var contactFormDB = firebase.database().ref("contactForm")

document.getElementById("contactForm").addEventListener('submit', submitForm);

function submitForm(e) { 
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("enmailid");
    var msgContent = getElementVal("msgContent");

    console.log(name, emailid, msgContent);

}

const saveMessages = (name, emailid, msgContent) => {
    var newContactFormDB = contactFormDB.push();
    newContactFormDB.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};
const getElementVal = (id) =>{
    return document.getElementById(id).value;
}