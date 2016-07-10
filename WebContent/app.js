
(function(){
var app = angular.module('store',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	//$urlRouterProvider.otherwise('/');
	$stateProvider
        .state('viewcart', {
            url: "/ViewCart",
            templateUrl: 'ViewCart.html',
            //controller: 'ViewController'
        });
	});


app.controller('StoreController', function($http,$scope,$window,$state) {
	
	$scope.count = 1;
	$scope.prod = [];
	$scope.tab = 1;
	
	
	$scope.countChange = function(value)
	{
		alert('inside countChange');
		
		if(value)
		{
			if($scope.count < 5)
				$scope.count++;
		}
		else
		{
			if($scope.count > 1)
				$scope.count--;
		}
	};
	
	
	$scope.products = gem; 
	
	$scope.buy = function(product)
	{
		alert("entered buy function" + product.serialNo  + product.name);
		
	};
	
	$scope.viewCart = function()
	{
		alert("entered view function");
		$scope.successMsg = "";
		$state.go("viewcart");		
	};
	
	$scope.addToCart = function(product)
	{
		alert("entered addToCart function" + product.serialNo + product.name);
		
		$http.post("rest/product/add",product)
		     .success(function (response){
	  		
			      alert("success");
			      
			      $scope.successMsg = "Item added to cart successfully";
			});
			
			var details = {
	  			name:product.name,
				image:product.images[0],
				price:product.price
			};
			
			$scope.prod.push(details);
				  
			alert("length" + $scope.prod.length);
	};
	
	$scope.menu = function()
	{
		alert("inside menu");
	};
	
	$scope.placeOrder = function()
	{
		alert("inside placeorder");
		$scope.selecttab(2);
	};
	
	$scope.isSelected = function(checkTab)
		{
			return $scope.tab == checkTab;
		};
		
	$scope.selecttab = function(setTab)
	{
		$scope.tab = setTab;
	};
	
	$scope.payment = function()
	{
		alert("inside payment");
		$scope.selecttab(3);
	};
	
	
	});
	
var gem = [
		{
		name : 'T-Shirts',
		serialNo : 101,
		price : '2.95',
		desc : 'You look Cool, Smart & Charming with the new collection of Top Notch Henely Neck T- Shirts.Top Notch belongs to Rajdhani Cotton which is One Of The Leading Brand For T Shirts, and provides you with the best quality Casual Shirt & T shirts.',
		images : [
				"Cherry Red_thumbnail.png",
				"images.jpg",
				],
		spec : 'Machine wash cold, Wash dark colors separately, Do not bleach, Dry in shade, Tumble dry low, Do not dry clean, Use steam iron',
		rev : [
			{
				stars : 5,
				body : "I Love this product !",
				author : "arun4492@gmail.com"
			},
			{
				stars : 1,
				body : "This product sucks",
				author : "hater@yahoo.com"
			}
		]
		},
		{
		name : 'Trousers',
		serialNo : 102,
		price : '7.95',
		desc : 'Feels Good is featuring this attractive Trousers made of Satin cotton lycra fabric. This material gives you the comfort and style also. You can team up this chinos with your choice of Shirt.',
		images : [
				"download.jpg",
				"images (1).jpg",
				],
		spec : 'Pattern	: Solid,Occasion : Casual,Ideal For : Men,Color	: Beige',
		rev : [
			{
				stars : 3,
				body : "It looks great. nice product !",
				author : "arun4492@gmail.com"
			},
			{
				stars : 1,
				body : "Not up to the mark...dont buy this",
				author : "hater@yahoo.com"
			}
		]
		},
		{
		name : 'shirts',
		serialNo : 103,
		price : '3.95',
		desc : 'person name'
		}]
		
		
	app.controller('PanelController',function() {
	
		
		this.tab = 1;
		
		this.selecttab = function(setTab)
		{
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab)
		{
			return this.tab == checkTab;
		};
	
	
	});
	
	
	app.controller('ReviewController',function(){
		this.review = {};
		
		this.addReview = function(product)
		{ 
			alert($scope.review);
			product.rev.push($scope.review);
			this.review = {};
		};
	});
	
	app.controller('ViewController',function($http,$scope,$window,product){
		alert('inside viewController');
		
	});
	
	
	}) ();	