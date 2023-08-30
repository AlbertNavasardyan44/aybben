import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import SeoOnimg from "../images/OnpageSEO.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function Seoonpage() {



    return (
        <div>
            <div className="post-home" style={{
                backgroundColor: `#20384D`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#599ED9`
                    }}>On-page SEO





                    </h1>
                    <p className="text-white blog-posts-text">
                        We create a website map with all the pages’ elements, such as title tags, meta descriptions, URL structures, primary headers and subheaders, internal linking, and keyword analysis, and refine them to enhance search engine optimization.

                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={SeoOnimg}  className="rounded  float-center" alt="..." />

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
                            What is on-page (on-site) SEO?
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            On-page or on-site SEO is the same term for leveraging a website’s own pages by linking them to one another and optimizing content with keywords so that search engines can index it more extensively, classify it more precisely, and perhaps rank it higher on the search engine results page (SERP). An on-page SEO expert examines a website’s architecture, images, meta descriptions, title tags, and other elements to see how it reflects in search engines.

                        </p>


                    </div>
                    <div className="text-center text-center">
                        <strong >
                            Does a website need on-page SEO?
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            On-page SEO is critical for search engines to sort out information on a website. On-page SEO also creates a better user experience for website visitors. People can efficiently browse through the pages and understand how one content relates to another and the meaning it conveys. No person or AI wants disorganized information that is mere data.


                        </p>


                    </div>
                    <div className="text-center text-center">
                        <strong >
                            Have Aybben do your website's on-page SEO
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            Aybben specializes in on-page SEO. We assist people in improving their websites’ technical features and content to make them more visible and appealing to search engines. Our team of experts is skilled in performing keyword research, analyzing website traffic and metrics, and implementing tactics to improve a website’s search engine rankings. We are committed to delivering results that drive natural traffic and enhance the overall performance of websites. Whether you’re looking to optimize titles, headings, and other HTML elements or create high-quality content that resonates with your target audience, we have the tools and expertise to help your business succeed online.



                        </p>


                    </div>


                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        On-Page SEO


                    </h3>

                    <ListGroup className="BlogOptions">
                        {/* 
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <h3 className="Blog-posts-options">
                                Blog Posts
                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Keywords research


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Website Audit

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Heading tag optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Site speed optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Keywords optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Content optimization


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Title tag optimization


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Schema markup


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Meta description optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Image optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Structured Markup

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            URL structure optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Internal Linking

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Mobile optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Site speed optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            XML sitemap creation

                        </ListGroup.Item>


                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <b>Price $500-1500

                            </b>



                        </ListGroup.Item>
                    </ListGroup>
                </div>


            </div>
            <Contacts></Contacts>
        </div >
    );
}




export default Seoonpage;