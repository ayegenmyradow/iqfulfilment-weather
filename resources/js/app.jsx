import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/App';
import './bootstrap';

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));
    Index.render(<App/>);
}