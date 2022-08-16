import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '../../button'
import Modal from '../index'
import TextArea from '../../text-area'
import POSTS from '../../../posts-data.json'
import USERS from '../../../users-data.json'

import './styles.css'

// TODO: remove mock
export const MOCKED_IS_FOLLOWING = false

const UserModal = ({ isOpen, onClose, userId }) => {
  const [isFollowing, setIsFollowing] = useState(MOCKED_IS_FOLLOWING)
  const [selectedUser, setSelectedUser] = useState({
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    url: 'https://robohash.org/$1?set=set2&size=180x180',
    membershipDate: 'March 25, 2021',
    followers: [2, 3],
    following: [2, 3],
  })
  // console.log('userId', userId)

  const handleIsFollowing = () => {
    setIsFollowing((prevState) => !prevState)
  }

  const handlePost = () => {
    // TODO: Add post and close modal
  }

  // useEffect(() => {
  //   console.log('useEffect')
  //   const result = USERS.find((user) => user.id === userId)
  //   console.log('result', result)
  // }, [userId])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* <div className="user-modal">
                <img src={selectedUser.url} alt={selectedUser.name} className="user-modal__image" />
                <h1 className="user-modal__username">
                  {selectedUser.username} ({selectedUser.name})
                </h1>
                <p className="user-modal__membership-date">Joined Posterr at {selectedUser.membershipDate}</p>
                <p className="user-modal__followers">{selectedUser.followers.length} followers</p>
                <p className="user-modal__following">{selectedUser.following.length} following</p> */}
      {/* <div className="user-modal__posts">{POSTS.map((post) => post.userId === userId && <p key={post.id}>{post.postMessage}</p>)}</div> */}
      {/* </div>
              <div className="user-modal__status">
                <p className="user-modal__following-status">
                  {`${isFollowing ? 'You are' : 'You are not'}`} following {selectedUser.username}
                </p>
                <Button onClick={handleIsFollowing}>{`${isFollowing ? 'UNFOLLOW' : 'FOLLOW'}`}</Button>
              </div> */}
      <TextArea onClick={handlePost} />
    </Modal>
  )
}

UserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  userId: PropTypes.number,
}

UserModal.defaultProps = {
  onClose: () => {},
  userId: undefined,
}

export default UserModal
