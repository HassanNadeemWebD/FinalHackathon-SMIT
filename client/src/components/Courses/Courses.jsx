import React from 'react'
import amazon from '../../images/amazon.png'
import flutter from '../../images/flutter.png'
import figma from '../../images/figma.png'
import javascript from '../../images/javascript.png'
import react from '../../images/react.png'
import redux from '../../images/redux.png'
import skype from '../../images/skype.png'
import git from '../../images/git.png'
import node from '../../images/node.png'
import python from '../../images/python.png'
import './Courses.scss'



function Courses() {
    return (
        <div className='main'>
        <div className="card my-5 container" style={{width: "18rem"}}>
            
            <img src={redux} className="card-img-top" alt="react icon" />
            <div className="card-body">
                <h5 className="card-title">MERN Stack</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">enroll now</a>
            </div>
        </div>
        <div className="card my-5 container" style={{width: "18rem"}}>
            
            <img src={amazon} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">E-Commerce</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">enroll now</a>
            </div>
        </div>
        <div className="card my-5 container" style={{width: "18rem"}}>
            
            <img src={flutter} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Flutter Development</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">enroll now</a>
            </div>
        </div>
        <div className="card my-5 container" style={{width: "18rem"}}>
            
            <img src={javascript} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">JavaScript Development</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">enroll now</a>
            </div>
        </div>

        <div className="card my-5 container" style={{width: "18rem"}}>
            
            <img src={figma} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Graphic Designing</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">enroll now</a>
            </div>
        </div>

        <div className="card my-5 container" style={{width: "18rem"}}>
            
            <img src={node} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Backend</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">enroll now</a>
            </div>
        </div>

        <div className="card my-5 container" style={{width: "18rem"}}>
            
            <img src={python} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Python Development</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">enroll now</a>
            </div>
        </div>

        <div className="card my-5 container" style={{width: "18rem"}}>
            
            <img src={git} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">GitHub</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">enroll now</a>
            </div>
        </div>
        </div>
    )
}

export default Courses