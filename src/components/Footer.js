import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import { Button } from './Button';
import './Button.css';
import './Footer.css';
import { animateScroll as scroll } from "react-scroll";
import Contact from './Contact';

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
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="footer-container" id="Contact">
            {/* <h1>Contact Me</h1> */}
            <Button onClick={() => setModalIsOpen(true)}  className="btn-inner" buttonStyle='btn--outline' buttonSize='btn--large' >Send me an Email</Button>
            <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick onRequestClose={() => setModalIsOpen(false)}
            style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: '#242424',
                },
                content: {
                  position: 'relative',
                  top: '55%',
                  left: '50%',
                  width: '70%',
                  height: '70%',
                  transform: 'translate(-50%, -50%)',
                  border: '1px solid #ccc',
                  background: '#fbaf08',
                  color: '#242424',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px'
                }
              }}>
                <Contact />
            </Modal>
            <section className="footer-contact">
                <p className="footer-contact-heading">
                    Let's Make Something Great Together
                </p>
                {/* <div className="input-areas">
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
                <Button buttonStyle='btn--outline'>Send Me an Email</Button>
			</form>
                </div> */}
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    {/* <div className="footer-link-items">
                        <Link to="/Contact">Send an Email</Link>
                    </div> */}
                    <div className="footer-link-items">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                    </div>
                    <div className="footer-link-items">
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                    </div>
                    <div className="footer-link-items">
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
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
                    <small className="website-rights">Souad <span className="cpright">©</span> 2020</small>
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
