import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import localseoimg from "../images/LocalSeo.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function localSeo() {



    return (
        <div>
            <div className=" post-home " style={{
                backgroundColor: `#2B1E48`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#B4A3D9`
                    }}>Local SEO









                    </h1>
                    <p className="text-white blog-posts-text">
                        No matter what location you target for your website’s visibility, we optimize the pages for that specific area. We don’t let language berries stand in the way of your website’s high ranking on the SERP.





                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={localseoimg}  className="rounded  float-center" alt="..." />

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
                            What is local SEO?

                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            Local SEO increases the visibility of websites in search engines for a specific geographical location. Business websites’ content intended to target people based on their experiences, preferences, lifestyle, and geography may not achieve high rankings in the targeted geo radius searches for the reasons of not having the sites locally optimized. Those owners need to hire local SEO experts, such as the ones at Aybben, to tackle the issues and drive more natural traffic from their preferred locations.

                        </p>
                    </div>
                    <div className="text-center text-center">
                        <strong >
                            What are some of the steps for the local SEO process?

                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            The process of optimizing a website for local search involves many tactical strategies. Claiming and optimizing your Google My Business listing (GMB) and connecting it to your website is one of the steps. Another step is to include local keywords and phrases in your website’s title tags, headings, and content. Also, one of the best efforts is to create local content by adding blog posts about local events, attractions, or news. Social media sites play a huge role, as well, in local search engine optimization. The platforms help to promote your business and engage with local customers. These steps, among others, help business websites gain higher rankings in local search engines, and we are here to get your website those higher rankings.

                        </p>



                    </div>
                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        Local SEO

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




export default localSeo;