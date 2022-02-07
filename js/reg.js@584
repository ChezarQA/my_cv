function preload_btn(i) {
	var btn = $(i);
	var btn_w = btn.outerWidth();
	var btn_h = btn.outerHeight();
	var btn_clone = btn.clone(true);
	
	btn.replaceWith('<div class="button load"></div>');
	$('.button.load').outerWidth(btn_w).outerHeight(btn_h);

	return btn_clone;
}

function rand_count(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);

	return Math.round(rand);
}

function text_revers(e, func) {
	let a = $(e),
		b = a.text(),
		c = a.attr('data-text');

	if (func == 1) {
		a.addClass('active');
	} else {
		a.removeClass('active');
	}

	if (b != c) {
		a.text(c).attr('data-text', b);
	}
}

if (window.location.hash === '#_=_') {
	if (history.replaceState) {
		var cleanHref = window.location.href.split('#')[0];

		history.replaceState(null, null, cleanHref);
	} else {
		window.location.hash = '';
	}
}

$('.vision_hover').hover(
	function() {
		let a = $(this).attr('data-title'),
			b = $('#vision_title');

		b.text(a);
	}, function() {
		let c = $('#vision_title'),
			d = c.attr('data-text');

		c.text(d);
	}
);

$(document).on({
	mouseenter: function () {
		let a = $(this).attr('data-stats-number'),
			b = $(this).attr('data-stats-unreg'),
			c = $(this).attr('data-stats-id'),
			d = $('#stats_number_' + c),
			f = $('#stats_unreg_' + c),
			g = $(this).attr('data-stats-percent'),
			h = $(this).attr('data-stats-period'),
			j = $('#stats_period_' + c);

		if (g != 0) {
			if (g < 0) {
				d.html(a + '<span class="minus">' + g + '%</span>');
			} else {
				d.html(a + '<span class="plus">' + g + '%</span>');
			}
		} else {
			d.text(a);
		}
		
		f.text(b);
		j.text(h);
	},
	mouseleave: function () {
		let a = $(this).attr('data-stats-number-all'),
			b = $(this).attr('data-stats-unreg-all'),
			c = $(this).attr('data-stats-id'),
			d = $('#stats_number_' + c),
			f = $('#stats_unreg_' + c),
			j = $('#stats_period_' + c);

		d.html(a);
		f.text(b);
		j.text('');
	}
}, '.bar_stats_graph_pic');

$(function() {
	$(document).on({
		mouseenter: function () {
			let a = $(this);

			a.addClass('active');
		},
		mouseleave: function () {
			let a = $(this);

			a.removeClass('active');
		}
	}, '.select_mini');
});

$(document).on('click', '.select_mini span', function() {
	var a = $(this).parents('.select_mini');

	if (a.hasClass('active')) {
		a.removeClass('active');
	} else {
		a.addClass('active');
	}
});

$(function() {
	$(document).on('mouseover', '.vision_anima.hover', function() {
		let a = $(this);

		a.removeClass('hover');
	});
});

$(function() {
	$(document).on('mouseover', '.pad_animation.hover', function() {
		let a = $(this);

		a.removeClass('hover');
	});
});

$(document).ready(function() {
	$('img.blur').each(function(i, e) {
		let src = $(e).attr('src'),
			replace = /\/blur/i,
			img = $('<img src="' + src + '">');

		src = src.replace(replace, '');

		$(e).attr('src', src).removeClass('blur').addClass('main');
	});

	retina_start();
});

$(function() {
	$(document).on('keydown', '#login_form input', function(e) {
		if (e.keyCode === 13) {
			$('#login_form .button').click();
		}
	});

	$(document).on('keydown', '#steps_1 input', function(e) {
		if (e.keyCode === 13) {
			$('#steps_button_1').click();
		}
	});

	$(document).on('keydown', '#steps_2 input', function(e) {
		if (e.keyCode === 13) {
			$('#steps_button_2').click();
		}
	});

	$(document).on('keydown', '#steps_3 input', function(e) {
		if (e.keyCode === 13) {
			$('#steps_button_3').click();
		}
	});

	$(document).on('keydown', '#steps_4 input', function(e) {
		if (e.keyCode === 13) {
			$('#steps_button_4').click();
		}
	});

	$(document).on('keydown', '#password_form input', function(e) {
		if (e.keyCode === 13) {
			$('#password_form .button').click();
		}
	});

	$(document).on('keydown', '#password_edit input', function(e) {
		if (e.keyCode === 13) {
			$('#password_edit .button').click();
		}
	});
});

$(function() {
	// При клике по лейблу фокусируем и выделяем содержимое.
	$(document).on('click', '.input-prefix-lable', function() {
		var e = $(this).siblings('.input-prefix-field').children('.input');

		input_select(e);
	});

	// При клике по инпуту фокусируем и выделяем инпут.
	$(document).on('click', '.input-prefix-field .input', function() {
		var e = $(this);

		input_select(e);
	});

	// При фокусе добавляем класс фокуса и выделаем текст.
	$(document).on('focus', '.input-prefix-field .input', function() {
		$(this).parents('.input-prefix-wrap').addClass('focus').children('.input-prefix-lable').addClass('focus');
	});

	// При расфокусе удаляем класс фокуса.
	$(document).on('blur', '.input-prefix-field .input', function() {
		$(this).parents('.input-prefix-wrap').removeClass('focus').children('.input-prefix-lable').removeClass('focus');
	});
});

function input_count(e) {
	var a = e,
		b = a.val(),
		c = b.length,
		d = a.attr('data-count'),
		f = a.siblings('span');

	f.text(c + '/' + d).removeClass('stop');

	if (c >= d) {
		b = b.substr(0, d);

		f.text(d + '/' + d).addClass('stop');
		a.val(b);
	}
}

$(function() {
	// При клике по пункту списка.
	$(document).on('click', '.select_li', function() {
		var e = $(this),
			par = e.parents('.select'),
			id = e.attr('data-select-id'),
			name = e.text();

		par.children('input').val(id);
		par.children('span').text(name);
	});

	// При клике на список.
	$(document).on('click', '.select', function(e) {
		var select = $(this);

		if (!select.hasClass('active')) {
			select.addClass('active');
		} else {
			select.removeClass('active');
		}
	});

	$(document).mouseup(function (e) {
		var a = $('.select.active');

		if (!a.is(e.target) && a.has(e.target).length === 0) {
			a.removeClass('active');
		}
	});

	// При клике на список иконок.
	$(document).on('click', '.select_nets_image', function(e) {
		var select = $(this),
			par = select.parents('.select_nets');

		if (!par.hasClass('active')) {
			par.addClass('active');
		} else {
			par.removeClass('active');
		}
	});

	$(document).mouseup(function (e) {
		var a = $('.select_nets.active');

		if (!a.is(e.target) && a.has(e.target).length === 0) {
			a.removeClass('active');
		}
	});

	$(document).on('click', '.select_nets_icon', function() {
		var e = $(this),
			par = e.parents('.select_nets'),
			c = par.children('input'),
			i = par.children('.select_nets_image').children('img'),
			d = e.attr('data-nets-id');

		c.val(d);
		nets_icon_portal(d);
		i.attr('src', '/images/icons/nets/' + d + '.svg');
		par.removeClass('active');
	});

	// При фокусе добавляем класс фокуса.
	$(document).on('focus', '.select_input .input', function() {
		$(this).parents('.select_input').addClass('active');
	});

	$(document).mouseup(function (e) {
		var a = $('.select_input');

		if (!a.is(e.target) && a.has(e.target).length === 0) {
			a.removeClass('active');
		}
	});

	// При клике по пункту списка.
	$(document).on('click', '.select_input_li', function() {
		var e = $(this),
			par = e.parents('.select_input');

		par.removeClass('active');
	});

	// При клике по пункту мини-списка.
	$(document).on('click', '.select_mini_li', function() {
		var e = $(this),
			par = e.parents('.select_mini'),
			name = e.children('span').first().text();

		par.removeClass('active').children('span').text(name);
	});

	$(document).on('click', '.profile_faqs_title', function() {
		var e = $(this),
			par = e.parents('.profile_faqs_block'),
			blocks = $('.profile_faqs_block');

		if (par.hasClass('active')) {
			par.removeClass('active');
		} else {
			blocks.removeClass('active');
			par.addClass('active');
		}
	});

	$(document).on('click', '#code_places', function() {
		var e = $(this),
			i = $('#code'),
			f = e.children('.steps_code_place:not(.val)').first();

		i.focus();
		f.addClass('cursor');
	});

	$(document).on('blur', '#code', function() {
		var e = $(this),
			i = $('#code_places .steps_code_place');

		i.removeClass('cursor');
	});

	$(document).on('change keyup input', '#code', function() {
		var e = $(this),
			b = e.val().replace(/[^0-9]/g, ''),
			c = $('#code_places'),
			d = c.children('.steps_code_place'),
			f = c.children('.steps_code_place:not(.val)').first();

		if (b.length > 6) {
			b = b.substr(0, 6);
		}

		e.val(b);

		str = b.split('');
		d.text('').removeClass('val cursor');

		str.forEach(function(item, i) {
			d.eq(i).text(item).addClass('val');
		});

		f.addClass('cursor');
	});

	$(document).on('change keyup input', '.url_realtime', function() {
		var a = $(this).val();

		url_realtime(a);
	});

	$(document).on('change keyup input', '.input_count', function() {
		var a = $(this);

		input_count(a);
	});

	$(document).on('focus', '.input_count', function() {
		var a = $(this);

		input_count(a);

		a.siblings('span').fadeIn(150);
	});

	$(document).on('blur', '.input_count', function() {
		$(this).siblings('span').fadeOut(0);
	});

	$(document).on('click', '.bar_toggle_block', function() {
		var e = $(this),
			par = e.parents('.bar_toggle'),
			sib = e.siblings(),
			id = e.attr('data-select-id');

		par.children('input').val(id);
		sib.removeClass('active');
		e.addClass('active');
	});
});

$(document).on('click', '.bar_preview_check', function() {
	$('.bar_preview_check').removeClass('active');
	$(this).addClass('active');
});

$(document).on('click', '.bar_preview_delete', function() {
	$('.bar_preview_custom').removeClass('active').removeClass('bar_preview_check').attr('id', 'upload_edit');;
	$('.bar_preview_custom img').remove();
	$('.bar_preview_plus').fadeIn(100);
	$('#video_preview').val('');
	$(this).remove();
});

