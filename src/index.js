import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './robots'

const root = ReactDOM.createRoot(document.getElementById('root'));
const cardList = robots.map(bot => 
  <div>
    <Card id={bot.id} name={bot.name} email={bot.email} />
  </div>
)
root.render(
  <React.StrictMode>
    <div>
      {cardList}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
