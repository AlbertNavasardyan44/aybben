import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import Button from '../buttonComponent/button.js';
import React from 'react';
import { Link } from 'react-router-dom';

import Contact from "../contactComponent/ContactComp.js";
import './ContentServices.css';
import SeoAudit from '../images/SEO-Audits.png'
import SeoCons from '../images/SEO-Consulting.png'
import Onpage from '../images/On-page-SEO.png'
import Offpage from '../images/Off-page-SEO.png'
import International from '../images/International-SEO.png'
import Ecommerce from '../images/E-commerce-SEO.png'
import Local from '../images/Local-SEO.png'
function SeoServices() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (

        <div className="">
            <div className="ContentServicesnavbar">
                <Navbar className="ContentServicesNavbar" />
            </div>


            <div className="ContentServices">
                <div className="ContentServices-text">
                    <h1>SEO Services</h1>
                    <p>

                        Aybben provides SEO (search engine optimization) for websites. SEO campaigns boost organic
                        traffic to a website, increasing its online visibility. As a result, it significantly promotes
                        services, products, and ideas, leading to higher
                        rates of customer conversions. Below are the different types of SEO services we offer.</p>
                    {/* <h1>Aboutus PAGE</h1> */}



                </div>
                <div className=' cardsServices'>
                    <div className='text-center card-content-services'>
                        <div className='text-center card-heder '>
                            <img src={SeoAudit} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <div className="card-body">
                            <h4>SEO Audits</h4>
                            <p>Aybben analyzes the overall health of a website
                                using cutting-edge tools. We report on all issues, providing detailed explanations of the causes and solutions required.
                            </p>
                        </div>
                        <div className=' card-footer'>
                            <Button className="services-button mt-4 ">
                                <Link className="text-white text-decoration-none" to="/seo-audit" onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center card-heder'>
                            <img src={SeoCons} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <div className="card-body">
                            <h4>SEO Consulting</h4>
                            <p>A consultation is free at Aybben. We will gladly answer any inquiries and discuss
                                a strategic approach to website search engine optimization.</p>
                        </div>
                        <div className='text-center  card-footer my-auto'>
                            <Button className="services-button ">
                                <Link className="text-white text-decoration-none" to="/seo-consulting" onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center card-heder'>
                            <img src={Onpage} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <div className="card-body">
                            <h4>On-page SEO</h4>
                            <p>We create a website map with all the pages' elements, such as title tags, meta descriptions,
                                URL structures, primary headers and subheaders, internal linking, and keyword analysis, and
                                refine them to enhance search engine optimization.

                            </p>
                        </div>
                        <div className='text-center  card-footer my-auto'>
                            <Button className="services-button ">
                                <Link className="text-white text-decoration-none" to="/on-page-seo" onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center card-heder'>
                            <img src={Offpage} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <div className="card-body">
                            <h4>Off-page SEO</h4>
                            <p>We study websites' relevance outside the website. We incorporate backlinks, do competitor analysis,
                                and expand website presence and interactions with other websites.</p>
                        </div>
                        <div className='text-center  card-footer my-auto'>
                            <Button className="services-button ">
                                <Link className="text-white text-decoration-none" to="/off-page-seo" onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center card-heder'>
                            <img src={International} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <div className="card-body">
                            <h4>International SEO</h4>
                            <p>You want your company to shine globally by being on the top page of search engines.
                                Aybben does international SEO to provide you with what you want.</p>
                        </div>
                        <div className='text-center  card-footer'>
                            <Button className="services-button my-auto">
                                <Link className="text-white text-decoration-none" to="/international-seo" onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center card-heder'>
                            <img src={Ecommerce} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <div className="card-body">
                            <h4>E-commerce SEO</h4>
                            <p>We further optimize e-commerce websites by upgrading product and category pages
                                for better organic visibility and
                                improving the checkout process for a better customer experience.</p>
                        </div>
                        <div className='text-center  card-footer'>
                            <Button className="services-button my-auto">
                                <Link className="text-white text-decoration-none" to="/e-comerce-seo" onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center card-heder'>
                            <img src={Local} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <div className="card-body">
                            <h4>Local SEO</h4>
                            <p>No matter what location you target for your website's visibility, we optimize the pages
                                for that specific area. We don't
                                let language berries stand in the way of your website's high ranking on the SERP.</p>
                        </div>
                        <div className='text-center  card-footer'>
                            <Button className="services-button my-auto">
                                <Link className="text-white text-decoration-none" to="/local-seo" onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <Contact></Contact>
        </div >
    );
}

export default SeoServices;
