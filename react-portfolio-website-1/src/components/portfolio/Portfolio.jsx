import React from 'react'
import "./portfolio.css"
import QUIZ from "../../assets/quiz.png"
import CHECKLIST from "../../assets/checkList.png"
import PASSWORD from "../../assets/password-input-control.jpg"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <dev className="portfolio__item-image">
            <img src={CHECKLIST} alt=""/>
          </dev>
          <h3>Checklist Application</h3>
          <a href="https://github.com/AleksaZatezalo/ChecklistApp" className='btn' target='_blank'>Github</a>
          <a href="https://play.google.com/store/apps/details?id=com.aleksa.checklist" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <dev className="portfolio__item-image">
            <img src={QUIZ} alt=""/>
          </dev>
          <h3>Quiz Application</h3>
          <a href="https://github.com/AleksaZatezalo/quizApp" className='btn' target='_blank'>Github</a>
          <a href="https://play.google.com/store/apps/details?id=com.aleksa.quizapp" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <dev className="portfolio__item-image">
            <img src={PASSWORD} alt=""/>
          </dev>
          <h3>Password PCF Componmennt</h3>
          <a href="https://github.com/AleksaZatezalo/PasswordPCF" className='btn' target='_blank'>Github</a>
          <a href="https://pcf.gallery/password-input-control/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>

    </section>
  )
}

export default Portfolio