import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, useNavigate, Route, BrowserRouter } from 'react-router-dom';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import './index.css'
import RouteLayout from './layouts/RouteLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import CreateServerModal from './components/modals/CreateServerModal.tsx';

const ProtectedRoute = ({children}: {children: React.ReactNode }) => {
  return(
  <>
    <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
  </>
)
};

const RouterComponent = () => {
  const navigate = useNavigate();

  return(

    <ClerkProvider navigate={(to) => navigate(to)} publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}      appearance={{
      userButton: {
        variables: {
          colorPrimary: 'blue',
          colorText: 'black',
        },
      },
    }}>

      <Routes>
        <Route path='' element={<RouteLayout/>}>
          <Route index element={
              <ProtectedRoute>
                <CreateServerModal/>
                <HomePage/>
              </ProtectedRoute>}
          />
        </Route>
      </Routes>

    </ClerkProvider> 

  )
}



createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <RouterComponent/>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>

)

export default RouterComponent;