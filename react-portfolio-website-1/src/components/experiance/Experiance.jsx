import React from 'react'
import "./experiance.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experiance = () => {
    return (
        
        <section id='experiance'>
            <h5>What Skills I Have</h5>
            <h2>My Experiance</h2>
            <div className='container experiance__container'>
                <div className='experiance__cloudSec'>
                    <h3>Cloud Security</h3>
                    <div className="experiance__content">
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>Azure Active Directory</h4>
                            <small className='text-light'>Experainced</small>
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>Security Roles in Power Platform</h4>
                            <small className='text-light'>Experainced</small>
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>DevSecOps</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>Cyber Security Strategy</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>Zero Trust</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>PenetrationTesting</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                    </div>

                </div>
                <div className='experiance__backend'>
                <div className="experiance__content">
                        <h3>Backend Development</h3>
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>Microsoft Azure</h4>
                            <small className='text-light'>Experainced</small>
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>Databases</h4>
                            <small className='text-light'>Experainced</small>
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>Full Stack Web Development</h4>
                            <small className='text-light'>Experainced</small>
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>Android Application Development</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className='experiance__details'>
                            <BsPatchCheckFill/>
                            <h4>Artificial Intelligence</h4>
                            <small className='text-light'>Begginer</small>
                        </article>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Experiance