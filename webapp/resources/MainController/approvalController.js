app.controller('authoriCon',['$scope','$http',function($scope, $http){	
	
			
				
				$scope.st_status = "requested";
				
				
				
				$scope.pageSizeBr = {};
				$scope.pageSizeBr.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSizeBr.row = $scope.pageSizeBr.rows[1].value;
				
				$scope.pageSizeGr = {};
				$scope.pageSizeGr.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSizeGr.row = $scope.pageSizeGr.rows[1].value;
				
				$scope.pageSize3 = {};
				$scope.pageSize3.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSize3.row = $scope.pageSize3.rows[1].value;
				
				$scope.pageSize4 = {};
				$scope.pageSize4.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSize4.row = $scope.pageSize4.rows[1].value;
				
				$scope.pageSize5 = {};
				$scope.pageSize5.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSize5.row = $scope.pageSize5.rows[1].value;
				
				
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
				
				$scope.pageSizeOv = {};
				$scope.pageSizeOv.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSizeOv.row = $scope.pageSizeOv.rows[1].value;
				
				$scope.pageSizelm = {};
				$scope.pageSizelm.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSizelm.row = $scope.pageSizelm.rows[1].value;
				
				$scope.pageSizeCus = {};
				$scope.pageSizeCus.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSizeCus.row = $scope.pageSizeCus.rows[1].value;
				
				$scope.pageSizeMr = {};
				$scope.pageSizeMr.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSizeMr.row = $scope.pageSizeMr.rows[1].value;

				
				$scope.pageSizeEr = {};
				$scope.pageSizeEr.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSizeEr.row = $scope.pageSizeEr.rows[1].value;
				
				$scope.pageSizeSo = {};
				$scope.pageSizeSo.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				$scope.pageSizeSo.row = $scope.pageSizeSo.rows[1].value;
				
				$scope.pageSizeQo = {};
				$scope.pageSizeQo.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSizeQo.row = $scope.pageSizeQo.rows[1].value;
				
				$scope.pageSizeCi = {};
				$scope.pageSizeCi.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSizeCi.row = $scope.pageSizeCi.rows[1].value;
				
				$scope.pageSizeLe = {};
				$scope.pageSizeLe.rows = [ 
				    					{ value: "5", label: "5" },
				        				{ value: "10", label: "10" },
				                		{ value: "15", label: "15" },
				                		{ value: "20", label: "20" },
				                		{ value: "25", label: "25" },
				                		{ value: "30", label: "30" },
				                		];
				
				$scope.pageSizeLe.row = $scope.pageSizeLe.rows[1].value;
				
				
				$scope.authapprove = [];
				
				
				/* $scope.releases = [{name : "All Stage",active:true}];
				  // Concatenate the new array onto the original
				  $scope.releases = $scope.releases.concat([
				    {name : "Development",active:false},
				    {name : "Production",active:false},
				    {name : "Staging",active:false}
				  ]);*/

				  /*$scope.Search = function(name){
					
					  if($scope.st_status != ""){
							$http.POST(server+"rest/authorizationapprove/list/"+name).success(function(response){
								
								if(response.MESSAGE == "FAILED" || response.MESSAGE == "fail"){
									$("#noDataAuth").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								}else{
									$scope.authapprove = response.DATA;	
									var countOb = Object.keys($scope.authapprove).length;
									if(countOb == 0){
										$("#noDataAuth").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
										$("#noDataAuths").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
									}else{
										$("#noDataAuth").empty();
										$("#noDataAuths").empty();
									}
								}
	
							});
							
						}else{
							 $scope.authapprove = [];
						}	
					  
					 }*/
				  
				 $scope.modelApp = "all";
				 $scope.statusInAll = "all";
				 $scope.statusInCu = "all";
				 $scope.from = "";
				 $scope.to = "";
				 
				$scope.changeTab = function(name){
					
					$scope.from = "";
					$scope.to = "";
					$scope.modelApp = name;
					if(name ==  "Customer"){
						$scope.statusInAll = "all";
						$("#cradio1").prop( "checked", true );
					}else if(name == "Sale Order"){
						$scope.statusInAll = "all";
						$("#soradio1").prop( "checked", true );
					}else if(name == "Over Due Date"){
						$scope.statusInAll = "all";
						$("#Ovradio1").prop( "checked", true );
					}else if(name == "Quote"){
						$scope.statusInAll = "all";
						$("#qoradio1").prop( "checked", true );
					}else if(name == "Logistic Material Request"){
						$scope.statusInAll = "all";
						$("#lmradio1").prop( "checked", true );
					}else if(name == "Logistic Expense Request"){
						$scope.statusInAll = "all";
						$("#leradio1").prop( "checked", true );
					}else if(name == "Temporary Credit"){
						$scope.statusInAll = "all";
						$("#ciradio1").prop( "checked", true );
					}else if(name == "Expense Request"){
						$scope.statusInAll = "all";
						$("#erradio1").prop( "checked", true );
					}else if(name == "Material Request"){
						$scope.statusInAll = "all";
						$("#mrradio1").prop( "checked", true );
					}else if(name == "Budget Requisition"){
						$scope.statusInAll = "all";
						$("#1radio1").prop( "checked", true );
					}else if(name == "General  Requisition"){
						$scope.statusInAll = "all";
						$("#2radio1").prop( "checked", true );
					}else{
						$scope.statusInAll = "all";
						$("#radio1").prop( "checked", true );
					}
					
					
					
					$scope.listAuth();
				}
			
				$scope.changeStatusType = function(status){
					$scope.statusInAll = status;
					$scope.listAuth();
				}
				 
				
				
				$scope.listAuth = function(){
					
					$scope.tabStatus = "";
					$scope.tabProcess = "";

					if($scope.modelApp == "all"){
						$scope.tabStatus = $scope.statusInAll;
						$scope.tabProcess = "all";
					}else{
						$scope.tabStatus = $scope.statusInAll;
						$scope.tabProcess = $scope.modelApp;
					} 
					
					

					$scope.dataFrm = {
							"status": $scope.tabStatus,
							"process": $scope.tabProcess,
							"fromDate": $scope.from,
							"toDate": $scope.to
                        };
					
				
					
					$http.post(server+"rest/authorizationapprove/list/approval",$scope.dataFrm).success(function(response){
						
						if(response.MESSAGE == "FAILED" || response.MESSAGE == "fail"){
							$("#noDataAuth").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							$("#noDataAuths").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							$("#noDataAuthSo").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							$("#noDataAuthQo").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							$("#noDataAuthLm").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							$("#noDataAuthLe").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							$("#noDataAuthci").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							$("#noDataAuthMr").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							$("#noDataAuthEr").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							$("#noDataAuthOv").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							
							$("#noDataAuth1").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");	
							$("#noDataAuth2").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
							
						}else{
							$scope.authapprove = response.DATA;	
							var countOb = Object.keys($scope.authapprove).length;
							
						
							if(countOb == 0){
								$("#noDataAuth").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								$("#noDataAuths").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								$("#noDataAuthSo").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								$("#noDataAuthQo").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								$("#noDataAuthLm").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								$("#noDataAuthLe").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								$("#noDataAuthci").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								$("#noDataAuthMr").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								$("#noDataAuthEr").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								$("#noDataAuthOv").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								
								$("#noDataAuth1").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");	
								$("#noDataAuth2").html("<tr><td><span class='label label-warning font_size15'>No Data</span></td></tr>");
								
								
							}else{
								$("#noDataAuth").empty();
								$("#noDataAuths").empty();
								$("#noDataAuthLm").empty();
								$("#noDataAuthSo").empty();
								$("#noDataAuthQo").empty();
								$("#noDataAuthLe").empty();
								$("#noDataAuthci").empty();
								$("#noDataAuthMr").empty();
								$("#noDataAuthEr").empty();
								$("#noDataAuthOv").empty();
								
								$("#noDataAuth1").empty();
								$("#noDataAuth2").empty();
						
							}
							
							
						}
					});
						
					
				}
				
				$scope.listAuth();

				$scope.sort = function(keyname){
				    $scope.sortKey = keyname;   
				    $scope.reverse = !$scope.reverse; 
				}

				$scope.update = function(authProcessID, authProcessName, authID, authGroupID, authEmpID, status){
					var tit = "";
					if(status == "approved"){
						tit = "<span style='font-size: 22px;'>You are about to approved authorization with process ID: <span class='spanDelete'>"+authProcessID+"</span></span>";
					}else{
						tit = "<span style='font-size: 22px;'>You are about to rejected authorization with process ID: <span class='spanDelete'>"+authProcessID+"</span></span>";
					}
					 $scope.dataFrm = {
								"authProcessID": authProcessID,
								"authProcessName": authProcessName,
								"authID": authID,
								"authGroupID": authGroupID,
								"authEmpID": authEmpID,
								"authStatus": status
	                        };
					 
				
				
					
					swal({
						title: tit,
						text: "Click OK to continue or CANCEL to abort.",
						type: "info",
						html: true,
						showCancelButton: true,
						closeOnConfirm: false,
						showLoaderOnConfirm: true,	
			        }, 
			        function(isConfirm){ 

			            if(isConfirm){
			               
							 $http.post(server+"rest/authorizationapprove/update", $scope.dataFrm).success(function(data, status, headers, config){

								if(data.MESSAGE == "used"){
				            		messageTypeUsed(data.DESCRIPTION);
								}else if(data.MESSAGE == "success"){
									messagsTypeSuccess(data.DESCRIPTION);		
								}else if(data.MESSAGE == "not allow"){
									messageTypeNotAllowed(data.DESCRIPTION);
								}else{
									messageTypeFail();
								}
					            			
					            	$scope.listAuth();         		
						      });
			            } 
			        });
				};

				$scope.view = function(obj){
					var g = obj.authGroupID
					if(g == ''){
						g = 'a';
					}
					
					location.href = server+'authorization/approved/view/' + obj.authProcessID + '/' + obj.authProcessName + '/' + obj.authID + '/' + g;
				};

				$scope.resetFilter = function(type){
					$scope.statusInAll = "all";
					if(type == "all"){
						$("#radio1").prop( "checked", true );
						$scope.fdate_all = "";
						$scope.tdate_all = "";
						$scope.modelApp = "all";
					}else if(type == "Logistic Material Request"){
						$("#lmradio1").prop( "checked", true );
						$scope.lmfdate_all = "";
						$scope.lmtdate_all = "";
						$scope.modelApp = "Logistic Material Request";							
					}else if(type == "Logistic Expense Request"){
						$("#leradio1").prop( "checked", true );
						$scope.lefdate_all = "";
						$scope.letdate_all = "";
						$scope.modelApp = "Logistic Expense Request";
					}else if(type == "Expense Request"){
						$("#erradio1").prop( "checked", true );
						$scope.lefdate_all = "";
						$scope.letdate_all = "";
						$scope.modelApp = "Expense Request";
					}else if(type == "Material Request"){
						$("#mrradio1").prop( "checked", true );
						$scope.mrfdate_all = "";
						$scope.mrtdate_all = "";
						$scope.modelApp = "Expense Request";
						$scope.statusInAll = "all";
					}else if(type == "Temporary Credit"){
						$("#ciradio1").prop( "checked", true );
						$scope.cifdate_all = "";
						$scope.citdate_all = "";
						$scope.modelApp = "Temporary Credit";
					}else if(type == "Sale Order"){
						$("#soradio1").prop( "checked", true );
						$scope.sofdate_all = "";
						$scope.sotdate_all = "";		
						$scope.modelApp = "Sale Order";
					}else if(type == "Quote"){
						$("#qoradio1").prop( "checked", true );
						$scope.qofdate_all = "";
						$scope.qotdate_all = "";
						$scope.modelApp = "Quote";	
					}else if(type == "Customer"){
						$("#cusradio1").prop( "checked", true );
						$scope.cufdate_all = "";
						$scope.cutdate_all = "";
						
						$scope.modelApp = "Customer";
						
					}else if(type == "Over Due Date"){
						$("#Ovradio1").prop( "checked", true );
						$scope.Ovfdate_all = "";
						$scope.Ovtdate_all = "";
						$scope.modelApp = "Over Due Date";			
					}else if(type == "Budget Requisition"){
						$("#1radio1").prop( "checked", true );
						$scope.Brfdate_all = "";
						$scope.Brtdate_all = "";
						$scope.modelApp = "Budget Requisition";			
					}else if(type == "General Requisition"){
						$("#2radio1").prop( "checked", true );
						$scope.Grfdate_all = "";
						$scope.Grtdate_all = "";
						$scope.modelApp = "General Requisition";			
					}
					
					
					$scope.listAuth();
				}
				
				
				
				
			
				
		
				
			}]);


app.filter('dateRange', function() {
    return function( items, fromDate, toDate ) {
    	
    	if(fromDate === undefined || toDate === undefined || fromDate == "" || toDate == ""){
    		return items;
    	}else{
    		var filtered = [];
    		var fd = moment(moment(fromDate.trim(),"DD-MM-YYYY")).unix();
    		var td = moment(moment(toDate.trim(),"DD-MM-YYYY")).unix();
            angular.forEach(items, function(item) {
            	var ed = moment(moment(item.authDate,"YYYY-MM-DD")).unix();
                if((fd <= ed && ed <= td)) {
                    filtered.push(item);
                }
            });
            return filtered;
    	}
    };
});


		