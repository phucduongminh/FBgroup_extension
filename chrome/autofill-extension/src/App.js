/* global chrome */
import React, { useState } from 'react';
//import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'AUTOFILL_FORM', payload: formData });
    });
  };

  return (
    <div className="App">
      <h2>Auto-Fill Form</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSubmit}>Auto-Fill Form</button>
      </form>
    </div>
  );
}

export default App;
