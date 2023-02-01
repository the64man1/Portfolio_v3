import React from 'react';
import resume from '../assets/docs/resume020123.pdf'

function Resume() {
    return (
    <div class="row container card-panel left-align">
        <h3>Resume and Proficiencies</h3>
        <h5>Download my resume: </h5>
        <a href={resume} rel="noreferrer" class="waves-effect waves-light btn" target="_blank"><i class="material-icons left">file_download</i>Download</a>
        <h4>Proficiencies</h4>
        <h5>Front-End:</h5>
        <ul>
            <li>React</li>
            <li>Angular</li>
            <li>JavaScript ES6+</li>
            <li>TypeScript</li>
            <li>jQuery</li>
            <li>Mobile-First, Responsive Design</li>
            <li>CSS Libraries: Bootstrap, Material UI, Nebular, Bulma, Materialize, Tailwind, Semantic UI</li>
            <li>HMTL5, CSS</li>
        </ul>
        <h5>Back-End:</h5>
        <ul>
            <li>C#/.NET</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>MongoDB and Mongoose</li>
            <li>NodeJS</li>
            <li>RESTful APIs</li>
            <li>Express</li>
            <li>GraphQL</li>
            <li>Selenium, Web-Scraping</li>
            <li>Redis</li>
        </ul>
        <h5>Technologies:</h5>
        <ul>
            <li>NodeJS</li>
            <li>Amazon Web Services</li>
            <li>Docker</li>
            <li>Visual Studio</li>
            <li>GitHub</li>
            <li>Postman</li>
            <li>Heroku</li>
        </ul>
    </div>
    )
}

export default Resume;
