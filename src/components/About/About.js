import React, { Component } from "react";
import "./About.scss";
import orange from "../Images/orange.jpg";
import NavBar from "../NavBar/NavBar";
class About extends Component {
  render() {
    return (
      <div className="about-container">
        {/* <NavBar /> */}
        <section>
          <h1>About</h1>

          <div className="mission">
            <img src={orange} alt="" />
            <article>
              I wanted to create a brand/service that would bring smiles to
              peoples face. Growing up, Id find myself always drawn to things
              that are floral related. I wore clothes that had flowers on it
              with stationaries with different flower designs on it. I’d often
              stop while I was driving if I saw a flower that I didn’t
              recognize, mostly to admire or take pictures of it. It all started
              in 2016 I grew tired, exhausted from my 9-5. I was fatigue,
              wistful, and lost. After a couple years of being stuck I started
              an interning gig at a local flower shop. This is when my life
              began to change, for the better. Now, anyone in the floral
              business will tell you one thing. It isn’t as easy as it looks.
              And boy are they right! I don’t think I’ve ever twisted and
              sprained my body parts in so many ways but I never felt as happy I
              did. Being around flowers helped me tuned out everything around
              me. Some people cook or clean because its therapeutic to them.
              Being around the different types of plants and colorful flowers
              gives me a sense of relaxation and joy that I cannot describe.
              Seeing how being around flowers and creating something magical
              everyday made me realize that I want to do the same for people who
              are going through a tough time. I will continue to do this and
              provide a sense of a happiness for the world for as long as my
              body will allow me to.
            </article>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
