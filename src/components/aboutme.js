import React from 'react';
import pic from '../assets/images/Max Quintanilla 019 R web.jpg'

function AboutMe() {
    return (
    <div class="row container card-panel" id="aboutme">
      <h3 class="row center">About Me</h3>
      <div class="row aboutmebox">
        <img src={pic} class = "col s12 m4" id="picofmax" alt="Pic of Max" />
        <p class = "col s12 m4">
            I am software engineer with full-stack web developement experience, leveraging five years of experience as a practicing general dentist to best serve
            clients and users in developing interactive and engaging programs. Having graduated from the Full Stack Web Development Coding Bootcamp at Rice University, I developed the skills to use JavaScript, React, SQL, Express, NodeJS
            and other tools to develop responsive, mobile-friendly applications. Through self-study I have learned to utilize complex algorithms and data structures to manipulate data, and Python and Selenium to build sophisticated web scrapers.
        </p>
        <p class = "col s12 m4">
            I am passionate about precision in my
            work, solving complex problems, and working with others to build concise, highly functional code.
            I am excited to continue to expand my skill sets, obtain additional certifications, and grow as a team-player and developer. 
            In my free time I like to play golf, watch sports, play video games, and traverse the internet in search of ways to better myself as a programmer.
        </p>
      </div>
    </div>
    )
}

export default AboutMe;