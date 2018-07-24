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
<body class="sidebar-mini wysihtml5-supported skin-green" ng-app="userApp">
	<div class="wrapper">
		<jsp:include page="${request.contextPath}/header"></jsp:include>
		<jsp:include page="${request.contextPath}/menu"></jsp:include>
		<div class="content-wrapper" ng-controller="userController">
			<section class="content-header">
			<h1>User Management</h1>
			<ol class="breadcrumb">
				<li><a href="${pageContext.request.contextPath}"><i
						class="fa fa-home"></i> Home</a></li>
				<li><a href="#">User Management</a></li>
			</ol>
			</section>
			<section class="content ng-cloak" id="errors" data-ng-init="listUser()">
				<div class="box box-success">			
					<div class="box-header" style="padding: 0px;">
						<div class="col-sm-12">
							<button style="margin-top: 10px;" ng-click="createUser()" class="btn btn-default"><i class="fa fa-plus"></i> Create</button>
						</div>
					</div>
					<div class="box-body">
						<div class="row " id="errors" style="padding: 15px;">
							<div class="col-sm-6 col-md-3 col-lg-3 col-xs-12" style="margin-bottom: 10px;">
						        <div class="" >
						        	<div class="input-group"> 
						        		<input type="text"  ng-model="searchUser" class="form-control" placeholder="Search">
						        	</div>
						        </div>
							</div>
							<div class="col-sm-12">
								<div class="tablecontainer table-responsive"> 
									<table class="table table-hover">
										<tr>
											<th class="width-75 text-center">
												No
				                        	</th>
											<th class="min-width-90">Username</th>
											<th class="min-width-90">Role</th>
											<th class="min-width-90">Status</th>
											<th class="width-300 text-center"></th>
										</tr>
										<tbody id="data-content-post">
											<tr pagination-id="listUserId" dir-paginate="user in users |filter:searchUser |itemsPerPage:10" >
												<td class="text-center">{{$index+1}}</td>
												<td>{{user.username}}</td>
												<td>{{user.role}}</td>
												<td>
													<span ng-if="user.status == true" class="label label-success">ACTIVE</span>
													<span ng-if="user.status == false" class="label label-danger">INACTIVE</span>
												</td>
												<td>
													<button class='btn btn-primary btn-sm' type='button' ><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button>
													<button class='btn btn-danger btn-sm' type='button' ><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
													<button class='btn btn-default btn-sm' type='button' ><i class="fa fa-lock" aria-hidden="true"></i> Change Password</button>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td colspan="5">
													<dir-pagination-controls 
														pagination-id="listUserId"
														max-size="7" 
														direction-links="true"
														boundary-links="true"> 
													</dir-pagination-controls>
												</td>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="modal fade modal-default" id="frmUser" role="dialog">
					<div class="modal-dialog  modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" ng-click="btnUserCancelClick()">&times;</button>
								<h4 class="modal-title"><b>[CREATE] User</b></h4>
							</div>
							<div class="modal-body">
								<div class="row">
									<form id="frmAddUser">
									<div class="col-md-12">
										<div class="row">
											<div class="col-sm-12 col-md-6 col-xs-12">
												<label class="font-label field-required">Username</label>
												<div class="form-group">
													<input type="text" value="" id="tc_username" name="tc_username" placeholder="username" class="form-control" >
												</div>
											</div>
											<div class="col-sm-12 col-md-6 col-xs-12">
												<label class="font-label field-required">Role</label>
												<div class="form-group">
													<select style="width:100%" class="form-control select2-small" name="tc_role" id="tc_role">
														<option value="">-- SELECT ROLE --</option>
														<option value="ADMIN">ADMIN</option>
														<option value="USER">USER</option>
													</select>
												</div>
											</div>
											<div class="col-sm-12 col-md-6 col-xs-12">
												<label class="font-label field-required">Password</label>
												<div class="form-group">
													<input type="password" id="tc_pwd" name="tc_pwd" value="" placeholder="password" class="form-control" >
												</div>
											</div>
											<div class="col-sm-12 col-md-6 col-xs-12">
												<label class="font-label field-required">Comfirm Password</label>
												<div class="form-group">
													<input type="password" value="" id="tc_comfirm_pwd" name="tc_comfirm_pwd" placeholder="comfirm password" class="form-control" >
												</div>
											</div>
											<div class="col-sm-12 col-md-12 col-xs-12">
												<div class="checkbox">
								                  <label>
								                    <input id="tc_inactive" name="tc_inactive" type="checkbox"> Inactive
								                  </label>
								                </div>
											</div>
										</div>
									</div>
									</form>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" id="btnUserCancel" name="btnUserCancel" ng-click="btnUserCancelClick()" class="btn btn-danger">CANCEL</button>
								 &nbsp;&nbsp;
								<button type="button" id="btnUserSave" ng-click="btnUserSaveClick()" name="btnUserSave" class="btn btn-primary pull-right" >SAVE</button>
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
		var app = angular.module('userApp', ['angularUtils.directives.dirPagination','angular-loading-bar', 'ngAnimate']).config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
		    cfpLoadingBarProvider.includeSpinner = false;
		}]);
		var self = this;
		app.controller('userController',['$scope','$http',function($scope, $http){
			
			$scope.pageSizeAuth = {};
			$scope.pageSizeAuth.rows = [ 
							{ value: "5", label: "5" },
		    				{ value: "10", label: "10" },
		            		{ value: "15", label: "15" },
		            		{ value: "20", label: "20" },
		            		{ value: "25", label: "25" },
		            		{ value: "30", label: "30" },
		            		];
			$scope.pageSizeAuth.row = $scope.pageSizeAuth.rows[1].value;
			
			$scope.listUser = function() {
				$http({
					method : 'GET',
					url : "${pageContext.request.contextPath}/rest/user/list",
					headers : {
						'Accept' : 'application/json',
						'Content-Type' : 'application/json'
					},
				}).success(function(response) {
					if(response.MESSAGE == "FOUND")
						$scope.users = response.RECORDS;					
				});
			}
			
			$scope.createUser = function(){
				$('#frmUser').modal({
				    backdrop: 'static',
				    keyboard: false
				});
			}
			
			$scope.btnUserCancelClick = function(){
				alert(0)
			}
			
			$scope.btnUserSaveClick = function(){
				alert(1)
			}
			
		}]);	
	</script>
</body>
</html>