'use strict';

(function () {
										'use strict';

										$(document).on('scroll', function () {
																				if ($(document).scrollTop() > 50) {
																														$('body.home #app-header > nav').addClass('fixed');
																														$('body.home #app-header > .wrapper').slideUp();
																				} else {
																														$('body.home #app-header > nav').removeClass('fixed');
																														$('body.home #app-header> .wrapper').slideDown("slow");
																				}
										});
})();