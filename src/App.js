import {
  BrowserRouter as Router, Routes
  , Route
} from "react-router-dom";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/navbar.js";

import Contact from "./pages/Contact.js"
import Home from "./pages/Home.js"
import Aboutus from "./pages/Aboutus.js"
import ContentServices from "./pages/ContentServices.js"
import Blogposts from "./pages/blogposts.js"
import Brandjurnalism from "./pages/brandjurnalism.js"
import Technical from "./pages/technical.js"
import Email from "./pages/emailwriting.js"
import Script from "./pages/scriptwriting.js"
import Copy from "./pages/copywriting.js"
import General from "./pages/generalwriting.js"
import Seo from "./pages/seoaudits.js"
import SeoCons from "./pages/seoConsulting.js"
import Onpage from "./pages/seoonpage.js"
import Offpage from "./pages/offpageseo.js"
import InterSeo from "./pages/internationalseo.js"
import Ecomerce from "./pages/ecomerceseo.js"
import Local from "./pages/localSeo.js"
import TheTruth from "./pages/theTruth.js"
import TheImportance from "./pages/theImportance.js"


import SeoServices from "./pages/SeoServices.js"

import Blog from "./pages/Blog.js"
import FAQ from "./pages/FAQ.js"
import backgroundImage from "./images/Home.jpg";


import './App.css';

function App() {



  return (


    <Router>

      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/ContentServices' element={<ContentServices />} />
        <Route path='/SeoServices' element={<SeoServices />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/blog-posts' element={<Blogposts />} />
        <Route path='/brand-jurnalism' element={<Brandjurnalism />} />
        <Route path='/technical-writing' element={<Technical />} />
        <Route path='/email-writing' element={<Email />} />
        <Route path='/script-writing' element={<Script />} />
        <Route path='/copy-writing' element={<Copy />} />
        <Route path='/general-writing' element={<General />} />
        <Route path='/seo-audit' element={<Seo />} />
        <Route path='/seo-consulting' element={<SeoCons />} />
        <Route path='/on-page-seo' element={<Onpage />} />
        <Route path='/off-page-seo' element={<Offpage />} />
        <Route path='/international-seo' element={<InterSeo />} />
        <Route path='/e-comerce-seo' element={<Ecomerce />} />
        <Route path='/local-seo' element={<Local />} />
        <Route path='/the-truth-about-content-and-seo-in-armenia' element={<TheTruth />} />
        <Route path='/seo-in-blogs/blog-post' element={<TheImportance />} />



        <Route exact path="/" element={<Home />}>
          {/* <Redirect to="/home" /> */}
        </Route>
      </Routes>
    </Router>
    // </div>
  );
}

export default App;

