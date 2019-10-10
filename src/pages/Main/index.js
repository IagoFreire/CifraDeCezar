import React, { useState } from 'react';
import api from '../../services/api';

export default function Main() {

  const [text, setText] = useState('');
  const [key, setKey] = useState('');

  async function handleSubmit(event) {
    event.preventDefault()

    await api.post('/calc', { text });
  }

  return (
    <div className="box">

      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Texo:</label>
        <input
          id="text"
          type="Words"
          placeholder="Insira o texto a ser criptografado"
          value={text}
          onChange={event => setText(event.target.value)}
        />

        <label htmlFor="key">Chave:</label>
        <input
          id="key"
          type="Words"
          placeholder="Insira a chave da codificação"
          value={key}
          onChange={event => setKey(event.target.value)}
        />

        <button className="btn" type="submit">Criptografar</button>
      </form>
    </div>
  )
}