app.controller('SetupAuthorization',['$scope','$http',function($scope, $http){

	$scope.btn_save = "Create";
	$scope.empCheckAll = false;
	$scope.grCheckAll = false;
	$scope.countEmpTrue = 0;
	$scope.countGrTrue = 0;
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
	
	$scope.loadingData = function(){
		$scope.listAuthorizationpage();
	}
	
	$scope.setErrorField = function(id,message){
		
		var i = '<i class="form-control-feedback bv-no-label glyphicon glyphicon-remove" data-bv-icon-for="'+id+'" style="display: block;"></i>';
		var small = '<small class="help-block" data-bv-validator="notEmpty" data-bv-for="'+id+'" data-bv-result="INVALID" style="">'+message+'</small>';
		$("#"+id).find("i").remove();
		$("#"+id).find("small").remove();
		$("#"+id).removeClass("form-group has-feedback has-success").addClass("form-group has-feedback has-error");
		$("#"+id).append(i+ small);
	}

	$scope.setSuccessField = function(id){
		var i = '<i class="form-control-feedback bv-no-label glyphicon glyphicon-ok" data-bv-icon-for="'+id+'" style="display: block;"></i>';
		//var small = '<small class="help-block" data-bv-validator="notEmpty" data-bv-for="salStartDate" data-bv-result="INVALID" style="">The start date greater this month ! </small>';
		$("#"+id).find("i").remove();
		$("#"+id).find("small").remove();
		$("#"+id).removeClass("form-group has-feedback has-error").addClass("form-group has-feedback has-success");
		$("#"+id).append(i);
	}

	$scope.setNomallField = function(id){
		$("#"+id).removeClass("has-error");
		$("#"+id).removeClass("has-success");
		$("#"+id).find("i").remove();
		$("#"+id).find("small").remove();
	}
	

	$scope.clearValidate = function(str){
		
		$(str+" .form-group").removeClass("has-error").addClass("");
		$(str+" .form-group").find("i").attr("style","display:none");
		$(str+" .form-group").find("i").removeClass("glyphicon" ,"glyphicon-remove").addClass("");
		$(str+" .form-group").find("small").attr("style","display:none");
		$(str+" .form-group").find("small").attr("data-bv-result","NOT_VALIDATED");
		
	}

	
	
	$scope.btn_createEv = function(){
		$('#myModal').modal('toggle');
		$scope.btn_save = "create"
		$scope.listEmployee();
		//$scope.sAuthType = "";
		//$scope.listAuthorizationGroup();
		
	};
	
	$scope.listEmployee = function(){
		$scope.listEmpModel = [];
		$scope.emps = [];
		$scope.countEmpTrue = 0;
		$http.get(server+"rest/employee/list").success(function(response){
        	var data = response.DATA;
    		if(response.MESSAGE == "SUCCESS"){
    			$scope.listEmpModel = response.DATA;
    		
    		}
       });
	}
	
	$scope.getEventCreate = function(){
		$scope.createauth();
	}
	$scope.getEventUpdate = function(){
		$scope.updateauth();
	}

	$scope.updateauth = function(){
    	$('#form_authori').data('bootstrapValidator').validate();
		var addauth = $("#form_authori").data('bootstrapValidator').validate().isValid();
		if(addauth){
			
			if($scope.sAuthType == "Individual"){

				var countObjEmp = Object.keys($scope.listEmpModel).length;
				var countStatus = 0;
				var listEmpDetail = [];
				for(var i=0;i < countObjEmp ;i++){
					if($scope.listEmpModel[i].statusCheck == true){
						countStatus++;
						listEmpDetail.push({"authEmpId":$scope.listEmpModel[i].emp_ID,"authGroupId":"","authGroupAndOr":"","authGroupAmount":""});
					}	
				}
				
				if($("#authAndOr").val() == "And"){
					if(isNaN($scope.authAmount)){
						$scope.setErrorField("divAthAmountIndividual","The authorization amount can not input string !");
					}else{
				
						if(parseInt(countStatus) < parseInt($scope.authAmount)){
							$scope.setErrorField("divAthAmountIndividual","Please check employee equal or greater than authorization amount  !");
						}else{
							$scope.setSuccessField("divAthAmountIndividual");
							
							var stringValue = {
								"authId":$scope.authoriID,
								"authName":getValueStringById("authName"),
								"authType":getValueStringById("authType"), 
								"authAndOr":"And", 
								"authAmount":getValueStringById("authAmount"),
								"authorizationDetail": listEmpDetail
							};

							swal({
								title:  "<span style='font-size: 20px;'>You are about to update authorization.</span>",
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
										    url: server+"rest/authorization/update",
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
											}else if(response.MESSAGE == "used"){
												messageTypeUsed(response.DESCRIPTION)
											}else{
												messagsTypeSuccess(response.DESCRIPTION)
												$scope.listAuthorizationpage();
												$scope.closeModal();		
											}
											
											
											
										});
					            	},500);
					            }
					        });
							
						}
					}
				}else if($("#authAndOr").val() == "Or"){
		
					var stringValue = {
							"authId":$scope.authoriID,
							"authName":getValueStringById("authName"),
							"authType":getValueStringById("authType"), 
							"authAndOr":"Or", 
							"authAmount": 0,
							"authorizationDetail": listEmpDetail
						};

					swal({
						title:  "<span style='font-size: 20px;'>You are about to update authorization.</span>",
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
								    url: server+"rest/authorization/update",
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
									}else if(response.MESSAGE == "used"){
										messageTypeUsed(response.DESCRIPTION)
									}else{
										messagsTypeSuccess(response.DESCRIPTION)
										$scope.listAuthorizationpage();
										$scope.closeModal();		
									}
									
									
								});
			            	},500);
			            }
			        });
				}
				

			}else if($scope.sAuthType == "Group"){
				
				var countObj = Object.keys($scope.authorizationGroup).length;
				var countTrueFalse = 0;
				var countOjbTrue = 0;
				var listGroupDetail = [];
				for(var i = 0; i < countObj; i++){	
					if($scope.authorizationGroup[i].statusCheck == true){
						countOjbTrue++;
						if($scope.authorizationGroup[i].andOrCheck == "And"){
							$scope.setSuccessField("divAuthAndOr"+$scope.authorizationGroup[i].itemNumber);
							if($scope.authorizationGroup[i].amountCheck != ""){
								if (isNaN($scope.authorizationGroup[i].amountCheck)) {
									$scope.setErrorField("divAuthAmount"+$scope.authorizationGroup[i].itemNumber,"The authorization amount can not input string !");
								}else{
									if(parseInt($scope.authorizationGroup[i].amountCheck) > parseInt($scope.authorizationGroup[i].authGroupCount)){
										$scope.setErrorField("divAuthAmount"+$scope.authorizationGroup[item-1].itemNumber,"Amount can not big than employee in group "+ $scope.authorizationGroup[item-1].authGroupName+" !");
									}else{
										$scope.setSuccessField("divAuthAmount"+$scope.authorizationGroup[i].itemNumber);
										countTrueFalse++;
										listGroupDetail.push({"authEmpId":"","authGroupId":$scope.authorizationGroup[i].authGroupId,"authGroupAndOr":"And","authGroupAmount":$scope.authorizationGroup[i].amountCheck});
									}
								}	
							}else{
								$scope.setErrorField("divAuthAmount"+$scope.authorizationGroup[i].itemNumber,"The authorization amount is required and can not be empty!");
							}
						}else if($scope.authorizationGroup[i].andOrCheck == "Or"){
							countTrueFalse++;
							listGroupDetail.push({"authEmpId":"","authGroupId":$scope.authorizationGroup[i].authGroupId,"authGroupAndOr":"Or","authGroupAmount":1});
							$scope.setSuccessField("divAuthAndOr"+$scope.authorizationGroup[i].itemNumber);
						}else{
							$scope.setErrorField("divAuthAndOr"+$scope.authorizationGroup[i].itemNumber,"The authorization and \ or is required and can not be empty!");
						}
					}
				}//close for loop object 	

				if(countOjbTrue != 0){
				if(countTrueFalse == countOjbTrue){
					
					var stringValue = {
							"authId":$scope.authoriID,
							"authName":getValueStringById("authName"),
							"authType":getValueStringById("authType"), 
							"authAndOr":"", 
							"authAmount":0,
							"authorizationDetail": listGroupDetail
						};
					swal({
						title:  "<span style='font-size: 20px;'>You are about to update authorization.</span>",
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
								    url: server+"rest/authorization/update",
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
									}else if(response.MESSAGE == "used"){
										messageTypeUsed(response.DESCRIPTION)
									}else{
										messagsTypeSuccess(response.DESCRIPTION)
										$scope.listAuthorizationpage();
										$scope.closeModal();		
									}
									
									
								});
			            	},500);
			            }
			        });
				}else{
					
				}
			}else{
				//mee
				
				swal({
					  title: "Information",
					  text: "Please check group for authorization.!",
					  timer: 3000,
					  type: "info",
					  showConfirmButton: false
				});
			}
				
			}else{
			
			}
			
		}else{

		}
	
	}
	
	$scope.createauth = function(){
    	$('#form_authori').data('bootstrapValidator').validate();
		var addauth = $("#form_authori").data('bootstrapValidator').validate().isValid();
		if(addauth){
			
			if($scope.sAuthType == "Individual"){

				var countObjEmp = Object.keys($scope.emps).length;
				var countStatus = 0;
				var listEmpDetail = [];
				for(var i=0;i < countObjEmp ;i++){
						countStatus++;
						listEmpDetail.push({"authEmpId":$scope.emps[i].emp_ID,"authGroupId":"","authGroupAndOr":"","authGroupAmount":""});
				}

				if(Object.keys(listEmpDetail).length != 0){
				
				if($("#authAndOr").val() == "And"){
					if(isNaN($scope.authAmount)){
						$scope.setErrorField("divAthAmountIndividual","The authorization amount can not input string !");
					}else if(parseInt($scope.authAmount) == 0){
						$scope.setErrorField("divAthAmountIndividual","The authorization amount is required and can not be empty or 0!");	
					}else{
						
						if(parseInt(countStatus) < parseInt($scope.authAmount)){
							$scope.setErrorField("divAthAmountIndividual","Please check employee equal or greater than authorization amount  !");
						}else{
							$scope.setSuccessField("divAthAmountIndividual");
							
							var stringValue = {
								"authName":getValueStringById("authName"),
								"authType":getValueStringById("authType"), 
								"authAndOr":"And", 
								"authAmount":getValueStringById("authAmount"),
								"authorizationDetail": listEmpDetail
							};
						
							swal({
								title:  "<span style='font-size: 20px;'>You are about to create authorization.</span>",
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
										    url: server+"rest/authorization/create",
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
											}else if(response.MESSAGE == "used"){
												messageTypeUsed(response.DESCRIPTION)
											}else{
												messagsTypeSuccess(response.DESCRIPTION)
												$scope.listAuthorizationpage();
												$scope.countEmpTrue = 0;
												$scope.closeModal();
											}

										});
										
					            	},500);
					            }
					        });

							
						}
					}
				}else if($("#authAndOr").val() == "Or"){
				
						var stringValue = {
								"authName":getValueStringById("authName"),
								"authType":getValueStringById("authType"), 
								"authAndOr":"Or", 
								"authAmount":0,
								"authorizationDetail": listEmpDetail
							};
					
						swal({
							title:  "<span style='font-size: 20px;'>You are about to create authorization.</span>",
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
							    url: server+"rest/authorization/create",
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
								}else if(response.MESSAGE == "used"){
									messageTypeUsed(response.DESCRIPTION)
								}else{
									messagsTypeSuccess(response.DESCRIPTION)
									$scope.listAuthorizationpage();
									$scope.closeModal();
									$scope.countEmpTrue = 0;		
								}
	
							});

			            	},500);
			            }
			        });
				}
				
				
				}else{
					
					swal({
						  title: "Information",
						  text: "Please check employee for authorization.!",
						  timer: 3000,
						  type: "info",
						  showConfirmButton: false
					});
					
				}
				

			}else if($scope.sAuthType == "Group"){
				var countObj = Object.keys($scope.authorizationGroup).length;
				var countTrueFalse = 0;
				var countOjbTrue = 0;
				var listGroupDetail = [];
				for(var i = 0; i < countObj; i++){	
					if($scope.authorizationGroup[i].statusCheck == true){
						countOjbTrue++;
						if($scope.authorizationGroup[i].andOrCheck == "And"){
							$scope.setSuccessField("divAuthAndOr"+$scope.authorizationGroup[i].itemNumber);
							if($scope.authorizationGroup[i].amountCheck != ""){
								if (isNaN($scope.authorizationGroup[i].amountCheck)) {
									$scope.setErrorField("divAuthAmount"+$scope.authorizationGroup[i].itemNumber,"The authorization amount can not input string !");
								}else{
									if(parseInt($scope.authorizationGroup[i].amountCheck) > parseInt($scope.authorizationGroup[i].authGroupCount)){
										$scope.setErrorField("divAuthAmount"+$scope.authorizationGroup[item-1].itemNumber,"Amount can not big than employee in group "+ $scope.authorizationGroup[item-1].authGroupName+" !");
									}else{
										$scope.setSuccessField("divAuthAmount"+$scope.authorizationGroup[i].itemNumber);
										countTrueFalse++;
										listGroupDetail.push({"authEmpId":"","authGroupId":$scope.authorizationGroup[i].authGroupId,"authGroupAndOr":"And","authGroupAmount":$scope.authorizationGroup[i].amountCheck});
									}
								}	
							}else{
								$scope.setErrorField("divAuthAmount"+$scope.authorizationGroup[i].itemNumber,"The authorization amount is required and can not be empty!");
							}
						}else if($scope.authorizationGroup[i].andOrCheck == "Or"){
							countTrueFalse++;
							listGroupDetail.push({"authEmpId":"","authGroupId":$scope.authorizationGroup[i].authGroupId,"authGroupAndOr":"Or","authGroupAmount":1});
							$scope.setSuccessField("divAuthAndOr"+$scope.authorizationGroup[i].itemNumber);
						}else{
							$scope.setErrorField("divAuthAndOr"+$scope.authorizationGroup[i].itemNumber,"The authorization and \ or is required and can not be empty!");
						}
					}
				}//close for loop object 	

				if(countOjbTrue != 0){
						if(countTrueFalse == countOjbTrue){
							
								var stringValue = {
										"authName":getValueStringById("authName"),
										"authType":getValueStringById("authType"), 
										"authAndOr":"", 
										"authAmount":0,
										"authorizationDetail": listGroupDetail
									};

								swal({
									title:  "<span style='font-size: 20px;'>You are about to create authorization.</span>",
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
								    url: server+"rest/authorization/create",
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
									}else if(response.MESSAGE == "used"){
										messageTypeUsed(response.DESCRIPTION)
									}else{
										messagsTypeSuccess(response.DESCRIPTION)
										$scope.listAuthorizationpage();
										$scope.closeModal();		
									}
									
									
								});
				            	},500);
				            }
			       		 });
					}
				}else{
					swal({
						  title: "Information",
						  text: "Please check group for authorization.!",
						  timer: 3000,
						  type: "info",
						  showConfirmButton: false
					});
					
				}
			}else{
			
			}
			
		}else{

		}	

	}
	

	$scope.pageSize = {};
	$scope.currentPageGroup = 1
	$scope.currentPageEmp = 1
	$scope.pageSize.rows = [ 
					{ value: "5", label: "5" },
    				{ value: "10", label: "10" },
            		{ value: "15", label: "15" },
            		{ value: "20", label: "20" },
            		{ value: "25", label: "25" },
            		{ value: "30", label: "30" },
            		];
	$scope.pageSize.row = $scope.pageSize.rows[1].value;


	$scope.sort = function(keyname){
	    $scope.sortKey = keyname;   //set the sortKey to the param passed
	    $scope.reverse = !$scope.reverse; //if true make it false and vice versa
	};
	
	
	
	$scope.ckRowClickAllGr = function(){
		
		var countObjgr = Object.keys($scope.authorizationGroupModel).length;
		var countGrTrue = 0;
		$scope.grCheckAll = !$scope.grCheckAll;
		if($scope.grCheckAll == false){
			for(var i=0;i < countObjgr ;i++){
				$scope.authorizationGroupModel[i].statusCheck = false;	
				$scope.authorizationGroupModel[i].andOrCheck = "";
				$scope.authorizationGroupModel[i].amountCheck = "";
				$scope.setNomallField("divAuthAndOr"+$scope.authorizationGroupModel[i].itemNumber);
				$scope.setNomallField("divAuthAmount"+$scope.authorizationGroupModel[i].itemNumber);
			}
			$scope.countGrTrue = 0;
		}else{
			for(var i=0;i < countObjgr ;i++){
				$scope.authorizationGroupModel[i].statusCheck = true;
				$scope.authorizationGroupModel[i].andOrCheck = "";
				$scope.authorizationGroupModel[i].amountCheck = "";
			}
			
			$scope.countGrTrue = countObjgr;
		}
		
		

	}
	
	$scope.ckRowClickAuth = function(id){
		
		var countObjgr = Object.keys($scope.authorizationGroupModel).length;
		var countGrTrue = 0;
		
			for(var i=0;i < countObjgr ;i++){
				
				if($scope.authorizationGroupModel[i].authGroupId == id){
			
					$scope.authorizationGroupModel[i].statusCheck = !$scope.authorizationGroupModel[i].statusCheck;
				}
				
				/* if($scope.authorizationGroup[i].statusCheck == true){
					$scope.authorizationGroup[i].andOrCheck = "";
					$scope.authorizationGroup[i].amountCheck = "";
					countGrTrue++;
				}else{
					$scope.authorizationGroup[i].andOrCheck = "";
					$scope.authorizationGroup[i].amountCheck = "";
					$scope.setNomallField("divAuthAndOr"+$scope.authorizationGroup[i].itemNumber);
					$scope.setNomallField("divAuthAmount"+$scope.authorizationGroup[i].itemNumber);
					
				} */
				
				
				
			}

		
			$scope.countGrTrue = countGrTrue;
		
	
	}
	
	$scope.closeModal = function(){
		setValueById("authType","");
		setValueById("authAmount","");
		$scope.sAuthAndOr = "";
		$scope.sAuthType = "";
		$('#form_authori').bootstrapValidator("resetForm",true);
		$scope.btn_save = "create";
		$('#myModal').modal('toggle');
		$scope.emps = [];
		$scope.authorizationGroup = [];
		$scope.currentPage = 1;
		$scope.currentPageGroup = 1
		$scope.currentPageEmp = 1
		$scope.pageSize.row = $scope.pageSize.rows[1].value;
		$scope.countEmpTrue = 0;
		$scope.searchAuthGroup = "";
		$scope.searchEmp = "";
		
		$("#authType").removeAttr("disabled","");
		$("#authAndOr").removeAttr("disabled","");
		$("#authAmount").removeAttr("disabled","");
	}
	
	$scope.ckRowClick = function(id){
		
		var countObjEmp = Object.keys($scope.listEmpModel).length;
		var countStatus = 0;
		
		for(var i=0;i < countObjEmp ;i++){
			if($scope.listEmpModel[i].emp_ID == id){
				$scope.listEmpModel[i].statusCheck = !$scope.listEmpModel[i].statusCheck;
			}
			if($scope.listEmpModel[i].statusCheck == true){
				countStatus++;
			}
		}
		
		$scope.countEmpTrue = countStatus;
			
	}
	
	$scope.ckRowClickAll = function(){

      		var countObjEmp = Object.keys($scope.listEmpModel).length;
      		var countStatus = 0;
      		$scope.empCheckAll = !$scope.empCheckAll;
      		if($scope.empCheckAll == false){
      			for(var i=0;i < countObjEmp ;i++){
      				$scope.listEmpModel[i].statusCheck = false;	
      			}
      			$scope.countEmpTrue = 0;
      		}else{
      			for(var i=0;i < countObjEmp ;i++){
      				$scope.listEmpModel[i].statusCheck = true;	
      			}
      			$scope.countEmpTrue = countObjEmp;
      		}
      		
      		if(isNaN($scope.authAmount)){
				$scope.setErrorField("divAthAmountIndividual","The authorization amount can not input string !");
			}else if(parseInt($scope.authAmount) == 0){
				$scope.setErrorField("divAthAmountIndividual","The authorization amount is required and can not be empty or 0!");	
			}else{
				
				if(parseInt(countStatus) < parseInt($scope.authAmount)){
					$scope.setErrorField("divAthAmountIndividual","Please check employee equal or greater than authorization amount  !");
				}else{
					$scope.setSuccessField("divAthAmountIndividual");
				}
			}
            		
	}
	
	$scope.addEmpModel = function(){
		
	
		$scope.countEmpTrue = 0;
		$scope.emps = [];
		var countObjEmp = Object.keys($scope.listEmpModel).length;
		for(var i=0;i < countObjEmp ;i++){
			if($scope.listEmpModel[i].statusCheck == true){
				$scope.emps.push({"emp_ID": $scope.listEmpModel[i].emp_ID, "emp_Name": $scope.listEmpModel[i].emp_Name});
			}
		}
		
		$('#myModalEmp').modal('toggle');
		
		var countObjEmp = Object.keys($scope.emps).length;

		if(isNaN($scope.authAmount)){
			$scope.setErrorField("divAthAmountIndividual","The authorization amount can not input string !");
		}else{
			if(parseInt(countObjEmp) >= parseInt($scope.authAmount)){	
				$scope.setSuccessField("divAthAmountIndividual");
			}else{
				$scope.setErrorField("divAthAmountIndividual","Please check employee equal or greater than authorization amount  !");				
			}
		}
		
		
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
	        		var countObjEmp = Object.keys($scope.listEmpModel).length;
	        		var countStatus = 0;
	        		
	        		for(var i=0;i < countObjEmp ;i++){
	        			if($scope.listEmpModel[i].emp_ID == id){
	        				$scope.listEmpModel[i].statusCheck = false;
	        			}
	        			if($scope.listEmpModel[i].statusCheck == true){
	        				countStatus++;
	        			}
	        		}
	        		
	        		for(var i=0;i < Object.keys($scope.emps).length ;i++){
	        			if($scope.emps[i].emp_ID == id){
	        				$scope.emps.splice(i,1);
	        			}
	        		}
	        		
	        		var countObjEmp = Object.keys($scope.emps).length;
	    			
	    			if(isNaN($scope.authAmount)){
	    				$scope.setErrorField("divAthAmountIndividual","The authorization amount can not input string !");
	    			}else{
	    				
	    				if(parseInt(countObjEmp) >= parseInt($scope.authAmount)){	
	    					$scope.setSuccessField("divAthAmountIndividual");
	    				}else{
	    					$scope.setErrorField("divAthAmountIndividual","Please check employee equal or greater than authorization amount  !");				
	    				}
	    			}
	        		
	        		messagsTypeSuccess("");
	        		$scope.countEmpTrue = countStatus;
	        		$scope.$apply();
	        		
        		},500);
        	}

        });	
	}
	
	
	$scope.deleteGrolist = function(id){

		swal({
			title:  "<span style='font-size: 20px;'>You are about to delete group with ID: "+id+" . </span>",
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
        			
					var authorizationGroupModel = Object.keys($scope.authorizationGroupModel).length;
	        		
	        		for(var i=0;i < authorizationGroupModel ;i++){
	        			if($scope.authorizationGroupModel[i].authGroupId == id){
	        				$scope.authorizationGroupModel[i].statusCheck = false;
	        			}
	        		}
	        		
	        		for(var i=0;i < Object.keys($scope.authorizationGroup).length ;i++){
	        			if($scope.authorizationGroup[i].authGroupId == id){
	        				$scope.authorizationGroup.splice(i,1);
	        			}
	        		}

	        		messagsTypeSuccess("");
	        		
	        		$scope.$apply();
	        		
        		},500);
        	}

        });	
	}
	
	$scope.changeAuthAmountIndi = function(){
		$scope.authAmount = parseInt($scope.authAmount);
		if($scope.authAmount == "" && $scope.authAmount == 0){
			$scope.setErrorField("divAthAmountIndividual","The authorization amount is required and can not be empty or 0!");
		}else if($scope.authAmount != ""){
			
			var countObjEmp = Object.keys($scope.emps).length;
			
			if(isNaN($scope.authAmount)){
				$scope.setErrorField("divAthAmountIndividual","The authorization amount can not input string !");
			}else{
				
				if(parseInt(countObjEmp) >= parseInt($scope.authAmount)){	
					$scope.setSuccessField("divAthAmountIndividual");
				}else{
					$scope.setErrorField("divAthAmountIndividual","Please check employee equal or greater than authorization amount  !");				
				}
			}
			
			
		}else{

		}

	}


	
	
	$scope.listAuthorizationpage = function(){
		$http.get(server+"rest/authorization/list")
        .success(function(response){
        	var data = response.DATA;
    		if(response.MESSAGE == "SUCCESS"){
    			$scope.listAuthorizationHome = data;
    		}else{
    			messageTypeFail();
    		}
        	
        });
		
	}
	$scope.deleteAuthorizationId = function(authID,authName){
		swal({
			title:  "<span style='font-size: 20px;'>You are about to delete authorization with ID "+authID+"</span>",
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
						    url: server+"rest/authorization/delete/"+authID,
						    headers: {
						    	'Accept': 'application/json',
						        'Content-Type': 'application/json'
						    }	    
						}).success(function(response) {
							if(response.MESSAGE == "fail"){
								messageTypeFail(response.DESCRIPTION)
							}else if(response.MESSAGE == "exist"){
								messageTypeExisted(response.DESCRIPTION)
							}else if(response.MESSAGE == "not allowed"){
								messageTypeNotAllowed(response.DESCRIPTION)
							}else if(response.MESSAGE == "used"){
								messageTypeUsed(response.DESCRIPTION)
							}else{
								messagsTypeSuccess(response.DESCRIPTION)
								$scope.listAuthorizationpage();
							}
	
						});

            	},500);
            }
        });
		          
		
	}
	
	
	$scope.changeType = function(){
		
		if($scope.btn_save == "create"){
			
			$scope.sAuthAndOr = "";
			$(".select2").select2();
			$scope.listAuthorizationGroup();
			if($scope.sAuthType == "Individual"){
				$("#div_group").css("display","none");
				$("#authAndOr").removeAttr("disabled","");
				$("#div_andOr").css("display","");
				$("#div_emp").css("display","");
				$scope.listEmployee();
				$scope.currentPage = 1;
				$scope.pageSize.row = $scope.pageSize.rows[1].value;	
						
			}else if($scope.sAuthType == "Group"){
				$scope.countEmpTrue = 0;
				$scope.listAuthorizationGroup();
				
				$("#div_group").css("display","");
				$("#div_emp").css("display","none");
				$("#div_andOr").css("display","none");
				$("#div_amount").css("display","none");
				$("#authAmount").attr("disabled","disabled");
				$("#authAndOr").attr("disabled","disabled");
				$("#authAndOr").val("");
			
				setValueById("authAmount","");
			
			
			}else{
				$scope.countEmpTrue = 0;
				$("#div_emp").css("display","none");
				$("#div_andOr").css("display","none");
				$("#div_amount").css("display","none");
				$("#authAmount").attr("disabled","disabled");
				$("#authAndOr").attr("disabled","disabled");
				$("#authAndOr").val("");
				$('#form_authori').bootstrapValidator('revalidateField', 'authAndOr');
				setValueById("authAmount","");
				$('#form_authori').bootstrapValidator('revalidateField', 'authAmount');
				
			}
			
		}else{
	
			$(".select2").select2();
		


			if($scope.sAuthType == "Individual"){
				$scope.emps;
				$("#div_group").css("display","none");
				$("#authAndOr").removeAttr("disabled","");
				$("#div_andOr").css("display","");
				$("#div_emp").css("display","");
				
				$scope.changeAndOr();
			
			}else if($scope.sAuthType == "Group"){

				$("#div_group").css("display","");
				$("#div_emp").css("display","none");
				$("#div_andOr").css("display","none");
				$("#div_amount").css("display","none");
				$("#authAmount").attr("disabled","disabled");
				$("#authAndOr").attr("disabled","disabled"); 
			
			
			}
		}
		
	}
	
	$scope.andOrCheckAg = function(item){
		var countObj = Object.keys($scope.authorizationGroup).length;
		var itemID = $("#chrAuthAndOr"+item).val();
			if($scope.authorizationGroup[item-1].statusCheck == true){
				if($scope.authorizationGroup[item-1].andOrCheck == "And"){
					$scope.authorizationGroup[item-1].amountCheck = "";
					$scope.setSuccessField("divAuthAndOr"+$scope.authorizationGroup[item-1].itemNumber);
				}else if($scope.authorizationGroup[item-1].andOrCheck == "Or"){
					$scope.setSuccessField("divAuthAndOr"+$scope.authorizationGroup[item-1].itemNumber);
					$scope.setNomallField("divAuthAmount"+$scope.authorizationGroup[item-1].itemNumber);
					$scope.authorizationGroup[item-1].amountCheck = "";
				}else {
					$scope.setErrorField("divAuthAndOr"+$scope.authorizationGroup[item-1].itemNumber,"The authorization and \ or is required and can not be empty!");
				}
			}else{
				if($scope.authorizationGroup[item-1].andOrCheck == ""){
					$scope.setNomallField("divAuthAndOr"+$scope.authorizationGroup[item-1].itemNumber);
				}
			}
		
	}



	$scope.amountCheckAg = function(item){
		var itemID = "";
		var itemID = $("#chrAuthAmount"+item).val();
		
		if($scope.authorizationGroup[item-1].statusCheck == true){
			if($scope.authorizationGroup[item-1].andOrCheck == "And"){
				if($scope.authorizationGroup[item-1].amountCheck != "" && $scope.authorizationGroup[item-1].amountCheck != 0){
					if (isNaN($scope.authorizationGroup[item-1].amountCheck)) {
						$scope.setErrorField("divAuthAmount"+$scope.authorizationGroup[item-1].itemNumber,"The authorization amount can not input string !");
					}else{
						
						if(parseInt($scope.authorizationGroup[item-1].amountCheck) > parseInt($scope.authorizationGroup[item-1].authGroupCount)){
							$scope.setErrorField("divAuthAmount"+$scope.authorizationGroup[item-1].itemNumber,"Amount can not big than employee in group "+ $scope.authorizationGroup[item-1].authGroupName+" !");
						}else{
							$scope.setSuccessField("divAuthAmount"+$scope.authorizationGroup[item-1].itemNumber);
						}
					}	
				}else {
					$scope.setErrorField("divAuthAmount"+$scope.authorizationGroup[item-1].itemNumber,"The authorization amount is required and can not be empty!");
				}
			}
		}else{
			if($scope.authorizationGroup[item-1].amountCheck == ""){
				$scope.setNomallField("divAuthAmount"+$scope.authorizationGroup[item-1].itemNumber);
			}
		}
		
	}
	
	$scope.getauthByID = function(authID){
		$scope.btn_save = "save";
		$('#myModal').modal('toggle');
		
		
		$http({
 			method: 'GET',
		    url: server+"rest/authorization/get/"+authID,
		    headers: {
		    	'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    }	    
		}).success(function(response) {
			$scope.authByID = [];
			$scope.emps = [];
			if(response.MESSAGE == "SUCCESS"){
				$scope.authoriID =  "";
				
				$scope.authByID = response.authorization;					
				$scope.authorizationDetail = response.authorizationDetail;
				$scope.authorizationGroupModel = response.authorizationGroup;
				$scope.listEmpModel = response.Employees;
		
				//$scope.sAuthAndOr = "";
				 angular.forEach($scope.authByID, function(value, key){
						
			
						$("#authName").val(value.authName);
						$("#authType").val(value.authType);
						$scope.authoriID = value.authId;
						$scope.sAuthAndOr = value.authType;
						$scope.sAuthType = value.authType;
						
						$(".select2").select2();
						$scope.authAmount = parseInt(value.authAmount);
						$scope.emps = [];
						if(value.authType == "Individual"){	
							$scope.listEmpModel = response.Employees;
						    var countObjEmp = Object.keys($scope.listEmpModel).length;
								
						    var countStatus = 0;
							for(var i=0;i < countObjEmp ;i++){
								if($scope.listEmpModel[i].statusCheck == true){
									$scope.emps.push({"emp_ID": $scope.listEmpModel[i].emp_ID ,"emp_Name":  $scope.listEmpModel[i].emp_Name,});
									countStatus++;
								}	
							}
							
							$scope.countEmpTrue = countStatus;
							
							$scope.sAuthAndOr = value.authAndOr;
							setValueById("authAndOr",value.authAndOr);
							$("#div_andOr").css("display","");
							
							if(value.authAndOr == "And"){
								$("#authAmount").removeAttr("disabled","");
								$("#authAndOr").removeAttr("disabled","");
								$("#div_amount").css("display","");
								$("#authAmount").val(parseInt(value.authAmount));
								setValueById("authAmount",parseInt(value.authAmount));
							}else{
								$("#authAndOr").removeAttr("disabled","");
								$("#div_amount").css("display","none");
							}
							
							setValueById("authAmount",parseInt(value.authAmount));
							
							$("#div_group").css("display","none");
							
							
							$("#div_emp").css("display","");
							$("#authType").val(value.authType);
							
							/*$("#authType").attr("disabled","disabled");
							$("#authAndOr").attr("disabled","disabled");
							$("#authAmount").attr("disabled","disabled");*/
							
						}else if(value.authType == "Group"){
							
							$scope.authorizationGroup = [];
						    var authorizationGroup = Object.keys($scope.authorizationGroupModel).length;

							for(var i=0;i < authorizationGroup ;i++){
								if($scope.authorizationGroupModel[i].statusCheck == true){
									$scope.authorizationGroup.push({
										"authGroupId": $scope.authorizationGroupModel[i].authGroupId,
										"authGroupName": $scope.authorizationGroupModel[i].authGroupName,
										"amountCheck": $scope.authorizationGroupModel[i].amountCheck,
										"andOrCheck": $scope.authorizationGroupModel[i].andOrCheck,
										"statusCheck": $scope.authorizationGroupModel[i].statusCheck,
										"authGroupCount": $scope.authorizationGroupModel[i].authGroupCount,
										"itemNumber": $scope.authorizationGroupModel[i].itemNumber,
								});
							
								}	
							}
							
							
							
							
							//$scope.listEmployee();
							$scope.sAuthAndOr = "";
							$("#div_group").css("display","");
							$("#div_emp").css("display","none");
							$("#div_andOr").css("display","none");
							$("#div_amount").css("display","none");
							$("#authAmount").attr("disabled","disabled");
							$("#authAndOr").attr("disabled","disabled");
							$("#authAndOr").val("");
							setValueById("authAmount",""); 
							
							/*$("#authType").attr("disabled","disabled");*/
						
						}
				 });
				
			}
		});	
	}

	$scope.changeAndOr = function(){
		var andOr = getValueStringById("authAndOr");
		if(andOr == "And"){
			$("#div_amount").css("display","");
			$("#authAmount").removeAttr("disabled","");
		}else{
			$("#div_amount").css("display","none");
			$("#authAmount").attr("disabled","disabled");
		}
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
			$scope.authorizationGroup = [];
			if(response.MESSAGE == "SUCCESS"){
				$scope.authorizationGroupModel = response.DATA;	
				
			}
		});
	}
	
	$scope.addGroModel = function(){	
		var countGrTrue = 0;
		$scope.authorizationGroup = [];
		var countObjgr = Object.keys($scope.authorizationGroupModel).length;

		for(var i=0;i < countObjgr ;i++){
			if($scope.authorizationGroupModel[i].statusCheck == true){
				$scope.authorizationGroup.push({
						"authGroupId": $scope.authorizationGroupModel[i].authGroupId,
						"authGroupName": $scope.authorizationGroupModel[i].authGroupName,
						"amountCheck": $scope.authorizationGroupModel[i].amountCheck,
						"andOrCheck": $scope.authorizationGroupModel[i].andOrCheck,
						"statusCheck": $scope.authorizationGroupModel[i].statusCheck,
						"authGroupCount": $scope.authorizationGroupModel[i].authGroupCount,
						"itemNumber": $scope.authorizationGroupModel[i].itemNumber,
				});
				
			}	
		}
		
		$('#myModalGroup').modal('toggle');

		$scope.countGrTrue = 0;	
	}
	
	$scope.listAuthorizationpage();
	
}]);



