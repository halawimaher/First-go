import React from 'react'
import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
    scroll.scrollToTop();
};

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

function Footer() {
    return (
        <div className="footer-container">
            <h1>Contact Me</h1>
            <section className="footer-contact">
                <p className="footer-contact-heading">
                    Let's Make Something Great Together
                </p>
                <div className="input-areas">
                    <form onSubmit={sendEmail}>
				<div class="fields">
					<div class="field">
						<input type="text" name="name" id="name" placeholder="Your Name" className="footer-input" />
					</div>
					<div class="field">
						<input type="text" name="email" id="email" placeholder="Your email" className="footer-input" />
					</div>
					<div class="field">
						<textarea name="message" id="message" placeholder="Your message" rows="7" cols="40"></textarea>
					</div>
				</div>
                <input type="submit" className="btm btn-info" value="send message" />
                {/* <Button buttonStyle='btn--outline'>Send Me an Email</Button> */}
			</form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <Link to="/">Email</Link>
                    </div>
                    <div className="footer-link-items">
                        <Link to="/">Facebook</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo" onClick={ scrollToTop }>
                            Logo <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">Souad © 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="//facebook.com" target="_blank" aria-label="facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="//instagram.com" target="_blank" aria-label="instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link linkedin" to="//linkedin.com" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link className="social-icon-link youtube" to="//youtube.com" target="_blank" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="//twitter.com" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
