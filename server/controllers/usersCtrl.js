// RENDER USER INDEX PAGE LOGIC
module.exports.index = (req, res) => {
	res.render('user/index', {
		pagetitle: 'User Index Page'
	});
};