import { Route, Routes } from 'react-router-dom';
import LandingHome from '../src/pages/landing/home';
import LandingFitur from '../src/pages/landing/fitur';
import LandingAbout from '../src/pages/landing/about';
import Login from './pages/login';
import Register from './pages/register';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LandingHome />} />
				<Route path="/fitur" element={<LandingFitur />} />
				<Route path="/about" element={<LandingAbout />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
