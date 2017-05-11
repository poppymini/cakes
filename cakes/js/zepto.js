   var app = angular.module('myApp', ['ngRoute'], routes);
        function routes($routeProvider) {
            $routeProvider
                .when('/index', {
                    templateUrl: "goods1.html",
                })
                .when('/cart', {
                    templateUrl: "cart.html",
                }) 
                .when('/list', {
                    templateUrl: "./list.html",
                })
                .when('/login', {
                    templateUrl: "login.html",
                })
                .when('/register', {
                    templateUrl: "register.html",
                })
                .when('/search', {
                    templateUrl: "search.html",
                }) 
                .when('/', {
                    templateUrl: "main.html",
                })
            .otherwise({
                template: "<h1>什么都没有</h1>",
            })
        }
        app.filter("view",function(){
          return function(val){
            Arrangement(val);
            console.log(val);
             return val;

          }
        });

        function Arrangement(bool){
            
              $("#ul li").css("width","50%");
              $(".buy").css("width","102%").css("height","167px").css("margin-left","-2px");
              $("#ul .contro").css('width',"100%").css("text-align","center").css("margin-right","0px");
              $("#ul .addcar").css("float","right").css("padding","7px");
              bool=false;
            
        }
        app.controller("cont", function ($scope,$http) {
            $http.get('php/index.php').success(function(msg){
                   $scope.data =msg;
                    angular.forEach($scope.data,function(item){
                        item.num=0;
                    })
            })
             $scope.cart = [];
             $scope.item1=[];
            $scope.run=function(gId,bool,des){
                angular.forEach($scope.data,function(item,index){
                    if(gId==item.gid){          
                        if(bool){
                            if(item.num==0){
                              item.num=1;
                              $(".aspn").css("display","block");
                              setIco(event,item.img);
                              $scope.cart.push(item);
                            }else{
                              if(des) setIco(event,item.img);
                                item.num++;
                            }
                        }else{
                           item.num--;
                           item.num=item.num<=0?0:item.num;
                        }
                    }
                })
            }
            $scope.item2=[];
            $scope.addCar1=function(gId){
                angular.forEach($scope.data,function(item,index){
            if(gId==item.gid){
                $scope.item1.push(item);
                $scope.item2=$scope.item1;
                if($scope.item1.length>=2){
                  $scope.item2.splice(0,1);
                }
            }
          });
            }
          $scope.add=function(boos){
          console.log(boos);
          angular.forEach($scope.item2,function(item,index){
              if(boos){
                if(item.num==0){
                  item.num=1;
                  $scope.cart.push(item);
                }else{
                  item.num++;
                }
                  
              }
          });
        }
            $scope.set=function(a){
                if(a=="price")
                 $scope.val=$scope.val=="+price"?"-price":"+price";
                else if(a=="number")
                 $scope.val=$scope.val=="+number"?"-number":"+number";
                 else if(a=="describe")
                 $scope.val=$scope.val=="+describe"?"-describe":"+describe";
               else
                $scope.val=$scope.val==true?false:true;
            }
            $scope.$watch("cart",function(){
                $scope.totalPrice=0;
                angular.forEach($scope.cart,function(item,index){
                    $scope.totalPrice+=item.num*item.price;
                    if(item.num<=0){
                        $scope.cart.splice(index,1);
                    }
                })
            },true);
  
        $scope.del=function(active){
            angular.forEach($scope.cart,function(item,index){
                if(active==item.gid){
                    $scope.cart.splice(index,1);
                }                   
            })
        }
        });
        
    function setIco(event,dds) {
          var flyer = $('<img class="u-flyer buy" src="'+dds+'">');
            var top = $(window).scrollTop();
            var dh = event.pageY;
            var newh = dh - top;
            var oDiv = $('.end').offset();
            var newdh = oDiv.top-top;
            flyer.fly({
                start: {
                    left: event.pageX,
                    top: newh+10,
                },
                end: {
                    left: oDiv.left+30,
                    top: newdh+100,
                    width: 0,
                    height: 0
                }
            });
        }