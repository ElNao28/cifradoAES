import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function App() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [key,setKey] = useState('');

  const encryptText = () => {
    const encrypted = CryptoJS.AES.encrypt(inputText, key).toString();
    setEncryptedText(encrypted);
  }

  const decryptText = () => {
    const encrypted = CryptoJS.AES.decrypt(inputText, key).toString(CryptoJS.enc.Utf8);
    setEncryptedText(encrypted);
  }

  return (
    <div class="container mt-5 bg-success py-3 px-3 rounded">
      <h3>Cifrado y Descifrado AES</h3>
      <input
      class="form-control mb-3"
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        placeholder="Texto a cifrar"
      />
      <h3>Clave</h3>
      <input class="form-control mb-2" placeholder='Introduce la clave'
        type="text"
        value={key}
        onChange={a => setKey(a.target.value)}
      ></input>
      <button class="btn btn-primary" onClick={encryptText}>Cifrar</button>
      <button class="btn btn-warning mx-2" onClick={decryptText}>Descifrar</button>

      <input class="form-control mt-3" disabled placeholder='Resultado' value={encryptedText}></input>
    </div>
  );
}

export default App;
