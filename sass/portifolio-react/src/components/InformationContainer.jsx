import React from 'react'
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import '../styles/components/informationcontainer.sass'

function InformationContainer() {
  return (
    <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon"/>
        </div>
        <div>
            <h3>Telefone</h3>
            <p>(48)99999-9999</p>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon"/>
        </div>
        <div>
            <h3>E-mail</h3>
            <p>email@mail.com</p>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon"/>
        </div>
        <div>
            <h3>Localização</h3>
            <p>No seu coração bb / S2</p>
        </div>
    </section>
  )
}

export default InformationContainer