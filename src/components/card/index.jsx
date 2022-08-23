import React, { useCallback, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'
import Button from '../button'
import TextArea from '../text-area'
import USERS from '../../users-data.json'
import { MAX_NUMBER_OF_POSTS } from '../../utils/constants'

import './styles.css'

const Card = ({ post, onPostClick, onRepostClick, onTextChange, wasPosted, postsCounter }) => {
  let location = useLocation()
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  const handleQuote = () => {
    setIsQuoteOpen((prevState) => !prevState)
  }

  const handleRepost = useCallback(() => {
    onRepostClick(post.id)
  }, [onRepostClick, post.id])

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
            <p className="card-text-small">&#10077;{post.postMessage}&#10078;</p>
            <p className="card-text-small">Quoted</p>
          </div>
        )}
        {post.type === 'repost' && (
          <div>
            <p>&#10077;{post.postMessage}&#10078;</p>
            <p className="card-text-small">Reposted</p>
          </div>
        )}
      </div>
      <div className="card-buttons">
        {postsCounter >= MAX_NUMBER_OF_POSTS ? (
          <p>You already have 5 posts, repost or quote a new one tomorrow!</p>
        ) : (
          <>
            <Button onClick={handleRepost}>Repost</Button>
            <Button onClick={handleQuote}>Quote</Button>
          </>
        )}
      </div>
      {isQuoteOpen && (
        <div className="card-quote">
          <TextArea onPostClick={() => onPostClick(post.id)} onTextChange={onTextChange} wasPosted={wasPosted} />
        </div>
      )}
    </section>
  )
}

Card.propTypes = {
  post: PropTypes.shape({}),
  onPostClick: PropTypes.func,
  onRepostClick: PropTypes.func,
  onTextChange: PropTypes.func,
  wasPosted: PropTypes.bool,
  postsCounter: PropTypes.number,
}

Card.defaultProps = {
  post: {},
  onPostClick: () => {},
  onRepostClick: () => {},
  onTextChange: () => {},
  wasPosted: false,
  postsCounter: 0,
}

export default Card
