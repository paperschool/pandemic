import React, { FunctionComponent } from "react";
import {
    about,
    aboutText
} from "./index.scss";

const About: FunctionComponent = () => {
    return (<div className={about}>
        <h1>What is this?</h1>
        <div className={aboutText}>

            <p>A small experiment highlighting and playing with the concept of emergent properties in simulations, where small changes to a closed system result in
            interesting results at a larger scale.</p>
            <p>This particular simulation is about showing how an illness traverses a population in a closed system. The "people" in the system roam about the
            randomly and the healthy people must avoid the sick. Those that are sick when coming into contact with someone healthy will inadvertently infect them.
            The simulation allows for small modifications to populations and individuals, by interacting with the properties side bar. Properties such as:
        </p>
            <ul>
                <li>Total Population Size</li>
                <li>Person Size</li>
                <li>Healthy Person Movement Speed</li>
                <li>Sick Person Movement Speed</li>
                <li>Avoidance Radius</li>
                <li>Infection Radius</li>
                <li>More to Come</li>
            </ul>
            <p>This application was written and designed by me - Dominic Jomaa. Feel free to contact me on my <a href={"https://www.linkedin.com/in/dominicjomaa/"}>Linkedin</a> or <a href={"https://github.com/paperschool"}>Github</a>.</p>
        </div>
    </div>)
}

export default About;