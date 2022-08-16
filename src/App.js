import { Routes, Route } from 'react-router-dom'

import Homepage from './routes/homepage/index'
import Checkout from '../src/routes/checkout/index'
import Home from '../src/routes/home/index'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
