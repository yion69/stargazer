import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import ScrollSmootherWrapper from './utils/ScrollSmoother';
import Footer from './components/Footer';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading';
import AuthProvider from './utils/AuthValidation';
  
const LandingPage = lazy(() => import('./pages/LandingPage'));
const StorePage = lazy(() => import('./pages/StorePage'));
const ItemPage = lazy(() => import('./pages/StorePages/ItemPage'));
const BrandPage = lazy(() => import('./pages/StorePages/BrandPage'));
const Account = lazy(() => import('./pages/AccountPage/AccountPage'));
const AccountSignIn = lazy(() => import('./pages/AccountPage/SignInPage'));
const AccountSignUp = lazy(() => import('./pages/AccountPage/SignUpPage'));
const AccountProfile = lazy(() => import('./pages/AccountPage/AccountProfile'))
const Middleware = lazy(() => import('./pages/AccountPage/Middleware'))

const AdminDashboard = lazy(() => import('./pages/AdminPages/Dashboard'))
const AddItemDashboard = lazy(() => import('./pages/AdminPages/ItemManagement'));
const DesignsDashboard = lazy(() => import('./pages/AdminPages/DesignShowcae'))

function App() {

  return (
    <ScrollSmootherWrapper>
      <BrowserRouter>
        <AuthProvider>

          <div className='flex items-center justify-center w-full'>
            <Navbar />
          </div>  

          <div className='flex items-center justify-center w-full md:w-10/12 lg:w-8/12 h-auto mx-auto'>
            <Suspense fallback={ <Loading /> }>
              <Routes>
                <Route path='/' element={
                  <LandingPage />
                } />
                <Route path='/store' element={ <StorePage /> }>
                  <Route path='/store/all' element={ <BrandPage /> } />
                  <Route path='/store/:id' element={ <ItemPage /> } />
                </Route>
                <Route path='/admin' element={ <AdminDashboard/> } >
                  <Route path='/admin/items-management' element={ <AddItemDashboard /> } />
                  <Route path='/admin/components' element={ <DesignsDashboard /> } />
                </Route>
                <Route path='/account' element={ <Account /> } >
                  <Route path='/account/signin' element={ <AccountSignIn /> } />
                  <Route path='/account/signup' element={ <AccountSignUp /> } />
                  <Route path='/account/profile' element={ <AccountProfile /> } />
                </Route>
                <Route path='/authentication/callback' element={ <Middleware /> } />
              </Routes>  
            </Suspense>
          </div>

          <div className='flex items-center justify-center w-full'>
            <Footer />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </ScrollSmootherWrapper>
  )
}

export default App
