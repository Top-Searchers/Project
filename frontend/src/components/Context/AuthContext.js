import { createContext, useState, useContext } from 'react'

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext)
}

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  const removeToken = () => {
    // Remove the user's data from local storage
    localStorage.removeItem('user')

    // If you're using a state to store the user's data, update it
    setUser(null) // Uncomment this if you have a setUser function

    // Navigate the user to the login page
  }

  return (
    <AuthContext.Provider value={{ user, removeToken }}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider;