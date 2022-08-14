import { Routes, Route } from 'react-router-dom'

import Homepage from './routes/homepage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
    </Routes>
  )
}

export default App
