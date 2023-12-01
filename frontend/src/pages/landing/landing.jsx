import NavbarLanding from '../../components/navbar-landing';
import LandingFitur from './fitur';
import LandingHome from './home';
import LandingAbout from './about';

function LandingPage() {
	return (
		<>
			<NavbarLanding />
			<div className="md:hidden">
				<LandingHome />
				<LandingFitur />
				<LandingAbout />
			</div>
			<div className="hidden md:block">
				<LandingHome />
			</div>
		</>
	);
}

export default LandingPage;
