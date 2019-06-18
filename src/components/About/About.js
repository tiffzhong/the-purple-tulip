import React, { Component } from "react";
import "./About.scss";
import orange from "../Images/orange.jpg";
import NavBarAbout from "../NavBars/NavBarAbout";
import { Link } from "react-router-dom";
class About extends Component {
  render() {
    return (
      <div className="about-page">
        <NavBarAbout />
        <div className="about-container">
          <section>
            <h6>
              Our mission is to deliver flowers for a brighter and happier state
              of mind.
            </h6>
          </section>
          <section>
            <img src={orange} alt="" />
            <img src={orange} alt="" />
            <img src={orange} alt="" />
          </section>
          <div className="line" />
          <section>
            <p>Based in San Jose, California, and serving South Bay cities. </p>
            <p>
              I wanted to create a brand/service that would bring smiles to
              peoples face. Growing up, I'd find myself always drawn to things
              that are floral related. I wore clothes that had flowers on it
              with stationaries with different flower designs on it. I’d often
              stop while I was driving if I saw a flower that I didn’t
              recognize, mostly to admire or take pictures of it.
            </p>
            <p>
              It all started in 2016 I grew tired, exhausted from my 9-5. I was
              fatigued, wistful, and lost. After a couple years of being stuck I
              started an interning gig at a local flower shop. This is when my
              life began to change, for the better.
            </p>
            <p>
              Now, anyone in the floral business will tell you one thing. It
              isn’t as easy as it looks. And boy are they right! I don’t think
              I’ve ever twisted and sprained my body parts in so many ways but I
              never felt as happy I did. Being around flowers helped me tuned
              out everything around me.
            </p>
            <p>
              Some people cook or clean because its therapeutic to them. Being
              around the different types of plants and colorful flowers gives me
              a sense of relaxation and joy that I cannot describe. Seeing how
              being around flowers and creating something magical everyday made
              me realize that I want to do the same for people who are going
              through a tough time.
            </p>
            <p>
              I will continue to do this and provide a sense of a happiness for
              the world for as long as my body will allow me to. I hope that I
              satisfy my customers with my designs, as I put my full thought and
              heart into each piece. I am happy to assist you with any question
              or concern. We <Link to="/services/delivery">deliver!</Link>
            </p>
            <p>
              Please visit my <Link to="/gallery">Gallery</Link> to see my work
              or <Link to="/contact">Contact</Link> Me any time.
            </p>
            <p>
              Thank you for visiting our site. We look forward to working with
              you.
            </p>
            <p>With Love,</p> <p>TPT</p>
          </section>
        </div>
      </div>
    );
  }
}
export default About;
