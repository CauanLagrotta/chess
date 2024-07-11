import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app';
//import * as serviceWorker from './serviceWorker';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
