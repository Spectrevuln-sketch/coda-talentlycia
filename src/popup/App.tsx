import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import { GetTableData } from '../utils/api'
import DataTable from 'react-data-table-component';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import { StyleSheetManager } from 'styled-components';
import TimeSheet from './pages/TimeSheet';
import Documents from './pages/Documents';
import { getStoredToken, setStoredToken } from '../utils/storage';
import TestDocs from './pages/TestDocs';




const App: React.FC<{}> = () => {
  const [token, setToken] = useState<string | null>(null)
  const ProtectedRoute = ({
    token,
    redirectPath = '/login',
    children
  }) => {
    if (token === null) {
      return <Navigate to={'/login'} replace />;
    } else {
      return children;
    }
  };

  useEffect(() => {
    getStoredToken().then(isLoginToken => {
      setToken(isLoginToken)
      setStoredToken(isLoginToken)
    })
  }, [token])

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'responsive'}>
      <>
        <div className="flex flex-1 wrapper" style={{
          position: 'relative',
          top: 0,
          height: '50vh',
        }}>
          <div className='flex flex-col flex-1 gap-5'>
            {/* Back Nav */}
            <div className='flex flex-row items-center justify-start gap-24'>
              <Header title="" />
            </div>
            {/* End Back Nav */}

            {/* Content */}
            <Router>
              <div className='flex flex-1'>
                <Routes>
                  <Route path="/" element={
                    token === '' ? (
                      <Login />
                    ) : (
                      <Documents />
                    )
                  } />
                  <Route path="/login" element={
                    <Login />
                  } />
                  <Route path="/document" element={
                    <ProtectedRoute token={token} redirectPath="/document">
                      <Documents />
                    </ProtectedRoute>
                  } />
                  <Route path="/time-sheet/:docId/:tableId/:rowId" element={
                    <ProtectedRoute token={token} redirectPath="/time-sheet/:docId/:tableId/:rowId">
                      <TimeSheet />
                    </ProtectedRoute>
                  } />
                </Routes>
              </div>
            </Router>
            {/* End Content */}

          </div>
        </div>
      </>

      {/* content */}


    </StyleSheetManager>


  )
}

export default App