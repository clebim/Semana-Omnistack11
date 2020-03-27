import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {

  const history = useHistory();
  const [id, setId] = useState('');

  async function handleLogin(e){
    e.preventDefault();
    try{
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongName', response.data.name);
      localStorage.setItem('ongId', id);
      history.push('/profile');

    } catch{
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div className="logon-container">
        <section className="form">
            <img src={logo} alt="be the hero"></img>

            <form onSubmit={handleLogin}> 
                <h1>Faça seu logon</h1>
                <input 
                  placeholder="Sua Id"
                  value={id}
                  onChange={e => setId(e.target.value)}
                ></input>
                <button className="button" type="submit">Entrar</button>
                <Link className="black-link" to="register">
                    <FiLogIn size={16} color="#E02041"></FiLogIn>
                    Não tenho cadastro
                </Link>
            </form>

        </section>
        <img src={heroesImg} alt="heroes"></img>
    </div>
  );
}
