import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import blogpostimg from "../images/blogpost.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function BlogPost() {



    return (
        <div>
            <div className="  post-home " style={{
                backgroundColor: ` #1B2333`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 >Blog posts</h1>
                    <p className="text-white blog-posts-text">
                        Aybben analyzes the overall health of a website using cutting-edge tools.
                        We report on all issues, providing detailed explanations of the causes and
                        solutions required.
                    </p>

                </div>
                <div className="text-center  header-img">
                    <img src={blogpostimg}  className="rounded  float-center" alt="..." />

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
                            Advance Industry Knowledge for Your Audience with Our Blog Post Services
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            Blog posts are written content created for a website section known as Blog. In the past, when things were taking shape on the internet, website owners usually wrote their own blogs to express their opinions and experiences on various topics. Nowadays, it is becoming progressively more common for website owners to hire professional content writers to create blog posts on their behalf. That is because blog posts serve many more purposes than they did before. They have become an influential marketing tool for all industries. Through them, sites can now establish themselves as leaders in their respective fields by being able to produce high-quality and valuable content that educates and engages their readers with their topics. In exchange, if sites are able to create high-value content, search engine bots reward websites with organic traffic by making web pages visible through users’ query keyword inputs. At Aybben, that is what we do through our blog post services: we offer written content that gives value to readers. When your visitors finish reading what we have produced, they will be enriched with newfound knowledge and will directly benefit from the insights they gain.

                        </p>
                    </div>
                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        Blog Posts
                    </h3>

                    <ListGroup className="BlogOptions">
                        {/* 
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <h3 className="Blog-posts-options">
                                Blog Posts
                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Expanded definition posts

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Listicles

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            How-to guides


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Templates

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Cheat sheets and checklists


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Case studies


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Data studies


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Content hubs


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            News posts

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Retrospective posts

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Predictive posts


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <b> Price $0.09-0.15 per word</b>



                        </ListGroup.Item>
                    </ListGroup>
                </div>


            </div>
            <Contacts></Contacts>
        </div >
    );
}




export default BlogPost;