import React from 'react'
import './grid.css'
import currencyx from '../assets/currencyx.png';
import archimedes from '../assets/Archimedes.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github-icon.png';
import unfiltered from '/assets/unfiltered.png';
import verdura from '/assets/facewashproduct.png';
import { Link } from 'react-router-dom'
const Grid = () => {
    return (
        <div className="grid-container">
            <div className="item1">
                <img src="https://avatars.githubusercontent.com/u/142091553?s=400&u=896ce9b27fd446546f68302602c2f21b0c09d961&v=4" alt="Dikshanta Shrestha" />
                <div className="semicontainer">
                    <h1>Dikshanta Shrestha</h1>

                    <div id="bio">
                        <p>Front End Developer | Graphic Designer | Tech Freak</p>
                        <p >Based in Nepal</p>
                        <h3 ><i>"If you don't sacrifice for what you want, then what you want becomes sacrificed"</i></h3>
                    </div>

                </div>

            </div>
            <div className="item2">
                <h2>Projects</h2>
                <p>Here are some of my works that I have done so far. </p>
                <div className="imgcontainer">
                    <img src={currencyx} alt="" id='img1' />
                    <img src={archimedes} alt="" id='img2' />
                </div>
                <Link to='/projects'><button className='btn'>View Works</button></Link>
            </div>
            <div className="item3">
                <h2>Skills</h2>
                <h4>🧠 Core</h4>
                <ul>
                    <li>HTML5, CSS3, JavaScript (ES6+), MySql</li>
                    <li>React.js (Basic–Intermediate)</li>
                    <li>Responsive Design, Flexbox, Grid</li>
                </ul>

                <h4>🎨 Design</h4>
                <ul>
                    <li>Canva, Adobe Photoshop, Photopea</li>
                    <li>Logo Design, Graphics, Poster</li>
                </ul>

                <h4>🛠 Tools</h4>
                <ul>
                    <li>Git & GitHub</li>
                    <li>VS Code, Chrome DevTools</li>
                    <li>Vite, NPM, Netlify</li>
                    <li>Huggingface Api, Json</li>
                </ul>
            </div>
            <div className="item4">
                <Link to='/contact'><button className='btn'>Contact Me!</button></Link>
            </div>
            <div className="item5">
                <h3>Design</h3>
                <Link to='/design'>
                    <div className="imgcontainer"><img src={unfiltered} alt="" id='img1' />
                        <img src={verdura} alt="" id='img2' /></div>
                    <button >More</button>
                </Link></div>
            <div className="overlay"></div>
            <div className="item6">
                <h2>About</h2>
                Dikshanta Shrestha — a passionate front-end developer and creative designer from Nepal.
                I specialize in building clean, responsive user interfaces using HTML, CSS, JavaScript, and React.
                I also craft eye-catching visuals, logos, and digital assets that bring brands to life.

                With a strong foundation in both code and design, I bridge the gap between functionality and aesthetics. I’m constantly learning, driven by curiosity and a deep passion for tech, psychology, and innovation.

                What I bring to a company:
                <ul>
                    <li>🌟 A blend of technical skills and creative flair</li>
                    <li>🚀 A passion for building user-friendly, accessible web experiences</li>
                    <li>💡 A problem-solver mindset with attention to detail</li>
                    <li>⚡ Fast learner who adapts quickly and stays updated</li>
                    <li>🎨 Design thinking merged with technical execution</li>
                    <li>🤝 Team player with strong communication and work ethic</li>
                </ul>
            </div>

            <div className='item7'>
                <h2>Socials</h2>
                <a href="https://linkedin.com/in/dikshanta-kairos-shrestha-81580230a"><img src={linkedin} alt="" /></a>
                <a href="https://github.com/Dikshantashresth"><img src={github} alt="" /></a>

            </div>
            <div className='item8'><h2>Resume</h2> <a href="">Check CV</a></div>

        </div>
    )
}

export default Grid
