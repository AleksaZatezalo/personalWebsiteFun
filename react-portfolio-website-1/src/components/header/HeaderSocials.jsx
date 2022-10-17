import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from "react-icons/fa"
import {GrMedium} from "react-icons/gr"
import {GrTwitter} from "react-icons/gr"
import {GrYoutube} from "react-icons/gr"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/aleksa-zatezalo-39a891150/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/AleksaZatezalo" target="_blank"><FaGithub/></a>
        <a href="https://medium.com/@aleksazatezalo" target="_blank"><GrMedium/></a>
        <a href="https://twitter.com/ZatezaloAleksa" target="_blank"><GrTwitter/></a>
        <a href="https://www.youtube.com/channel/UCs3htMGLR720HXC3jBNWGxA" target="_blank"><GrYoutube/></a>
    </div>
  )
}

export default HeaderSocials