function video_preview(hash, type) {
	if (type == 0) {
		if (hash.length == 11) {
			$('#video_cover').fadeIn(100);
			$('#video_button').fadeIn(100);
			$('#video_img_0').attr('src', '//img.youtube.com/vi/' + hash + '/maxresdefault.jpg');

			$('#video_youtube img').fadeOut(0);
			$('#video_img_' + type).fadeIn(0);
		} else {
			$('#video_cover').fadeOut(0);
			$('#video_button').fadeOut(0);
		}
	} else if (type == 1) {
		if (/^\d+$/.test(hash)) {
			$.ajax({
				type: 'POST',
				url: '/apps/vimeo.app.php',
				data: {
					hash: hash
				},

				success: function(html) {
					var json = JSON.parse(html);

					if (json.process == 1) {
						$('#video_cover').fadeIn(100);
						$('#video_button').fadeIn(100);

						$('#video_img_1').attr('src', json.img);

						$('#video_youtube img').fadeOut(0);
						$('#video_img_' + type).fadeIn(0);
					}

					console.log(json);
				},

				error: function(error) {
					console.log(error);
				}
			});
		} else {
			$('#video_cover').fadeOut(0);
			$('#video_button').fadeOut(0);
		}
	} 
		
}

$(document).on('keyup', '#video_0', function() {
	let hash = $(this).val();

	video_preview(hash, 0);
});

$(document).on('keyup', '#video_1', function() {
	let hash = $(this).val();

	video_preview(hash, 1);
});

$(document).on('keyup', '.input_url', function() {
	let e = $(this),
		replace = /https?:\/\//gi,
		txt = e.val();

	txt = txt.replace(replace, '');

	e.val(txt);
});

$(document).on('keyup', '.input_name_portal', function() {
	name_portal();
});

$(document).on('keyup', '.input_nets_title_portal', function() {
	nets_title_portal();
});

