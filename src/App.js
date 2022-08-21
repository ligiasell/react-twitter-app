import { Routes, Route, useLocation } from 'react-router-dom'

import Layout from '../src/routes/layout'
import AllUsers from '../src/routes/all-users'
import FollowingUsers from '../src/routes/following-users'
import Modal from '../src/components/modal'
import UsersContent from '../src/routes/users-content'

const App = () => {
  let location = useLocation()
  let state = location.state

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<AllUsers>{<UsersContent />}</AllUsers>} />
          <Route path="/following" element={<FollowingUsers>{<UsersContent />}</FollowingUsers>} />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/user/:id" element={<Modal />} />
        </Routes>
      )}
    </>
  )
}

export default App
