import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import React from 'react';
import Contacts from '../contactComponent/ContactComp.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';
function Blog() {


    return (
        <div>
            <div className="blog-page ">
                <Navbar />
                <div className="blog">
                    <h1>Blog</h1>
                    <h1>Knowledge source</h1>
                    <p>
                        All the writings produced by Aybben are 100% original. Ethics matter in our company.
                        We use modern approaches to our information research using the global knowledge base,
                        and we keep anything related to our readers as accurate and discrepancy-free as humanly possible.
                    </p>
                    <p>
                        Our writers receive continual training with highly qualified instructors who teach the
                        craft of writing that offers value to the readers and not just some meretricious texts.
                    </p>
                    <p>
                        Enjoy your readings, and thank you for visiting Aybben.


                    </p>
                </div>
            </div>
            <div className="Blogs pt-4 " >
                <div className='blogs-card'>
                    <h2 className='mb-4'>The Importance of SEO for Blogs: Balancing Visibility and Value</h2>
                    <p>Searching through the internet, we find a vast amount of written</p>
                    <div className='d-flex justify-content-between'>
                        <p>February 26, 2023</p>
                        <FontAwesomeIcon className='text-primary me-2' icon={faShareNodes} />

                    </div>
                </div>
                <div className='blogs-card'>
                    <h2 className='mb-4'>The Importance of SEO for Blogs: Balancing Visibility and Value</h2>
                    <p>Searching through the internet, we find a vast amount of written</p>
                    <div className='d-flex justify-content-between'>
                        <p>February 26, 2023</p>
                        <FontAwesomeIcon className='text-primary me-2' icon={faShareNodes} />

                    </div>
                </div>
            </div>
            <Contacts></Contacts>
        </div>
    );
}

export default Blog;
