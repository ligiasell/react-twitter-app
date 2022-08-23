import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'

import Button from '../button'
import TextArea from '../text-area'
import POSTS from '../../posts-data.json'
import USERS from '../../users-data.json'
import { LOGGED_USER_ID, MODAL_OVERLAY_STYLE, MODAL_BACKGROUND_STYLE } from '../../utils/constants'

import './styles.css'

const Modal = ({ onPostClick, onTextChange, wasPostClicked }) => {
  let navigate = useNavigate()
  let userId = parseInt(useParams().id)
  const [isFollowing, setIsFollowing] = useState(undefined)
  const [selectedUser, setSelectedUser] = useState({})
  const [loggedUserPostsCounter, setLoggedUserPostsCounter] = useState(0)

  const handleCloseModal = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const handleIsFollowing = () => {
    const isLoggedUserFollowing = selectedUser.followers.includes(LOGGED_USER_ID)
    if (isLoggedUserFollowing) {
      const filteredFollowers = selectedUser.followers.filter((user) => user !== LOGGED_USER_ID)
      setSelectedUser({
        ...selectedUser,
        followers: filteredFollowers,
      })
      setIsFollowing(false)
    } else {
      setSelectedUser((prevState) => ({
        ...selectedUser,
        followers: [...prevState.followers, LOGGED_USER_ID],
      }))
      setIsFollowing(true)
    }
  }

  useEffect(() => {
    setSelectedUser(USERS.find((user) => user.id === userId))
  }, [userId])

  useEffect(() => {
    if (selectedUser.followers) {
      setIsFollowing(selectedUser.followers.includes(LOGGED_USER_ID))
    }
  }, [selectedUser.followers])

  useEffect(() => {
    setLoggedUserPostsCounter(POSTS.filter((post) => post.userId === userId).length)
  }, [userId])

  useEffect(() => {
    if (wasPostClicked) {
      handleCloseModal()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wasPostClicked])

  return (
    <div style={MODAL_OVERLAY_STYLE}>
      <div style={MODAL_BACKGROUND_STYLE}>
        <div className="user-modal__close-button">
          <Button onClick={handleCloseModal}>&#x2715;</Button>
        </div>
        <div className="user-modal__header">
          <img src={selectedUser.url} alt={selectedUser.name} className="user-modal__image" />
          <h1 className="user-modal__username">
            {selectedUser.username} ({selectedUser.name})
          </h1>
          <p className="user-modal__membership-date">Joined Posterr at {selectedUser.membershipDate}</p>
          {selectedUser.followers && <p className="user-modal__followers">{selectedUser.followers.length} followers</p>}
          {selectedUser.following && <p className="user-modal__following">{selectedUser.following.length} following</p>}
          <p className="user-modal__posts-number">
            {loggedUserPostsCounter} {`${loggedUserPostsCounter > 1 ? 'posts' : 'post'}`}
          </p>
          <div className="user-modal__posts">{POSTS.map((post) => post.userId === userId && <p key={post.id}>{post.postMessage}</p>)}</div>
        </div>
        {LOGGED_USER_ID !== selectedUser.id && (
          <div className="user-modal__status">
            <p className="user-modal__following-status">
              {`${isFollowing ? 'You are' : 'You are not'}`} following {selectedUser.username}
            </p>
            <Button onClick={handleIsFollowing}>{`${isFollowing ? 'UNFOLLOW' : 'FOLLOW'}`}</Button>
          </div>
        )}
        <TextArea onPostClick={onPostClick} onTextChange={onTextChange} />
      </div>
    </div>
  )
}

Modal.propTypes = {
  onPostClick: PropTypes.func,
  onTextChange: PropTypes.func,
  wasPostClicked: PropTypes.bool,
}

Modal.defaultProps = {
  onPostClick: () => {},
  onTextChange: () => {},
  wasPostClicked: false,
}

export default Modal
