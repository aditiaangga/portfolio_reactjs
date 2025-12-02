import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

            {/* Multi-Platform Test Automation Suite */}
            <div className="project">
                <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer">
                    <img src={mock01} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer">
                    <h2>Multi-Platform Test Automation Suite</h2>
                </a>
                <p>
                    Developed an end-to-end automation framework covering Web, Mobile, and API testing 
                    using Selenium, Appium, Playwright, and Postman. Integrated GitHub Actions and Jenkins 
                    for CI/CD pipelines with automated HTML reporting.
                </p>
            </div>

            {/* Mobile Automation Framework */}
            <div className="project">
                <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer">
                    <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer">
                    <h2>Mobile Automation Framework (Appium)</h2>
                </a>
                <p>
                    Built a complete Android mobile automation framework using Appium Java Client 8.4.0, 
                    implementing stable gesture handling for drag-and-drop, swipe detection, and dynamic waits. 
                    Includes modular test structure and Cucumber reporting.
                </p>
            </div>

            {/* API Automation with Custom HTML Reporter */}
            <div className="project">
                <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer">
                    <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer">
                    <h2>API Automation with Custom HTML Extra Reporter</h2>
                </a>
                <p>
                    Created a full API automation workflow using Postman & Newman with a fully customized 
                    HTML Extra Reporter layout. Integrated with GitHub Actions for automated nightly runs, 
                    environment switching, and test artifact publishing.
                </p>
            </div>

            {/* JMeter Performance Testing */}
            <div className="project">
                <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer">
                    <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer">
                    <h2>Performance Testing with JMeter</h2>
                </a>
                <p>
                    Designed and executed load and stress tests using Apache JMeter. Generated performance 
                    dashboards analyzing TPS, response time, and bottlenecks. Automated performance testing 
                    in CI pipeline for continuous validation.
                </p>
            </div>

            {/* Database Testing Automation */}
            <div className="project">
                <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer">
                    <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer">
                    <h2>Database Test Automation (Oracle / SQL Server)</h2>
                </a>
                <p>
                    Built SQL-driven testing automation for validating stored procedures, data integrity, 
                    schema comparison, and backend logic across Oracle DB and SQL Server. Integrated database 
                    checks into automated test flows using Java and JDBC.
                </p>
            </div>

        </div>
    </div>
    );
}

export default Project;