import {
  Routes,
  Route,
  // Link,
  useLocation,
  // useParams
} from 'react-router-dom'

import Layout from '../src/routes/layout'
import AllUsers from '../src/routes/all-users'
import Modal from '../src/components/modal'

// const IMAGES = [
//   { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
//   { id: 1, title: 'Lime Green', color: 'LimeGreen' },
//   { id: 2, title: 'Tomato', color: 'Tomato' },
//   { id: 3, title: 'Seven Ate Nine', color: '#789' },
//   { id: 4, title: 'Crimson', color: 'Crimson' },
// ]

// const Image = ({ color }) => {
//   return (
//     <div
//       style={{
//         width: '100%',
//         height: 400,
//         background: color,
//       }}
//     />
//   )
// }

// const Gallery = () => {
//   let location = useLocation()

//   return (
//     <div>
//       <h1>Gallery</h1>
//       {IMAGES.map((image) => (
//         <Link key={image.id} to={`/img/${image.id}`} state={{ backgroundLocation: location }}>
//           <p>{image.title}</p>
//         </Link>
//       ))}
//     </div>
//   )
// }

// const ImageView = () => {
//   let { id } = useParams()
//   let image = IMAGES[parseInt(id, 10)]

//   if (!image) return <div>Image not found</div>

//   return (
//     <div>
//       <h1>ImageView</h1>
//       <h1>{image.title}</h1>
//       <Image color={image.color} />
//     </div>
//   )
// }

const App = () => {
  let location = useLocation()
  let state = location.state

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<AllUsers />} />
          {/* <Route path="/following" element={<Gallery />} /> */}
          {/* <Route path="/user/:id" element={<ImageView />} /> */}
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/user/:id" element={<Modal />} />
        </Routes>
      )}
    </>
  )
}

export default App
