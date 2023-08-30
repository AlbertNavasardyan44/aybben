import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import SeoCons from "../images/SEOConsulting.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function SeoConsulting() {



    return (
        <div>
            <div className="post-home " style={{
                backgroundColor: `#3E444D`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#B1C1DA`
                    }}>SEO Consulting




                    </h1>
                    <p className="text-white blog-posts-text">
                        A consultation is free at Aybben. We will gladly answer any inquiries and discuss a strategic approach to website search engine optimization.







                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={SeoCons}  className="rounded  float-center" alt="..." />

                </div>
            </div>
            <div className=" blog-post-content   justify-content-between" style={{
                backgroundColor: `#F5F5F5`
            }}>
                <div className="p-5  Advance-Industry" style={{
                    backgroundColor: `#CEC6DE`
                }}>
                    <div className="text-center text-center">
                        <strong >
                            Consultation with Aybben
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            You will receive a free of charge consultation when you call or write to us. We will be happy to help with any questions regarding content writing and SEO services.




                        </p>
                        <p>

                            If you have navigated our website and are still unsure what SEO or content services you need for the improvement of your website, then please don’t hesitate to contact us. We will guide you through it and even give our feedback after looking at your website or the project of your forthcoming website.


                        </p>
                        <p>

                            Thank you for visiting Aybben!


                        </p>
                        <p>
                            Our customer support speaks English, Spanish, Armenian, and Russian.


                        </p>

                    </div>

                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        SEO Consulting


                    </h3>

                    <ListGroup className="BlogOptions">
                        {/* 
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <h3 className="Blog-posts-options">
                                Blog Posts
                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >


                        </ListGroup.Item>


                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <b>
                            </b>



                        </ListGroup.Item>
                    </ListGroup>
                </div>


            </div>
            <Contacts></Contacts>
        </div >
    );
}




export default SeoConsulting;