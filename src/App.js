import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProfileList from './components/Profile/ProfileList'
import AdminPanel from './components/AdminPanel/AdminPanel'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProfileList />} />
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
