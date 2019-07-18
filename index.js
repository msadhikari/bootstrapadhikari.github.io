$(function(){
    $("#side-scrollbar").dxTreeView({
        dataSource: continents,
        selectionMode: "single",
        selectByClick: true,
        onItemSelectionChanged: function(e) {
            showCountryData(e.itemData);
        },
        loadPanel: {
            enabled: false
        },
        scrolling: {
            mode: 'infinite'
        },
    });

    var tabPanel = $("#tabpanel").dxTabPanel({
        animationEnabled: true,
        itemTitleTemplate: $("#title"),
        itemTemplate: $("#city-template")
    }).dxTabPanel("instance");

    showCountryData(continents[0].items[0]);
});
$(function(){
    $("#chart").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: "state",
            type: "bar",
            hoverMode: "allArgumentPoints",
            selectionMode: "allArgumentPoints",
            label: {
                visible: true,
                format: {
                    type: "fixedPoint",
                    precision: 0
                }
            }
        },

        series: [
            { valueField: "year2004", name: "2004" },
            { valueField: "year2008", name: "2008" },
            { valueField: "year2010", name: "2010" }
        ],
        title: "Gross State Product within the Great Lakes Region",
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center"
        },
        "export": {
            enabled: true
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                return {
                    text: arg.valueText 
                };
            }
        },
        onPointClick: function (e) {
            e.target.select();
        }
    });
    function validate() {

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

       if((document.getElementById("login-username").value == "") && (document.getElementById("login-pswd").value == "")) {
            alert('Please Enter Email Address and Password');
            return;
        } 

        if(document.getElementById("login-username").value == "") {
            alert('Please Enter Email Address');
            return;
        } 
        else if(document.getElementById("login-pswd").value == "") {
            alert('Please Enter Password');
            return;
        }
        if (reg.test(document.getElementById("login-username").value) == false) 
        {
            alert('Invalid Email Address');
        }
        else {
            alert('Succesfully loged-in');
        }
    }  
});

$(function(){
    var temperatureGauge = $("#temperatureGauge").dxLinearGauge({
        title: {
           text: "Temperature (°C)",
           font: {
              size: 16
           }
        },
        geometry: { orientation: "vertical" },
        scale: {
            startValue: -40, 
            endValue: 40,
            tickInterval: 40
        },
        rangeContainer: {
            backgroundColor: "none",
            ranges: [
                { startValue: -40, endValue: 0, color: "#679EC5" },
                { startValue: 0, endValue: 40 }
            ]
        },
        value: cities[0].data.temperature
    }).dxLinearGauge("instance");
    
    var humidityGauge = $("#humidityGauge").dxLinearGauge({
        title: {   
           text: "Humidity (%)",
           font: {
              size: 16
           }
        },
        geometry: { orientation: "vertical" },
        scale: {
            startValue: 0, 
            endValue: 100,
            tickInterval: 10,
        },
        rangeContainer: { backgroundColor: "#CACACA" },
        valueIndicator: { type: "rhombus", color: "#A4DDED" },
        value: cities[0].data.humidity
    }).dxLinearGauge("instance");
    
    var pressureGauge = $("#pressureGauge").dxLinearGauge({
        title: {
           text: "Barometric Pressure (mb)",
           font: {
              size: 16
           }
        },
        geometry: { orientation: "vertical" },
        scale: {
            label: {
                format: {
                    type: "decimal"
                }
            },
            startValue: 900, endValue: 1100,
            customTicks: [900, 1000, 1020, 1100]
        },
        rangeContainer: {
            ranges: [
                { startValue: 900, endValue: 1000, color: "#679EC5" },
                { startValue: 1000, endValue: 1020, color: "#A6C567" },
                { startValue: 1020, endValue: 1100, color: "#E18E92" }
            ]
        },
        valueIndicator: { type: "circle", color: "#E3A857" },
        value: cities[0].data.pressure
    }).dxLinearGauge("instance");
    
    $("#selectbox").dxSelectBox({
        dataSource: cities,
        onSelectionChanged: function(e) {
            var weatherData = e.selectedItem.data;
    
            temperatureGauge.option("value", weatherData.temperature);
            humidityGauge.option("value", weatherData.humidity);
            pressureGauge.option("value", weatherData.pressure);
        },
        displayExpr: "name",
        value: cities[0]
    });
    $(function(){
        var now = new Date();
        
        $("#date").dxDateBox({
            type: "date",
            value: now
        });
        
        $("#time").dxDateBox({
            type: "time",
            value: now
        });
        
        $("#date-time").dxDateBox({
            type: "datetime",
            value: now
        });
        
        $("#custom").dxDateBox({
            displayFormat: "EEEE, MMM dd",
            value: now
        });
        
        $("#date-by-picker").dxDateBox({
            pickerType: "rollers",
            value: now
        });
        
        $("#disabled").dxDateBox({
            type: "datetime",
            disabled: true,
            value: now
        });
    
        $("#disabledDates").dxDateBox({
            type: "date",
            pickerType: "calendar",
            value: new Date(2017, 0, 3),
            disabledDates: federalHolidays
        });
        
        $("#clear").dxDateBox({
            type: "time",
            showClearButton: true,
            value: new Date(2015, 11, 1, 6)
        });
        
        var startDate = new Date(1981, 3, 27);
        
        $("#birthday").dxDateBox({
            applyValueMode: "useButtons",
            value: startDate,
            max: new Date(),
            min: new Date(1900, 0, 1),
            onValueChanged: function(data) {
                dateDiff(new Date(data.value));
            }
        });
        
        function dateDiff(date) {
            var diffInDay = Math.floor(Math.abs((new Date() - date)/(24*60*60*1000)));
            return $("#age").text(diffInDay + " days");
        }
        
        dateDiff(startDate);
        
    });


    });
     
