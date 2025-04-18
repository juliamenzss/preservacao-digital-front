import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import { store } from "./store/store.ts";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import NewDocument from './pages/documents/NewDocument.tsx'

function App() {
  return (
    <Provider store={store}>
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/documentos/novo' element={<NewDocument />}/>
        <Route path='/entrar' element={<Login />}/>
        <Route path='/cadastrar' element={<Register />}/>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </>
    </Provider>
  )
}

export default App
