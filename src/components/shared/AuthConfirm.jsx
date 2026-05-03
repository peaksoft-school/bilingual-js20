import { useState } from 'react'
import { SignIn } from '../../pages/Sign-In'
import { SignUp } from '../../pages/SignUpp'
import { BackgroundWrapper } from './AuthForm'

export const AuthConfirm = () => {
  const [currentForm, setCurrentForm] = useState('signin')

  return (
    <BackgroundWrapper>
      {currentForm === 'signin' ? (
        <SignIn
          onRegisterClick={() => setCurrentForm('signup')}
          onGoogleClick={() => console.log('Google Sign In')}
          onSignInClick={(data) => console.log('Sign In:', data)}
        />
      ) : (
        <SignUp
          onLoginClick={() => setCurrentForm('signin')}
          onGoogleClick={() => console.log('Google Sign Up')}
          onSignUpClick={(data) => console.log('Sign Up:', data)}
        />
      )}
    </BackgroundWrapper>
  )
}
