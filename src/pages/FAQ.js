import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import { React, useState, Component } from 'react';
import Contacts from "../contactComponent/ContactComp.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, ListGroup, Col } from 'react-bootstrap';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import './FAQ.css';

const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

class FAQ extends Component {
    constructor(props) {

        super(props)
        this.state = { show: [false, false, false] };
    }


    render() {
        return (
            <div>
                <div className="faq-page  " style={{

                }}>  <Navbar />
                    <div className="faq-header d-flex">
                        <div className="FAQ-header-text">
                            <h1>FAQ</h1>
                            <p>
                                Our team of experts specializes in helping businesses and individuals improve their online presence
                                through effective SEO strategies and high-quality content writing. Here,
                                you’ll find answers to some of the most frequently asked questions we receive about our services.
                            </p>
                            <p>
                                Whether you’re looking to boost your website’s search engine rankings, drive more traffic to your site,
                                or improve the quality of your content, we’re here to help. From keyword research and on-page optimization
                                to blog post
                                writing and website copywriting, our team has the skills and experience to help you achieve your goals.
                            </p>
                            <p>
                                Take a look through our FAQs to learn more about our services, pricing, and process.
                                If you don’t find the answer to your question here, please don’t hesitate to contact us
                                for more information. We’re always happy to help!




                            </p>
                        </div>

                    </div>

                </div>
                <div className="FAQ  pt-4 " >
                    <ListGroup>

                        <ListGroup.Item className="list-group-item-faq text-secondary " onClick={() => this.showHide(0)}>
                            <div className="d-flex list-toggle">
                                <FontAwesomeIcon className='text-primary me-2 ' icon={faCaretDown} />
                                {/* <FontAwesomeIcon  className='text-primary me-2 ' icon={faCaretDown} rotation={180} /> */}
                                <h3> What is Aybben?</h3>
                            </div>


                            {this.state.show[0] &&

                                <div className="toggle-text">

                                    <p>We named Aybben after the first two letters of the Armenian
                                        alphabet to represent the stages and the work behind search engine optimization
                                        and content creation before delivering gold versions of websites to our customers.
                                        It is analogous to the process of the software release life cycle.
                                    </p>

                                    <p>We sift through data and analytics to prepare websites in their value for search engines to
                                        find and understand
                                        better. In other words, we help websites speak the same language as search engines.
                                    </p>
                                </div>

                            }
                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary  " onClick={() => this.showHide(1)}>
                            <div className="d-flex list-toggle">
                                <FontAwesomeIcon className='text-primary me-2' icon={faCaretDown} />
                                <h3> What are Aybben's services and pricings?</h3>
                            </div>

                            {
                                this.state.show[1] &&
                                <div className="toggle-text">
                                    <p>Aybben has a holistic and unitary approach to search engine
                                        optimization (SEO) and content creation (CC). We made our services
                                        to meet the demand for both. As is known, SEO and CC go hand in hand
                                        for having a powerful website. One without the other is ineffective in
                                        the online world. At the same time, we realize that many websites may
                                        only lag in SEO or CC to have a better ranking. That’s why, in
                                        preparing our services and prices, we decided to offer them in
                                        two ways: one that includes a package deal in the form of a
                                        subscription-based model, and another, in the form of a fee-for-service
                                        model. The two models allow our users to pick either a comprehensive
                                        package that covers SEO and CC or freestanding services for each part
                                        of an SEO or CC. Customers can pick and choose as they best see fit
                                        to their needs. Below, we list all our services and their
                                        corresponding prices with links that will take you to each page
                                        on our site, elaborating on each service and its prices.

                                    </p>
                                    <b className="text-dark mb-4">
                                        <h5>
                                            Aybben’s comprehensive package deals
                                        </h5>
                                    </b>
                                    <p >
                                        At Aybben, we offer monthly, quarterly, and half-yearly plans for SEO and CC services concurrently.
                                    </p>
                                    <b className="text-dark mb-4">
                                        <h5>
                                            Aybben’s standalone SEO services and prices
                                        </h5>
                                    </b>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/seo-consulting" onClick={scrollToTop}> SEO Consulting</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/seo-audits" onClick={scrollToTop}>  SEO Audits</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/on-page-seo" onClick={scrollToTop}> On-page SEO</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/off-page-seo" onClick={scrollToTop}>Off-page SEO</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/e-commerce-seo" onClick={scrollToTop}> E-commerce SEO</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/international-seo" onClick={scrollToTop}> International SEO</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/local-seo" onClick={scrollToTop}>  Local SEO</Link>


                                    </p>
                                    <b className="text-dark mb-4">
                                        <h5>
                                            Aybben’s standalone CC services and prices
                                        </h5>

                                    </b>
                                    <p >
                                        <Link className="text-primary text-decoration-none" to="/blog-posts" onClick={scrollToTop}>Blog posts</Link>
                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/copy-writing" onClick={scrollToTop}>Copywriting</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/technical-writing" onClick={scrollToTop}> Technicalwriting</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/script-writing" onClick={scrollToTop}> Scriptwriting</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/email-writing" onClick={scrollToTop}> Email writing</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/general-writing" onClick={scrollToTop}> General writing</Link>


                                    </p>
                                    <p>
                                        <Link className="text-primary text-decoration-none" to="/brand-jurnalism" onClick={scrollToTop}> Brand journalism</Link>


                                    </p>
                                    <p>
                                        For any questions regarding our services and prices, please do not hesitate to contact us.
                                    </p>



                                </div>

                            }

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary  " onClick={() => this.showHide(2)}>
                            <div className="d-flex  list-toggle">
                                <FontAwesomeIcon className='text-primary me-2' icon={faCaretDown} />
                                <h3> How does SEO help websites?</h3>
                            </div>
                            {
                                this.state.show[2] &&
                                <div className="toggle-text"><p>Every website created and published aims
                                    to engage an audience. No matter what a website offers—whether it’s a
                                    product or service, ideas or opinions, or simply information—it strives
                                    for visitors to come and explore its contents. With this in mind, it’s
                                    no secret that there are a lot of websites, nor is it a secret that
                                    some are better than others with respect to the quality of their content
                                    and presentation. Without search engine optimization (SEO), websites–good
                                    or bad–do not fully communicate with search engine bots. They also have
                                    little chance of ranking higher. In light of this, websites must prioritize
                                    SEO to increase visibility and stand out among competitors vying for users’
                                    attention. Search engine results pages (SERPs) seem to go on forever, and
                                    most users rarely venture beyond the first page. By optimizing their SEO,
                                    websites can increase their chances of appearing on the coveted first page
                                    and attracting potential visitors.

                                </p>


                                </div>

                            }

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " onClick={() => this.showHide(3)}>
                            <div className="d-flex  list-toggle">
                                <FontAwesomeIcon className='text-primary me-2' icon={faCaretDown} />
                                <h3>How does content creation help websites?</h3>
                            </div>

                            {
                                this.state.show[3] &&
                                <div className="toggle-text"><p>On our first page, we use the metaphor
                                    “Your website shouldn’t stay without a stitch” to illustrate how a
                                    website needs content to make a good impression. Just like a person
                                    who goes out in public without clothes would attract unwanted attention
                                    and ridicule, a website without content would look unprofessional and
                                    incomplete. Moreover, a person who dresses and speaks appropriately for
                                    their occasion and audience would have more chances of success and recognition
                                    than someone who doesn’t. For example, a businessperson would wear a suit and use
                                    formal language in a meeting, while a tech guy might wear jeans and a T-shirt and
                                    use cool jargon during a conference. The same idea holds for websites: content
                                    determines their language and manner and aids in clearly conveying their message
                                    to their intended audience. We also want to mention the role of SEO in this process.
                                    SEO is like the VIP escort that guides the website through the crowded and competitive
                                    online world, ensuring it arrives at its desired destinations safely and soundly. Therefore,
                                    to make your website
                                    stand out and reach its potential, do not leave it bare; give it some well-crafted content to wear.</p>


                                </div>

                            }

                        </ListGroup.Item>
                        <ListGroup.Item className="list-group-item-faq text-secondary " onClick={() => this.showHide(4)}>
                            <div className="d-flex  list-toggle">
                                <FontAwesomeIcon className='text-primary me-2' icon={faCaretDown} />
                                <h3>  How does content creation affect SEO?</h3>
                            </div>

                            {
                                this.state.show[4] &&
                                <div className="toggle-text"><p>Content creation plays a significant role
                                    in SEO. By creating fresh and relevant content that engages the audience
                                    and provides valuable information, a website can improve its rankings on search
                                    results pages (SERPs). Without content, there isn’t much to optimize. Content is
                                    where all the keywords are for search engines to understand and match to relevant
                                    search queries. Thus, creating high-quality
                                    and relevant content is crucial for improving search engine rankings and driving organic traffic to a website.</p>


                                </div>

                            }

                        </ListGroup.Item>

                    </ListGroup>

                </div>
                <Contacts></Contacts>
            </div >
        );
    }
    // showHide() {
    //     const { hide } = this.state;
    //     this.setState({ hide: !hide })
    // }
    showHide(num) {
        this.setState((prevState) => {
            const newItems = [...prevState.show];
            newItems[num] = !newItems[num];
            return { show: newItems };
        });

    }

}
export default FAQ;