import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { getStoredToken, setStoredToken } from '../../utils/storage'
const Login: React.FC<{}> = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState('')
  const Login = () => {
    setStoredToken(token)
    return navigate('/document')
  }
  return (
    <div className='flex flex-1 flex-col p-4 gap-3 justify-center items-center'>
      <p>Login Token</p>
      {/* <Header title="Insert Token" /> */}
      {/* <div className='flex flex-1 justify-center items-center p-2'> */}
      <div className='w-full rounded-lg bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 p-1'>
        <input type="text" placeholder='Input Your Coda Token !' className='w-full p-2 rounded-md' onChange={(e) => {
          setStoredToken(e.target.value)
          setToken(e.target.value)
        }} />
      </div>
      <button onClick={Login} type='button' className='flex flex-1 justify-center items-center bg-blue-500 px-5 py-2 rounded-lg text-center text-white font-semibold text-sm'>Sign</button>
      {/* </div> */}
    </div>
  )
}

export default Login