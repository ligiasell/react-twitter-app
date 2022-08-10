import { createContext, useState } from 'react'

import USERS from '../mocked-users-data.json'

export const UserContext = createContext({
  users: [],
})

export const UserProvider = ({ children }) => {
  const [users] = useState(USERS)
  const value = { users }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
