import React from 'react';

import './styles.css'

import whatsappIco from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

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
    function createNewConection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }


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
                <a target="_blank" onClick={createNewConection} href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIco} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
);
}

export default TeacherItem;