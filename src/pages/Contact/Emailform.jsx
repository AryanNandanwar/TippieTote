import React from "react";
import emailjs from '@emailjs/browser'
import { useState } from "react";



const EmailForm = () =>{
    const[names,setName] = useState("");
    const[emails,setEmails] = useState("");
    const[message,setMessage] = useState("")
  
  
    const HandleSubmit = (e) => {
      e.preventDefault();
      //Important IDs
      const template_id = "template_vke26hg"
      const service_id = "service_8xb2d0e"
      const public_key = "gabHy2KFhSUiFbCSB"
  
      //Template Paramters
      const tempParas = {
        from_name : names,
        from_email: emails,
        message: message,
        to_name: 'Aniket',
      };
    emailjs.sendForm(service_id, template_id, tempParas, public_key)
        .then((result) => {
            console.log("Email sent successfullly",result);
            setName('');
            setEmails('');
            setMessage('');
        })
        ((error) => {
            console.log('Email error',error.text);
        });
  }
  return(
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="emailForm" onSubmit={HandleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="user_name"
                placeholder="Name"
                value={names}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="user_email"
                value={emails}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailForm;




