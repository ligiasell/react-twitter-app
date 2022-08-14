import React from 'react'

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
    posts: [
      {
        postId: 1,
        type: 'post',
        postMessage: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
      },
      {
        postId: 2,
        type: 'post',
        postMessage: 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
      },
      {
        postId: 3,
        type: 'post',
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
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    url: 'https://robohash.org/$3?set=set2&size=180x180',
  },
]

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="homepage-body">
        {USERS.map((user) => (
          <Card
            key={user.id}
            image={user.url}
            imageName={user.name}
            userName={user.username}
            text={'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'}
          />
        ))}
      </div>
      <div>
        <TextArea />
      </div>
    </div>
  )
}

export default Homepage
