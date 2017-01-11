// RENDER HOME PAGE LOGIC
module.exports.home = (req, res) => {
	res.render('index', {
		page: {
			title: 'Welcome to baseHQ',
			slug: 'home'
		}
	});
};

// RENDER 
module.exports.locations = (req, res) => {
	res.render('default', {
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

// RENDER PRIVACY PAGE LOGIC
module.exports.privacy = (req, res) => {
	res.render('default', {
        page: {
            title: 'Privacy Statement',
            slug: 'privacy'
        }
	});
};