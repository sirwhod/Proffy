import React from 'react';

import './styles.css'

import whatsappIco from '../../assets/images/icons/whatsapp.svg'

 export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    user_id: number;
    whatsapp: number;
};

interface TeacherItemProps {
    teacher: Teacher; 
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) =>  {
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
            {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/Hora 
                    <strong>R$ {teacher.cost}</strong>
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