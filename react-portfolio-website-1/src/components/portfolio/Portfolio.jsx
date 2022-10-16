import React from 'react'
import "./portfolio.css"
import QUIZ from "../../assets/quiz.png"
import CHECKLIST from "../../assets/checkList.png"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portolio_item'>
          <dev className="portolio_item_image">
            <img src={CHECKLIST} alt=""/>
          </dev>
          <h3>Checklist Application</h3>
          <a href="https://github.com/AleksaZatezalo/ChecklistApp" classname='btn' targer='_blank'>Github</a>
          <a href="https://play.google.com/store/apps/details?id=com.aleksa.checklist" className='btn btn-primary' targer='_blank'>Live Demo</a>
        </article>
        <article className='portolio_item'>
          <dev className="portolio_item_image">
            <img src={QUIZ} alt=""/>
          </dev>
          <h3>Quiz Application</h3>
          <a href="https://github.com/AleksaZatezalo/quizApp" classname='btn' targer='_blank'>Github</a>
          <a href="https://play.google.com/store/apps/details?id=com.aleksa.quizapp" className='btn btn-primary' targer='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio