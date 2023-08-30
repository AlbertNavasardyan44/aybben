import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import Technicalimg from "../images/Technical.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function Technical() {



    return (
        <div>
            <div className=" post-home" style={{
                backgroundColor: ` #20384D`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#599ED9`
                    }}>Technical writing
                    </h1>
                    <p className="text-white blog-posts-text">
                        From information technology to the medical industry to business and finance, Aybben has writers with the expertise to create impactful and authoritative content.


                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={Technicalimg} className="rounded  float-center" alt="..." />

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
                            What is technical writing?
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            Technical writing is content creation for various audiences about information on technical subjects in a specific field. It communicates complex or technical information, such as user manuals, instructions, and guides, to a non-technical audience. Technical writers may also create content such as white papers or journal articles for experts in a specific field.


                        </p>
                    </div>
                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        Technical Writing
                    </h3>

                    <ListGroup className="BlogOptions">
                        {/* 
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <h3 className="Blog-posts-options">
                                Blog Posts
                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            User manuals and assistance guides

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Books and guides by technical writers


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Technical documents, reviews, and reports


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Business plans

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Proposal writing


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Software documentation


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Content design


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Knowledge management


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Medical writing

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




export default Technical;