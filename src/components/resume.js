import React from 'react';
import resume from '../assets/docs/resume101321.pdf'

function Resume() {
    return (
    <div class="row container card-panel left-align">
        <h3>Resume and Proficiencies</h3>
        <h5>Download my resume: </h5>
        <a href={resume} class="waves-effect waves-light btn" target="_blank"><i class="material-icons left">file_download</i>Download</a>
        <h4>Proficiencies</h4>
        <h5>Front-End:</h5>
        <ul>
            <li>React</li>
            <li>Flask</li>
            <li>JavaScript ES6+</li>
            <li>jQuery</li>
            <li>Mobile-First, Responsive Design</li>
            <li>CSS Libraries: Bootstrap, Bulma, Materialize, Tailwind, Semantic UI</li>
            <li>HMTL5, CSS</li>
        </ul>
        <h5>Back-End:</h5>
        <ul>
            <<li>Python</li>
            <li>SQL, mySQL, and Sequelize</li>
            <li>MongoDB and Mongoose</li>
            <li>NodeJS</li>
            <li>RESTful APIs</li>
            <li>Express</li>
            <li>GraphQL</li>
            <li>Selenium, Web-Scraping</li>
        </ul>
    </div>
    )
}

export default Resume;
