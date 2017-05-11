	var DataList=[

               {"isid":"101","img":"./images/1.jpg","describe":"Apple iPhone 6s Plus (A1699) 64G 玫瑰金色 移动联通电信4G手机","price":"5488"},
               {"isid":"22","img":"./images/2.jpg","describe":"motu 360  腕表(A1699) 64G 真牛皮表带","price":"2488"},
               {"isid":"31","img":"./images/3.jpg","describe":"雷克萨斯全景照相机  像素890000 8G内存 真牛皮表带","price":"3765"},
               {"isid":"45","img":"./images/4.jpg","describe":"联想（ThinkVision）X24 23.8英寸AH-IPS硬屏LED背光超薄液晶显示器","price":"8200"},
               {"isid":"1","img":"./images/5.jpg","describe":"极米（XGIMI）芒果小觅（水晶蓝）智能 家用 投影机（3D 高清 无屏电视）","price":"1200"},
               {"isid":"6","img":"./images/6.jpg","describe":"三星 Galaxy S7 edge（G9350）32G版 星钻黑 移动联通电信4G手机 双卡双待 骁龙820手机","price":"2400"},
               {"isid":"98","img":"./images/7.jpg","describe":"OPPO R9 4GB+64GB内存版 玫瑰金 全网通4G手机 双卡双待","price":"900"},
               {"isid":"8","img":"./images/8.jpg","describe":"惠普（HP）Pavilion 14-ab141TX 14英寸笔记本电脑（i5-6200U 4G 1T GT940M 2G独显 FHD屏 蓝牙 Win10）银色","price":"5900"},
               {"isid":"9","img":"./images/9.jpg","describe":"DM Aiplay 苹果手机U盘（APD001) 32G 苹果官方MFi认证 iPhone和iPad iMac双头直插式旋转U盘（黑色）","price":"600"},
               {"isid":"12","img":"./images/10.jpg","describe":"Apple iPad mini 2 平板电脑 7.9英寸（16G WLAN版/A7芯片/Retina显示屏 ME279CH）银色","price":"1788"},
               {"isid":"11","img":"./images/11.jpg","describe":"Apple Watch Sport 智能手表(42毫米深空灰色铝金属表壳搭配黑色运动型表带 MJ3T2CH/A）","price":"2688"},
               {"isid":"144","img":"./images/12.jpg","describe":"尼康（Nikon） D7100 单反双头套机（AF-S 18-105mm f/3.5-5.6G ED VR 镜头 + 50mm 1.8D 镜头）","price":"6128"}
          
            ];

var MyAppModule= angular.module('MyApp',[]);

	MyAppModule.controller('MinContainer',function($scope,$http){

	
		

	
       
             $scope.goods =DataList;    //商品数据
            //索引  从零开始
            //对象组从零开始
            $scope.carthide=true;
			$scope.container=false;

           
			$scope.cart={};//选购商品种类
			$scope.goodsnum={};//商品数量  
		
			// console.log($scope.cart[1]['price'])


			$scope.jia=function(n,id){	

			var url =DataList[n].img;

				addProduct(event,url)
				// $scope.cart=DataList[n];

				// console.log($scope.cart);

				// console.log($scope.gid);
				// var gid=DataList[n]['isid'];   //获取当前产品ID
				// // console.log(gid);
				
		// 在这我给给购物赋值
		// 但是我是怎么取值得
		
				if($scope.cart[n]==undefined){  //判断当前的这条数据添加进去没
					
					$scope.cart[n]=$scope.goods[n];  //如果没有就把当前这条数据加进去
					
					$scope.goodsnum[id]=1; 

					console.log($scope.cart);

				}else{

					 $scope.goodsnum[id]+=1;
					
					}

				console.log($scope.goodsnum);
				console.log($scope.cart);
				
			
			}

			$scope.jian = function(n){
			
				// 1.获取当前购物车产品ip
				var gid=DataList[n]['isid'];   //获取当前产品ID
		
				$scope.goodsnum[n]--;



				// $scope.goodsnum['gid'];

				
			
				// console.log($scope.goodsnum);
				//获取购物车相应位置的值然后去减
				
			} 

			$scope.sum =function(){
				$scope.carthide=!$scope.carthide;
				$scope.container=!$scope.container;
			}

		/*	$scope.$watch('goodsnum',function(){

				var total=0;
				var cartnum=0;
				for(var n in $scope.cart){

				}

				for(var i in $scope.goodsnum){
					cartnum++;
				
					total += $scope.goodsnum[i] * $scope.cart[n]['price'];
					jian1 = $scope.cart[n]['price']/$scope.goodsnum[i];
				}
				$scope.total = total;
                    $scope.cartnum = cartnum;
                  

			},true)   */
		
			
		
		
	});


	

	


