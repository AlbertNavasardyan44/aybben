import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';

import SeoAuditimg from "../images/SEOAudits.png";
import ToggleButton from 'react-toggle-button'

import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './blogposts.css';



function SeoAudit() {



    return (
        <div>
            <div className=" post-home " style={{
                backgroundColor: `#2B1E48`,
            }}>  <Navbar />
                <div className="Blog-post-header">
                    <h1 style={{
                        color: `#B4A3D9`
                    }}>SEO Audits



                    </h1>
                    <p className="text-white blog-posts-text">
                        Aybben analyzes the overall health of a website using cutting-edge tools. We report on all issues, providing detailed explanations of the causes and solutions required.






                    </p>

                </div>
                <div className="text-center header-img">
                    <img src={SeoAuditimg}  className="rounded  float-center" alt="..." />

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
                            What is an SEO audit, and what does it do?
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            An SEO (Search Engine Optimization) audit thoroughly appraises a website’s visibility in search engines. There are several degrees of analysis. A rigorous audit requires high-end tools, which can be pricey, by the way. The diagnosis reveals the multiple factors that affect its performance on the SERPs (search engine result pages). Through an audit, we can get insight into the root causes that degrade the site. Also, we can discover areas of the site that require improvements and additions to have a more persistent online presence.



                        </p>

                    </div>
                    <div className="text-center text-center">
                        <strong >
                            Who needs an SEO audit?
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            A world without the internet is unthinkable now. Businesses are made or broken by website owner rivalry for online presence. Paid ads give some an edge on the competition, but they can be costly compared to correctly executed SEO for natural traffic. An SEO audit is the first crucial step for anyone who expects fruitful outcomes from website traffic. Without an audit, it will be altogether challenging to determine underlying issues and their solutions for better performance. If you are a website owner, by all means, yes, you need an SEO audit to have it serve you optimally. The company that will handle the entire procedure for you from start to finish is Aybben.




                        </p>

                    </div>
                    <div className="text-center text-center">
                        <strong >
                            What can you expect from an audit?
                        </strong>
                    </div>
                    <div className="m-4">
                        <p>
                            An SEO audit with Aybben will lay open for you to see all the site’s content architecture. You will see all the gaps and missing pieces a website has to fill and have to triumph. It will pave the way for your future game plan, which yields productive turnarounds. Aybben will be there to keep your website healthy and not leave anything unattended in any way, shape, or form, be it content or SEO.





                        </p>

                    </div>
                </div>
                <div className="options text-center">
                    <h3 className="Blog-posts-options">
                        SEO Audit


                    </h3>

                    <ListGroup className="BlogOptions">
                        {/* 
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <h3 className="Blog-posts-options">
                                Blog Posts
                            </h3>

                        </ListGroup.Item> */}
                        <ListGroup.Item className="list-group-item-faq text-secondary " >

                            Technical analysis

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            On-page analysis


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Off-page analysis


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Competitor analysis

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Analytics review


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Content audit


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Mobile optimization analysis


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Social media analysis


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Site usability analysis


                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            Local SEO analysis


                        </ListGroup.Item>


                        <ListGroup.Item className="list-group-item-faq text-secondary " >
                            <b>
                                $650-2000
                            </b>



                        </ListGroup.Item>
                    </ListGroup>
                </div>


            </div>
            <Contacts></Contacts>
        </div >
    );
}




export default SeoAudit;