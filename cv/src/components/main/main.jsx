import React from 'react';
import './main.css';
import {contacts, links} from "../../constants";
import {
    JSLang,
    CPPLang,
    JavaLang,
    MongoDB,
    MySQL,
    TSLang,
    GitTool,
    HtmlTool,
    CssTool,
    ReactTool,
    NodeTool, ReduxTool
} from "../logos/logos";

const AboutMe = () => {
    return(
        <span>
            I live in Belarus, Minsk.
            I’am a student of Belarusian State University of
            Informatics and Radioelectronics on the specialty
            artificial intelligence. At the moment I want to
            learn JavaScript language and work in web
            programming, combining knowledge of JS and Java.
        </span>
    )
}

const Main = () => {
    return(
        <main>
            <ul className="main__sections">
                <li className="main__sections__section">
                    <h5>Objective</h5>
                    <span>Applying for a position of a <b>Fullstack JS Developer</b></span>
                </li>
                <li className="main__sections__section">
                    <h5>Summary</h5>
                    <AboutMe />
                </li>
                <li className="main__sections__section">
                    <h5>Contacts</h5>
                    <ul className="contacts">
                        <li><b>Phone:</b> <a href={links.phone}>{contacts.phone}</a></li>
                        <li><b>Email:</b> <a href={links.email}>{contacts.email}</a></li>
                        <li><b>Telegram:</b> <a href={links.telegram}>{contacts.telegram}</a></li>
                        <li><b>Skype:</b> {contacts.skype}</li>
                        <li><b>Linkedin:</b> <a href={links.linkedin}>{contacts.linkedin}</a></li>
                        <li><b>VK:</b> <a href={links.vk}>{contacts.vk}</a></li>
                    </ul>
                </li>
                <li className="main__sections__section">
                    <h5>Education</h5>
                    <ul className="basic-list">
                        <li>
                            <b>Higher</b> <i>(EXPECTED)</i>:
                            <ul>
                                <li><b>2019-2023</b>,</li>
                                <li><b>University:</b> Belarusian State University of Informatics and Radioelectronics,</li>
                                <li><b>Faculty:</b> Faculty of Information Technologies and Control,</li>
                                <li><b>Speciality:</b> Artificial intelligence.</li>
                            </ul>
                        </li>
                        {/*<li>*/}
                        {/*    <b>Secondary</b>:*/}
                        {/*    <ul>*/}
                        {/*        <li><b>2007-2019</b>,</li>*/}
                        {/*        <li><b>School</b>: No. 196,</li>*/}
                        {/*        <li><b>Profile</b>: Physical and mathematical specialization.</li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                    </ul>
                </li>
                <li className="main__sections__section">
                    <h5>Languages</h5>
                    <ul className="basic-list">
                        <li><b>English</b>: Intermediate (<b>B1</b>)</li>
                        <li><b>Belarusian</b>: Native</li>
                        <li><b>Russian</b>: Native</li>
                    </ul>
                </li>
                <li className="main__sections__section hard-skills">
                    <h5>Skills</h5>
                    <ul className="basic-list">
                        <li>
                            <h6>Programming languages:</h6>
                            <ul className="tools-list">
                                <li><JSLang /> JS (main)</li>
                                <li><TSLang /> TS (main)</li>
                                <li><JavaLang />Java (basics)</li>
                                <li><CPPLang /> C++ (basics)</li>
                            </ul>
                        </li>
                        <li>
                            <h6>Database management:</h6>
                            <ul className="tools-list">
                                <li><MongoDB /> Mongo</li>
                                <li><MySQL /> MySQL</li>
                            </ul>
                        </li>
                        <li>
                            <h6>Other technologies:</h6>
                            <ul className="tools-list">
                                <li><ReactTool />React</li>
                                <li><NodeTool />Node.js</li>
                                <li><HtmlTool />HTML</li>
                                <li><CssTool />CSS</li>
                                <li><ReduxTool />Redux-saga</li>
                                <li><GitTool />Git</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="main__sections__section hard-skills">
                    <h5>Reason for applying for a job</h5>
                    <ul className="basic-list">
                        <li><b>Professional interests:</b></li>
                        <li><b>Military obligation status:</b></li>
                    </ul>
                </li>
            </ul>
        </main>
    )
}

export default Main;