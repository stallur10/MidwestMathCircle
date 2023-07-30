import './ContactPage.css'
import {React, useState} from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

/*THIS IS FIREBASE STUFF*/
const firebaseConfig = {
  apiKey: "AIzaSyCp_y3njjZNEZIluXAPun7Fjftj7t2qzpk",
  authDomain: "mwmc-a600c.firebaseapp.com",
  projectId: "mwmc-a600c",
  storageBucket: "mwmc-a600c.appspot.com",
  messagingSenderId: "973785588233",
  appId: "1:973785588233:web:26e86465905faf09370ed8",
  measurementId: "G-9DC6H87TV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeUserData(nameId, email, subject, message){
    const db = getDatabase(app);
    const reference = ref(db, 'contact/' + nameId);
    set(reference, {
        email: email,
        subject: subject,
        message: message
    });
    window.location.href = '/success'
}
/*THIS IS FIREBASE STUFF END*/

function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        writeUserData(name, email, subject, message);
    }

    return (
        <div id = "App">
            <div id = "contactTitleCont">
                <h1 id = "contactTitle">Contact Us</h1>
                <div className='manualContact'>Email: rishirkanchi@gmail.com</div>
                <div className='manualContact' style={{paddingBottom: '70px'}}>Phone Number: (847) 387-2223</div>
                
            </div>
            <form id='formCont' onSubmit={handleSubmit}>
                <label>
                    <div className='inputInfo'>Name*</div>
                    <input type="text" name="name" className='inputTxt' onChange={(e) => setName(e.target.value)} required/>
                </label>
                <label>
                    <div className='inputInfo'>Email*</div>
                    <input type="text" name="email" className='inputTxt' onChange={(e) => setEmail(e.target.value)} required/>
                </label>
                <label>
                    <div className='inputInfo'>Subject*</div>
                    <input type="text" name="subject" className='inputTxt' onChange={(e) => setSubject(e.target.value)} required/>
                </label>
                <label>
                    <div className='inputInfo'>Message*</div>
                    <textarea type="text" name="message" className='inputTxt' id = 'message' onChange={(e) => setMessage(e.target.value)} required></textarea>
                </label><br></br>
                <input type="submit" id="submit"/>
            </form>

        </div>
    );
}
    
export default ContactPage;