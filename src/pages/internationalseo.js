import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import internationalseoimg from "../images/InternationalSEO.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function internationalseo() {



    return (
        <div>
            <div className="  post-home" style={{
                backgroundColor: `#1B2333`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#49608C`
                    }}>International SEO







                    </h1>
                    <p className="text-white blog-posts-text">
                        You want your company to shine globally by being on the top page of search engines. Aybben does international SEO to provide you with what you want.



                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={internationalseoimg}  className="rounded  float-center" alt="..." />

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
                            What is international SEO?

                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            International SEO tries to raise website visibility and rank higher in search engine results globally. Search engine optimization for international audiences involves creating content relevant to users in different countries. We consider languages, cultures, and locations, but there are a few more tactics. Utilizing hreflang tags, international targeting in Google Search Console, and server-side internationalization are other essential components of an effective global SEO strategy.



                        </p>



                    </div> <div className="text-center text-center">
                        <strong >
                            Who needs International SEO services?

                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            International SEO services can be beneficial for any company or organization that has a website and wants to reach and engage international audiences. It could include businesses that sell products or services internationally, organizations with a global presence, or websites that offer information or resources worldwide.
                        </p>
                        <p>
                            Is your website in a language other than English? Do you have specific target markets in different countries? If yes, then international SEO can be particularly essential. International SEO can help your website rank higher in search engine results globally and help ensure that your website is visible and relevant to international audiences.


                        </p>
                        <p>
                            By working with Aybben, an experienced SEO agency, you can get the support you need to optimize your website for international audiences and reach your target markets effectively


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
                            International SEO


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Keywords research

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Content localization

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Domain strategy

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Server location

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            International link building

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Mobile optimization

                        </ListGroup.Item>


                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <b>Price $1800-7000



                            </b>



                        </ListGroup.Item>
                    </ListGroup>
                </div>


            </div>
            <Contacts></Contacts>
        </div >
    );
}




export default internationalseo;