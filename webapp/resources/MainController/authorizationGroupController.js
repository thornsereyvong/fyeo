app.controller('authGroupController',['$scope','$http',function($scope, $http){	
	
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
	
	$scope.pageSizeAuthPage = {};
	$scope.pageSizeAuthPage.rows = [ 
					{ value: "5", label: "5" },
    				{ value: "10", label: "10" },
            		{ value: "15", label: "15" },
            		{ value: "20", label: "20" },
            		{ value: "25", label: "25" },
            		{ value: "30", label: "30" },
            		];
	$scope.pageSizeAuthPage.row = $scope.pageSizeAuthPage.rows[1].value;
	
	
	$scope.btn_save = "create";
	$scope.countEmpTrue = 0;
	$scope.currentPage = 1;
	$scope.pageSize = {};
	
	$scope.pageSize.rows = [ 
					{ value: "5", label: "5" },
    				{ value: "10", label: "10" },
            		{ value: "15", label: "15" },
            		{ value: "20", label: "20" },
            		{ value: "25", label: "25" },
            		{ value: "30", label: "30" },
            		];
	$scope.pageSize.row = $scope.pageSize.rows[1].value;

	$scope.loadingData = function(){
		$scope.listAuthorizationGroup();
	}
	
	$scope.sort = function(keyname){
	    $scope.sortKey = keyname;  
	    $scope.reverse = !$scope.reverse;
	};

	$scope.getEvent = function(){
		var getEv = getValueStringById("btn_save");
		if(getEv == "create"){
			$scope.createAuthGroup();
		}else{
			$scope.updateAuthGroup();
		}
	
	}
	
	$scope.ckRowClickAll = function(){
		
		var countObjEmp = Object.keys($scope.emps).length;
		var countStatus = 0;
		$scope.empCheckAll = !$scope.empCheckAll;
		if($scope.empCheckAll == false){
			for(var i=0;i < countObjEmp ;i++){
				$scope.emps[i].statusCheck = false;	
			}
			$scope.countEmpTrue = 0;
		}else{
			for(var i=0;i < countObjEmp ;i++){
				$scope.emps[i].statusCheck = true;	
			}
			$scope.countEmpTrue = countObjEmp;
		}

	}
	
	$scope.ckRowClick = function(id){
		var countObjEmp = Object.keys($scope.emps).length;
		var countStatus = 0;
		
		for(var i=0;i < countObjEmp ;i++){
			if($scope.emps[i].emp_ID == id){
				$scope.emps[i].statusCheck = !$scope.emps[i].statusCheck;
			}
			if($scope.emps[i].statusCheck == true){
				countStatus++;
			}
		}
		
		$scope.countEmpTrue = countStatus;
			
	}

	$scope.continueCreate = function(){
		setValueById("authori_name","");
		setValueById("authori_desc","");
		$("#form_group").bootstrapValidator('resetForm', 'true');
		$("input[name=ckr]").prop('checked', false);
		$scope.btn_save = "Create";
		$scope.currentPage = 1;
		$scope.pageSize.row = $scope.pageSize.rows[1].value;
		$scope.listEmployee();
	}
	
	$scope.closeModal = function(){
		$scope.countEmpTrue = 0;
		setValueById("authori_name","");
		setValueById("authori_desc","");
		$("#form_group").bootstrapValidator('resetForm', 'true');
		$("input[name=ckr]").prop('checked', false);
		$scope.listEmpModel = [];
		$scope.btn_save = "create";
		$('#myModal').modal('toggle');
		$scope.currentPage = 1;
		$scope.pageSize.row = $scope.pageSize.rows[1].value;
		$scope.empCheckAll = false;
		$scope.listEmployee();
	}

	$scope.listEmployee = function(){
		$http({
 			method: 'GET',
		    url: server+"rest/employee/list",
		    headers: {
		    	'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    }	    
		}).success(function(response) {
			$scope.emps = [];
			if(response.MESSAGE == "SUCCESS"){
				$scope.emps = response.DATA;
			}
		});
	}

	$scope.listAuthorizationGroup = function(){
		$http({
 			method: 'GET',
		    url: server+"rest/authorizationgroup/list",
		    headers: {
		    	'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    }	    
		}).success(function(response) {
			$scope.authGroup = [];
			if(response.MESSAGE == "SUCCESS"){
				$scope.authGroup = response.DATA;
			}
		});
	}
	
	$scope.createAuthGroup = function(){

		$('#form_group').data('bootstrapValidator').validate();
		var addAuthGroup = $("#form_group").data('bootstrapValidator').validate().isValid();
		if(addAuthGroup){
			var listEmpDetail = [];
			
			for(var i=0; i< Object.keys($scope.emps).length ;i++){		
				if($scope.emps[i].statusCheck == true){	
					listEmpDetail.push({"authGroupEmpId":$scope.emps[i].emp_ID});
				}
			}

			if(Object.keys(listEmpDetail).length != 0){
			
			var groupName = getValueStringById("authori_name");
			var groupDesc = getValueStringById("authori_desc");
			var stringValue = {
				    "authGroupName":groupName,"authGroupDesc":groupDesc, "authGroupDetail":listEmpDetail
			};

			swal({
				title:  "<span style='font-size: 20px;'>You are about to create authorization group.</span>",
				text: "Click OK to continue or CANCEL to abort.",
				type: "info",
				html: true,
				showCancelButton: true,
				closeOnConfirm: false,
				showLoaderOnConfirm: true,	
	        }, 
	        function(isConfirm){ 

	            if(isConfirm){
	            	setTimeout(function(){
		            	
					$http({
			 			method: 'POST',
					    url: server+"rest/authorizationgroup/create",
					    headers: {
					    	'Accept': 'application/json',
					        'Content-Type': 'application/json'
					    }	,
					    data : stringValue    
					}).success(function(response) {	
						if(response.MESSAGE == "fail"){
							messageTypeFail(response.DESCRIPTION)
						}else if(response.MESSAGE == "exist"){
							messageTypeExisted(response.DESCRIPTION)
						}else if(response.MESSAGE == "not allowed"){
							messageTypeNotAllowed(response.DESCRIPTION)
						}else{
							messagsTypeSuccess(response.DESCRIPTION)
							$scope.listAuthorizationGroup();
							$scope.closeModal();	
						}
						
				
					});

	            	},500);
	            }
	        });
		}else{
			swal({
				  title: "Information",
				  text: "Please check employee for authorization.!",
				  timer: 3000,
				  type: "info",
				  showConfirmButton: false
			});
		}
		}


	}


	$scope.updateAuthGroup = function(){
	
		            	

		$('#form_group').data('bootstrapValidator').validate();
		var addAuthGroup = $("#form_group").data('bootstrapValidator').validate().isValid();
		if(addAuthGroup){
			var tr = $("#data-emp tr");
			var listEmpDetail = [];
			for(var i=0; i< Object.keys($scope.emps).length ;i++){		
				if($scope.emps[i].statusCheck == true){	
					listEmpDetail.push({"authGroupEmpId":$scope.emps[i].emp_ID});
				}
				
			}

			
			var groupName = getValueStringById("authori_name");
			var groupDesc = getValueStringById("authori_desc");
			var stringValue = {
				    "authGroupId": $scope.authoriID ,"authGroupName":groupName,"authGroupDesc":groupDesc, "authGroupDetail":listEmpDetail
			};

			swal({
				title:  "<span style='font-size: 20px;'>You are about to update authorization group.</span>",
				text: "Click OK to continue or CANCEL to abort.",
				type: "info",
				html: true,
				showCancelButton: true,
				closeOnConfirm: false,
				showLoaderOnConfirm: true,	
	        }, 
	        function(isConfirm){ 

	            if(isConfirm){
	            	setTimeout(function(){
			$http({
	 			method: 'POST',
			    url: server+"rest/authorizationgroup/edit",
			    headers: {
			    	'Accept': 'application/json',
			        'Content-Type': 'application/json'
			    }	,
			    data : stringValue    
			}).success(function(response) {	
				
				if(response.MESSAGE == "fail"){
					messageTypeFail(response.DESCRIPTION)
				}else if(response.MESSAGE == "exist"){
					messageTypeExisted(response.DESCRIPTION)
				}else if(response.MESSAGE == "not allowed"){
					messageTypeNotAllowed(response.DESCRIPTION)
				}else{
					messagsTypeSuccess(response.DESCRIPTION)
					$scope.listAuthorizationGroup();
					$scope.closeModal();	
				}
				
				});
            	},500);
            }
        });
		}
		
			       
	}

	$scope.deleteAuthGroup = function(authID,authName){
		swal({
			title:  "<span style='font-size: 20px;'>You are about to delete authorization group with ID "+authID+".</span>",
			text: "Click OK to continue or CANCEL to abort.",
			type: "info",
			html: true,
			showCancelButton: true,
			closeOnConfirm: false,
			showLoaderOnConfirm: true,	
        }, 
        function(isConfirm){ 

            if(isConfirm){
            	setTimeout(function(){
		            	$http({
				 			method: 'DELETE',
						    url: server+"rest/authorizationgroup/delete/"+authID,
						    headers: {
						    	'Accept': 'application/json',
						        'Content-Type': 'application/json'
						    }	    
						}).success(function(response) {
							
							if(response.MESSAGE == "fail"){
								messageTypeFail(response.DESCRIPTION)
							}else if(response.MESSAGE == "used"){
								messageTypeUsed(response.DESCRIPTION)
							}else if(response.MESSAGE == "not allowed"){
								messageTypeNotAllowed(response.DESCRIPTION)
							}else{
								messagsTypeSuccess(response.DESCRIPTION)
								$scope.listAuthorizationGroup();	
							}
							
						});
		               
				},500);
            }
        }); 

	}

	$scope.getAuthGroupByID = function(authID){
		$scope.btn_save = "save";
		$http({
 			method: 'GET',
		    url: server+"rest/authorizationgroup/get/"+authID,
		    headers: {
		    	'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    }	    
		}).success(function(response) {
		
			$scope.authGroupByID = [];
			if(response.MESSAGE == "SUCCESS"){
				
				$scope.authGroupByID = response.authorizationGroup;
				$scope.authorizationGroupDetail = response.authorizationGroupDetail;
				$scope.authoriID =  "";
				$scope.listEmpModel = [];
				$scope.emps = response.Employees;
				
				angular.forEach($scope.authGroupByID, function(value, key){
						$("#authori_name").val(value.authGroupName);
						$("#authori_desc").val(value.authGroupDesc);
						$scope.authoriID = value.authGroupId;		
				});
				 
				
				var countObjEmp = Object.keys($scope.emps).length;
				var countStatus = 0;
			
				 for(var i=0;i < countObjEmp ;i++){
					if($scope.emps[i].statusCheck == true){	
						countStatus++;
						 $scope.listEmpModel.push({"emp_ID": $scope.emps[i].emp_ID, "emp_Name": $scope.emps[i].emp_Name}); 
					}		
				}
				 
				$scope.countEmpTrue = countStatus;
				
			}
		});
	}


	
	$scope.addEmpModel = function(){
		
		$scope.empCheckAll = false;
		$scope.countEmpTrue = 0;
		$scope.listEmpModel = [];
		var countObjEmp = Object.keys($scope.emps).length;
		for(var i=0;i < countObjEmp ;i++){
			if($scope.emps[i].statusCheck == true){
				$scope.listEmpModel.push({"emp_ID": $scope.emps[i].emp_ID, "emp_Name": $scope.emps[i].emp_Name});
			}
		}
		
		$('#myModalEmp').modal('toggle');
		

		
		
	}
	
	$scope.deleteEmplist = function(id){

		swal({
			title:  "<span style='font-size: 20px;'>You are about to delete employee with ID: "+id+" . </span>",
			text: "Click OK to continue or CANCEL to abort.",
			type: "info",
			html: true,
			showCancelButton: true,
			closeOnConfirm: false,
			showLoaderOnConfirm: true,	
        }, 
        function(confirm){ 
        	if(confirm){
        		setTimeout(function(){
	        		var countObjEmp = Object.keys($scope.emps).length;
	        		var countStatus = 0;
	        		
	        		for(var i=0;i < countObjEmp ;i++){
	        			if($scope.emps[i].emp_ID == id){
	        				$scope.emps[i].statusCheck = false;
	        			}
	        			if($scope.emps[i].statusCheck == true){
	        				countStatus++;
	        			}
	        		}
	        		
	        		for(var i=0;i < Object.keys($scope.listEmpModel).length ;i++){
	        			if($scope.listEmpModel[i].emp_ID == id){
	        				$scope.listEmpModel.splice(i,1);
	        			}
	        		}
	        		
	        		
	        		messagsTypeSuccess("");
	        		$scope.countEmpTrue = countStatus;
	        		$scope.$apply();
	        		
        		},500);
        	}

        });
		
		
		
	}
	
}]);