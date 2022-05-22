import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth'

const AuthListener: React.FC = () => {
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(auth => {
      console.log('AUTH: ', auth)
    })

    return unsubscribe
  }, [])

  return <></>
}

export default AuthListener
