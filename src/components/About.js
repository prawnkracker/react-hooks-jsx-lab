import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id='about'>
    <h2>About Me</h2>
    <p>My real first name and middle name is Dennis James and that's where DeeJay derives from!</p>
    <img src={ image } alt='I made this' />
  </div>
)};

export default About;
