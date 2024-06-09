// index.js (or your app initialization file)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import IdeaState from './Context/smallIdeas/ideastate'; // Import your context provider
import { ConfigProvider } from 'antd';
import reportWebVitals from './reportWebVitals';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
</style>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IdeaState>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Montserrat', sans-serif"
        },
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConfigProvider>
  </IdeaState>,
);

reportWebVitals();
