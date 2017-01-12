// RENDER HOME PAGE LOGIC
module.exports.home = (req, res) => {
	res.render('index', {
		page: {
			title: 'Welcome to baseHQ',
			slug: 'home',
			intro: 'A completely re-energized way of finding your perfect roommate -- Whether you\'re looking for somewhere local, or somewhere much, much further away (no, we don\'t cover Mars, yet :\'( ).',
			callToAction: 'Sign up now and see why Kathy here loves to use BaseHQ. Everyone should be like Kathy.',
			article:{
					title: 'This is the first article title',
					content: 'This is the first article content'
				}
			}
	});
};

// RENDER LOCATIONS PAGE LOGIC
module.exports.locations = (req, res) => {
	res.render('image-grid', {
        page: {
            title: 'Locations',
            slug: 'locations'
        }
	});
};

// RENDER USER LOGIN PAGE LOGIC
module.exports.login = (req, res) => {
	res.render('user/login', {
        page: {
            title: 'Login',
            slug: 'login'
        }
	});
};

// RENDER USER REGISTRATION PAGE LOGIC
module.exports.register = (req, res) => {
	res.render('register', {
		page: {
			title: 'Sign Up!',
			slug: 'sign_up'
		}
	});
};

// RENDER PRIVACY PAGE LOGIC
module.exports.privacy = (req, res) => {
	res.render('default', {
        page: {
            title: 'Privacy Statement',
            slug: 'privacy'
        }
	});
};
