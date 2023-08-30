
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, ListGroup, Col } from 'react-bootstrap';
import './Home.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../Navigation/navbar.js";
import Modal from 'react-bootstrap/Modal';

import { useClickAway } from "@uidotdev/usehooks";

import backgroundImage from "../images/AybbenHomephoto.jpg";
import homeangl from "../images/homeangl.png";

import SeoContent from "../images/SeoContent.jpg";
import mathias from '../images/mathias.png'
import { useEffect, useRef, useState } from "react"

import kristine from '../images/kristine.png'
import anna from '../images/anna.png'
import plane from '../images/plane.gif'
import angle from '../images/angle.gif'
import people from '../images/people.gif'

import Contact from "../contactComponent/ContactComp.js";
import Button from '../buttonComponent/button.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'




class Home extends Component {


    constructor(props) {
        super(props);
        this.state = ({
            show1: false,
            show2: false,

            show3: false,

        })

        this.handleClose1 = this.handleClose1.bind(this);



        this.handleClose2 = this.handleClose2.bind(this);
        this.handleClose3 = this.handleClose3.bind(this);
        this.handleShowModal1 = this.handleShowModal1.bind(this);
        this.handleShowModal2 = this.handleShowModal2.bind(this);
        this.handleShowModal3 = this.handleShowModal3.bind(this);

    }

    handleShowModal1() {
        this.setState({
            show1: true
        })

    }
    handleShowModal2() {
        this.setState({
            show2: true
        })
    }
    handleShowModal3() {
        this.setState({
            show3: true
        })
    }
    handleClose1() {
        this.setState({
            show1: false
        })

    }

    handleClose2() {
        this.setState({
            show2: false

        })
    }

    handleClose3() {
        this.setState({
            show3: false
        })
    }


