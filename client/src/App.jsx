import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProductPage from './pages/ProductPage'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <main className='w-full h-screen mx-auto pt-10 p-6 bg-gray-600 text-white shadow-md'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />

        {/* Protected Routes */}
        {/* <Route path='/home' element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>} />

        <Route path='/products' element={<ProtectedRoute>
          <ProductPage />
        </ProtectedRoute>} /> */}

        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<ProductPage />} />

      </Routes>
    </main>
  )
}

export default App
