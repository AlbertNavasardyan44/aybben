import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navigation/navbar.js";
import React from 'react';
import Contact from "../contactComponent/ContactComp.js";

import about from "../images/abou.jpg";
import './Aboutus.css';

function Aboutus() {


    return (

        <div >  <Navbar />

            <div className="about-page "  >
                <div className="aboutUS">
                    <h2>The story of Aybben</h2>
                    <h1>SEO Experts and Content Creators under
                        One Company for Your Success</h1>
                    <p>The story of our company is nothing special compared to a garage project growing into
                        a magnate-producing giant behemoth; on the contrary, we had all the necessary
                        equipment and decent working places right out of the gate, though not as one team
                        and not under one company. Before Aybben was
                        born, our SEO experts and content creators worked either as freelancers or for
                        other organizations. They were working separately until an opportunity presented
                        itself for our lead SEO professionals and authors to collaborate on projects jointly.
                        By doing so, they gave clients amazingly successful outcomes.
                        <br></br>                    <br></br>


                        Naturally, the demand for the team to work together grew enormously, and it was then that
                        Melik Tshiroyan established the company. He brought all the right SEO experts
                        and content creators under the roof of Aybben, aiming to bring nothing but success
                        to clients.
                        <br></br>                    <br></br>
                        Aybben now serves diverse companies with their content creation and search engine
                        optimization. We work with small businesses, startups, and large corporations to help
                        them improve their online presence and reach their target audience through high-quality
                        content and effective SEO strategies. Our professional team commits to delivering customized
                        solutions that meet each client’s needs.</p>
                </div>
            </div>

            <div className="The-Core-Values">


                <h1>The Core Values of Aybben</h1>
                <p><strong className="text-secondary">Integrity:</strong> a core value at Aybben that emphasizes honesty, transparency, and
                    ethical behavior in all aspects of the business. It involves doing the right
                    thing even when no one is watching and always maintaining accountability.
                </p>
                <p>
                    <strong className="text-secondary">Diligence:</strong> a significant attribute of Aybben which encompasses persistence,
                    attention to detail, and a strong work ethic. Even when facing challenges or
                    obstacles, our professionals focus on their tasks to fulfill every objective
                    set by our clients.
                </p>
                <p>  <strong className="text-secondary">Passion:</strong> a trait that drives the workforce of Aybben with robust enthusiasm
                    in achieving the work before them. Our SEO experts and content creators spare
                    no effort, time, or resources for the goals and outcomes that our clients expect.
                    The passion in our work is the feeling that distinguishes us and allows us to provide
                    our clients with the best possible service.
                </p>
                <p>     Our experts at Aybben carry these values-integrity, diligence, and
                    passion-in their hearts and minds to have all systems go. No matter how
                    small or large the order, we treat it as an opportunity to express our
                    commitment to providing exceptional quality. A service rendered is an
                    occasion for celebration at Aybben because we take great joy and pride in knowing
                    the people we serve are pleased with the results of our labor.
                </p>



                <div className="Mission-Statement">
                    <h2>
                        Mission Statement
                    </h2>
                    <p>Our mission is to communicate coherent and discernible information that yields
                        measurable gains for people.
                    </p>
                </div>
            </div>
            <Contact></Contact>

        </div >
    );
}

export default Aboutus;