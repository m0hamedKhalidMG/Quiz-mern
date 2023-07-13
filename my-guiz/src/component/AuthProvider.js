import { createContext, useContext, useState } from 'react';

const AuthContext =createContext()

export function AuthProvider({ children }) {
const [user, setuser] = useState(null);
const logIn = (user) => {
   setuser(user);
    console.log(user);

  };

  const logOut = () => {
    setuser(null);
  };

return (
    <AuthContext.Provider value={{logIn,logOut,user}}>
    
    {children}
    
    </AuthContext.Provider>

)

}
export function useAuth() {

    return useContext(AuthContext)
}