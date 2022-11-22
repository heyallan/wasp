import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import SignupForm from '@wasp/auth/forms/Signup'
import signup from '@wasp/auth/signup.js'
import login from '@wasp/auth/login.js'

import { GoogleSignInButton, googleSignInUrl } from '@wasp/auth/buttons/Google'
import addWaspSourceHeader from './addWaspSourceHeader.js'

import mainLogo from './waspello-logo.svg'
import googleLogo from './google-logo.svg'
import './Signup.css'


const SignupPage = (props) => {

  const history = useHistory()

  const [usernameFieldVal, setUsernameFieldVal] = useState('')
  const [passwordFieldVal, setPasswordFieldVal] = useState('')

  const handleSignup = async (event) => {
    event.preventDefault()
    try {
      await signup({ username: usernameFieldVal, password: passwordFieldVal })
      await login (usernameFieldVal, passwordFieldVal)

      setUsernameFieldVal('')
      setPasswordFieldVal('')

      // Redirect to configured page, defaults to /.
      history.push('/')
    } catch (err) {
      console.log(err)
      window.alert(err)
    }
  }

  return (
    <div className="auth-root-container">
      <img alt="Waspello" className="main-logo" src={mainLogo} />

      <div className="auth-form-container">

        <EmailAndPassForm
          userField={usernameFieldVal}
          passField={passwordFieldVal}
          setUser={setUsernameFieldVal}
          setPass={setPasswordFieldVal}
          handleSignup={handleSignup}
        />

        <div className='mt-3 text-xs text-neutral-500'>
          OR
        </div>

        <GoogleAuthButton />

        <div className='w-full text-center mt-6 pt-3 border-t border-neutral-300'>
          <p className='text-sm text-yellow-600'>
            <Link to='/login'>
              Already have an Waspello account? Log in.
            </Link>
          </p>
        </div>
      </div>

    </div>
  )
}

const inputClasses = `
  box-border w-full border-2 border-neutral-300
  bg-neutral-100/50
  hover:bg-neutral-200
  focus:bg-neutral-100/50 focus:outline-none
  focus:border-yellow-500
  transition ease-out duration-200
  h-10 px-2 text-sm placeholder:text-neutral-500
`

const EmailAndPassForm = ({ userField, passField, setUser, setPass, handleSignup }) => (
  <div className='w-full text-center'>
      <h2 className='text-base font-bold text-neutral-600'>
        Sign up for your account
      </h2>
    <form onSubmit={handleSignup} className='block flex flex-col'>
      <input
        className={inputClasses + ' mt-5'}
        type='text'
        placeholder='Enter email address'
        value={userField}
        onChange={e => setUser(e.target.value)}
      />
      <input
        className={inputClasses + ' mt-4'}
        type='password'
        placeholder='Enter password'
        value={passField}
        onChange={e => setPass(e.target.value)}
      />
      <input
        className={`
          bg-yellow-500 h-10 mt-3
          text-white text-sm font-bold
          hover:bg-yellow-400
        `}
        type='submit'
        value='Sign up'
      />
    </form>
  </div>
)

const GoogleAuthButton = () => (
  <div className='w-full mt-3 text-center'>
    <a
      href={googleSignInUrl}
      className={`
        flex items-center
        block w-full border border-neutral-200
        h-10
        text-sm font-bold
        rounded-sm shadow-md
        transition ease-out duration-200
        hover:bg-neutral-100
      `}
    >
      <img src={googleLogo}
        className={`h-5 pl-2`}
      />
      <div className='w-full flex justify-center items-center pr-2'>
        Continue with Google
      </div>
    </a>
  </div>
)

export default addWaspSourceHeader(SignupPage)
