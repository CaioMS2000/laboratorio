import React from 'react'
import '../styles/components/socialnetworks.sass'

import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const SN = [
    {name:'linkedin', icon:<FaLinkedinIn/>},
    {name:'github', icon:<FaGithub/>},
    {name:'instagram', icon:<FaInstagram/>},
]

function SocialNetworks() {
  return (
    <section id="social-networks">
        {
            SN.map(n => (
                <a href="#" className="social-btn" id={n.name} key={n.name}>{n.icon}</a>
            ))
        }
    </section>
  )
}

export default SocialNetworks