import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ListGroup, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

import './ContactComp.css';

const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <div >
            <div className="footer-contact">
                <div className="adresses">
                    <div className="footer-contact-box">
                        <ListGroup className="list-group-box">
                            <ListGroup.Item className="list-group-item-contact"> <FontAwesomeIcon className='text-primary me-2' icon={faLocationDot} />0010,  7  Vardanants St, Yerevan,  Armenia</ListGroup.Item>
                            <ListGroup.Item className="list-group-item-contact"><FontAwesomeIcon className='text-primary me-2' icon={faEnvelope} />info@aybben.com</ListGroup.Item>
                            <ListGroup.Item className="list-group-item-contact"><FontAwesomeIcon className='text-primary me-2' icon={faPhone} />+37443560756</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="footer-contact-box">
                        <ListGroup className="d-inline">
                            <div className=" footer-menu">
                                <ListGroup.Item className="list-group-item-contact"> <Link className="text-secondary text-decoration-none" onClick={scrollToTop} to="/Home">Home</Link></ListGroup.Item>
                                <ListGroup.Item className="list-group-item-contact"><Link className="text-secondary text-decoration-none" onClick={scrollToTop} to="/Aboutus">About us</Link></ListGroup.Item>
                                <ListGroup.Item className="list-group-item-contact"><Link className="text-secondary text-decoration-none" onClick={scrollToTop} to="/Contentservices">Content services</Link></ListGroup.Item>
                                <ListGroup.Item className="list-group-item-contact"> <Link className="text-secondary text-decoration-none" onClick={scrollToTop} to="/Seoservices">Seo services</Link></ListGroup.Item>

                            </div>
                            <div className=" footer-menu">
                                <ListGroup.Item className="list-group-item-contact"><Link className="text-secondary text-decoration-none" onClick={scrollToTop} to="/Blog">Blog</Link></ListGroup.Item>
                                <ListGroup.Item className="list-group-item-contact"><Link className="text-secondary text-decoration-none" onClick={scrollToTop} to="/FAQ">FAQ</Link></ListGroup.Item>
                                <ListGroup.Item className="list-group-item-contact"><Link className="text-secondary text-decoration-none" onClick={scrollToTop} to="/Contact">Contact</Link></ListGroup.Item>
                            </div>
                            <div className=" social">
                                <ListGroup.Item className="list-group-item-contact"><FontAwesomeIcon className='text-primary me-2 mt-4' icon={faFacebook} size="xl" /> </ListGroup.Item>
                                <ListGroup.Item className="list-group-item-contact"><FontAwesomeIcon className='text-success me-2 mt-4' icon={faWhatsapp} size="xl" /></ListGroup.Item>
                                <ListGroup.Item className="list-group-item-contact"><FontAwesomeIcon className='text-info me-2 mt-4' icon={faTelegram} size="xl" /></ListGroup.Item>
                            </div>
                        </ListGroup>
                    </div>


                </div>
            </div>
            <div className="text-center  bg-light copyright">
                <p className="">Copyright © 2023 | Powered by</p>
            </div>
        </div>

    )
}
export default Navbar
