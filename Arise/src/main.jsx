import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Store/Store.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <Store>
   <App />
   </Store>
   </BrowserRouter>
    

)
