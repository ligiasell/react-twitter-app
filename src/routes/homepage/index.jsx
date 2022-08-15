import React, { useState } from 'react'

import Header from '../../components/header'
import TextArea from '../../components/text-area'
import Card from '../../components/card'

import './styles.css'

const USERS = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    url: 'https://robohash.org/$1?set=set2&size=180x180',
    membershipDate: 'March 25, 2021',
    followers: [2, 3],
    following: [2, 3],
    posts: [
      {
        postId: 1,
        type: 'regular',
        postMessage: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
      },
      {
        postId: 2,
        type: 'regular',
        postMessage: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
      },
      {
        postId: 3,
        type: 'regular',
        postMessage:
          'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
      },
    ],
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    url: 'https://robohash.org/$2?set=set2&size=180x180',
    membershipDate: 'January 02, 2020',
    followers: [1, 3],
    following: [1, 3],
    posts: [
      {
        postId: 4,
        type: 'quote',
        postMessage: 'id labore ex et quam laborum',
        originalPostId: 1,
      },
      {
        postId: 5,
        type: 'quote',
        postMessage: 'quo vero reiciendis velit similique earum',
        originalPostId: 2,
      },
      {
        postId: 6,
        type: 'quote',
        postMessage: 'odio adipisci rerum aut animi',
        originalPostId: 3,
      },
    ],
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    url: 'https://robohash.org/$3?set=set2&size=180x180',
    membershipDate: 'December 10, 2019',
    followers: [4, 5],
    following: [1, 2, 4, 5],
    posts: [],
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    url: 'https://robohash.org/$4?set=set2&size=180x180',
    membershipDate: 'October 12, 2021',
    followers: [3],
    following: [3, 5],
    posts: [],
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    url: 'https://robohash.org/$5?set=set2&size=180x180',
    membershipDate: 'June 30, 2022',
    followers: [1, 2, 3, 4],
    following: [1, 2, 3, 4],
    posts: [],
  },
]

const Homepage = () => {
  const [currentUser] = useState(USERS[0])

  return (
    <div className="homepage">
      <Header user={currentUser} />
      <div className="homepage-cards">
        {USERS.map((user) => (
          <Card
            key={user.id}
            image={user.url}
            imageName={user.name}
            userName={user.username}
            text={'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'}
            user={user}
          />
        ))}
      </div>
      <div className="homepage-text-area">
        <TextArea />
      </div>
    </div>
  )
}

export default Homepage
