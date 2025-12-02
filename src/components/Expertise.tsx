import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faClipboardList, faDatabase, faGlobe, faMobileAlt, faTachometerAlt, faTools } from "@fortawesome/free-solid-svg-icons";

const labelsMobile = [
    "Appium",
    "Cucumber",
    "Katalon Studio",
    "Android",
    "iOS",
    "Java",
    "Maven"
];

const labelsWebApi = [
    "Selenium",
    "Playwright",
    "Cucumber",
    "Katalon Studio",
    "Postman",
    "Java",
    "Maven"
];

const labelsDatabase = [
    "Oracle DB",
    "SQL Server",
    "Azure DB",
    "MongoDB",
    "SQL"
];

const labelsPerformance = [
    "JMeter"
];

const labelsManagement = [
    "Test Plan",
    "Test Scenario",
    "Traceability Matrix",
    "Jira",
    "Micro Focus ALM"
];

const labelsCICD = [
    "Git",
    "GitHub Actions",
    "Jenkins",
    "Agile",
    "Waterfall",
    "Java",
    "SQL"
];


function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faMobileAlt} size="3x" />
                        <h3>Mobile Test Automation</h3>
                        <p>I build and execute automated tests for Android and iOS applications with a focus on stability, reusability, and scalability within CI/CD pipelines.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsMobile.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGlobe} size="3x" />
                        <h3>Web & API Test Automation</h3>
                        <p>I automate web and API testing using BDD and hybrid frameworks, ensuring high reliability, maintainability, and seamless CI/CD integration.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsWebApi.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Database & Data Validation</h3>
                        <p>I perform data validation, write complex queries, and integrate automated tests with SQL and NoSQL systems to ensure data accuracy and consistency.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsDatabase.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faTachometerAlt} size="3x" />
                        <h3>Performance & Load Testing</h3>
                        <p>I conduct performance and load testing to measure system stability, responsiveness, and endurance under various levels of traffic.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsPerformance.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faClipboardList} size="3x" />
                        <h3>Test Management & Documentation</h3>
                        <p>I manage the full testing lifecycle—from planning to execution and reporting—creating structured documentation to maintain traceability and visibility.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Tools:</span>
                            {labelsManagement.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faTools} size="3x" />
                        <h3>CI/CD & Software Delivery Workflow</h3>
                        <p>I implement CI/CD pipelines to automate build, test, and deployment processes across platforms, ensuring fast and reliable software delivery.</p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsCICD.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;