import { Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/home-screen'
import LandingScreen from './screens/landing-screen'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />

      <Route path="/dashboard" element={<HomeScreen />} />
    </Routes>
  )
}

export default App
