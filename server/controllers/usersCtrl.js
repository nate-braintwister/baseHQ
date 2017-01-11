// RENDER USER INDEX PAGE LOGIC
module.exports.index = (req, res) => {
	res.render('user/index', {
		pagetitle: 'User Index Page'
	});
};

// RENDER USER PROFILE LOGIC
module.exports.profile = (req, res) => {
	res.render('user/profile', {
		pagetitle: 'Your Profile'
	});
};