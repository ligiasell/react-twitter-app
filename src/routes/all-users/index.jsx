import React from 'react'

import Card from '../../components/card'
import POSTS from '../../posts-data.json'

import './styles.css'

const AllUsers = () => {
  return (
    <div className="all-users">
      <div className="all-users-cards">
        {POSTS.map((post) => (
          <div key={post.id}>
            <Card key={post.id} post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllUsers
