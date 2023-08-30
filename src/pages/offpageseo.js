import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import offpageseoimg from "../images/OffpageSEO.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function offpageseo() {



    return (
        <div>
            <div className=" post-home" style={{
                backgroundColor: `#20384D`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#599ED9`
                    }}>Off-page SEO






                    </h1>
                    <p className="text-white blog-posts-text">
                        We study websites’ relevance outside the website. We incorporate backlinks, do competitor analysis, and expand website presence and interactions with other websites.


                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={offpageseoimg} width={'200px'} height={'200px'} className="rounded  float-center" alt="..." />

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
                            What is Off-Page SEO?

                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            Off-page SEO is the tactical activity that takes place outside of a website that references back to itself in some form. For example, building high-quality backlinks from other respectable websites, boosting the website’s social media presence and followers, and promoting the website through online PR and content marketing are all part of the process. Off-page SEO is a significant part of a comprehensive search engine optimization strategy, as it contributes to the website’s authority and credibility in search engines.


                        </p>
                        <p>
                            <b> Three chief benefits that your website can achieve through off-page SEO:</b> (1)higher search rankings and more organic and targeted traffic to your website, bringing in more revenues, establishing your website as a resource within your industry, (2)forming more industry partnerships and collaborations, and (3)propelling your website ahead of the competition.


                        </p>
                        <p>
                            Aybben can bring these achievements to your website!


                        </p>


                    </div>


                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        Off-Page SEO


                    </h3>

                    <ListGroup className="BlogOptions">
                        {/* 
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <h3 className="Blog-posts-options">
                                Blog Posts
                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Link Building


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Social Media

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Local SEO

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Content Marketing

                        </ListGroup.Item>


                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <b>Price $750-2000


                            </b>



                        </ListGroup.Item>
                    </ListGroup>
                </div>


            </div>
            <Contacts></Contacts>
        </div >
    );
}




export default offpageseo;