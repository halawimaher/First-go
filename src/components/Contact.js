import React from 'react'
import emailjs from 'emailjs-com'
import './Button.css';
import './Contact.css'


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_38hgble', e.target, 'user_ikvBrBAiXHVbthue7yINb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

function Contact() {
    return (
        <div className="input-areas">
            <div className="hero-info">
                <label for="name" id="name">Souad Ali</label>
                <label for="email" id="email">test@email.com</label>
                <label for="phone" id="phone">00000000</label>
            </div>
            <div className="form-element">
            <form onSubmit={sendEmail}>
		        <div className="fields">
			        <div className="field">
				        <input type="text" name="name" id="name" placeholder="Your Name" className="footer-input" required/>
			        </div>
			        <div className="field">
			        	<input type="text" name="email" id="email" placeholder="Your email" className="footer-input" required/>
			        </div>
                    <div className="messages">
			        <div className="field">
			        	<textarea name="message" id="message" placeholder="Your message" rows="7" cols="50" required></textarea>
			        </div>
                    <input type="submit" className="btn-inner" value="Send Message"></input>
                    </div>
                {/* <Button buttonStyle='btn--outline'>Send Me an Email</Button> */}
                </div>
            </form>
            </div>            
        </div>
    )
}

export default Contact
