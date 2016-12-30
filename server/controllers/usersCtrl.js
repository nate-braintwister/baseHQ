// RENDER USER INDEX PAGE LOGIC
module.exports.index = (req, res) => {
	res.render('user/index', {
		title: 'User Index Page'
	});
};