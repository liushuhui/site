
$(function() {
	
	$('.current').click(function() {
		if($.cookie('user')) {
			
		} else {
			$('#error').dialog('open');
			setTimeout(function() {
				$('#error').dialog('close');
				$('#login').dialog('open');
			}, 1000);
		}
	});
	


	$('#error').dialog({
		autoOpen: false,
		modal: true,
		closeOnEscape: false,
		resizable: false,
		draggable: false,
		width: 220,
		height: 50,
	}).parent().find('.ui-widget-header').hide();

	$('#member, #logout').hide();
	if($.cookie('user')) {
		$('#member, #logout').show();
		$('#reg_a ,#login_a').hide();
		$('#member').html($.cookie('user'));
	} else {
		$('#member, #logout').hide();
		$('#reg_a ,#login_a').show();
	}
	$('#logout').click(function() {
		$.removeCookie('user');
		window.location.href = '/biyesheji/';
	});
	$('#loading').dialog({
		autoOpen: false,
		modal: true,
		closeOnEscape: false,
		resizable: false,
		draggable: false,
		width: 180,
		height: 50,
	}).parent().find('.ui-widget-header').hide();

	$('#reg_a').click(function() {
		$('#reg').dialog('open');
	});
//	//注册
//	$('#reg').dialog({
//		autoOpen: false,
//		modal: true,
//		resizable: false,
//		width: 340,
//		height: 400,
//		buttons: {
//			'提交': function() {
//				$(this).submit();
//			},
//			'取消': function() {
//				$(this).dialog('close');
//			},
//		},
//	}).buttonset().validate({
//		submitHandler: function(form) {
//			$(form).ajaxSubmit({
//				url: 'add.php',
//				type: 'POST',
//				beforeSubmit: function(formData, jqForm, options) {
//					$('#loading').dialog('open');
//					$('#reg').dialog('widget').find('button').eq(1).button('disable');
//				},
//				success: function(responseText, statusText) {
//					if(responseText) {
//						$('#reg').dialog('widget').find('button').eq(1).button('enable');
//						$('#loading').css('background', 'url(images/success.gif) no-repeat 20px center').html('注册成功,请登录');
//						$.cookie('user', $('#user').val());
//						setTimeout(function() {
//							$('#loading').dialog('close');
//							$('#reg').dialog('close');
//							$('#reg').resetForm();
//							$('#reg span.star').html('*').removeClass('abc');
//							$('#loading').css('background', 'url(images/loading.gif) no-repeat 20px center').html('数据交互中....');
//							$('#member, #logout').show();
//							$('#reg_a ,#login_a').hide();
//							$('#member').html($.cookie('user'));
//						}, 1000);
//					}
//
//				},
//			});
//		},
//		highlight: function(element, errorClass) {
//
//			$(element).css('border', '1px solid #630');
//			$(element).parent().find('span').html('*').removeClass('abc');
//		},
//		unhighlight: function(element, errorClass) {
//			$(element).css('border', '1px solid #ccc');
//
//			$(element).parent().find('span').html('&nbsp').addClass('abc');
//		},
//		showErrors: function(errorMap, errorList) {
//			var errors = this.numberOfInvalids();
//			if(errors > 0) {
//				$('#reg').dialog('option', 'height', errors * 20 + 340);
//			} else {
//				$('#reg').dialog('option', 'height', 340);
//			}
//			this.defaultShowErrors();
//		},
//		errorLabelContainer: 'ol.reg_error',
//		wrapper: 'li',
//		rules: {
//			user: {
//				required: true,
//				minlength: 2,
//				remote: {
//					url: 'is_user.php',
//					type: 'POST',
//				},
//			},
//			pass: {
//				required: true,
//				minlength: 6,
//			},
//			email: {
//				required: true,
//				email: true,
//			},
//		},
//		messages: {
//			user: {
//				required: '账号不得为空!',
//				minlength: '账号不得少于{0}位!',
//				remote: '账号已经被注册使用!',
//			},
//			pass: {
//				required: '密码不得为空!',
//				minlength: '密码不得少于{0}位!',
//			},
//			email: {
//				required: '邮箱不得为空!',
//				email: '请输入正确格式的邮箱!',
//			},
//		},
//	});

//	$('#date').datepicker({
//		changeMonth: true,
//		changeYear: true,
//		yearRange: '1950:2020',
//		yearSuffix: '',
//		showOn: 'both',
//		buttonText: '日历',
//		buttonImage: 'images/calendar.gif',
//		buttonImageOnly: true,
//	});
	
	//邮箱自动补全
//	$('#email').autocomplete({
//		delay: 0,
//		autoFocus: true,
//		source: function(request, response) {
//			//获取用户输入的信息
//			//alert(request.term);
//			//绑定数据源,response会把全部的数据源展示出来，因为使用function方法就相当于与自定义了，
//			//就会丧失系统内置的补全功能
//			//response(['aa','aaaa','aaaaaa','bb']);
//			var hosts = ['qq.com', '163.com', '263.com', 'sina.com.cn', 'baidu.com', 'email.com'],
//				term = request.term, //获取用户输入的内容
//				//bbns@163.com bbns就是用户名 ,163.com就是域名
//				name = term, //邮箱的用户名
//				host = '', //邮箱的域名
//				ix = term.indexOf('@'), //@的位置
//				result = []; //最终呈现的邮箱列表
//			result.push(term);
//			//当有@的时候，重新分配用户名和域名
//			if(ix > -1) {
//				name = term.slice(0, ix);
//				host = term.slice(ix + 1);
//			}

			//如果用户已经输入@和后面的域名，那么就找到相关的域名提示，例如ad@1,就提示ad@163.com
			//如果用户还没有输入@或后面的域名，那么就把所有的域名都提示出来
//			if(name) {
//				var findedHosts = [];
//				if(host) {
//					findedHosts = $.grep(hosts, function(value, index) {
//						return value.indexOf(host) > -1;
//					});
//				} else {
//					findedHosts = hosts;
//				}
//				var findedResult = $.map(findedHosts, function(value, index) {
//					return name + '@' + value;
//				});
//
//				result = result.concat(findedResult);
//			}
//			response(result);
//		},
//	});

//	$('#login_a').click(function() {
//		$('#login').dialog('open');
//	});
//	//登录
//	$('#login').dialog({
//		autoOpen: false,
//		modal: true,
//		resizable: false,
//		width: 340,
//		height: 400,
//		buttons: {
//			'提交': function() {
//				$(this).submit();
//			},
//			'取消': function() {
//				$(this).dialog('close');
//			},
//		},
//	}).validate({
//		submitHandler: function(form) {
//			$(form).ajaxSubmit({
//				url: 'login.php',
//				type: 'POST',
//				beforeSubmit: function(formData, jqForm, options) {
//					$('#loading').dialog('open');
//					$('#login').dialog('widget').find('button').eq(1).button('disable');
//				},
//				success: function(responseText, statusText) {
//					if(responseText) {
//						$('#login').dialog('widget').find('button').eq(1).button('enable');
//						$('#loading').css('background', 'url(images/success.gif) no-repeat 20px center').html('登录成功');
//						if($('#expires').is(':checked')) {
//							$.cookie('user', $('#login_user').val(), {
//								expires: 7,
//							});
//						} else {
//							$.cookie('user', $('#login_user').val());
//						}
//						setTimeout(function() {
//							$('#loading').dialog('close');
//							$('#login').dialog('close');
//							$('#login').resetForm();
//							$('#login span.star').html('*').removeClass('abc');
//							$('#loading').css('background', 'url(images/loading.gif) no-repeat 20px center').html('数据交互中....');
//							$('#member, #logout').show();
//							$('#reg_a ,#login_a').hide();
//							$('#member').html($.cookie('user'));
//						}, 1000);
//					}
//
//				},
//			});
//		},
//		highlight: function(element, errorClass) {
//
//			$(element).css('border', '1px solid #630');
//			$(element).parent().find('span').html('*').removeClass('abc');
//		},
//		unhighlight: function(element, errorClass) {
//			$(element).css('border', '1px solid #ccc');
//
//			$(element).parent().find('span').html('&nbsp').addClass('abc');
//		},
//		showErrors: function(errorMap, errorList) {
//			var errors = this.numberOfInvalids();
//			if(errors > 0) {
//				$('#login').dialog('option', 'height', errors * 20 + 260);
//			} else {
//				$('#login').dialog('option', 'height', 260);
//			}
//			this.defaultShowErrors();
//		},
//		errorLabelContainer: 'ol.login_error',
//		wrapper: 'li',
//		rules: {
//			login_user: {
//				required: true,
//				minlength: 2,
//
//			},
//			login_pass: {
//				required: true,
//				minlength: 6,
//				
//			},
//
//		},
//		messages: {
//			login_user: {
//				required: '账号不得为空!',
//				minlength: '账号不得少于{0}位!',
//
//			},
//			login_pass: {
//				required: '密码不得为空!',
//				minlength: '密码不得少于{0}位!',
//				
//			},
//
//		},
//	});
	
});

