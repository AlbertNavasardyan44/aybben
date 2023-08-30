import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import brandjur from "../images/brandjur.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function brandjurnalism() {



    return (
        <div>
            <div className="  post-home" style={{
                backgroundColor: ` #2B1E48`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#B4A3D9`
                    }} >Brand journalism
                    </h1>
                    <p className="text-white blog-posts-text">
                        We will bring your stories to life through our writing. Your industry news will always stay fresh on your website with updated information your customers need.


                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={brandjur}  className="rounded  float-center" alt="..." />

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
                            What is brand journalism?

                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            Brand journalism is a marketing strategy that uses traditional journalistic approaches to communicate with an audience to develop trust and credibility, which can ultimately support companies in driving sales. In other words, brand journalism doesn’t directly target generating revenue for its brand. It tries to attract attention to the company through stories, interviews, videos, podcasts, and more by sharing its content through the company’s media channels like websites, social media accounts, YouTube channels, etc. The primary goal of brand journalism is to build a positive image and relationship with an audience.


                        </p>
                    </div>
                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        Brand Journalism

                    </h3>
                    <ListGroup className="BlogOptions">

                        {/* <ListGroup.Item className="list-group-item-faq text-secondary " >
                        <h3 className="Blog-posts-options">
                                Brand Journalism

                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Brand storytelling

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Brand newsroom

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Brand advocacy


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Brand education

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Brand entertainment


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Brand community


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




export default brandjurnalism;