$(function(){
	$(".name").blur(function(){
		var name=$(this).val().replace(/^\s*|\s*$/g,"");
		if(name==""){
			$(".name_info").html("<span style='color:red'>请输入用户名!</span>");
		}else if(!/^\w{4,20}$/.test(name)){
				$(".name_info").html("<span style='color:#f0f'>输入错误请重新输入!</span>");
		}else{
				$(".name_info").html("<span style='color:#3739bc'>输入正确</span>");
		}	
	});
		$(".number_name").blur(function(){
		var number_name=$(this).val().replace(/^\s*|\s*$/g,"");
		if(number_name==""){
			$(".number_info").html("<span style='color:red'>请输入密码!</span>");
		}else if(!/^\d{6,8}$/.test(number_name)){
				$(".number_info").html("<span style='color:#f0f'>请输入正确的密码</span>");
		}else{
				$(".number_info").html("<span style='color:#3739bc'>输入正确</span>");
		}
	});
});