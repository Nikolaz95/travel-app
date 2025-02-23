import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
//import css
import './App.css'

//import components
/* import Product from './pages/Product'
import Pricing from './pages/Pricing'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login' */




const HomePage = lazy(() => import("./pages/HomePage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

/* dist/assets/index-BO7rpwqu.css   29.96 kB │ gzip:   5.07 kB */
/* dist/assets/index-CeZaXJ3I.js   508.60 kB │ gzip: 148.70 kB */

import CityList from './components/CityList'
import City from './components/City'
import CountryList from './components/CountryList'
import Form from './components/Form'
import SpinnerFullPage from './components/SpinnerFullPage'



import { CitiesProvider } from './contexts/CitiesContext'
import { AuthProvider } from './contexts/FakeAuthContex'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {


  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='product' element={<Product />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='app' element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>}>
                <Route index element={<Navigate replace to="cities" />} />
                <Route path='cities' element={<CityList />} />
                <Route path='cities/:id' element={<City />} />
                <Route path='countries' element={<CountryList />} />
                <Route path='form' element={<Form />} />
              </Route>
              <Route path='login' element={<Login />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}

export default App
