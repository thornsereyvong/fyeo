app.controller('authoriCon',['$scope','$http',function($scope, $http){	
				
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
				
				
				$scope.pageSizeAuthGR = {};
				$scope.pageSizeAuthGR.rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthGR.row = $scope.pageSizeAuthGR.rows[1].value;
				
				
				$scope.pageSizeAuthBR = {};
				$scope.pageSizeAuthBR.rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthBR.row = $scope.pageSizeAuthBR.rows[1].value;
				
			
				
				$scope.pageSizeAuthLm = {};
				$scope.pageSizeAuthLm .rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthLm .row = $scope.pageSizeAuthLm .rows[1].value;
				
				
				$scope.pageSizeAuthMa = {};
				$scope.pageSizeAuthMa .rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthMa.row = $scope.pageSizeAuthMa.rows[1].value;
				
				$scope.pageSizeAuthEx = {};
				$scope.pageSizeAuthEx .rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthEx.row = $scope.pageSizeAuthEx.rows[1].value;
				
				$scope.pageSizeAuthOv = {};
				$scope.pageSizeAuthOv.rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthOv.row = $scope.pageSizeAuthOv.rows[1].value;
				
				$scope.pageSizeAuthLe = {};
				$scope.pageSizeAuthLe .rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthLe .row = $scope.pageSizeAuthLe .rows[1].value;
				
				$scope.pageSizeAuthCust = {};
				$scope.pageSizeAuthCust.rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthCust.row = $scope.pageSizeAuthCust.rows[1].value;
				
				$scope.pageSizeAuthSa = {};
				$scope.pageSizeAuthSa.rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthSa.row = $scope.pageSizeAuthSa.rows[1].value;
				
				$scope.pageSizeAuthQu = {};
				$scope.pageSizeAuthQu.rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthQu.row = $scope.pageSizeAuthQu.rows[1].value;
				
				$scope.pageSizeAuthCi = {};
				$scope.pageSizeAuthCi.rows = [ 
								{ value: "5", label: "5" },
			    				{ value: "10", label: "10" },
			            		{ value: "15", label: "15" },
			            		{ value: "20", label: "20" },
			            		{ value: "25", label: "25" },
			            		{ value: "30", label: "30" },
			            		];
				$scope.pageSizeAuthCi.row = $scope.pageSizeAuthCi.rows[1].value;
				
				
				$scope.btn_save = "Create";
				
				$scope.currentPage = 1;
				
				$scope.countEmpTrue = 0;
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

				
				$scope.sort = function(keyname){
				    $scope.sortKey = keyname;  
				    $scope.reverse = !$scope.reverse;
				};

				$scope.getEvent = function(){
					var getEv = getValueStringById("btn_save");
					if(getEv == "Create"){
						$scope.createAuthGroup();
					}
				
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
	
				}
				
		

				$scope.closeModal = function(){
					$scope.countEmpTrue = 0;
					
					setTimeout(function(){
						$(".select2").select2();
					
						$('#process').select2("val","");
						$("#authorization").select2("val","");
								
						$scope.modelApp = "";
						$scope.st_author = "";
						$scope.getSubAdd();
						
					},1000);
				
					$scope.emps = [];		
					$("#form_group").bootstrapValidator('resetForm', 'true');
					$("#emp00").prop( "checked", false );	
					$scope.btn_save = "Create";
					$('#myModal').modal('toggle');
					$scope.currentPage = 1;
					$scope.pageSize.row = $scope.pageSize.rows[1].value;
					$scope.processMod = "";
					$scope.searchEmp = "";
					$scope.listEmpModel = [];
					$scope.authorization = [];
					$scope.countEmpTrue = 0;
				}


				$scope.modelApp = "Customer";
				 
				$scope.changeTab = function(name){
					$scope.modelApp = name;
				
					$scope.changeProcess();
				}
					
					
				$scope.changeProcess = function(){
			
					var countObjEmp = "";
					$scope.authEmployeeId = [];
					if($scope.modelApp != ""){
						
						$http({
				 			method: 'GET',
						    url: server+"rest/authorizationwatcher/getprocess/"+$scope.modelApp,
						    headers: {
						    	'Accept': 'application/json',
						        'Content-Type': 'application/json'
						    } 
						}).success(function(response) {	
						
							if(response.MESSAGE == "sucess"){
								$scope.authEmployeeId = response.DATA;	
						
								countObjEmp = Object.keys($scope.authEmployeeId).length;
							
								if(countObjEmp == 0){
									$("#footerAtt").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
									$scope.authEmployeeId = [];
								}else{
									$("#footerAtt").empty();
								}
							}
							
						});
					}else{
						
						$http({
				 			method: 'GET',
						    url: server+"rest/authorizationwatcher/getprocess/ame",
						    headers: {
						    	'Accept': 'application/json',
						        'Content-Type': 'application/json'
						    } 
						}).success(function(response) {	
						
							if(response.MESSAGE == "sucess"){
								$scope.authEmployeeId = response.DATA;	
						
								countObjEmp = Object.keys($scope.authEmployeeId).length;
							
								if(countObjEmp == 0){
									$("#footerAtt").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
									$scope.authEmployeeId = [];
								}else{
									$("#footerAtt").empty();
								}
							}
							
						});
						
						
					}
					
					
				}
				
				$scope.changeProcess();
				
				$scope.createAuthGroup = function(){
					
					$('#form_group').data('bootstrapValidator').validate();
					var addAuthGroup = $("#form_group").data('bootstrapValidator').validate().isValid();
					if(addAuthGroup){
						
						$scope.listEmpDetail = [];
						
						for(var i=0; i< Object.keys($scope.emps).length ;i++){		
							$scope.listEmpDetail.push({"empId":$scope.emps[i].emp_ID});
						}
						
						
						
						if(Object.keys($scope.listEmpDetail).length != 0){

							var process = getValueStringById("process");
							var authorization = getValueStringById("authorization");
							var action = getValueStringById("action");
							var stringValue = {
								    			"authProcess":process,"authId":authorization, "action": 1,"empDetail":$scope.listEmpDetail
											  };
					
							swal({
								title:  "<span style='font-size: 20px;'>You are about to create watcher authorization .</span>",
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
									    url: server+"rest/authorizationwatcher/create",
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
											$scope.closeModal();	
											$scope.changeProcess();
										}
											
										
									});
									
					            	},500);
					            }
					        });
							
						}else{
							
							swal({
								  title: "Information",
								  text: "Please assignment watcher to authorization !.",
								  timer: 3000,
								  type: "info",
								  showConfirmButton: false
							});
							
						}

						
						
					}

					      
					
					
				}


				$scope.listProcess = function(){
					$http({
			 			method: 'GET',
					    url: server+"rest/authorizationwatcher/getprocess",
					    headers: {
					    	'Accept': 'application/json',
					        'Content-Type': 'application/json'
					    }	    
					}).success(function(response) {
						$scope.lsprocess = [];
						
							$scope.lsprocess = response.DATA;
						
					});
					
				}
				
				$scope.getSubAdd = function(){
					$scope.listEmpModel = [];
					$scope.authorization = [];
					
					if($("#process").val() != ""){
						$http({
				 			method: 'GET',
						    url: server+"rest/authorizationwatcher/getSubAdd/"+$scope.processMod,
						    headers: {
						    	'Accept': 'application/json',
						        'Content-Type': 'application/json'
						    }	    
						}).success(function(response) {
							$scope.listAuthorizationProcess = [];
							
							$scope.authorization = response.DATA.authorisation;
							$scope.listEmpModel = response.DATA.employee;	
							
							countObjEmp = Object.keys($scope.listEmpModel).length;
							
							if(countObjEmp == 0){
								$("#fAtt").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								$scope.listEmpModel = [];
							}else{
								$("#fAtt").empty();
							}
							
						});
					}else{
						$scope.st_author = "";
						setTimeout(function(){
							$(".select2").select2();
							$("#authorization").select2("val","");
						},500);
						//
						$scope.listEmpModel = [];
						$scope.authorization = [];
					}
				}
				
				$scope.listProcess();
			
				$scope.deleteAuthEmployeeById = function(empId,process,authID){
					
					swal({
						title:  "<span style='font-size: 20px;'>You are about to delete watcher with "+process+".</span>",
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
					            		method:"POST",  
									    url: server+"rest/authorizationwatcher/deleteById/"+empId+"/"+process+"/"+authID,
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
										}else{
											messagsTypeSuccess(response.DESCRIPTION)
											$scope.changeProcess();;		
										}
										
									});
									
			            	},500);
			            }
			        });
					
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

					
					
					
				}
				
				
				$scope.deleteEmplist = function(id){

					swal({
						title:  "<span style='font-size: 20px;'>You are about to delete watcher with ID: "+id+" . </span>",
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

				        		messagsTypeSuccess("");
				        		$scope.countEmpTrue = countStatus;
				        		$scope.$apply();
				        		
			        		},500);
			        	}

			        });	
				}
		
				
	}]);