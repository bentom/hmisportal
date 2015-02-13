angular.module('WeportalApp', ['ngMaterial','highcharts-ng','ui.bootstrap'])
    .controller('AppCtrl', function ($scope,$http, $log) {
        var tabs = [
            { title: 'Dashbboard', url: "partials/dashboard.html"},
            { title: 'Data Coverage', url: "partials/datacoverage.html"},
            { title: 'Downloads', url: "partials/downloads.html"}
        ];


        //Note dx = dataelement, ds = dataset, ou=orgunit,
        $scope.snippets = [
            //{
            //    name:"Population By District 2014",
            //    html:"",
            //    layout: {
            //        columns: [
            //            {name:"ANC"},
            //            {id:"L&D"}
            //        ],
            //        rows: [
            //            {name:"Orgunit"}
            //        ],
            //        filters: [
            //            {name:"Period"}
            //        ]
            //    },
            //    placeHolder:"chartx"
            //},
            {
                name:"Regional Populations For Year 2014",
                url:"data/regionPopulation.json",
                html:"",
                layout: {
                    columns: [
                        {label:"Population",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Population count in Millions"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"District Populations For Year 2014",
                url:"data/districtPopulation.json",
                html:"",
                layout: {
                    columns: [
                        {label:"Population",name:"dx",type:"column"}
                    ],
                    row: {label:"Districts",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Population count in Millions"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of HMIS Forms For Regions in 2014",
                url:"data/allHMISCompletenesss.json",
                html:"",
                layout: {
                    columns: [
                        {label:"HMIS_Wagonjwa wa Nje (OPD) ",name:"dx",type:"column"},
                        {label:"HMIS_Wagonjwa wa Kulazwa (IPD) ",name:"dx",type:"line"},
                        {label:"HMIS_Kliniki ya Wajawazito (ANC)",name:"dx",type:"spline"},
                        {label:"HMIS_Kutoka Wodi ya Wazazi (L&D)",name:"dx",type:"area"},
                        {label:"HMIS_Magonjwa ya Kuhara (DTC) ",name:"dx",type:"column"},
                        {label:"HMIS_Ufuatiliaji wa Watoto (Child Health)",name:"dx",type:"column"},
                        {label:"HMIS_Tracer Medicine",name:"dx",type:"column"},
                        {label:"HMIS_Uzazi wa Mpango (FP)",name:"dx",type:"column"},
                        {label:"HMIS_Huduma Baada ya Kujifungua (Postnatal)",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of OPD and IPD For Regions in 2014",
                url:"data/OpdIpdCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"HMIS_Wagonjwa wa Nje (OPD) ",name:"dx",type:"column"},
                        {label:"HMIS_Wagonjwa wa Kulazwa (IPD) ",name:"dx",type:"line"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of ANC and L&D For Regions in 2014",
                url:"data/AncLandDCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"HMIS_Kliniki ya Wajawazito (ANC)",name:"dx",type:"spline"},
                        {label:"HMIS_Kutoka Wodi ya Wazazi (L&D)",name:"dx",type:"area"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of PNC and Family Planning For Regions in 2014",
                url:"data/PncAndFPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"HMIS_Uzazi wa Mpango (FP)",name:"dx",type:"column"},
                        {label:"HMIS_Huduma Baada ya Kujifungua (Postnatal)",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of Tracer Drugs and Child Health For Regions in 2014",
                url:"data/tracerAndChildHealthCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"HMIS_Ufuatiliaji wa Watoto (Child Health)",name:"dx",type:"column"},
                        {label:"HMIS_Tracer Medicine",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of HMIS Forms By Ownership for Tanzania in 2014",
                url:"data/completenessByOwnership.json",
                html:"",
                layout: {
                    columns: [
                        {label:"HMIS_Wagonjwa wa Nje (OPD) ",name:"dx",type:"column"},
                        {label:"HMIS_Wagonjwa wa Kulazwa (IPD) ",name:"dx",type:"line"},
                        {label:"HMIS_Kliniki ya Wajawazito (ANC)",name:"dx",type:"spline"},
                        {label:"HMIS_Kutoka Wodi ya Wazazi (L&D)",name:"dx",type:"area"},
                        {label:"HMIS_Magonjwa ya Kuhara (DTC) ",name:"dx",type:"column"},
                        {label:"HMIS_Ufuatiliaji wa Watoto (Child Health)",name:"dx",type:"column"},
                        {label:"HMIS_Tracer Medicine",name:"dx",type:"column"},
                        {label:"HMIS_Uzazi wa Mpango (FP)",name:"dx",type:"column"},
                        {label:"HMIS_Huduma Baada ya Kujifungua (Postnatal)",name:"dx",type:"column"}
                    ],
                    row: {label:"Ownership",name:"IymWT9V0HZI"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of HMIS Forms By Type for Tanzania in 2014",
                url:"data/completenessByType.json",
                html:"",
                layout: {
                    columns: [
                        {label:"HMIS_Wagonjwa wa Nje (OPD) ",name:"dx",type:"column"},
                        {label:"HMIS_Wagonjwa wa Kulazwa (IPD) ",name:"dx",type:"line"},
                        {label:"HMIS_Kliniki ya Wajawazito (ANC)",name:"dx",type:"spline"},
                        {label:"HMIS_Kutoka Wodi ya Wazazi (L&D)",name:"dx",type:"area"},
                        {label:"HMIS_Magonjwa ya Kuhara (DTC) ",name:"dx",type:"column"},
                        {label:"HMIS_Ufuatiliaji wa Watoto (Child Health)",name:"dx",type:"column"},
                        {label:"HMIS_Tracer Medicine",name:"dx",type:"column"},
                        {label:"HMIS_Uzazi wa Mpango (FP)",name:"dx",type:"column"},
                        {label:"HMIS_Huduma Baada ya Kujifungua (Postnatal)",name:"dx",type:"column"}
                    ],
                    row: {label:"Type",name:"VG4aAdXA4JI"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NACP Forms For Regions in 2014",
                url:"data/allNACPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NACP_HIV Care and Treatment Reporting Form",name:"dx",type:"column"},
                        {label:"NACP_Home Based Care ( HUWANYU)",name:"dx",type:"line"},
                        {label:"NACP_HIV Testing and Counselling (HTC)",name:"dx",type:"spline"},
                        {label:"NACP_Sexually Transmitted Infections (STI)",name:"dx",type:"area"},
                        {label:"NACP_PMTCT MC Quaterly",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NACP HIV Care and Treatment for Regions in 2014",
                url:"data/allNACPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NACP_HIV Care and Treatment Reporting Form",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NACP Home based Care(HUWANYU) For Regions in 2014",
                url:"data/allNACPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NACP_Home Based Care ( HUWANYU)",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NACP HIV Testing and Counselling (HTC) For Regions in 2014",
                url:"data/allNACPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NACP_HIV Testing and Counselling (HTC)",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NACP_Sexually Transmitted Infections (STI) For Regions in 2014",
                url:"data/allNACPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NACP_Sexually Transmitted Infections (STI)",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NMCP Forms For Regions in 2014",
                url:"data/allNMCPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NMCP_National Malaria Control Programme",name:"dx",type:"column"},
                        {label:"HMIS_Wagonjwa wa Nje (OPD) ",name:"dx",type:"line"},
                        {label:"HMIS_Wagonjwa wa Kulazwa (IPD) ",name:"dx",type:"spline"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NMCP_National Malaria Control Programme For Regions in 2014",
                url:"data/allNMCPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NMCP_National Malaria Control Programme",name:"dx",type:"column"},
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of Wagonjwa wa Nje (OPD) For Regions in 2014",
                url:"data/allNMCPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"HMIS_Wagonjwa wa Nje (OPD) ",name:"dx",type:"line"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NTLP Form For Regions in 2014",
                url:"data/allNTLPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NTLP_LEP09 a) PB Leprosy patients Treatment outcome",name:"dx",type:"column"},
                        {label:"NTLP_LEP09 b) MB Leprosy patients treatment outcome",name:"dx",type:"line"},
                        {label:"NTLP_LEP09 c) Outcome of standard treatment for reaaction",name:"dx",type:"spline"},
                        {label:"NTLP_LEP08 Leprosy Drugs Order Calculation Form",name:"dx",type:"area"},
                        {label:"NTLP_LEP07 case notification report of leprosy",name:"dx",type:"column"},
                        {label:"NTLP_LEP10 Annual_Report on Prevention of Disability",name:"dx",type:"column"},
                        {label:"NTLP_TB08 Drugs and Lab Supplies Order Calculation Form",name:"dx",type:"column"},
                        {label:"NTLP_TB07_Tuberculosis and TB/HIV",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NTLP_LEP09 a) PB Leprosy patients Treatment outcome For Regions in 2014",
                url:"data/allNTLPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NTLP_LEP09 a) PB Leprosy patients Treatment outcome",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NTLP_LEP09 b) MB Leprosy patients treatment outcome For Regions in 2014",
                url:"data/allNTLPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NTLP_LEP09 b) MB Leprosy patients treatment outcome",name:"dx",type:"line"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NTLP_LEP09 c) Outcome of standard treatment for reaction For Regions in 2014",
                url:"data/allNTLPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NTLP_LEP09 c) Outcome of standard treatment for reaaction",name:"dx",type:"spline"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NTLP_LEP08 Leprosy Drugs Order Calculation Form For Regions 2014",
                url:"data/allNTLPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NTLP_LEP08 Leprosy Drugs Order Calculation Form",name:"dx",type:"area"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NTLP_LEP07 case notification report of leprosy For Regions in 2014",
                url:"data/allNTLPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NTLP_LEP07 case notification report of leprosy",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NTLP_LEP10 Annual_Report on Prevention of Disability For Regions in 2014",
                url:"data/allNTLPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NTLP_LEP10 Annual_Report on Prevention of Disability",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NTLP_TB08 Drugs and Lab Supplies Order Calculation Form For Regions in 2014",
                url:"data/allNTLPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NTLP_TB08 Drugs and Lab Supplies Order Calculation Form",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            },
            {
                name:"Data Reporting Rate of NTLP_TB07_Tuberculosis and TB/HIV For Regions in 2014",
                url:"data/allNTLPCompleteness.json",
                html:"",
                layout: {
                    columns: [
                        {label:"NTLP_TB07_Tuberculosis and TB/HIV",name:"dx",type:"column"}
                    ],
                    row: {label:"Regions",name:"ou"},
                    filters: [
                        {label:"Year",name:"value"}
                    ],
                    yAxis: "Data Reporting Rate(%)"
                },
                object:"chart",
                type:"column",
                placeHolder:"populationChart"
            }
        ];

        angular.forEach($scope.snippets,function(snippet,snippetIndex){
            if(!angular.isUndefined(snippet.url) && snippet.url.length>0) {
                //Fetch data from url
                $http.get(snippet.url).success(function(data){
                    //Initiate higchart for snippet
                    snippet.highchartsNG = {};
                    //snippet.highchartsNG.legend = {enabled:true};
                    //Set Chart Options
                    if(!angular.isUndefined(snippet.object)) {
                        // Deal with object, currently only charts
                        snippet.highchartsNG.options={};
                        snippet.highchartsNG.options[snippet.object] = {};
                        if(!angular.isUndefined(snippet.type)) {
                            snippet.highchartsNG.options[snippet.object].type=snippet.type;
                            snippet.highchartsNG.options[snippet.object].renderTo=snippet.placeHolder;
                        }else {
                            snippet.highchartsNG.options[snippet.object].type="bar";
                            snippet.highchartsNG.options[snippet.object].renderTo=snippet.placeHolder;
                        }
                        //snippet.highchartsNG.options[snippet.object].height=700;
                    }
                    /*
                     * Insert Series data and their titles
                     * Note: Column can be many in chart but there will always be one row.
                     */
                    //Go through each column to make a series with data and it's label
                    snippet.highchartsNG.series = [];
                    snippet.highchartsNG.yAxis = [];
                    snippet.highchartsNG.xAxis = {labels:{rotation:-45}};
                    snippet.highchartsNG.xAxis.categories=[];
                    angular.forEach(snippet.layout.columns,function(column,columnIndex){
                        //Prepare a series to push into series object
                        var serie = {};
                        serie.name=column.label;
                        serie.id=column.label;
                        serie.data=[];
                        //Determine column index for value extraction
                        var serieIndex = null;
                        angular.forEach(data.headers,function(header,index){
                            if(header.name==column.name) {
                                serieIndex=index;
                            }
                        });
                        //Go through data and extract serie value
                        angular.forEach(data.rows,function(row){
                            //Use column index to check if the column match name of our serie
                            //and extract value or skip
                            if(data.metaData.names[ row[serieIndex] ] == column.label) {
                                var dataLabel='';
                                if(serieIndex==0) {
                                    if(! $scope.contains(snippet.highchartsNG.xAxis.categories,data.metaData.names[ row[1] ])) {
                                        dataLabel=  data.metaData.names[ row[1] ];
                                        snippet.highchartsNG.xAxis.categories.push( dataLabel);
                                    }
                                }else {
                                    if(! $scope.contains(snippet.highchartsNG.xAxis.categories,data.metaData.names[ row[0] ])) {
                                        dataLabel = data.metaData.names[ row[0] ];
                                        snippet.highchartsNG.xAxis.categories.push(dataLabel);
                                    }
                                }
                                serie.data.push([dataLabel+"("+Number(row[2])+")",Number(row[2])]);//Push eligible value to serie
                            }
                        });
                        snippet.highchartsNG.series.push(serie);
                        if(snippetIndex==2) {
                            console.log(snippet.name);
                            console.log(snippet.highchartsNG);
                        }
                    });
                    //Add pie chart plot options
                    snippet.highchartsNG.plotOptions= {
                        column: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: true,
                                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                                style: {
                                    textShadow: '0 0 3px black'
                                }
                            }
                        },
                        pie: {
                            showInLegend: true
                        }
                    };

                    //Setup yAxis for the column
                    if(snippet.layout.yAxis=="Data Reporting Rate(%)") {
                        //Hack to set maximum for completeness
                        snippet.highchartsNG.yAxis.push({
                            "title":{ "text":snippet.layout.yAxis, "style":{"color":"#0D0DC1"} },
                            "max":100,
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        });
                    }else {
                        snippet.highchartsNG.yAxis.push({
                            "title":{ "text":snippet.layout.yAxis, "style":{"color":"#0D0DC1"} },
                            stackLabels: {
                                enabled: true,
                                style: {
                                    fontWeight: 'bold',
                                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                                }
                            }
                        });
                    }
                    //Additional settings
                    //snippet.highchartsNG.loading="false";
                    snippet.highchartsNG.credits={position:{align:'left',verticalAlign:'bottom',x:10,y:-10}};
                    snippet.highchartsNG.labels = {align:"right",x:-10,y:0};
                    snippet.highchartsNG.legend = {align:"left",verticalAlign:"top",float:true, enabled:true};
                    //Set title of the snippet
                    if(!angular.isUndefined(snippet.name)) {
                        snippet.highchartsNG.title={text:snippet.name};
                    }else if(!angular.isUndefined(snippet.type) && !angular.isUndefined(snippet.object) ) {
                        snippet.highchartsNG.title={text:snippet.type+' '+snippet.object};;
                    }

                }).error(function(data){
                    console.log('Data fetching failed');
                })
            }
        });

        $scope.isChartObject = function(snippet) {
            return angular.isUndefined(snippet.object) ? false : true;
        }
        $scope.contains = function(array,item) {
            angular.forEach(array,function(entity){
                if(entity==item) return true;
            });
            return false;
        }
        $scope.tabs = tabs;
        $scope.selectedIndex = 0;
        $scope.currentDashTab = 'tab-1';
        $scope.currentCoverageTab='tab-1';

        $scope.$watch('selectedIndex', function(current, old){
            if ( old && (old != current)) $log.debug('Goodbye ' + tabs[old].title + '!');
            if ( current )                $log.debug('Hello ' + tabs[current].title + '!');
        });

        $scope.addTab = function (title, view) {
            view = view || title + " Content View";
            tabs.push({ title: title, url: view, disabled: false});
        };

        $scope.removeTab = function (tab) {
            for (var j = 0; j < tabs.length; j++) {
                if (tab.title == tabs[j].title) {
                    $scope.tabs.splice(j, 1);
                    break;
                }
            }
        };
        $scope.addPoints = function () {
            var seriesArray = $scope.highchartsNG.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
        };

        //Highchart functions
        $scope.addSeries = function () {
            var rnd = []
            for (var i = 0; i < 10; i++) {
                rnd.push(Math.floor(Math.random() * 20) + 1)
            }
            $scope.highchartsNG.series.push({
                data: rnd
            })
        }

        $scope.displayContents = function(tabId) {

        }

        $scope.removeRandomSeries = function () {
            var seriesArray = $scope.highchartsNG.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray.splice(rndIdx, 1)
        }

        $scope.options = {
            type: 'line'
        }

        $scope.swapChartType = function () {
            if (this.highchartsNG.options.chart.type === 'line') {
                this.highchartsNG.options.chart.type = 'bar'
            } else {
                this.highchartsNG.options.chart.type = 'line'
            }
        }

        $scope.highchartsNG = {
            options: {
                chart: {
                    type: 'column'
                }
            },
            series: [{
                data: [10, 15, 12, 8, 7]
            }],
            title: {
                text: 'Hello'
            },
            loading: false
        }
        $scope.base = 'http://localhost:8080/';
        $scope.getChartUrl= function(chartId) {
            var chartUrl = $scope.base + "api/chart/" + chartId + ".json?fields=*,program[id,name],programStage[id,name],columns[dimension,filter,items[id,name]],rows[dimension,filter,items[id,name]],filters[dimension,filter,items[id,name]],!lastUpdated,!href,!created,!publicAccess,!rewindRelativePeriods,!userOrganisationUnit,!userOrganisationUnitChildren,!userOrganisationUnitGrandChildren,!externalAccess,!access,!relativePeriods,!columnDimensions,!rowDimensions,!filterDimensions,!user,!organisationUnitGroups,!itemOrganisationUnitGroups,!userGroupAccesses,!indicators,!dataElements,!dataElementOperands,!dataElementGroups,!dataSets,!periods,!organisationUnitLevels,!organisationUnits";
            return chartUrl;
        }


        //Load chart
        $http.post($scope.base+'dhis-web-commons-security/login.action?authOnly=true',{
            j_username: "mukulu", j_password: "Jo748596hN"
        }).success(function(data,status,headers,config){
            //$http.get($scope.getChartUrl('Y8WdYIKZ8gv')).success(function(data,status,headers,config){
            //    console.log('chart fetched successfully');
            //    console.log(data);
            //}).error(function(data,status,headers,config){
            //    console.log('failed to get chart');
            //});
            $http.get($scope.base+'api/currentUser').sucess
        }).error(function(data,status,headers,config){
            //console.log('Request failed!');
        })
    });
