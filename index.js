$(function(){
  

    $("#treeview").dxTreeView({
        dataSource: continents,
        selectionMode: "single",
        selectByClick: true,
        onItemSelectionChanged: function(e) {
            showCountryData(e.itemData);
        }
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