    render() {
        return (
            <div className="Home-page"  >








                <Navbar />
                <div className='phome d-flex'>


                    <div className="Welcome-to-aybben" >
                        <h1 className="welcome">Welcome</h1>
                        <p > <span className="to">to </span> <span className='ayb m-l-2'>Ayb</span><span className='ben'>ben</span></p>
                        <p>Your one-stop solution for website optimization and content creation. Take your website’s online presence to new heights, unleashing its full potential internet-wide by ranking higher with Aybben’s expert SEO and writing services.</p>
                        <Button style={{ backgroundColor: '#71E1E2', color: 'black', borderRadius: '10px' }}>
                            <Link className="homeToContact" to="/Contact">Contact Us</Link>
                        </Button>
                    </div>
                    {/* <div>
                        <img src={homeangl} className=" float-center" width={'100%'} alt="..." />

                    </div> */}
                </div>
                <div className='Services'>
                    <div className='ServicesText '>
                        <h2 className='ServicesHeader'>SERVICES</h2>
                        <h1 className='WhatWeOffer'>What we offer</h1>
                        <p>Whether you have your business reflected digitally a short time ago or even long ago, but still it hasn’t gotten what you expected, Aybben will immediately pick up the slack.</p>
                        <p>We look into every little nuance of your company’s online presence and strategize a game plan for it to tower over.</p>
                    </div>
                    <div className=' cards'>
                        <div>
                            <div className=''>
                                <img src={plane} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                            </div>
                            <h2>Productive and Cost-effective Plans</h2>
                            <p>Choose one of the three plans that offer combined writing and SEO services and more!</p>
                        </div>
                        <div>
                            <div className=''>
                                <img src={angle} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                            </div>
                            <h2>Freestanding SEO and Writing Services</h2>
                            <p>You may employ our services separately, backed up by a hefty team of pros.</p>
                        </div>
                        <div>
                            <div className=''>
                                <img src={people} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                            </div>
                            <h2>Edits and Reviews of Existing Content</h2>
                            <p>With a free consultation, have us look at your present content and order revisions.</p>
                        </div>

                    </div>
                </div>
                <div className='SeoContent' style={{
                    backgroundImage: `url(${SeoContent})`,
                    // backgroundSize: `cover`
                    width: `100%`
                }}>
                    <div className='SEO-Content-Services'>
                        <div>
                            <h1 style={{
                                color: `#ffffff`,
                                fontfamily: `"Inter", Sans-serif`,
                                fontsize: `34px`,
                                lineheight: `41.15px`
                            }}>SEO Content Services</h1>
                        </div>
                        <div>
                            <h2 style={{
                                color: `#71E1E2`,
                                fontfamily: `"Inter", Sans-serif`,
                                fontsize: `24px`,
                                lineheight: `29.05px`
                            }}>

                                We’ve got it covered!
                            </h2>
                        </div>
                        <div>
                            <h1> Your website shouldn’t stay without a stitch.</h1>
                        </div>
                        <div>
                            <b>  Our experts collaborate nonstop and all around the clock to provide our clients nothing short of an anticipated business boost.
                            </b>
                        </div>
                        <Button style={{
                            marginTop: `15px`,
                            fontFamily: `"Roboto", Sans-serif`,
                            fontSize: `16px`,
                            lineHeight: `18.75px`,
                            textShadow: `0px 0px 10px rgba(0,0,0,0.3)`,
                            backgroundColor: `#71E1E2`,
                            borderRadius: `10px 10px 10px 10px`,
                            color: 'black',
                        }}>
                            <Link className="homeToContact" to="/Home">Lets talk</Link>
                        </Button>
                    </div>


                </div >
                <div className='Outcomes'>
                    <div>
                        <div>

                        </div>
                        <div>
                            <h2 style={{
                                color: `#5D20D5`,
                                fontfamily: `"Inter", Sans-serif`,
                                fontsize: `24px`,
                                lineheight: `29.05px`
                            }}>Outcomes</h2>
                        </div>
                        <div>
                            <h1 style={{
                                color: `#321B6D`,
                                fontfamily: `"Inter", Sans-serif`,
                                fontsize: `34px`,
                                lineheight: `41.15px`
                            }}>

                                What to expect

                            </h1>
                        </div>

                        <div>
                            <p className='OurSeo'> Our SEO and writing specialists have hierarchies for filtering every word, phrase, and sentence for the optimum impact. We have a full range of privileged tools to analyze markets, do in-depth keyword research, and move your site up on the SERP, placing it in the top positions.

                            </p>
                        </div>
                    </div>
                    <div className=' cards cardsSeo'>
                        <div className='text-center'>
                            <div className='text-center'>
                                <FontAwesomeIcon className="text-primary mb-4 icon" icon={faMagnifyingGlassDollar} />
                            </div>
                            <h1>Original content creation:</h1>
                            <p>We do not copy what others have. Plagiarism is a no-no in our business.</p>
                        </div>
                        <div className='text-center'>
                            <div className='text-center'>
                                <FontAwesomeIcon className="text-primary mb-4 icon" icon={faChartColumn} />
                            </div>
                            <h1>Improved user experience:</h1>
                            <p>Your visitors will know what, when, and how without the hustle of ambiguity.</p>
                        </div>
                        <div className='text-center'>
                            <div className='text-center'>
                                <FontAwesomeIcon className="text-primary mb-4 icon" icon={faLocationDot} />
                            </div>
                            <h1>Increased brand awareness:</h1>
                            <p>We will voice your brand's uniqueness and make it remembered.</p>
                        </div>
                        <div className='text-center'>
                            <div className='text-center'>
                                <FontAwesomeIcon className="text-primary mb-4 icon" icon={faHandshake} />
                            </div>
                            <h1>Higher Organic search visibility:</h1>
                            <p>We will drive traffic to your website. Our SEO tactics will sew it up.</p>
                        </div>
                    </div>
                </div>

                <div className='Pric'>
                    <div>
                        <div>
                            <h2 className="text-center " style={{
                                color: `#5D20D5`,
                                fontfamily: `"Inter", Sans-serif`,
                                fontsize: `24px`,
                                lineheight: `29.05px`
                            }}>PRICING</h2>
                        </div>
                        <div>
                            <h1 className="text-center " style={{
                                color: `#321B6D`,
                                fontfamily: `Inter, Sans-serif`,
                                fontsize: `34px`,
                                lineheight: `41.15px`
                            }}>

                                Select your plan


                            </h1>
                        </div>

                        <div>
                            <p className='OurSeo text-center'> We process every order by meticulously considering
                                the needs and preferences of our customers,
                                simultaneously offering guidance, directions, and recommendations related to our field.</p>
                        </div>
                    </div>
                    <div className=' cards cardPricing'>
                        <div>
                            <div className='text-center tariff'>
                                <h1>1 month</h1>
                            </div>
                            <ListGroup>
                                <ListGroup.Item> <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />4000+ professionally written words</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Reviews of old content</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Edits of old content</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Keyword placement</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Reports every 2 weeks</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />On-page SEO</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Consulting</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Competitors analysis</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />SEO audits</ListGroup.Item>


                            </ListGroup>
                            <div className='text-center'>
                                <Button className="tariff-button">
                                    <Link className="tariff-button" to="/Contact">$958</Link>
                                </Button>
                            </div>
                        </div>
                        <div >
                            <div className='text-center tariff'>
                                <h1>3 months</h1>
                            </div>
                            <ListGroup>
                                <ListGroup.Item>
                                    <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />13000+ professionally written words
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Reviews of old content
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Edits of old content
                                </ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Keyword placement</ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Reports every week
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />On-page and off-page SEO
                                </ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Consulting</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Competitors analysis</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />SEO audits</ListGroup.Item>


                            </ListGroup>
                            <div className='text-center'>
                                <Button className="tariff-button" >
                                    <Link className="tariff-button" to="/Contact">$2774</Link>
                                </Button>
                            </div>
                        </div>
                        <div >
                            <div className='text-center tariff'>
                                <h1> 6 months</h1>
                            </div>
                            <ListGroup>
                                <ListGroup.Item>
                                    <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />26000+ professionally written words
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Reviews of old content
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Edits of old content
                                </ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Keyword placement</ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Reports every week
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon className='text-primary me-2' icon={faCheck} />On-page and off-page SEO
                                </ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Consulting</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />Competitors analysis</ListGroup.Item>
                                <ListGroup.Item><FontAwesomeIcon className='text-primary me-2' icon={faCheck} />SEO audits</ListGroup.Item>


                            </ListGroup>
                            <div className='text-center'>
                                <Button className="tariff-button" >
                                    <Link className="tariff-button" to="">$5548</Link>
                                </Button>
                            </div>
                        </div>


                    </div>

                </div>
                <div >
                    <div className='  blog-header'>
                        <div className='blogs '>
                            <div className='blogs-Treasure '>
                                <h2 className='text-purple'>BLOG</h2>
                                <h1>Treasure trove</h1>
                                <p>Our blog includes everything from the latest news and trends to expert insights, tips, and best practices.
                                    We aim to make it our visitors’ go-to source that unravels information in such a way that
                                    is engaging and enjoyable. Our goal is to keep our readers informed and up to date at all times.
                                    The content in our blog is valuable for individuals and businesses wishing to improve their online
                                    presence through our services and for writers and SEO specialists looking to gain knowledge.</p>
                            </div>
                            <div className='blogs-card-div'>
                                <div className='blogs-card'>
                                    <h2 className='mb-4'>
                                        <Link className="tariff-button" to="/the-truth-about-content-and-seo-in-armenia">
                                            <h2>The Truth About CONTENT AND SEO IN ARMENIA</h2>
                                        </Link>
                                    </h2>
                                    <p className='mb-0'>The world of content creation and SEO is a busy one.</p>
                                    <div className='d-flex justify-content-between'>
                                        <p>February 20, 2023</p>
                                        <FontAwesomeIcon className='text-primary me-2' icon={faShareNodes} />
                                    </div>
                                </div>
                                <div className='blogs-card'>
                                    <h2 className='mb-4'>
                                        <Link className="tariff-button" to="/seo-in-blogs/blog-post
">
                                            <h2>
                                                The Importance of SEO for Blogs: Balancing Visibility and Value
                                            </h2>
                                        </Link>
                                    </h2>
                                    <p className='mb-0'>Searching through the internet, we find a vast amount of written</p>
                                    <div className='d-flex justify-content-between'>
                                        <p>February 26, 2023</p>
                                        <FontAwesomeIcon className='text-primary me-2' icon={faShareNodes} />
                                    </div>
                                </div>
                                <div className='blogs-card f-flex
                                flex-column'>
                                    <h2 className='mb-4'>
                                        <Link className="tariff-button" to="">
                                            <h2>
                                                The Importance of SEO for Blogs: Balancing Visibility and Value
                                            </h2>
                                        </Link>

                                    </h2>
                                    <p className='mb-0'>The world of content creation and SEO is a busy one.</p>
                                    <div className='d-flex justify-content-between'>
                                        <p>February 20, 2023</p>
                                        <FontAwesomeIcon className='text-primary me-2' icon={faShareNodes} />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className='Customer-Testimonials' >
                        <div className='text-center'>
                            <h2>SERVICES</h2>
                            <h1>Customer Testimonials</h1>
                            <p>We appreciate the feedback!</p>
                        </div>

                        <div className='cards ' >

                            <div className='Customer-card'>
                                <div>
                                    <img src={mathias} className="rounded float-left" alt="..." />

                                    <div >
                                        <h2 className='Name_surname'>Mathias Kissling</h2>
                                        <Link className="text-decoration-none" to="https://amazingworldbiketour.com/">Founder of Amazing world bike tour</Link>
                                        <p className='mt-4 blog-text'>Finally, I found a company in Armenia with native English writers
                                            and top-notch SEO experts that didn’t charge an arm and a leg.</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <Button className="customer-button mt-4 text-white" onClick={this.handleShowModal1}>
                                        Learn more
                                    </Button>



                                </div>
                                <Modal show={this.state.show1} onHide={this.handleClose1} backdrop="static">
                                    <Modal.Header closeButton>
                                        <Modal.Title >
                                            <h3 className='text-info'>
                                                Mathias Kissling
                                            </h3>

                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className=' pl-2 pr-2'>
                                            <div className=' d-flex justify-content-around align-items-center text-center'>
                                                <img src={mathias} className="rounded float-left" width="25%" alt="..." />
                                                {/* <h4 className='text-danger'>Mathias Kissling</h4> */}
                                                <h4>Founder of Amazing world bike tour</h4>

                                            </div>
                                            <div>
                                                <p>  Finally, I found a company in Armenia with native English writers
                                                    and top-notch SEO experts that didn't charge an arm and a leg. Aybben
                                                    fulfilled every bit of the details we had discussed before making the
                                                    order with them. They didn't leave anything out and took the extra mile
                                                    to create SEO-driven content for my website from scratch. Since Aybben
                                                    made my
                                                    website complete, I can legitimately state that my revenues have
                                                    increased quite a bit. I don't see myself working with any other content creators but Aybben.
                                                </p>
                                            </div>

                                        </div>
                                    </Modal.Body>
                                    {/* <Modal.Footer>

                                    </Modal.Footer> */}
                                </Modal>

                            </div>
                            <div className='Customer-card'>
                                <div>
                                    <img src={kristine} className="rounded float-left" alt="..." />

                                    <div >
                                        <h2 className='Name_surname'>Kristine Hayrapetyan</h2>
                                        <Link className="text-decoration-none" to="https://medicrat.am/">Founder of  Medicrat</Link>
                                        <p className='mt-4 blog-text'> I want to endorse Aybben for their diligence and punctuality. Everyone
                                            in my professional circle uses Aybben services without a second thought.</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <Button className=" customer-button mt-4 text-white" onClick={this.handleShowModal2}>
                                        Learn more

                                    </Button>
                                </div>

                            </div>
                            <Modal show={this.state.show2} onHide={this.handleClose2} backdrop="static">
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        <h3 className='text-info'>
                                            Kristine Hayrapetyan
                                        </h3>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className=' pl-2 pr-2'>
                                        <div className=' d-flex justify-content-around align-items-center'>
                                            <img src={kristine} className="rounded float-left" width="25%" alt="..." />
                                            {/* <h4 className='text-danger'>Mathias Kissling</h4> */}
                                            <h4>Founder of  Medicrat
                                            </h4>

                                        </div>
                                        <div>
                                            <p>  I want to endorse Aybben for their diligence and punctuality. Everyone in my professional circle uses Aybben services without a second thought. The thing that stands out to me the most working with the guys at Aybben is that without my calling to check on the headway, they keep me updated unfailingly with exhaustive reports. I mean, with them, nothing goes unanswered. Every penny invested checks out, without a doubt. I am a person who likes seeing measurable results for my money, and Aybben has done more for my website's online visibility than any other company I've dealt with in the past. Thank you, Aybben!
                                            </p>
                                        </div>

                                    </div>
                                </Modal.Body>
                                {/* <Modal.Footer>
                                    <Button variant="primary" onClick={this.handleClose2}>
                                        Proceed
                                    </Button>
                                    <Button variant="danger" onClick={this.handleClose2}>
                                        Cancel
                                    </Button>
                                </Modal.Footer> */}
                            </Modal>
                            <div className='Customer-card'>
                                <div>
                                    <img src={anna} className="rounded float-left" alt="..." />

                                    <div >
                                        <h2 className='Name_surname'>Anna Hakobyan</h2>
                                        <Link className="text-decoration-none" to="https://www.asteria.am/">The head of Marketing of Asteria Pharmaceutical Company</Link>
                                        <p className='mt-4 blog-text'>After I saw what Aybben could do, I basically
                                            had my whole website undone and handed them the task of mending it.</p>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <Button className="customer-button mt-4 text" onClick={this.handleShowModal3}>
                                        Learn more

                                    </Button>
                                </div>
                            </div>


                            <Modal show={this.state.show3} onHide={this.handleClose3} backdrop="static">
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        <h3 className='text-info'>
                                            Anna Hakobyan
                                        </h3>

                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <div className=' pl-2 pr-2'>
                                        <div className=' d-flex justify-content-around align-items-center text-center'>
                                            <img src={anna} className="rounded float-left" width="25%" alt="..." />
                                            {/* <h4 className='text-danger'>Mathias Kissling</h4> */}
                                            <h4>
                                                The head of Marketing of Asteria Pharmaceutical Company

                                            </h4>

                                        </div>
                                        <div>
                                            <p>

                                                Finally, I found a company in Armenia with native English writers and top-notch SEO experts that didn't charge an arm and a leg. Aybben fulfilled every bit of the details we had discussed before making the order with them. They didn't leave anything out and took the extra mile to create SEO-driven content for my website from scratch. Since Aybben made my website complete, I can legitimately state that my revenues have increased quite a bit. I don't see myself working with any other content creators but Aybben.

                                            </p>
                                        </div>

                                    </div>
                                </Modal.Body>
                                {/* <Modal.Footer>
                                    
                                </Modal.Footer> */}
                            </Modal>
                        </div>
                        <div className='text-center mt-5'>
                            <h2 className='we-only'>We only consider the job adequately completed when our customers are satisfied.</h2>

                            <b>After all, customer satisfaction is our top priority!</b>
                        </div>
                    </div>
                </div>
                <Contact></Contact>

            </div >

        );


    }
}


export default Home;