function descr_save(i) {
	var btn = preload_btn(i);
	var descr = $('#descr').val();

	$('#descr').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/descr.app.php',
		data: {
			descr: descr
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);

				descr_reload();
			} else {
				if (json.errs.err_descr) {
					$('#descr').addClass('err');

					$('#descr_err').html('<div class="error">' + json.errs.err_descr + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function yandex_save(i) {
	var btn = preload_btn(i);
	var yandex = $('#yandex').val();

	$('#yandex').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/yandex.app.php',
		data: {
			yandex: yandex
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);
			} else {
				if (json.errs.err_yandex) {
					$('#yandex').addClass('err');

					$('#yandex_err').html('<div class="error">' + json.errs.err_yandex + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function facebook_save(i) {
	var btn = preload_btn(i);
	var facebook = $('#facebook').val();

	$('#facebook').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/facebook.app.php',
		data: {
			facebook: facebook
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);
			} else {
				if (json.errs.err_facebook) {
					$('#facebook').addClass('err');

					$('#facebook_err').html('<div class="error">' + json.errs.err_facebook + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function google_save(i) {
	var btn = preload_btn(i);
	var google = $('#google').val();

	$('#google').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/google.app.php',
		data: {
			google: google
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);
			} else {
				if (json.errs.err_google) {
					$('#google').addClass('err');

					$('#google_err').html('<div class="error">' + json.errs.err_google + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function url_save(i) {
	var btn = preload_btn(i);
	var url = $('#url').val();
	var password = $('#password').val();

	$('#url_prefix').removeClass('err');
	$('#url').removeClass('err');
	$('#password').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/url.app.php',
		data: {
			url: url,
			password: password
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				history.replaceState(null, null, '/' + url);
				bar_slide('prev', 0);
			} else {
				if (json.errs.err_all) {
					$('#url_prefix').addClass('err');
					$('#url').addClass('err');
					$('#password').addClass('err');

					$('#url_err').html('<div class="error">' + json.errs.err_all + '</div>');
				} else {
					if (json.errs.err_url) {
						$('#url_prefix').addClass('err');
						$('#url').addClass('err');

						$('#url_err').html('<div class="error">' + json.errs.err_url + '</div>');
					}

					if (json.errs.err_password) {
						$('#password').addClass('err');

						$('#url_err').html('<div class="error">' + json.errs.err_password + '</div>');
					}
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function url_realtime(url) {
	$.ajax({
		type: 'POST',
		url: '/apps/url_realtime.app.php',
		data: {
			url: url
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#url_status').html('<div class="bar_status scs">' + json.success + '</div>');
			} else {
				if (json.errs.err_url) {
					$('#url_status').html('<div class="bar_status err">' + json.errs.err_url + '</div>');
				}
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function email_save(i) {
	var btn = preload_btn(i);
	var email = $('#email').val();
	var email_repeat = $('#email_repeat').val();
	var password = $('#password').val();

	$('#email').removeClass('err');
	$('#email_repeat').removeClass('err');
	$('#password').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/email.app.php',
		data: {
			email: email,
			email_repeat: email_repeat,
			password: password
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);
			} else {
				if (json.errs.err_all) {
					$('#email').addClass('err');
					$('#email_repeat').addClass('err');
					$('#password').addClass('err');

					$('#email_err').html('<div class="error">' + json.errs.err_all + '</div>');
				} else {
					if (json.errs.err_email) {
						$('#email').addClass('err');

						$('#email_err').html('<div class="error">' + json.errs.err_email + '</div>');
					}

					if (json.errs.err_email_repeat) {
						$('#email_repeat').addClass('err');

						$('#email_err').html('<div class="error">' + json.errs.err_email_repeat + '</div>');
					}

					if (json.errs.err_password) {
						$('#password').addClass('err');

						$('#email_err').html('<div class="error">' + json.errs.err_password + '</div>');
					}
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function email_repeat(i) {
	$.ajax({
		url: '/apps/email_repeat.app.php',

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#email_err').html('<div class="success">' + json.success + '</div>');

				$(i).attr('onclick', '');
			} else {
				if (json.errs.err_all) {
					$('#email_err').html('<div class="error">' + json.errs.err_all + '</div>');
				}
			}
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function password_save(i) {
	var btn = preload_btn(i);
	var password_now = $('#password_now').val();
	var password_new = $('#password_new').val();
	var password_new_repeat = $('#password_new_repeat').val();

	$('#password_now').removeClass('err');
	$('#password_new').removeClass('err');
	$('#password_new_repeat').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/password.app.php',
		data: {
			password_now: password_now,
			password_new: password_new,
			password_new_repeat: password_new_repeat
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);
			} else {
				if (json.errs.err_password_now) {
					$('#password_now').addClass('err');

					$('#password_err').html('<div class="error">' + json.errs.err_password_now + '</div>');
				}

				if (json.errs.err_password_new) {
					$('#password_new').addClass('err');

					$('#password_err').html('<div class="error">' + json.errs.err_password_new + '</div>');
				}

				if (json.errs.err_password_new_repeat) {
					$('#password_new_repeat').addClass('err');

					$('#password_err').html('<div class="error">' + json.errs.err_password_new_repeat + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function avatar_save(i) {
	var btn = preload_btn(i);
	var avatar = $('#avatar').val();
	var avatar_filename = $('#avatar_filename').val();

	$('#avatar_err').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/avatar.app.php',
		data: {
			avatar: avatar
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				let rand = Math.round(1 + Math.random() * (999 - 1));

				$('#profile .profile_avatar img').attr('src', '/modules/upl/' + json.size + '/' + avatar_filename + '?' + rand);

				$('#avatar_preview').attr('src', '/modules/upl/' + json.size + '/' + avatar_filename + '?' + rand);

				retina_start('#profile .profile_avatar img');
				retina_start('#avatar_preview');
			} else {
				if (json.errs.err_avatar) {
					$('#avatar_err').addClass('err');

					$('#avatar_err').html('<div class="error">' + json.errs.err_avatar + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function name_reload() {
	$.ajax({
		url: '/apps/reloads/name.app.php',

		success: function(html) {
			$('#profile .profile_title').empty().append(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function name_save(i) {
	var btn = preload_btn(i);
	var fname = $('#fname').val();
	var lname = $('#lname').val();

	$('#fname').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/name.app.php',
		data: {
			fname: fname,
			lname: lname
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);

				name_reload();
			} else {
				if (json.errs.err_fname) {
					$('#fname').addClass('err');

					$('#name_err').html('<div class="error">' + json.errs.err_fname + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function name_portal() {
	let a = $('#fname').val(),
		b = $('#lname').val(),
		c = $.trim(a + ' ' + b),
		d = $('#name_portal h1'),
		e = ['🤪', '🤓', '😍', '😇', '😶', '🤬'],
		f = rand_count(0, 5);

	if (c == '') {
		c = e[f];
	}

	d.text(c);
}

function nets_format(format) {
	if (format == 1) {
		$('.nets_group').removeClass('line');
	} else {
		$('.nets_group').addClass('line');
	}

	$.ajax({
		type: 'POST',
		url: '/apps/nets_format.app.php',
		data: {
			format: format
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				show_msg(json.success);
			}

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function nets_title_portal() {
	let a = $('#title'),
		b = a.val(),
		c = $('#nets_portal .nets_block span'),
		d = a.attr('placeholder');

	if (b == '') {
		b = d;
	}

	c.text(b);
}

function target_reload() {
	$.ajax({
		url: '/apps/reloads/target.app.php',

		success: function(html) {
			$('#profile .profile_button').empty().append(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function stats_reload(mode, e) {
	var a = $(e),
		b = a.parents('.select_mini'),
		c = b.find('.select_mini_li');

	b.addClass('select_mini_preloader').removeClass('active');
	c.removeClass('active');
	a.addClass('active');

	$.ajax({
		type: 'POST',
		url: '/apps/reloads/stats.app.php',
		data: {
			mode: mode
		},

		success: function(html) {
			$('#stats').empty().append(html);

			b.removeClass('select_mini_preloader');
		},

		error: function(error) {
			b.removeClass('select_mini_preloader');

			console.log(error);
		}
	});
}

function newb_reload(mode, e) {
	var a = $(e),
		b = a.parents('.select_mini'),
		c = b.find('.select_mini_li');

	b.addClass('select_mini_preloader').removeClass('active');
	c.removeClass('active');
	a.addClass('active');

	$.ajax({
		type: 'POST',
		url: '/apps/reloads/newb.app.php',
		data: {
			mode: mode
		},

		success: function(html) {
			$('#newb').empty().append(html);

			b.removeClass('select_mini_preloader');
		},

		error: function(error) {
			b.removeClass('select_mini_preloader');

			console.log(error);
		}
	});
}

function moneyb_reload(mode, e) {
	var a = $(e),
		b = a.parents('.select_mini'),
		c = b.find('.select_mini_li');

	b.addClass('select_mini_preloader').removeClass('active');
	c.removeClass('active');
	a.addClass('active');

	$.ajax({
		type: 'POST',
		url: '/apps/reloads/moneyb.app.php',
		data: {
			mode: mode
		},

		success: function(html) {
			$('#moneyb').empty().append(html);

			b.removeClass('select_mini_preloader');
		},

		error: function(error) {
			b.removeClass('select_mini_preloader');

			console.log(error);
		}
	});
}

function nets_reload() {
	$.ajax({
		url: '/apps/reloads/nets.app.php',

		success: function(html) {
			$('#profile #profile_nets').empty().append(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function nets_save(i) {
	var btn = preload_btn(i);
	var url = $('#url').val();
	var icon = $('#icon').val();
	var title = $('#title').val();
	var color_type = $('#color_type').val();
	var color = $('#multicolor_input').val();

	$('#url').removeClass('err');
	$('#title').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/nets_save.app.php',
		data: {
			url: url,
			icon: icon,
			title: title,
			color_type: color_type,
			color: color
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 73);

				nets_reload();
			} else {
				if (json.errs.err_title) {
					$('#title').addClass('err');

					$('#nets_err').html('<div class="error">' + json.errs.err_title + '</div>');
				}

				if (json.errs.err_url) {
					$('#url').addClass('err');

					$('#nets_err').html('<div class="error">' + json.errs.err_url + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function nets_sort() {
	var sort = [];

	$('.dragon_ui .bar_block').each(function() {
		let a = $(this).attr('data-nets-id');

		sort.push(a);
	});

	$.ajax({
		type: 'POST',
		url: '/apps/nets_sort.app.php',
		data: {
			sort: sort
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				nets_reload();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function nets_load(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_75.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function nets_delete(i, id) {
	var btn = preload_btn(i);

	$.ajax({
		type: 'POST',
		url: '/apps/nets_delete.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 73);

				nets_reload();

				show_msg(json.success);
			}

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function nets_edit(i, id) {
	var btn = preload_btn(i);
	var url = $('#url').val();
	var icon = $('#icon').val();
	var title = $('#title').val();
	var color_type = $('#color_type').val();
	var color = $('#multicolor_input').val();

	$('#url').removeClass('err');
	$('#title').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/nets_edit.app.php',
		data: {
			id: id,
			url: url,
			icon: icon,
			title: title,
			color_type: color_type,
			color: color
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 73);

				nets_reload();
			} else {
				if (json.errs.err_title) {
					$('#title').addClass('err');

					$('#nets_err').html('<div class="error">' + json.errs.err_title + '</div>');
				}

				if (json.errs.err_url) {
					$('#url').addClass('err');

					$('#nets_err').html('<div class="error">' + json.errs.err_url + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function buttons_save(i) {
	var btn = preload_btn(i);
	var type = $('#type').val();
	var title = $('#title').val();
	var descr = $('#descr').val();
	var color_type = $('#color_type').val();
	var color = $('#multicolor_input').val();
	var size = $('#size').val();
	var width = $('#width').val();
	var url = $('#url_' + type).val();
	var date_from = $('#date_from').val();
	var time_from_hours = $('#time_from_hours').val();
	var time_from_mins = $('#time_from_mins').val();
	var date_to = $('#date_to').val();
	var time_to_hours = $('#time_to_hours').val();
	var time_to_mins = $('#time_to_mins').val();

	var write_off = $('#write_off');

	if (write_off.is(':checked')) {
		write_off = 1;
	} else {
		write_off = 0;
	}

	$('#title').removeClass('err');
	$('#url_prefix_' + type).removeClass('err');
	$('#url_' + type).removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/buttons.app.php',
		data: {
			type: type,
			title: title,
			descr: descr,
			color_type: color_type,
			color: color,
			size: size,
			width: width,
			url: url,
			date_from: date_from,
			time_from_hours: time_from_hours,
			time_from_mins: time_from_mins,
			date_to: date_to,
			time_to_hours: time_to_hours,
			time_to_mins: time_to_mins,
			write_off: write_off
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 44);

				target_reload();
			} else {
				if (json.errs.err_url) {
					$('#url_prefix_' + type).addClass('err');
					$('#url_' + type).addClass('err');

					$('#buttons_err').html('<div class="error">' + json.errs.err_url + '</div>');
				}

				if (json.errs.err_title) {
					$('#title').addClass('err');

					$('#buttons_err').html('<div class="error">' + json.errs.err_title + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function buttons_edit(i, id) {
	var btn = preload_btn(i);
	var type = $('#type').val();
	var title = $('#title').val();
	var descr = $('#descr').val();
	var color_type = $('#color_type').val();
	var color = $('#multicolor_input').val();
	var size = $('#size').val();
	var width = $('#width').val();
	var url = $('#url_' + type).val();
	var date_from = $('#date_from').val();
	var time_from_hours = $('#time_from_hours').val();
	var time_from_mins = $('#time_from_mins').val();
	var date_to = $('#date_to').val();
	var time_to_hours = $('#time_to_hours').val();
	var time_to_mins = $('#time_to_mins').val();

	var write_off = $('#write_off');

	if (write_off.is(':checked')) {
		write_off = 1;
	} else {
		write_off = 0;
	}

	$('#title').removeClass('err');
	$('#url_prefix_' + type).removeClass('err');
	$('#url_' + type).removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/buttons_edit.app.php',
		data: {
			id: id,
			type: type,
			title: title,
			descr: descr,
			color_type: color_type,
			color: color,
			size: size,
			width: width,
			url: url,
			date_from: date_from,
			time_from_hours: time_from_hours,
			time_from_mins: time_from_mins,
			date_to: date_to,
			time_to_hours: time_to_hours,
			time_to_mins: time_to_mins,
			write_off: write_off
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 44);

				target_reload();
			} else {
				if (json.errs.err_url) {
					$('#url_prefix_' + type).addClass('err');
					$('#url_' + type).addClass('err');

					$('#buttons_err').html('<div class="error">' + json.errs.err_url + '</div>');
				}

				if (json.errs.err_title) {
					$('#title').addClass('err');

					$('#buttons_err').html('<div class="error">' + json.errs.err_title + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function buttons_load(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_46.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function buttons_delete(i, id) {
	var btn = preload_btn(i);

	$.ajax({
		type: 'POST',
		url: '/apps/buttons_delete.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 44);

				target_reload();

				show_msg(json.success);
			}

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function buttons_sort() {
	var sort = [];

	$('.dragon_ui .bar_block').each(function() {
		let a = $(this).attr('data-buttons-id');

		sort.push(a);
	});

	$.ajax({
		type: 'POST',
		url: '/apps/buttons_sort.app.php',
		data: {
			sort: sort
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				target_reload();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function buttons_type(id) {
	$('.buttons_type').fadeOut(0);
	$('#buttons_type_' + id).fadeIn(100);
}

function pro_save(i) {
	var btn = preload_btn(i);
	var login = $('#login').val();
	var email = $('#email').val();
	var date_pro = $('#date_pro').val();
	var ver = $('#ver').val();

	$('#login').removeClass('err');
	$('#email').removeClass('err');
	$('#date_pro').removeClass('err');
	$('#ver').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/pro_save.app.php',
		data: {
			login: login,
			email: email,
			date_pro: date_pro,
			ver: ver
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 41);
			} else {
				if (json.errs.err_login) {
					$('#login').addClass('err');

					$('#pro_err').html('<div class="error">' + json.errs.err_login + '</div>');
				}

				if (json.errs.err_email) {
					$('#email').addClass('err');

					$('#pro_err').html('<div class="error">' + json.errs.err_email + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function faqs_sort() {
	var sort = [];

	$('.dragon_ui .bar_block').each(function() {
		let a = $(this).attr('data-faqs-id');

		sort.push(a);
	});

	$.ajax({
		type: 'POST',
		url: '/apps/faqs_sort.app.php',
		data: {
			sort: sort
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				faqs_reload();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function faqs_load(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_53.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function faqs_edit(i, id) {
	var btn = preload_btn(i);
	var title = $('#title').val();
	var descr = $('#descr').val();

	$('#title').removeClass('err');
	$('#descr').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/faqs_edit.app.php',
		data: {
			id: id,
			title: title,
			descr: descr
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 52);

				faqs_reload();
			} else {
				if (json.errs.err_descr) {
					$('#descr').addClass('err');

					$('#faqs_err').html('<div class="error">' + json.errs.err_descr + '</div>');
				}

				if (json.errs.err_title) {
					$('#title').addClass('err');

					$('#faqs_err').html('<div class="error">' + json.errs.err_title + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function faqs_save(i) {
	var btn = preload_btn(i);
	var title = $('#title').val();
	var descr = $('#descr').val();

	$('#title').removeClass('err');
	$('#descr').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/faqs.app.php',
		data: {
			title: title,
			descr: descr
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 52);

				faqs_reload();
			} else {
				if (json.errs.err_descr) {
					$('#descr').addClass('err');

					$('#faqs_err').html('<div class="error">' + json.errs.err_descr + '</div>');
				}

				if (json.errs.err_title) {
					$('#title').addClass('err');

					$('#faqs_err').html('<div class="error">' + json.errs.err_title + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function faqs_delete(i, id) {
	var btn = preload_btn(i);

	$.ajax({
		type: 'POST',
		url: '/apps/faqs_delete.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 52);

				faqs_reload();

				show_msg(json.success);
			}

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function faqs_reload() {
	$.ajax({
		url: '/apps/reloads/faqs.app.php',

		success: function(html) {
			$('#profile_faqs').empty().append(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function portfolio_presave(image_id) {
	$.ajax({
		type: 'POST',
		url: '/apps/portfolio_presave.app.php',
		data: {
			image_id: image_id
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('next', 2);
				bar_reload(1, 37);
				portfolio_open(json.id);
				portfolio_reload();
			} else {
				$('.bar_pro_attention').fadeIn(300);
				$('#portfolio_upload').remove();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function portfolio_edit(i, id) {
	var btn = preload_btn(i);
	var title = $('#portfolio_title').val();
	var descr = $('#portfolio_descr').val();
	var link = $('#portfolio_link').val();
	var image_id = $('#portfolio_hidden_id').val();
	let rand = Math.round(1 + Math.random() * (999 - 1));

	$('#portfolio_link_prefix').removeClass('err');
	$('#portfolio_link').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/portfolio_edit.app.php',
		data: {
			id: id,
			title: title,
			descr: descr,
			link: link
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 37);

				$('#portfolio_' + id + ' img').attr('src', '/modules/upl/portfolio/100/' + json.image_name + '?' + rand);

				portfolio_reload();
			} else {
				if (json.errs.err_link) {
					$('#portfolio_link_prefix').addClass('err');
					$('#portfolio_link').addClass('err');

					$('#portfolio_err').html('<div class="error">' + json.errs.err_link + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function portfolio_delete(id) {
	$.ajax({
		type: 'POST',
		url: '/apps/portfolio_delete.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 37);

				portfolio_reload();

				show_msg(json.success);
			}
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function portfolio_sort() {
	var sort = [];

	$('.dragon_ui .bar_images_cover').each(function() {
		let a = $(this).attr('data-portfolio-id');

		sort.push(a);
	});

	$.ajax({
		type: 'POST',
		url: '/apps/portfolio_sort.app.php',
		data: {
			sort: sort
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				portfolio_reload();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function videos_reload() {
	$.ajax({
		url: '/apps/reloads/videos.app.php',

		success: function(html) {
			$('#profile #profile_videos').empty().append(html);

			$('.peppermint').Peppermint({
				dots: true
			});

			retina_start('#profile #profile_videos img');
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function videos_load(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_72.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			if (!headScripts['videojs']) {
				bar_include('/js/video.js' );
			}

			$('#bar_level_2 .bar_scroll').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function videos_edit(i, id) {
	var btn = preload_btn(i);
	var video_type = $('#type').val();
	var video = $('#video_' + video_type).val();
	var video_preview = $('#video_preview').val();

	if (video_preview == '' || !$('.bar_preview_custom').hasClass('active')) {
		video_preview = 0;
	}

	$('#video_err').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/videos_edit.app.php',
		data: {
			id: id,
			hash: video,
			type: video_type,
			preview: video_preview
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 70);

				videos_reload();
			} else {
				if (json.errs.err_hash) {
					$('#video_err').addClass('err');

					$('#video_err').html('<div class="error">' + json.errs.err_hash + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function videos_save(i) {
	var btn = preload_btn(i);
	var video_type = $('#type').val();
	var video = $('#video_' + video_type).val();
	var video_preview = $('#video_preview').val();

	if (video_preview == '' || !$('.bar_preview_custom').hasClass('active')) {
		video_preview = 0;
	}

	$('#video_err').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/videos_save.app.php',
		data: {
			hash: video,
			type: video_type,
			preview: video_preview
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 70);

				videos_reload();
			} else {
				if (json.errs.err_hash) {
					$('#video_err').addClass('err');

					$('#video_err').html('<div class="error">' + json.errs.err_hash + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function videos_sort() {
	var sort = [];

	$('.dragon_ui .bar_block').each(function() {
		let a = $(this).attr('data-videos-id');

		sort.push(a);
	});

	$.ajax({
		type: 'POST',
		url: '/apps/videos_sort.app.php',
		data: {
			sort: sort
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				videos_reload();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function videos_delete(i, id) {
	var btn = preload_btn(i);

	$.ajax({
		type: 'POST',
		url: '/apps/videos_delete.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 70);

				videos_reload();

				show_msg(json.success);
			}

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function video_type(id) {
	let a = $('#video_' + id).val();

	$('.video_type').fadeOut(0);
	$('#video_type_' + id).fadeIn(100);

	if (a == '') {
		$('#video_cover').fadeOut(0);
	} else {
		$('#video_cover').fadeIn(100);

		$('#video_youtube img').fadeOut(0);
		$('#video_img_' + id).fadeIn(0);
	}
}

function video_save(i) {
	var btn = preload_btn(i);
	var video_type = $('#type').val();
	var video = $('#video_' + video_type).val();
	var video_preview = $('#video_preview').val();

	if (video_preview == '' || !$('.bar_preview_custom').hasClass('active')) {
		video_preview = 0;
	}

	$('#video_err').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/video.app.php',
		data: {
			video: video,
			video_type: video_type,
			video_preview: video_preview
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);

				video_reload();
			} else {
				if (json.errs.err_video) {
					$('#video_err').addClass('err');

					$('#video_err').html('<div class="error">' + json.errs.err_video + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function video_delete(i) {
	var btn = preload_btn(i);

	$.ajax({
		type: 'POST',
		url: '/apps/video_delete.app.php',

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);

				video_reload();

				show_msg(json.success);
			}

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function social_reload() {
	$.ajax({
		url: '/apps/reloads/social.app.php',

		success: function(html) {
			$('#profile_social').empty().append(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function links_save(i, id) {
	var btn = preload_btn(i);
	var link = $('#link').val();

	$('#link_err').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/links.app.php',
		data: {
			id: id,
			link: link
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 11);

				social_reload();
			} else {
				if (json.errs.err_link) {
					$('#link_err').addClass('err');

					$('#link_err').html('<div class="error">' + json.errs.err_link + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function links_delete(i, id) {
	var btn = preload_btn(i);

	$.ajax({
		type: 'POST',
		url: '/apps/links_delete.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 11);

				social_reload();

				show_msg(json.success);
			}

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function bar_check(id, e) {
	let active = $(e),
		button = $('.bar_pro_check'),
		type = $('#pay_price'),
		total = $('#pay_total strong span');

	button.removeClass('active');
	active.addClass('active');

	if (id == 1) {
		type.val(69);
		total.text('69');
	}

	if (id == 2) {
		type.val(708);
		total.text('708');
	}
}

function bar_pay(id, e) {
	let active = $(e),
		button = $('.bar_pro_pay'),
		type = $('#pay_type');

	button.removeClass('active');
	active.addClass('active');

	if (id == 1) {
		type.val('AC');
	}

	if (id == 2) {
		type.val('PC');
	}
}

function pay_send() {
	$('#pay_submit').submit();
}

function login(i) {
	var btn = preload_btn(i);
	var email = $('#email').val();
	var password = $('#password').val();

	$('#email').removeClass('err');
	$('#password').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/login.app.php',
		data: {
			email: email,
			password: password
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$(location).attr('href', '/' + json.url);
			} else {
				if (json.errs.err_all) {
					$('#email').addClass('err');
					$('#password').addClass('err');

					$('#steps_err_1').html('<div class="error">' + json.errs.err_all + '</div>');
				} else {
					if (json.errs.err_email) {
						$('#email').addClass('err');

						$('#steps_err_1').html('<div class="error">' + json.errs.err_email + '</div>');
					}

					if (json.errs.err_password) {
						$('#password').addClass('err');

						$('#steps_err_1').html('<div class="error">' + json.errs.err_password + '</div>');
					}
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function steps_1(i) {
	var btn = preload_btn(i);
	var email = $('#email').val();

	$('#email').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/steps/step_1.app.php',
		data: {
			email: email
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#steps_1').fadeOut(0);
				$('#steps_2').fadeIn(250);
				$('#fname').focus();
			} else {
				if (json.errs.err_email) {
					$('#email').addClass('err');

					$('#steps_err_1').html('<div class="error">' + json.errs.err_email + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function steps_2(i) {
	var btn = preload_btn(i);
	var fname = $('#fname').val();
	var lname = $('#lname').val();

	$('#fname').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/steps/step_2.app.php',
		data: {
			fname: fname,
			lname: lname
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#steps_2').fadeOut(0);
				$('#steps_3').fadeIn(250);
				$('#url').focus();
			} else {
				if (json.errs.err_fname) {
					$('#fname').addClass('err');

					$('#steps_err_2').html('<div class="error">' + json.errs.err_fname + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function steps_3(i) {
	var btn = preload_btn(i);
	var url = $('#url').val();

	$('#url_prefix').removeClass('err');
	$('#url').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/steps/step_3.app.php',
		data: {
			url: url
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#steps_3').fadeOut(0);
				$('#steps_4').fadeIn(250);
				$('#password').focus();
			} else {
				if (json.errs.err_url) {
					$('#url_prefix').addClass('err');
					$('#url').addClass('err');

					$('#steps_err_3').html('<div class="error">' + json.errs.err_url + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function steps_4(i) {
	var btn = preload_btn(i);
	var password = $('#password').val();
	var password_repeat = $('#password_repeat').val();

	$('#password').removeClass('err');
	$('#password_repeat').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/steps/step_4.app.php',
		data: {
			password: password,
			password_repeat: password_repeat
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				reg();
				$('#steps').addClass('finish');
				$('#steps_4').fadeOut(0);
				$('#steps_5').fadeIn(250);
			} else {
				if (json.errs.err_all) {
					$('#password').addClass('err');
					$('#password_repeat').addClass('err');

					$('#steps_err_4').html('<div class="error">' + json.errs.err_all + '</div>');
				} else {
					if (json.errs.err_password) {
						$('#password').addClass('err');

						$('#steps_err_4').html('<div class="error">' + json.errs.err_password + '</div>');
					}

					if (json.errs.err_password_repeat) {
						$('#password_repeat').addClass('err');

						$('#steps_err_4').html('<div class="error">' + json.errs.err_password_repeat + '</div>');
					}
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function reg() {
	var email = $('#email').val();
	var fname = $('#fname').val();
	var lname = $('#lname').val();
	var url = $('#url').val();
	var password = $('#password').val();

	$.ajax({
		type: 'POST',
		url: '/apps/reg.app.php',
		data: {
			email: email,
			fname: fname,
			lname: lname,
			url: url,
			password: password
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				
			} else {
				if (json.errs.err_all) {
					alert(0);
				}
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function steps_5(i) {
	var url = $('#url').val();

	$(location).attr('href', '/' + url);
}

function password(i) {
	var btn = preload_btn(i);
	var email = $('#email').val();

	$('#email').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/password_new.app.php',
		data: {
			email: email
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#steps').removeClass('login').addClass('finish');
				$('#steps_email').fadeOut(0);
				$('#steps_send').fadeIn(250);
			} else {
				if (json.errs.err_email) {
					$('#email').addClass('err');

					$('#err_email').html('<div class="error">' + json.errs.err_email + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function password_edit(i) {
	var btn = preload_btn(i);
	var password = $('#password').val();
	var password_repeat = $('#password_repeat').val();

	$('#password').removeClass('err');
	$('#password_repeat').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/password_edit.app.php',
		data: {
			password: password,
			password_repeat: password_repeat
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$(location).attr('href', '/');
			} else {
				if (json.errs.err_all) {
					$('#password').addClass('err');
					$('#password_repeat').addClass('err');

					$('#err_password').html('<div class="error">' + json.errs.err_all + '</div>');
				} else {
					if (json.errs.err_password) {
						$('#password').addClass('err');

						$('#err_password').html('<div class="error">' + json.errs.err_password + '</div>');
					}

					if (json.errs.err_password_repeat) {
						$('#password_repeat').addClass('err');

						$('#err_password').html('<div class="error">' + json.errs.err_password_repeat + '</div>');
					}
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function descr_reload() {
	$.ajax({
		url: '/apps/reloads/descr.app.php',

		success: function(html) {
			$('#profile .profile_descr').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function input_select(e) {
	e.focus();
}

function bar(e) {
	$(e).children('.burg_bar').toggleClass('active');
	$('#bar').toggleClass('active');
	$('#profile').toggleClass('active');
	$('.pad_bar').toggleClass('active');
	$('body').toggleClass('bar_overflow');

	if (!$(e).children('.burg_bar').hasClass('active')) {
		$('#burg').removeClass('arrow');

		setTimeout(function() {
			bar_slide('prev', 0);

			$('.pad_animation').removeClass('hover');
			$('.vision_anima').removeClass('hover');
		}, 330);
	} else {
		$('.burg.notifs .burg_bar').removeClass('active');
		$('#notifications').removeClass('active');

		if (!$('.vision_anima').hasClass('hover')) {
			let b = 0;

			let vision_anima = setInterval(function() {
				let a = $('.vision_anima').eq(b);

				a.addClass('hover');

				b++;

				if (b == 14) {
					clearTimeout(vision_anima);
				}
			}, 50);
		}

		if (!$('.pad_animation').hasClass('hover')) {
			let c = 0;

			let pad_animation = setInterval(function() {
				let d = $('.pad_animation').eq(c);

				d.addClass('hover');

				c++;

				if (c == 4) {
					clearTimeout(pad_animation);
				}
			}, 200);
		}
	}
}

function bar_id(func, level, id) {
	if (!$('#burg').children('.burg_bar').hasClass('active')) {
		bar('#burg');

		setTimeout(function() {
			bar_slide(func, level, id);
		}, 330);
	} else {
		bar_slide(func, level, id);
	}
}

function notifs(e) {
	let el = $(e).children('.burg_bar');

	if (el.hasClass('active')) {
		el.toggleClass('active');
		$('#notifications').removeClass('active');
	} else {
		el.toggleClass('active');
		$('#notifications').addClass('active');
	}
}

let headScripts = {};

function scriptReady( name, module ) {
	console.log( 'scriptReady', name );

	headScripts[ name ] = true;

	if ( module && module.init ) {
		module.init();
	}
}

function bar_include(a) {
	var script = document.createElement('script');

	script.src = a;

	document.getElementsByTagName('head')[0].appendChild(script);
}

function bar_slide(func, level, id, bttf) {
	var bar_level = $('#bar_level_' + level + ' .bar_scroll'),
		level_prev = level - 1,
		burg = $('#burg'),
		pad = $('.pad_bar'),
		bar = $('#bar');

	if (id) {
		bar_level.empty().append('<div class="bar_preloader"></div>');

		$.ajax({
			type: 'POST',
			url: '/apps/bar.app.php',
			data: {
				id: id
			},

			success: function(html) {
				bar_level.empty().append(html);

				bar_level.scroll();

				retina_start();

				if (!headScripts['bar10_js'] && id === 10) {
					bar_include('/js/bar-10.js');
				}

				if (!headScripts['videojs'] && id === 23) {
					bar_include('/js/video.js' );
				}

				if (!headScripts['portfoliojs'] && id === 37) {
					bar_include('/js/portfolio.js?5');
				}

				if (!headScripts['videojs'] && id === 51) {
					bar_include('/js/video.js' );
				}

				if (!headScripts['videojs'] && id === 71) {
					bar_include('/js/video.js' );
				}
			},

			error: function(error) {
				console.log(error);
			}
		});

		if (!bttf) {
			bttf_lvl.push(level);
			bttf_bar.push(id);
		}
	}

	$('.bar_level').removeClass('level_1').removeClass('level_2');

	if (level != 0) {
		pad.removeClass('active');
		burg.attr('onclick', 'bar_slide(\'prev\', ' + level_prev + ');').addClass('back');
	} else {
		if (bar.hasClass('active')) {
			pad.addClass('active');
		}

		burg.attr('onclick', 'bar(this);').removeClass('back');
	}

	if (level == 1) {
		$('.bar_level').addClass('level_1');
	}

	if (level == 2) {
		$('.bar_level').addClass('level_1').addClass('level_2');
	}

	$('.bar_scroll').removeClass('scroll');
	bar_level.addClass('scroll').scroll();
}

function bar_reload(level, id) {
	var bar_level = $('#bar_level_' + level + ' .bar_scroll');

	bar_level.empty().append('<div class="bar_preloader"></div>');

	$.ajax({
		type: 'POST',
		url: '/apps/bar.app.php',
		data: {
			id: id
		},

		success: function(html) {
			bar_level.empty().append(html);

			bar_level.scroll();

			retina_start();

			if (!headScripts['bar10_js'] && id === 10) {
				bar_include('/js/bar-10.js');
			}

			if (!headScripts['videojs'] && id === 23) {
				bar_include('/js/video.js' );
			}

			if (!headScripts['portfoliojs'] && id === 37) {
				bar_include('/js/portfolio.js?5');
			}

			if (!headScripts['videojs'] && id === 51) {
				bar_include('/js/video.js' );
			}

			if (!headScripts['videojs'] && id === 71) {
				bar_include('/js/video.js' );
			}
		},

		error: function(error) {
			console.log(error);
		}
	});
}

var bttf_lvl = [],
	bttf_bar = [];

function back_to_the_future() {
	let a = bttf_lvl.length - 2,
		b = bttf_lvl.length - 1;

	bar_slide('', bttf_lvl[a], bttf_bar[a], true);

	bttf_lvl.splice(b, 1);
	bttf_bar.splice(b, 1);
}

$(document).on('keyup', function(e) {
	if (e.keyCode === 27) {
		let a = $('#burg'),
			b = a.children('.burg_bar'),
			c = $('.burg.notifs'),
			d = c.children('.burg_bar');

		if (b.hasClass('active')) {
			if (a.hasClass('arrow')) {
				a.attr('onclick', 'bar(this);');
			}

			bar(a);
		}

		if (d.hasClass('active')) {
			notifs(c);
		}
	}
});

function social_open(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_12.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

var request_hash_id = '';

function request_modal(id) {
	open_modal('#request_modal');

	if (id != request_hash_id) {
		$('#request_err').html('');
		$('#request_fname').removeClass('err').val('');
		$('#request_email').removeClass('err').val('');
		$('#request_mail').removeClass('err').val('');

		request_hash_id = id;
	}

	$('#request_button').val(id);
}

function request_send(i, id) {
	var btn = preload_btn(i);
	var fname = $('#request_fname').val();
	var email = $('#request_email').val();
	var mail = $('#request_mail').val();
	var button = $('#request_button').val();

	$('#request_fname').removeClass('err');
	$('#request_email').removeClass('err');
	$('#request_mail').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/request.app.php',
		data: {
			pid: id,
			fname: fname,
			email: email,
			mail: mail,
			button: button
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				close_modal('#request_modal');

				$('#request_err').html('');
				$('#request_fname').removeClass('err').val('');
				$('#request_email').removeClass('err').val('');
				$('#request_mail').removeClass('err').val('');

				show_msg(json.success);

				stats(id, 4);
			} else {
				if (json.errs.err_mail) {
					$('#request_mail').addClass('err');

					$('#request_err').html('<div class="error">' + json.errs.err_mail + '</div>');
				}

				if (json.errs.err_email) {
					$('#request_email').addClass('err');

					$('#request_err').html('<div class="error">' + json.errs.err_email + '</div>');
				}

				if (json.errs.err_fname) {
					$('#request_fname').addClass('err');

					$('#request_err').html('<div class="error">' + json.errs.err_fname + '</div>');
				}

				if (json.errs.err_limit) {
					$('#request_err').html('<div class="error">' + json.errs.err_limit + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function design_save(format, e) {
	$('#profile').attr('class', 'var_' + format + ' active');
	$('.bar_format').removeClass('active');
	$(e).addClass('active');

	if (format == 'medium') {
		$('#content').removeClass('hidden');
	} else {
		$('#content').addClass('hidden');
	}

	$.ajax({
		type: 'POST',
		url: '/apps/design.app.php',
		data: {
			format: format
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#profile .profile_avatar img').attr('src', '/modules/upl/' + json.size + '/' + json.avatar);

				show_msg(json.success);

				retina_start('#profile .profile_avatar img');
			}

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function music_search(search) {
	$.ajax({
		type: 'POST',
		url: '/apps/music_search.app.php',
		data: {
			search: search
		},

		success: function(html) {
			$('#music_blocks').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function sound_sort() {
	var sort = [];

	$('.dragon_ui .dragon_li').each(function() {
		let a = $(this).attr('data-sound-id');

		sort.push(a);
	});

	$.ajax({
		type: 'POST',
		url: '/apps/sound_sort.app.php',
		data: {
			sort: sort
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				sound_reload();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function sound_open(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_65.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function sound_save(i, id) {
	var btn = preload_btn(i);
	var link = $('#link').val();

	$('#sound_err').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/sound_save.app.php',
		data: {
			id: id,
			link: link
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 64);

				sound_reload();
			} else {
				if (json.errs.err_link) {
					$('#sound_err').addClass('err');

					$('#sound_err').html('<div class="error">' + json.errs.err_link + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function sound_delete(i, id) {
	var btn = preload_btn(i);

	$.ajax({
		type: 'POST',
		url: '/apps/sound_delete.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 64);

				sound_reload();

				show_msg(json.success);
			}

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function sound_reload() {
	$.ajax({
		url: '/apps/reloads/sound.app.php',

		success: function(html) {
			$('#profile_sound').empty().append(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function social_search(search) {
	$.ajax({
		type: 'POST',
		url: '/apps/social.app.php',
		data: {
			search: search
		},

		success: function(html) {
			$('#social_blocks').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function social_sort() {
	var sort = [];

	$('.dragon_ui .dragon_li').each(function() {
		let a = $(this).attr('data-social-id');

		sort.push(a);
	});

	$.ajax({
		type: 'POST',
		url: '/apps/social_sort.app.php',
		data: {
			sort: sort
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				social_reload();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function nets_search(search) {
	$.ajax({
		type: 'POST',
		url: '/apps/nets_search.app.php',
		data: {
			search: search
		},

		success: function(html) {
			$('#search_nets_result').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function nets_url_search(search) {
	$.ajax({
		type: 'POST',
		url: '/apps/nets_url_search.app.php',
		data: {
			search: search
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#icon').val(json.id);
				$('.select_nets_image').children('img').attr('src', '/images/icons/nets/' + json.id + '.svg');
				nets_icon_portal(json.id);
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

$(function() {
	$(document).on('keyup', '#social', function() {
		var soc = $(this).val();

		if (soc.length >= 1) {
			social_search(soc);
		} else {
			social_search(0);
		}
	});
});

$(function() {
	$(document).on('keyup', '#music', function() {
		var a = $(this).val();

		if (a.length >= 1) {
			music_search(a);
		} else {
			music_search(0);
		}
	});
});

$(function() {
	$(document).on('keyup', '#search_nets', function() {
		var a = $(this).val();

		if (a.length >= 1) {
			nets_search(a);
		} else {
			nets_search(0);
		}
	});
});

$(function() {
	$(document).on('keyup', '.input_nets_url', function() {
		var a = $(this).val();

		if (a.length >= 1) {
			nets_url_search(a);
		}
	});
});

function hex2rgb(hex) {
	let r,
		g,
		b;

	if (hex.length == 3) {
		var a = /^([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);

		a[1] += a[1];
		a[2] += a[2];
		a[3] += a[3];
	} else if (hex.length == 6) {
		var a = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	}

	r = parseInt(a[1], 16);
	g = parseInt(a[2], 16);
	b = parseInt(a[3], 16);

	return { r: r, g: g, b: b }
}

function color_pick(color, e) {
	let a = $(e);

	$('.bar_pal').removeClass('active');
	a.addClass('active');

	var color_rgb = hex2rgb(color);

	var gray = 0.299 * color_rgb['r'] + 0.587 * color_rgb['g'] + 0.114 * color_rgb['b'];

	if (gray > 160) {
		$('#profile .profile_target:not(.custom)').css('color', '#000');

		$('#profile .profile_verify path').eq(1).css('fill', '#000');

		$('#profile #profile_nets .nets_block:not(.custom) path').css('fill', '#000');
		$('#profile #profile_nets .nets_block:not(.custom)').css('background-color', '#' + color);

		$('#bar_icons_color .profile_social_icon').css('background-color', '#' + color);
		$('#bar_icons_color .social_fill').css('fill', '#000');

		$('#profile .profile_descr a').css({'color': '#000', 'background-color': '#' + color});

		$('#profile .profile_faqs_arrow path').css('fill', '#000');
		$('#profile .profile_faqs_descr a').css({'color': '#000', 'background-color': '#' + color});

		if (!$('#profile_social .profile_social_icon').hasClass('gray')) {
			$('#profile_social .profile_social_icon').css('background-color', '#' + color);
			$('#profile_social .social_fill').css('fill', '#000');
		}

		$('#profile_faqs .profile_faqs_block').css('border-color', '#' + color);

		$('#profile_sound .profile_sound_button').css('background-color', '#' + color);
		$('#profile_sound .music_fill').css('fill', '#000');
		$('#profile_sound .profile_sound_listen').css('color', '#000');
	} else {
		$('#profile .profile_target:not(.custom)').eq(0).css('color', '#FFF');
		$('#profile .profile_target_row:not(:first) .profile_target:not(.custom)').css('color', '#' + color);

		$('#profile .profile_verify path').eq(1).css('fill', '#FFF');

		$('#profile #profile_nets .nets_block:not(.custom) path').css('fill', '#' + color);
		$('#profile #profile_nets .nets_block:not(.custom)').css('background-color', 'rgba(' + color_rgb['r'] + ', ' + color_rgb['g'] + ', ' + color_rgb['b'] + ', .08)');

		$('#bar_icons_color .profile_social_icon').css('background-color', 'rgba(' + color_rgb['r'] + ', ' + color_rgb['g'] + ', ' + color_rgb['b'] + ', .08)');
		$('#bar_icons_color .social_fill').css('fill', '#' + color);

		$('#profile .profile_descr a').css({'color': '#' + color, 'background-color': 'rgba(' + color_rgb['r'] + ', ' + color_rgb['g'] + ', ' + color_rgb['b'] + ', .08)'});

		$('#profile .profile_faqs_arrow path').css('fill', '#' + color);
		$('#profile .profile_faqs_descr a').css({'color': '#' + color, 'background-color': 'rgba(' + color_rgb['r'] + ', ' + color_rgb['g'] + ', ' + color_rgb['b'] + ', .08)'});

		if (!$('#profile_social .profile_social_icon').hasClass('gray')) {
			$('#profile_social .profile_social_icon').css('background-color', 'rgba(' + color_rgb['r'] + ', ' + color_rgb['g'] + ', ' + color_rgb['b'] + ', .08)');
			$('#profile_social .social_fill').css('fill', '#' + color);
		}

		$('#profile_faqs .profile_faqs_block').css('border-color', 'rgba(' + color_rgb['r'] + ', ' + color_rgb['g'] + ', ' + color_rgb['b'] + ', .16)');

		$('#profile_sound .profile_sound_button').css('background-color', 'rgba(' + color_rgb['r'] + ', ' + color_rgb['g'] + ', ' + color_rgb['b'] + ', .08)');
		$('#profile_sound .music_fill').css('fill', '#' + color);
		$('#profile_sound .profile_sound_listen').css('color', '#' + color);
	}

	$('#profile .profile_target:not(.custom)').css('border-color', '#' + color);
	$('#profile .profile_target:not(.custom)').eq(0).css('background-color', '#' + color);
	// Перекрашивание фона.
	// $('body').css('background-color', body_color);
	$('#profile .profile').css('border-color', 'rgba(' + color_rgb['r'] + ', ' + color_rgb['g'] + ', ' + color_rgb['b'] + ', .1)');
	$('#profile .profile_verify path').eq(0).css('fill', '#' + color);

	$.ajax({
		type: 'POST',
		url: '/apps/color.app.php',
		data: {
			color: color
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				
			}

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function icons_pick(color, e) {
	let a = $('#profile_social .profile_social_icon');

	$('.bar_icons').removeClass('active');
	$(e).addClass('active');

	if (color == 0) {
		a.addClass('gray');
	} else if (color == 1) {
		a.removeClass('gray');
	}

	$.ajax({
		type: 'POST',
		url: '/apps/icons.app.php',
		data: {
			color: color
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				
			}

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function stats(pid, type, options) {
	if (!options) {
		options = 0;
	}

	$.ajax({
		type: 'POST',
		url: '/apps/stats.app.php',
		data: {
			pid: pid,
			type: type,
			options: options

		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {

			}

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function video_reload() {
	$.ajax({
		url: '/apps/reloads/video.app.php',

		success: function(html) {
			$('#profile .profile_video').remove();
			$('#profile .profile_descr').after(html);

			retina_start('#profile .profile_video img');
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function video_modal(hash, type) {
	if (type == 0) {
		$('#yt_player').append('<iframe class="video_yt_player" width="100%" height="100%" src="https://www.youtube.com/embed/' + hash + '?enablejsapi=1&amp;autoplay=1&amp;start=0&amp;autohide=1&amp;wmode=opaque&amp;showinfo=0&amp;origin=https://uadd.me&amp;rel=0&amp;iv_load_policy=3" frameborder="0" allowfullscreen="" allow="autoplay; encrypted-media"></iframe>');
	} else if (type == 1) {
		$('#yt_player').append('<iframe class="video_yt_player" width="100%" height="100%" src="https://player.vimeo.com/video/' + hash + '?autoplay=1&autopause=0&loop=1&title=0&byline=0&portrait=0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" frameborder="0"></iframe>');
	}
		

	open_modal('#video_modal');
}

function portfolio_reload() {
	$.ajax({
		url: '/apps/reloads/portfolio.app.php',

		success: function(html) {
			$('#profile .profile_portfolio').remove();
			$('#profile .profile_button').after(html);

			retina_start('#profile .profile_portfolio img');
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function portfolio_all(id) {
	let a = $('#profile .profile_portfolio'),
		b = a.innerHeight();

	$.ajax({
		type: 'POST',
		url: '/apps/portfolio_all.app.php',
		data: {
			id: id
		},

		success: function(html) {
			a.remove();
			$('#profile .profile_button').after(html);
			$('#profile .profile_portfolio').css('min-height', b);

			retina_start('#profile .profile_portfolio img');
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function portfolio_content(id) {
	$.ajax({
		type: 'POST',
		url: '/apps/portfolio_content.app.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#portfolio_content').html(html);

			portfolio_view();

			retina_start('#portfolio_content img');
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function portfolio_crop() {
	let image_id = $('#portfolio_hidden_id').val();

	close_modal('#portfolio_modal');

	openPortfolioModal(image_id);
}

function portfolio_view() {
	open_modal('#portfolio_view_modal');
}

function portfolio_open(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_47.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function copytext(txt) {
	var a = $('<input>');

	$('body').append(a);
	a.val(txt).select();
	document.execCommand('copy');
	a.remove();
}

function copylink(txt, e) {
	let a = $(e),
		b = a.attr('data-lable');

	copytext(txt);

	a.text(b).addClass('active');
}

function copylinker(txt, e) {
	let a = $(e),
		b = a.attr('data-lable');

	copytext('https://uadd.me/' + txt);

	a.addClass('active').children('.bar_linker_url').text(b);

	setTimeout(function() {
		a.removeClass('active').children('.bar_linker_url').text('uadd.me/' + txt);
	}, 2000);
}

function copystyle(stl, e) {
	let a = $(e),
		b = a.attr('data-lable'),
		doc = document,
		text = doc.getElementById(stl),
		range,
		selection;

	if (doc.body.createTextRange) {
		range = doc.body.createTextRange();
		range.moveToElementText(text);
		range.select();
	} else if (window.getSelection) {
		selection = window.getSelection();        
		range = doc.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range);
	}

	document.execCommand('copy');
	window.getSelection().removeAllRanges();
	a.text(b).addClass('active');
}

function copycode(i, e) {
	let a = $(e),
		b = a.attr('data-lable'),
		a_height = a.height();

	copytext('<script src="https://uadd.me/w/' + i + '"></script>');

	a.height(a_height).addClass('active').text(b);
}

function bar_top(e) {
	$(e).animate({
		scrollTop: 0
	}, 300);
}

function scroll_to(e) {
	if ($(e).length != 0) {
		$('html, body').animate({
			scrollTop: $(e).offset().top
		}, 500);
	}
}

var pad_level = 1;

$('#bar_level_0 .bar_scroll').scroll(function() {
	if ($(this).hasClass('scroll')) {
		let e = $('#pad_level_' + pad_level), 
			pos = e.position(),
			burg = $('#burg');

		if (e.length > 0) {
			// if (pos.top < 60) {
			// 	if (burg.children('.burg_bar').hasClass('active')) {
			// 		burg.attr('onclick', 'bar_top(\'.bar_scroll\');').addClass('arrow');
			// 	}
			// } else {
			// 	burg.attr('onclick', 'bar(this);').removeClass('arrow');
			// }

			if (pad_level == 1 || pad_level == 2) {
				pos_limit = 69;
			} else {
				pos_limit = 10;
			}

			if (pos.top < pos_limit) {
				$('.bar_pro_banner').addClass('opacity');
				$('.bar_scan').addClass('opacity');
			} else {
				$('.bar_pro_banner').removeClass('opacity');
				$('.bar_scan').removeClass('opacity');
			}
		}
	}
});

$('#bar_level_1 .bar_scroll').scroll(function() {
	if ($(this).hasClass('scroll')) {
		let ele = $(this).children().filter(':first'), 
			pos = ele.position(),
			burg = $('#burg');

		if (ele.length > 0) {
			// if (pos.top < 60) {
			// 	burg.attr('onclick', 'bar_top(\'.bar_scroll\');').addClass('arrow');
			// } else {
			// 	burg.attr('onclick', 'bar(this);').removeClass('arrow');
			// }
		}
	}
});

$('#bar_level_2 .bar_scroll').scroll(function() {
	if ($(this).hasClass('scroll')) {
		let ele = $(this).children().filter(':first'), 
			pos = ele.position(),
			burg = $('#burg');

		if (ele.length > 0) {
			// if (pos.top < 60) {
			// 	burg.attr('onclick', 'bar_top(\'.bar_scroll\');').addClass('arrow');
			// } else {
			// 	burg.attr('onclick', 'bar(this);').removeClass('arrow');
			// }
		}
	}
});

function bgs_reload() {
	var bar_level = $('#bar_level_1 .bar_scroll');

	bar_level.empty().append('<div class="bar_preloader"></div>');

	$.ajax({
		type: 'POST',
		url: '/apps/bar.app.php',
		data: {
			id: 38
		},

		success: function(html) {
			bar_level.empty().append(html);

			retina_start('.bar_bgs img');
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function bgs_check(id, e) {
	text_revers('.bar_bgs_check.active', 0);
	text_revers(e, 1);

	$('html').removeClass('bgs_1 bgs_2 bgs_3 bgs_4 bgs_5 bgs_6 bgs_7 bgs_8 bgs_9 bgs_10 bgs_11 bgs_12 bgs_13 bgs_14 bgs_15 bgs_16 bgs_17 bgs_18 bgs_19 bgs_20 bgs_21 bgs_22 bgs_23 bgs_24 bgs_25 bgs_26 bgs_27 bgs_28 bgs_29 bgs_30 bgs_31 bgs_32 bgs_33 bgs_34 bgs_35 bgs_36 bgs_37 bgs_38 bgs_39').addClass('bgs bgs_' + id);

	$.ajax({
		type: 'POST',
		url: '/apps/bgs.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			$('#bgs_button_2').fadeIn(300);

			bgs_reload();

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function bgs_load(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_59.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			retina_start('.bar_bgs_list_block img');
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function bgs_delete(e) {
	$.ajax({
		url: '/apps/bgs_delete.app.php',

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#bgs_button_2').fadeOut(300);

				$('.bar_bgs_check').removeClass('active').text(json.check).attr('data-text', json.check_active);
				$('html').removeClass('bgs_1 bgs_2 bgs_3 bgs_4 bgs_5 bgs_6 bgs_7 bgs_8 bgs_9 bgs_10 bgs_11 bgs_12 bgs_13 bgs_14 bgs_15 bgs_16 bgs_17 bgs_18 bgs_19 bgs_20 bgs_21 bgs_22 bgs_23 bgs_24 bgs_25 bgs_26 bgs_27 bgs_28 bgs_29 bgs_30 bgs_31 bgs_32 bgs_33 bgs_34 bgs_35 bgs_36 bgs_37 bgs_38 bgs_39');

				show_msg(json.success);

				bgs_reload();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function themes_reload() {
	var bar_level = $('#bar_level_1 .bar_scroll');

	bar_level.empty().append('<div class="bar_preloader"></div>');

	$.ajax({
		type: 'POST',
		url: '/apps/bar.app.php',
		data: {
			id: 60
		},

		success: function(html) {
			bar_level.empty().append(html);

			retina_start('.bar_bgs img');
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function themes_load(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_61.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			$('link[href^="/styles/themes/"]').remove();

			var rand = Math.round(1 + Math.random() * (999 - 1)),
				url = '/styles/themes/' + id + '.theme.css?' + rand,
				el = $('head link:last');

			$('<link/>', {
				rel: 'stylesheet',
				href: url,
				type: 'text/css'
			}).insertBefore(el);

			retina_start('.bar_bgs_list_block img');
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function themes_check(id, e) {
	var a = $(e);

	$.ajax({
		type: 'POST',
		url: '/apps/themes_check.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			$('#content').addClass('theme_' + id);

			$('#themes_button_2').fadeIn(300);

			a.text(json.check_active).attr('onclick', '');

			themes_reload();

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function themes_delete(e, btn) {
	$.ajax({
		url: '/apps/themes_delete.app.php',

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#content').removeClass('theme_' + json.id);

				$('#themes_button_2').fadeOut(300);

				if (btn) {
					$('#theme_button_check').text(json.check).attr('onclick', 'themes_check(' + json.id + ', this)');
				}

				show_msg(json.success);

				themes_reload();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

$(function() {
	$('.msg').addClass('active');

	// При клике по системному сообщению.
	$(document).on('click', '.msg', function() {
		let e = $(this),
			url = e.attr('data-url');

		$('.msg').removeClass('active');

		if (url) {
			history.replaceState(null, null, '/' + url);
		}
	});
});

function show_msg(txt) {
	let rand = Math.round(1 + Math.random() * (999 - 1));

	$('.msg').removeClass('active');

	$('body').prepend('<div class="msg msg_' + rand + '">' + txt + '</div>');

	setTimeout(function() {
		$('.msg_' + rand).addClass('active');
	}, 100);

	setTimeout(function() {
		$('.msg_' + rand).removeClass('active');
	}, 5000);
}

function quit(i) {
	$.ajax({
		url: '/apps/quit.app.php',

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$(location).attr('href', '/login');
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function hobby_search(search) {
	var hobbies = [];

	$('#hobby_check .tags_cell').each(function() {
		let a = $(this).children('.tags_cell_text').text();

		if (a != '') {
			hobbies.push(a);
		}
	});

	$.ajax({
		type: 'POST',
		url: '/apps/hobby_search.app.php',
		data: {
			search: search,
			hobbies: hobbies
		},

		success: function(html) {
			$('#hobby_result').empty().append(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

$(function() {
	$(document).on('keyup', '#hobby', function() {
		if ($(this).val().length >= 1) {
			hobby_search($(this).val());
		} else {
			hobby_search(0);
		}
	});
});

function hobby_delete(e) {
	let a = $(e);

	a.text('').parent('.tags_cell.active').removeClass('active');

	hobby_search(0);

	hobby_update();
}

function hobby_remove(e) {
	let a = $(e),
		b = a.text(),
		c = $('#hobby_check .tags_cell.active');

	c.each(function() {
		let d = $(this),
			f = d.children('.tags_cell_text').text();

		if (b == f) {
			d.removeClass('active').children('.tags_cell_text').text('');

			return false;
		}
	});

	a.parents('.select_input').children('.input').val('');

	hobby_search(0);

	hobby_update();
}

function hobby_update() {
	let a = $('#hobby_check .tags_cell').length,
		b = $('#hobby_check .tags_cell.active').length,
		c = $('#hobby'),
		d = $('#hobby_check'),
		g = $('#hobby_check .tags_cell');

	if (a == b) {
		c.attr('disabled', 'disabled');
	} else {
		c.removeAttr('disabled');
	}

	g.each(function() {
		let f = $(this),
			t = f.children('.tags_cell_text').text();

		if (!f.hasClass('active') && t == '') {
			d.append(f);
		}
	});

	hobby_portal();
}

function hobby_portal() {
	let a = $('#hobby_check .tags_cell.active'),
		b = new Array(),
		c,
		n = $('#hobby_and').val(),
		h = $('#hobby_choose').val();

	a.each(function() {
		let d = $(this).text();

		b.push(d);
	});

	c = parts(n, h, b[0], b[1], b[2]);

	$('#hobby_portal').text(c);
}

function parts(and, choose, a, b, c) {
	if (c) {
		return a + ', ' + b + ' ' + and + ' ' + c;
	} else if (b) {
		return a + ' ' + and + ' ' + b;
	} else if (a) {
		return a;
	} else {
		return choose;
	}
}

function hobby_add(e) {
	let a = $(e),
		b = a.text(),
		c = $('#hobby_check .tags_cell');

	c.each(function() {
		let d = $(this),
			f = d.children('.tags_cell_text').text();

		if (!d.hasClass('active') && f == '') {
			d.addClass('active').children('.tags_cell_text').text(b);

			return false;
		}
	});

	a.parents('.select_input').children('.input').val('');

	hobby_search(0);

	hobby_update();
}

function hobby_save(i) {
	var btn = preload_btn(i);
	var hobbies = [];

	$('#hobby_check .tags_cell').each(function() {
		let a = $(this).children('.tags_cell_text').text();

		hobbies.push(a);
	});

	$('#hobby_err').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/hobby.app.php',
		data: {
			hobbies: hobbies
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);

				hobby_reload();
			} else {
				if (json.errs.err_hob) {
					$('#hobby_err').addClass('err');

					$('#hobby_err').html('<div class="error">' + json.errs.err_hob + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function hobby_reload() {
	$.ajax({
		url: '/apps/reloads/hobby.app.php',

		success: function(html) {
			$('#profile .profile_subtitle').empty().append(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function hobby_edit_save(i) {
	var btn = preload_btn(i);
	var name = $('#name').val();
	var lang = $('#lang').val();

	$('#name').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/hobby_edit_save.app.php',
		data: {
			name: name,
			lang: lang
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 55);
			} else {
				if (json.errs.err_name) {
					$('#name').addClass('err');

					$('#hobby_err').html('<div class="error">' + json.errs.err_name + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function hobby_edit_edit(i, id) {
	var btn = preload_btn(i);
	var name = $('#name').val();
	var lang = $('#lang').val();

	$('#name').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/hobby_edit_edit.app.php',
		data: {
			id: id,
			name: name,
			lang: lang
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 55);
			} else {
				if (json.errs.err_name) {
					$('#name').addClass('err');

					$('#hobby_err').html('<div class="error">' + json.errs.err_name + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function hobby_edit_load(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_57.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}
function hobby_edit_delete(i, id) {
	var btn = preload_btn(i);

	$.ajax({
		type: 'POST',
		url: '/apps/hobby_edit_delete.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 55);

				show_msg(json.success);
			}

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function cookie_ok() {
	$.ajax({
		url: '/apps/cookie.app.php',

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				$('#cookies').fadeOut(300);
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

var clr_h = 0,
	clr_s = 100,
	clr_l = 50,
	cntr_coof = 0.5;

function hsl_result() {
	let a = hsl2rgb(clr_h, clr_s, clr_l),
		b = $('#color_h'),
		c = $('#color_s'),
		d = $('#color_l'),
		f = hsl2rgb(clr_h, 100, 50),
		g = hsl2rgb(0, clr_s, clr_l),
		h = hsl2rgb(clr_h, clr_s, 50),
		min = contr_res(g['g']),
		max = contr_res(g['r']),
		c_r_f = contr_res(127),
		c_g_f = contr_res(127),
		c_b_f = contr_res(127),
		c_r_l = contr_res(f['r']),
		c_g_l = contr_res(f['g']),
		c_b_l = contr_res(f['b']);

	$('#color_result').css('background-color', 'rgb(' + a['r'] + ', ' + a['g'] + ', ' + a['b'] + ')');

	color_input(a['r'], a['g'], a['b']);

	b.css('background-image', 'linear-gradient(to right, rgb(' + g['r'] + ', ' + g['g'] + ', ' + g['g'] + '), rgb(' + g['r'] + ', ' + g['r'] + ', ' + g['g'] + '), rgb(' + g['g'] + ', ' + g['r'] + ', ' + g['g'] + '), rgb(' + g['g'] + ', ' + g['r'] + ', ' + g['r'] + '), rgb(' + g['g'] + ', ' + g['g'] + ', ' + g['r'] + '), rgb(' + g['r'] + ', ' + g['g'] + ', ' + g['r'] + '), rgb(' + g['r'] + ', ' + g['g'] + ', ' + g['g'] + '))');
	c.css('background-image', 'linear-gradient(to right, rgb(' + c_r_f + ', ' + c_g_f + ', ' + c_b_f + '), rgb(' + c_r_l + ', ' + c_g_l + ', ' + c_b_l + '))');
	d.css('background-image', 'linear-gradient(to right, rgb(0, 0, 0), rgb(' +  h['r'] + ', ' +  h['g'] + ', ' +  h['b'] + '), rgb(255, 255, 255))');
}

function color_reload() {
	let a = hsl2hex(clr_h, clr_s, clr_l);

	$('#multicolor_input').val('#' + a);

	color_pick(a, '.bar_pal.multic');
}

function contr_coof(step) {
	cntr_coof = step / 100;
}

function color_input(r, g, b) {
	let gray = 0.299 * r + 0.587 * g + 0.114 * b;

	console.log(gray);

	if (gray > 160) {
		$('#multicolor_input').addClass('black');
	} else {
		$('#multicolor_input').removeClass('black');
	}
}

function contr_res(a) {
	let c = cntr_coof * 2;

	if (cntr_coof <= 0.5) {
		a = Math.ceil(a * c);
	} else {
		a = Math.ceil((255 - a) * (c - 1) + a);
	}

	return a;
}

function hsl2rgb(h, s, l) {
	var r, g, b, m, c, x;

	if (!isFinite(h)) h = 0;
	if (!isFinite(s)) s = 0;
	if (!isFinite(l)) l = 0;

	h /= 60;
	if (h < 0) h = 6 - (-h % 6);
	h %= 6;

	s = Math.max(0, Math.min(1, s / 100));
	l = Math.max(0, Math.min(1, l / 100));

	c = (1 - Math.abs((2 * l) - 1)) * s;

	x = c * (1 - Math.abs((h % 2) - 1));

	if (h < 1) {
		r = c;
		g = x;
		b = 0;
	} else if (h < 2) {
		r = x;
		g = c;
		b = 0;
	} else if (h < 3) {
		r = 0;
		g = c;
		b = x;
	} else if (h < 4) {
		r = 0;
		g = x;
		b = c;
	} else if (h < 5) {
		r = x;
		g = 0;
		b = c;
	} else {
		r = c;
		g = 0;
		b = x;
	}

	m = l - c / 2;

	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return { r: r, g: g, b: b }
}

function hex2hsl(hex) {
	if (hex.length == 4) {
		var a = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);

		a[1] += a[1];
		a[2] += a[2];
		a[3] += a[3];
	} else if (hex.length == 7) {
		var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	}

	r = parseInt(a[1], 16);
	g = parseInt(a[2], 16);
	b = parseInt(a[3], 16);

	r /= 255;
	g /= 255;
	b /= 255;

	var max = Math.max(r, g, b),
		min = Math.min(r, g, b);

	var h, s, l = (max + min) / 2;

	if (max == min) {
		h = s = 0;
	} else {
		var d = max - min;

		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch(max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}

		h /= 6;
	}

	h = Math.round(h * 360);
	s = Math.round(s * 100);
	l = Math.round(l * 100);

	return { h: h, s: s, l: l }
}

function hsl2hex(h, s, l) {
	 h /= 360;
	 s /= 100;
	 l /= 100;
	 let r, g, b;
	 if (s === 0) {
	   r = g = b = l; // achromatic
	 } else {
	   const hue2rgb = (p, q, t) => {
		 if (t < 0) t += 1;
		 if (t > 1) t -= 1;
		 if (t < 1 / 6) return p + (q - p) * 6 * t;
		 if (t < 1 / 2) return q;
		 if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		 return p;
	   };
	   const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	   const p = 2 * l - q;
	   r = hue2rgb(p, q, h + 1 / 3);
	   g = hue2rgb(p, q, h);
	   b = hue2rgb(p, q, h - 1 / 3);
	 }
	 const toHex = x => {
	   const hex = Math.round(x * 255).toString(16);
	   return hex.length === 1 ? '0' + hex : hex;
	 };
	 return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function start_nex(hex) {
	if (hex) {
		var a = hex2hsl(hex);
	} else {
		var a = $('#multicolor_input').val();

		a = hex2hsl(a);
	}

	$('#slider_h').slider('value', a['h']);
	$('#slider_s').slider('value', a['s']);
	$('#slider_l').slider('value', a['l']);
}

$(document).on('input', '#multicolor_input', function() {
	let a = $( this ).val();

	if (a.length == 4 || a.length == 7) {
		start_nex(a);

		a = a.replace('#', '');

		if (!a.hasClass('not')) {
			color_pick(a, '.bar_pal.multic');
		}
	}
});

function lang_choose(id) {
	$.ajax({
		type: 'POST',
		url: '/apps/lang.app.php',
		data: {
			id: id
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				location.reload();
			}

			console.log(json);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function email_preferences_save(i) {
	var btn = preload_btn(i);
	var weekly = $('#weekly');

	if (weekly.is(':checked')) {
		weekly = 1;
	} else {
		weekly = 0;
	}

	$.ajax({
		type: 'POST',
		url: '/apps/email_preferences_save.app.php',
		data: {
			weekly: weekly
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function pad_bar(id, e) {
	let a = $('.pad_bar_block'),
		b = $(e),
		c = $('.pad_level'),
		d = $('#pad_level_' + id);

	a.removeClass('active').removeClass('hover');
	b.addClass('active');

	c.fadeOut(0);
	d.fadeIn(150);

	pad_level = id;
}

function button_pallet(func, e) {
	let a = $('#button_pallet');

	if (func == 'open') {
		a.fadeIn(300);

		if (e) {
			$('.bar_pal').removeClass('active');
			$(e).addClass('active');
		}
	}

	if (func == 'close') {
		a.fadeOut(0);
	}
}

function nets_pallet(func, e) {
	let a = $('#nets_pallet');

	if (func == 'open') {
		a.fadeIn(300);

		if (e) {
			$('.bar_pal').removeClass('active');
			$(e).addClass('active');
		}
	}

	if (func == 'close') {
		a.fadeOut(0);
	}
}

function button_color_type(func) {
	let a = $('#button_color_type');

	if (func == 'open') {
		a.fadeIn(300);
	}

	if (func == 'close') {
		a.fadeOut(0);
	}
}

function nets_color_type(func) {
	let a = $('#nets_color_type');

	if (func == 'open') {
		a.fadeIn(300);
	}

	if (func == 'close') {
		a.fadeOut(0);
	}
}

function button_write_off(e) {
	let a = $('#button_write_off'),
		b = $(e).siblings('input');

	if (b.is(':checked')) {
		a.fadeOut(0);
	} else {
		a.fadeIn(300);
	}
}

function button_multicolor(color) {
	$('#multicolor_input').val(color);
}

function button_color(color, e) {
	let a = $(e);

	$('.bar_pal').removeClass('active');
	a.addClass('active');

	button_multicolor('#' + color);
}

function button_color_reload() {
	let a = hsl2hex(clr_h, clr_s, clr_l);

	$('#multicolor_input').val('#' + a);
}

function nets_multicolor(color) {
	$('#multicolor_input').val(color);
}

function nets_color(color) {
	let a = $('.bar_pal[data-color="' + color + '"]');

	$('.bar_pal').removeClass('active');

	if (a.length > 0) {
		a.addClass('active');
	} else {
		$('.bar_pal.multic').addClass('active');
	}

	nets_multicolor('#' + color);
}

function nets_color_reload() {
	let a = hsl2hex(clr_h, clr_s, clr_l);

	$('#multicolor_input').val('#' + a);

	nets_color_portal(a);
}

function nets_color_portal(a) {
	var color_rgb = hex2rgb(a);

	var gray = 0.299 * color_rgb['r'] + 0.587 * color_rgb['g'] + 0.114 * color_rgb['b'];

	if (gray > 160) {
		$('#nets_portal .nets_block').css('background-color', '#' + a);
		$('#nets_portal .social_fill').css('fill', '#000');
	} else {
		$('#nets_portal .nets_block').css('background-color', 'rgba(' + color_rgb['r'] + ', ' + color_rgb['g'] + ', ' + color_rgb['b'] + ', .08)');
		$('#nets_portal .social_fill').css('fill', '#' + a);
	}
}

function nets_icon_portal(id) {
	var color = $('#multicolor_input').val();

	$.ajax({
		type: 'POST',
		url: '/apps/nets_icon.app.php',
		data: {
			id: id,
			color: color
		},

		success: function(html) {
			$('#nets_portal .nets_icon').html(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function time_zone_save(i) {
	var btn = preload_btn(i);
	var time_zone = $('#time_zone').val();

	$('#time_zone').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/time_zone.app.php',
		data: {
			time_zone: time_zone
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);
			} else {
				if (json.errs.err_time_zone) {
					$('#time_zone').addClass('err');

					$('#time_zone_err').html('<div class="error">' + json.errs.err_time_zone + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function meta_save(i) {
	var btn = preload_btn(i);
	var meta_title = $('#meta_title').val();
	var meta_descr = $('#meta_descr').val();

	$('#meta_title').removeClass('err');
	$('#meta_descr').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/meta_save.app.php',
		data: {
			meta_title: meta_title,
			meta_descr: meta_descr
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 0);

				if (json.title != '') {
					$('head title').text(json.title);
				}

				if (json.descr != '') {
					$('meta[name="description"]').attr('content', json.descr);
				}
			} else {
				if (json.errs.err_meta_title) {
					$('#meta_title').addClass('err');

					$('#meta_err').html('<div class="error">' + json.errs.err_meta_title + '</div>');
				}

				if (json.errs.err_meta_descr) {
					$('#meta_descr').addClass('err');

					$('#meta_err').html('<div class="error">' + json.errs.err_meta_descr + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.
// Ниже НП ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––.


















































function events_save(i) {
	var btn = preload_btn(i);
	var name = $('#name').val();
	var descr = $('#descr').val();

	$('#name').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/events.app.php',
		data: {
			name: name,
			descr: descr
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 32);
			} else {
				if (json.errs.err_name) {
					$('#name').addClass('err');

					$('#events_err').html('<div class="error">' + json.errs.err_name + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function events_edit(i, id) {
	var btn = preload_btn(i);
	var name = $('#name').val();
	var descr = $('#descr').val();

	$('#name').removeClass('err');

	$.ajax({
		type: 'POST',
		url: '/apps/events_edit.app.php',
		data: {
			id: id,
			name: name,
			descr: descr
		},

		success: function(html) {
			var json = JSON.parse(html);

			if (json.process == 1) {
				bar_slide('prev', 1, 32);
			} else {
				if (json.errs.err_name) {
					$('#name').addClass('err');

					$('#events_err').html('<div class="error">' + json.errs.err_name + '</div>');
				}
			}

			console.log(json);

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}

function events_open(id) {
	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_34.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function events_load(e, id) {
	e.stopPropagation();

	$.ajax({
		type: 'POST',
		url: '/incs/bar/bar_35.inc.php',
		data: {
			id: id
		},

		success: function(html) {
			$('#bar_level_2 .bar_scroll').empty().append(html);

			console.log(html);
		},

		error: function(error) {
			console.log(error);
		}
	});
}

function events_delete(i, id) {
	var btn = preload_btn(i);

	$.ajax({
		type: 'POST',
		url: '/apps/events_delete.app.php',
		data: {
			id: id
		},

		success: function() {
			bar_slide('prev', 1, 32);

			show_msg('Событие успешно перенесено в архив.');

			$('.button.load').replaceWith(btn);
		},

		error: function(error) {
			console.log(error);

			$('.button.load').replaceWith(btn);
		}
	});
}