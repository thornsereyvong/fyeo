<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<jsp:include page="${request.contextPath}/head"></jsp:include>
<style>
	a.disabled {
	 	opacity: 0.5;
    	cursor: not-allowed;	 
	}
	
	.ifoot-box{
		background: #b9292d;
	    padding: 5px 5px 5px 10px;
	    height: 40px;
	    color: white;
	    font-weight: bold;
	    text-align: center;
	    padding-top: 10px;
	}
	.ifoot-box > span{color: white;} 
	.iImage-box{
		padding: 25px;
		margin-left: auto; 
		margin-right: auto; 
		display: block;
	}
	
</style>
</head>
<body class="sidebar-mini wysihtml5-supported skin-green" ng-app="authoriGroup">
	<div class="wrapper">
		<jsp:include page="${request.contextPath}/header"></jsp:include>
		<jsp:include page="${request.contextPath}/menu"></jsp:include>
		<div class="content-wrapper" ng-controller="authoriCon">
			<section class="content-header">
			<h1>Order List</h1>
			<ol class="breadcrumb">
				<li><a href="${pageContext.request.contextPath}"><i
						class="fa fa-home"></i> Home</a></li>
				<li><a href="#">Order List</a></li>
			</ol>
			</section>
			<section class="content ng-cloak">
				<div class="box box-success">			
						<div class="box-header" style="padding: 0px;">
							<div class="col-sm-12">
								<button style="margin-top: 10px;" class="btn btn-default"><i class="fa fa-plus"></i> Create</button>
								
							</div>
						</div>
						<div class="box-body">
							<div class="row " id="errors">
								<div class="col-sm-12">
									<div class="tablecontainer table-responsive"> 
										<table class="table table-hover">
											<tr>
												<th class="width-75 text-center">
													No
					                        	</th>
												<th class="min-width-90">Shop</th>
												<th class="min-width-90">Tel</th>
												<th>Email</th>
												<th>Delivery Address</th>
												<th>Amount</th>
												<th></th>
											</tr>
											<tbody id="data-content-post">
												<tr ng-repeat="item in shopList">
													<td>{{$index+1}}</td>
													<td>{{item.shop}}</td>
													<td>{{item.tel1}}</td>
													<td>{{item.email}}</td>
													<td>{{item.address}}</td>
													<td>{{item.amount}}</td>
													<td></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
			</section>
		</div>
		<jsp:include page="${request.contextPath}/foot"></jsp:include>
	</div>
	<jsp:include page="${request.contextPath}/footer"></jsp:include>
	<script type="text/javascript">
		var app = angular.module('authoriGroup', ['angularUtils.directives.dirPagination','angular-loading-bar', 'ngAnimate']).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
		    cfpLoadingBarProvider.includeSpinner = false;
		}]);
		var self = this;
				
		app.controller('authoriCon',['$scope','$http',function($scope, $http){
				$scope.shopList = [
					{"shop":"TA Optic", "tel1":"098333208", "tel2":"098333208", "email":"s@gmail.com", "address":"Phnom Penh", "amount":1000},
					{"shop":"TA Optic", "tel1":"098333208", "tel2":"098333208", "email":"s@gmail.com", "address":"Phnom Penh", "amount":1000},
					{"shop":"TA Optic", "tel1":"098333208", "tel2":"098333208", "email":"s@gmail.com", "address":"Phnom Penh", "amount":1000},
					{"shop":"TA Optic", "tel1":"098333208", "tel2":"098333208", "email":"s@gmail.com", "address":"Phnom Penh", "amount":1000},
					{"shop":"TA Optic", "tel1":"098333208", "tel2":"098333208", "email":"s@gmail.com", "address":"Phnom Penh", "amount":1000},
					{"shop":"TA Optic", "tel1":"098333208", "tel2":"098333208", "email":"s@gmail.com", "address":"Phnom Penh", "amount":1000},
					{"shop":"TA Optic", "tel1":"098333208", "tel2":"098333208", "email":"s@gmail.com", "address":"Phnom Penh", "amount":1000},
				];
		}]);	
	</script>
</body>
</html>