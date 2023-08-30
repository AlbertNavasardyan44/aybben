import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import copywriting from "../images/Copywriting.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function Copywriting() {



    return (
        <div>
            <div className="  post-home" style={{
                backgroundColor: `#20384D`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#599ED9`
                    }}>Copywriting


                    </h1>
                    <p className="text-white blog-posts-text">
                        All your writing for advertising campaigns, marketing initiatives, or raising brand awareness can exclusively be with Aybben. We create copy that drives sales.





                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={copywriting}  className="rounded  float-center" alt="..." />

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
                            What is copywriting?
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            Copywriting creates content (known as “copy”) to persuade people to buy products or services or promote ideas and concepts. It uses language techniques that target people’s needs and emotions. Copywriting is an essential component of marketing, advertising, and public relations. It can influence customers to make purchases they may not have considered without the appeal of the copy, and it also helps to shape public perceptions and build positive relationships. In a nutshell, copywriting is the language of promotions.


                        </p>

                    </div>
                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        Copywriting

                    </h3>

                    <ListGroup className="BlogOptions">
                        {/* 
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <h3 className="Blog-posts-options">
                                Blog Posts
                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Marketing copywriting

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Social media copywriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Brand copywriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Direct response copywriting

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Website landing page copywriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Technical copywriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Public relations copywriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Thought leadership copywriting


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Content hub copywriting


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




export default Copywriting;