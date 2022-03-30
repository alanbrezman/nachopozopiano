import React from 'react';
import emailjs from 'emailjs-com';

export function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_eemtb27', 'template_x5zc69h', e.target, 'W8Z0_qA8lMxjjg43Z')
      .then((result) => {
          alert("Revisá tu casilla de correo, seguramente te llegó un mail que te he enviado ;)");
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form onSubmit={sendEmail}>
        <input type="email" name="from_email" placeholder="Ingresa tu mail" required/>
        <button className="cta" type="submit" value="Send">Quiero ser notificado</button>
    </form> 
  );
}