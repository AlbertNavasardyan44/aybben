import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import Email from "../images/Email.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function EmailWriting() {



    return (
        <div>
            <div className="post-home " style={{
                backgroundColor: ` #20384D`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#599ED9`
                    }}>Email writing

                    </h1>
                    <p className="text-white blog-posts-text">
                        Have Aybben take care of your communication via email. We will craft the perfect messages you want to convey. Working with Aybben is a painless and effective way of managing email correspondence.



                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={Email}  className="rounded  float-center" alt="..." />

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
                            What is email writing?
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            Email writing creates content for digital messages sent through email. To be effective, communication via email requires specific strategies and techniques. Whether it is informative, persuasive, transactional, or social, Email writing is a method that can help to increase the efficiency of communication and build trust with the recipients.
                        </p>
                        <p>
                            At Aybben, we specialize in crafting emails that effectively communicate your messages. Whether you’re looking to persuade, request, follow up, provide information, or conduct business, our skilled writers will craft tailored and targeted content to suit your needs. With our strategic approach to email writing, you can be sure that your message will be clear, concise, and impactful – making the most of this essential communication tool.


                        </p>
                    </div>
                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        Email Writing
                    </h3>

                    <ListGroup className="BlogOptions">
                        {/* 
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <h3 className="Blog-posts-options">
                                Blog Posts
                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Email marketing

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Email newsletters


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Email copywriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Email design

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Email automation


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Email outreach


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Email audit


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




export default EmailWriting;