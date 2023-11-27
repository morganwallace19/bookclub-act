import React from 'react';
import "./About.css";
import aboutImg from "../../images/book-lib.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About this Book Club</h2>
            <p className='fs-17'>This book club is a place where people can come in and discuss certain books.</p>
            <p className='fs-17'>This club also allows you to look at a variety of books and add reviews to give you your own opinion and discuss with other on certain books.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
