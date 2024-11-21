import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router   from './Router.jsx';
import './index.css'
// import App from './App.jsx'
// import Header from './Header.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/>
    <App/> */}
   <RouterProvider router={router}/>
  </StrictMode>,
)

