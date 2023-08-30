import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import Button from '../buttonComponent/button.js';
import { Link } from 'react-router-dom';

import React from 'react';

import backgroundImage from "../images/Home.jpg";
import Contact from "../contactComponent/ContactComp.js";
import './ContentServices.css';
import a from '../images/1.png'
import b from '../images/2.png'
import c from '../images/3.png'
import d from '../images/4.png'
import e from '../images/5.png'
import f from '../images/6.png'
import g from '../images/7.png'
import './ContentServices.css';

function ContentServices() {

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
                    <h1>Content creation services</h1>
                    <p>

                        Aybben’s professional writers provide articles written in a fresh, creative way
                        with accurate information and suitable keywords that will not only engage your readers but
                        also get the website to rank higher in
                        search engine results. Here you can see the list of our content creation writing services.</p>
                    {/* <h1>Aboutus PAGE</h1> */}



                </div>
                <div className=' cardsServices'>
                    <div className='text-center card-content-services'>
                        <div className='text-center '>
                            <img src={a} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <h4>Blog posts</h4>
                        <p>Aybben covers virtually all the different niches with writing for websites. We will
                            fill your blog post pages with unique and relevant content that people will love reading.</p>
                        <div className='text-center'>
                            <Button className="services-button mt-4">
                                <Link className="text-white text-decoration-none" to="/blog-posts"  onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center'>
                            <img src={b} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <h4>Brand journalism</h4>
                        <p>We will bring your stories to life through our writing. Your industry news will
                            always stay fresh on your website with updated information your customers need.</p>
                        <div className='text-center'>
                            <Button className="services-button mt-4">
                                <Link className="text-white text-decoration-none" to="/brand-jurnalism" onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center'>
                            <img src={c} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <h4>Technical writing</h4>
                        <p>From information technology to the medical industry to business and finance, Aybben has
                            writers with the expertise to create impactful and authoritative content.</p>
                        <div className='text-center'>
                            <Button className="services-button mt-4">
                                <Link className="text-white text-decoration-none" to="/technical-writing"  onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center'>
                            <img src={d} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <h4>Email writing</h4>
                        <p>Have Aybben take care of your communication via email. We will craft the perfect messages you want to convey.
                            Working with Aybben is a painless and effective way of managing email correspondence.</p>
                        <div className='text-center'>
                            <Button className="services-button mt-4">
                                <Link className="text-white text-decoration-none" to="/email-writing"  onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center'>
                            <img src={e} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <h4>Scriptwriting</h4>
                        <p>We write scripts for videos, podcasts, and other audio/visual mediums to help businesses,
                            industries, and sectors achieve their promotional objectives.</p>
                        <div className='text-center'>
                            <Button className="services-button mt-4">
                                <Link className="text-white text-decoration-none" to="/script-writing"  onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center'>
                            <img src={f} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <h4>Copywriting</h4>
                        <p>All your writing for advertising campaigns, marketing initiatives, or raising
                            brand awareness can exclusively be with Aybben. We create copy that drives sales.</p>
                        <div className='text-center'>
                            <Button className="services-button mt-4">
                                <Link className="text-white text-decoration-none" to="/copy-writing"  onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>
                    <div className='text-center card-content-services'>
                        <div className='text-center'>
                            <img src={g} width={'96px'} height={'96px'} className="rounded float-center" alt="..." />
                        </div>
                        <h4>General writing</h4>
                        <p>Whether you want the content to educate, persuade, entertain, or describe,
                            Aybben will type it for you with clarity and style, guaranteeing high-quality writing.</p>
                        <div className='text-center'>
                            <Button className="services-button mt-4">
                                <Link className="text-white text-decoration-none" to="/general-writing"  onClick={scrollToTop}>Learn more</Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <Contact></Contact>
        </div >
    );
}

export default ContentServices;
