import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import ecomerceimg from "../images/EcommerceSEO.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function ecomerceseo() {



    return (
        <div>
            <div className=" post-home " style={{
                backgroundColor: `#20384D`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#599ED9`
                    }}>Ecommerce SEO








                    </h1>
                    <p className="text-white blog-posts-text">
                        We further optimize e-commerce websites by upgrading product and category pages for better organic visibility and improving the checkout process for a better customer experience. (We implement advanced techniques, such as remarketing campaigns and tracking relevant analytics with in-depth metrics, to increase customer conversions.




                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={ecomerceimg}  className="rounded  float-center" alt="..." />

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
                            What is ecommerce SEO, and what does it do?

                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            E-commerce SEO is the action taken to enhance the rating of an online store in search engine results to attract potential buyers. The e-commerce SEO specialist can apply various tactics, such as optimizing product titles and descriptions, improving site speed and mobile usability, and building high-quality backlinks. With these optimizations carried out properly, organic traffic could skyrocket, driving earnings through the roof.




                        </p>



                    </div>

                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        E-commerce SEO


                    </h3>

                    <ListGroup className="BlogOptions">
                        {/* 
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <h3 className="Blog-posts-options">
                                Blog Posts
                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            E-commerce SEO

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Keywords research


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Website architecture optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Technical audit

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Content marketing

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Product localization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Mobile optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Pricing localization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Seasonal and promotional optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            international SEO for product pages

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Competitor analysis

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Image optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Site speed optimization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            International PPC advertising

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Product schema markup

                        </ListGroup.Item>


                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <b>Price $700-3000




                            </b>



                        </ListGroup.Item>
                    </ListGroup>
                </div>


            </div>
            <Contacts></Contacts>
        </div >
    );
}




export default ecomerceseo;