import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Cool from './pages/cool'
import Home from './pages/home'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/cool' element={<Cool/>}/>
			</Routes>
		</Router>
	)
}

export default App