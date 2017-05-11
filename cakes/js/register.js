$(function(){
	//为表单的必填文本框添加提示信息
	var ok1=false;
	var ok2=false;
	var ok3=false;
	//验证用户名
	var ok4=false;
	// 表单验证
	// 注册用户名验证
	 $("#name").focus(function(){
			$("#info").css("display","block").removeClass("statel").addClass("statel2");
		}).blur(function(){
			useryz();
		});
	function useryz(){
		if($("#name").val()=="")
		{
			$("#info").html("用户名不能为空").removeClass("statel").addClass("statel2");
			return false;
		}
		else
		{
			$.ajax({
			url:"action/3.php",
			type:"post",
			data:"username="+$("#name").val(),
			dataType:"text",
			success:function(data)
			{console.log(data);
				if(data==2)
				{
					$("#info").html("用户名验证成功").removeClass("statel").addClass("statel4");
					return true;

				}
				else
				{
					$("#info").html("用户名已经存在,请重新注册").removeClass("statel").addClass("statel3");
                    return true;
				}
			},
			error:function(){
				console.log("错误");
				return false;
			}
		  });
		}
	   
	}
	// //验证密码
	$("input[name='password']").focus(function(){
		$(this).next().text("密码在6-10位之间").removeClass("statel").addClass("statel2");
	}).blur(function(){
		if($(this).val().length>=6 && $(this).val().length<=10&& $(this).val()!=''&& $(this).val()===$("input[name='password']").val()){
			$(this).next().text("输入成功").removeClass("statel").addClass("statel4");
			ok2=true;
		}else{
			$(this).next().text("输入错误请重新输入").removeClass("statel").addClass("statel3");
		}
	});
	$("input[name='repass']").focus(function(){
		$(this).next().text("密码在6-10位之间").removeClass("statel").addClass("statel2");
	}).blur(function(){
		if($(this).val().length>=6 && $(this).val().length<=10&& $(this).val()!=''&&$(this).val()==$('input[name="password"]').val()){
			$(this).next().text("输入成功").removeClass("statel").addClass("statel4");
			ok3=true;
		}else{
			$(this).next().text("密码要与上面一致否则重新输入").removeClass("statel").addClass("statel3");
		}
	});	
	$("input[name='email']").focus(function(){
		$(this).next().text("请输入正确的email格式").removeClass("statel").addClass("statel2");
	}).blur(function(){
		if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){
			$(this).next().text("请输入正确的email格式").removeClass("statel").addClass("statel3");
		
		}else{
			$(this).next().text("输入成功").removeClass("statel").addClass("statel4");
				ok4=true;
		}
	});
	$(".submit").click(function(){
		if(ok1 && ok2 && ok3 && ok4){
			$(":input").submit();
		}else{
			return false;
		}
	});
});