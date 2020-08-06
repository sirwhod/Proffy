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
                            <span>Front-end</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de Programação Front-end.
                        <br /> <br />
                        Apaixonado por design e desenhos dono da marca de roupas lowRoad,
                        Me identifico com tudo que é do meio artístico visual.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora 
                            <strong>R$ 90,00</strong>
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