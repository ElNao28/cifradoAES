import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function App() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const encryptText = () => {
    const key = 'TuClaveSecreta'; // La clave debe ser segura y confidencial
    const encrypted = CryptoJS.AES.encrypt(inputText, key).toString();
    setEncryptedText(encrypted);
  }

  const decryptText = () => {
    const key = 'TuClaveSecreta'; // Debe ser la misma clave utilizada para cifrar
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    setDecryptedText(decrypted);
  }

  return (
    <div>
      <h1>Cifrado y Descifrado AES en React</h1>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        placeholder="Texto a cifrar"
      />
      <button onClick={encryptText}>Cifrar</button>
      <div>
        <strong>Texto cifrado:</strong>
        <p>{encryptedText}</p>
      </div>
      <button onClick={decryptText}>Descifrar</button>
      <div>
        <strong>Texto descifrado:</strong>
        <p>{decryptedText}</p>
      </div>
    </div>
  );
}

export default App;
