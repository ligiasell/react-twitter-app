import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'
import Button from '../button'
import TextArea from '../text-area'
import USERS from '../../users-data.json'

import './styles.css'

const Card = ({ post, onPostClick }) => {
  let location = useLocation()
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  const handleQuote = () => {
    setIsQuoteOpen((prevState) => !prevState)
  }

  return (
    <section className="card">
      <div className="card-profile-button">
        {USERS.map(
          (user) =>
            user.id === post.userId && (
              <Link key={user.id} to={`/user/${user.id}`} state={{ backgroundLocation: location }} className="card-user">
                <img src={user.url} alt={user.name} className="card-image" />
                <h1 className="card-username">{user.username}</h1>
              </Link>
            )
        )}
      </div>
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
          <TextArea onPostClick={onPostClick} />
        </div>
      )}
    </section>
  )
}

Card.propTypes = {
  post: PropTypes.shape({}),
  onPostClick: PropTypes.func,
}

Card.defaultProps = {
  post: {},
  onPostClick: () => {},
}

export default Card
