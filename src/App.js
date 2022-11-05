import { Route, Routes } from 'react-router-dom'
import './App.css'
import Root from './components/Root'
import Contact from './pages/Contact'

const App = () => {
  return (
<Routes>
<Route 
path='/' element={<Root/>}
/>
<Route 
path='/contact' element={<Contact/>}
/>

</Routes>
  )
}

export default App