import React from 'react';

import './styles.css'

import whatsappIco from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/61847070?s=460&u=a33de9e71b6abbd50cde5332aa0d2686bcd0a458&v=4" alt="Rodrigo Brandão"/>
                        <div>
                            <strong>Rodrigo Brandão</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br /> <br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                        Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora 
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIco} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;