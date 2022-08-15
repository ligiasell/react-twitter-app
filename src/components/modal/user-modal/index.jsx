import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../../button'
import Modal from '../index'
import TextArea from '../../text-area'

import './styles.css'

// TODO: remove mock
export const MOCKED_IS_FOLLOWING = false

const UserModal = ({ isOpen, onClose, user }) => {
  const [isFollowing, setIsFollowing] = useState(MOCKED_IS_FOLLOWING)

  const handleIsFollowing = () => {
    setIsFollowing((prevState) => !prevState)
  }

  const handlePost = () => {
    // TODO:
    // Add post
    // Close modal
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="user-modal">
        <img src={user.url} alt={user.name} className="user-modal__image" />
        <h1 className="user-modal__username">
          {user.username} ({user.name})
        </h1>
        <p className="user-modal__membership-date">Joined Posterr at {user.membershipDate}</p>
        <p className="user-modal__followers">{user.followers.length} followers</p>
        <p className="user-modal__following">{user.following.length} following</p>
        <p className="user-modal__posts-number">{user.posts.length} Posts</p>
        {user.posts.length && (
          <div className="user-modal__posts">
            {user.posts.map((post) => (
              <p>"{post.postMessage}"</p>
            ))}
          </div>
        )}
      </div>
      <div className="user-modal__status">
        <p className="user-modal__following-status">
          {`${isFollowing ? 'You are' : 'You are not'}`} following {user.username}
        </p>
        <Button onClick={handleIsFollowing}>{`${isFollowing ? 'UNFOLLOW' : 'FOLLOW'}`}</Button>
      </div>
      <TextArea onClick={handlePost} />
    </Modal>
  )
}

UserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  user: PropTypes.shape({}),
}

UserModal.defaultProps = {
  onClose: () => {},
  user: {},
}

export default UserModal
