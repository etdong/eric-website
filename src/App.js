import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cool from './pages/cool'
import Home from './pages/home'
import HomeZh from './pages/home_zh'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/zh' element={<HomeZh/>}/>

				<Route path='/cool' element={<Cool/>}/>
			</Routes>
		</Router>
	)
}

export default App