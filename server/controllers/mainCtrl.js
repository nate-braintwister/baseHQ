// RENDER HOME PAGE LOGIC
module.exports.home = (req, res) => {
	res.render('index', {
		title: 'Home Page'
	});
};