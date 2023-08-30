import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import Contacts from '../contactComponent/ContactComp.js';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttonComponent/button.js';

import ContactUs from "../images/ContactUs.jpg";
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css';

// function Contact() {
const Contact = () => {

    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }

    return (
        <div className="Contact-page " >
              <Navbar />
            <div className="contactUs">
                <h1>Contact US</h1>
                <p>Get your free SEO proposal by submitting the form below</p>
                {/* <div className="contacts">
                    <ListGroup className="list-group-box">
                        <ListGroup.Item className="list-group-item-contact-page text-white">
                            <FontAwesomeIcon className='text-white me-2' icon={faPhone} />+37443560756</ListGroup.Item>

                        <ListGroup.Item className="list-group-item-contact-page text-white">
                            <FontAwesomeIcon className='text-white me-2' icon={faEnvelope} />info@aybben.com</ListGroup.Item>
                    </ListGroup>
                    <h3 className="text-white">Social media</h3>
                    <ListGroup className=" justify-content-center">
                        <ListGroup.Item className="list-group-item-contact-page text-white">
                            <FontAwesomeIcon className='text-white me-2' icon={faFacebook} />
                            <Link className="homeToContact text-white" to="https://www.facebook.com/aybbenarmenia/">Facebook</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-contact-page text-white">
                            <FontAwesomeIcon className='text-white me-2' icon={faLinkedin} />

                            <Link className="homeToContact text-white" to="">linkedIn</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-contact-page text-white">

                            <FontAwesomeIcon className='text-white me-2' icon={faYoutube} />
                            <Link className="homeToContact text-white" to="">YouTube</Link>

                        </ListGroup.Item>
                    </ListGroup>
                </div> */}
                <div className="container mt-5 p-0">
                    {/* <h2 className="mb-3">React Contact Form Component Example</h2> */}
                    <form onSubmit={onSubmit}>
                        <div className="mb-3 name-email">

                            <input className="form-control me-3 mb-3" type="text" id="name" required placeholder="Full name" />

                            <input className="form-control mb-3" type="email" id="email" required placeholder="Email" />
                        </div>
                        <div className="mb-3  website-phonenumber">

                            <input className="form-control me-3 mb-3" type="text" id="website" required placeholder="Web site" />

                            <input className="form-control mb-3" type="number" id="email" required placeholder="phone number" />
                        </div>
                        <div className="mb-3">
                           
                            <textarea className="form-control" id="message" required placeholder="Tell us more" />
                        </div>
                        <Button style={{ backgroundColor: '#71E1E2', color: 'black', borderRadius: '10px' }}> {formStatus}</Button>
                        {/* <button className="btn btn-danger" type="submit">
                            {formStatus}
                        </button> */}
                    </form>
                </div>
            </div>
            <Contacts></Contacts>
        </div>

    );
}

export default Contact;
