import React, { useState } from 'react'

import Header from '../../components/header'
import TextArea from '../../components/text-area'
import Card from '../../components/card'
import UserModal from '../../components/modal/user-modal'
import POSTS from '../../posts-data.json'
import USERS from '../../users-data.json'

import './styles.css'

const Homepage = () => {
  const [loggedUser] = useState(USERS[0])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleIsModalOpen = () => {
    setIsModalOpen((prevState) => !prevState)
  }

  return (
    <div className="homepage">
      <Header user={loggedUser} />
      <div className="homepage-cards">
        {POSTS.map((post) => (
          <div key={post.id}>
            <Card key={post.id} post={post} onClick={handleIsModalOpen} />
          </div>
        ))}
      </div>
      <div className="homepage-text-area">
        <TextArea />
      </div>
      <UserModal
        isOpen={isModalOpen}
        onClose={handleIsModalOpen}
        // userId={post.userId}
      />
    </div>
  )
}

export default Homepage
