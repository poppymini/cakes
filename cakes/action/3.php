<?php
	// header("Content-Type:text/html;charset=utf-8");
	
	$arr = ["zs1234","lilis1","www1234","cxfqwe","admion"];

	// if(in_array($_GET['uname'],$arr)){
	if(in_array($_POST['username'],$arr)){
		echo "1";
	}else{
		echo "2";//可以注册 
		// var_dump($_POST['uname']);//var_dump()查看数据和类型
	}