import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import Scriptwritingimg from "../images/Scriptwriting.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function Scriptwriting() {



    return (
        <div>
            <div className=" post-home " style={{
                backgroundColor: ` #3E444D`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#B1C1DA`
                    }}>Scriptwriting


                    </h1>
                    <p className="text-white blog-posts-text">
                        We write scripts for videos, podcasts, and other audio/visual mediums to help businesses, industries, and sectors achieve their promotional objectives.




                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={Scriptwritingimg}  className="rounded  float-center" alt="..." />

                </div>
            </div>
            <div className="blog-post-content   justify-content-between" style={{
                backgroundColor: `#F5F5F5`
            }}>
                <div className="p-5  Advance-Industry" style={{
                    backgroundColor: `#CEC6DE`
                }}>
                    <div className="text-center text-center">
                        <strong >
                            What is Scriptwriting?
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            Scriptwriters create content for visual and auditory mediums as the blueprint of the production. They capture in a script character descriptions, event sequences, settings, and dialogues. The goal of a script varies. It can be used in different mediums, such as advertising clips, films, and digital platforms in order to capture audience engagement, promote a product, service, or idea, tell a story, convey a message, etc.

                        </p>
                        <p>
                            At Aybben, we have scriptwriters with an imagination that can bring any idea to life in an entertaining, engaging, and creative way. We work closely with different production teams and can carry out orders for scriptwriting and production from start to finish. We understand that scriptwriting is a powerful tool for communicating a message, and we take great care in crafting scripts that are both compelling and true to our clients’ visions.



                        </p>
                    </div>
                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        Scriptwriting
                    </h3>

                    <ListGroup className="BlogOptions">
                        {/* 
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <h3 className="Blog-posts-options">
                                Blog Posts
                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Film scriptwriting

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            TV scriptwriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Play scriptwriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Audio scriptwriting

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Documentary scriptwriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Commercial scriptwriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Webinar scriptwriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Cold call scriptwriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Audio ad scriptwriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Closed captioning


                        </ListGroup.Item>

                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <b> Quote Based
                            </b>



                        </ListGroup.Item>
                    </ListGroup>
                </div>


            </div>
            <Contacts></Contacts>
        </div >
    );
}




export default Scriptwriting;