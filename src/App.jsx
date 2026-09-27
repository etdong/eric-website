import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import HomeZh from './pages/home_zh'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/zh' element={<HomeZh/>}/>
			</Routes>
		</Router>
	)
}

export default App