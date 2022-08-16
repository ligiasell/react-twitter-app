import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '../button'
// import UserModal from '../modal/user-modal'
import TextArea from '../text-area'
import USERS from '../../users-data.json'

import './styles.css'

const Card = ({ post, onClick }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  // const handleIsModalOpen = () => {
  //   setIsModalOpen((prevState) => !prevState)
  // }

  const handleQuote = () => {
    setIsQuoteOpen((prevState) => !prevState)
  }

  // useEffect(() => {
  //   console.log('useEffect')
  // }, [])

  return (
    <section className="card">
      <button
        onClick={onClick}
        // onClick={handleIsModalOpen}
        className="card-profile-button"
      >
        {USERS.map(
          (user) =>
            user.id === post.userId && (
              <div key={user.id} className="card-user">
                <img src={user.url} alt={user.name} className="card-image" />
                <h1 className="card-username">{user.username}</h1>
                {/* <UserModal isOpen={isModalOpen} onClose={handleIsModalOpen} userId={user.id} /> */}
              </div>
            )
        )}
      </button>
      <div className="card-text">
        {post.type === 'regular' && <p>{post.postMessage}</p>}
        {post.type === 'quote' && (
          <div>
            <p>{post.quoteMessage}</p>
            <p className="card-text-small">"{post.postMessage}"</p>
            <p className="card-text-small">Quoted</p>
          </div>
        )}
        {post.type === 'repost' && (
          <div>
            <p>"{post.postMessage}"</p>
            <p className="card-text-small">Reposted</p>
          </div>
        )}
      </div>
      <div className="card-buttons">
        <Button>Repost</Button>
        <Button onClick={handleQuote}>Quote</Button>
      </div>
      {isQuoteOpen && (
        <div className="card-quote">
          <TextArea />
        </div>
      )}
    </section>
  )
}

Card.propTypes = {
  post: PropTypes.shape({}),
  onClick: PropTypes.func,
}

Card.defaultProps = {
  post: {},
  onClick: () => {},
}

export default Card
