import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import { store } from "./store/store.ts";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import NewDocument from './pages/documents/NewDocument.tsx'
import DetailsDocument from './pages/documents/DetailsDocument.tsx'
import PrivateRoute from './features/auth/privateRouter.tsx'

function App() {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/entrar' element={<Login />} />
            <Route path='/cadastrar' element={<Register />} />

            <Route element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/documentos/novo' element={<NewDocument />} />
            <Route path='/documentos/:id' element={<DetailsDocument />} />
            </Route>
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </BrowserRouter>
      </>
    </Provider>
  )
}

export default App
