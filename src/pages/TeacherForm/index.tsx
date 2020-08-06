import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from'../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrivel que você quer dar aulas."
            description="O primeiro passo é preencher este formulário de inscrição."
            />

            <main>
                <fieldset>

                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="whatsapp"/>
                    <Textarea name="bio" label="Biografia"/>

                </fieldset>

                <fieldset>

                    <legend>Sobre a aula</legend>

                    <Select 
                    name="subject" 
                    label="Matéria"
                    options={[
                        { value: 'Artes', label:'Artes' },
                        { value: 'Biologia', label:'Biologia' },
                        { value: 'Ciências', label:'Ciências' },
                        { value: 'Educação Fisica', label:'Educação Fisica' },
                        { value: 'Física', label:'Física' },
                        { value: 'Geografia', label:'Geografia' },
                        { value: 'História', label:'História' },
                        { value: 'Matemática', label:'Matemática' },
                        { value: 'Português', label:'português' },
                        { value: 'Quimica', label:'Quimica' },
                    ]}
                    />

                    <Input name="cost" label="Custo da sua hora por Aula"/>

                </fieldset>

                <fieldset>

                    <legend>Horários disponíveis</legend>

                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="whatsapp"/>

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante <br/>
                        Preencha todos os dados!
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>
        </div>
    )
}

export default TeacherForm;