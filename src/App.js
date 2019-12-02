import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Preview from './Preview.js';

function App() {

  const [content, updateContent] = useState("");
  const [count, updateCount] = useState("");
  const [preview, updatePreview] = useState([{ 
    content: "", 
    count: ""
  }]);


  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <section className="app-left">
          <Form updatePreview={updatePreview} />
        </section>
        <section className="app-right">
          <Preview preview={preview}/>
        </section>
      </main>
    </div>
  );
}

export default App;
