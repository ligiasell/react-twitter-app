import React, { useContext } from 'react'

import { UserContext } from '../../contexts/user-context.jsx'

const Home = () => {
  const { users } = useContext(UserContext)

  return (
    <div>
      <h1>Posterr</h1>
      <div>
        {users.length &&
          users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              {user.posts.length && user.posts.map((post) => <p key={post.postId}>{post.postMessage}</p>)}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
