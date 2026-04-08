import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const App = () => {
  return (
    <main className='w-full h-screen mx-auto pt-10 p-6 bg-gray-600 shadow-md'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </main>
  )
}

export default App
