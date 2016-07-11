$(document).ready(function () {
    $.ajax({
        type: "GET",
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        url: "TableData.aspx",
        success: function (response) {
            generateTable(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);
        }
    });


});
var hot;
var containe;
var colsToHide; 

var globalColumns = [
{ data: "Type", type: 'text' },
{ data: "Description", type: 'text' },
{ data: "Jan", type: 'numeric' },
{ data: "Feb", type: 'numeric' },
{ data: "Mar", type: 'numeric' },
{ data: "Apr", type: 'numeric' },
{ data: "May", type: 'numeric' },
{ data: "Jun", type: 'numeric' },
{ data: "Jul", type: 'numeric' },
{ data: "Aug", type: 'numeric' },
{ data: "Sep", type: 'numeric' },
{ data: "Oct", type: 'numeric' },
{ data: "Nov", type: 'numeric' },
{ data: "Dec", type: 'numeric' },
{ data: "Sum Month", type: 'numeric' },
{ data: "Qtr1", type: 'numeric' },
{ data: "Qtr2", type: 'numeric' },
{ data: "Qtr3", type: 'numeric' },
{ data: "Qtr4", type: 'numeric' },
{ data: "Sum Quarter", type: 'numeric' }
];

var globlHeaders = [
    'Type',
    'Description',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Sum Month',
    'Qtr1',
    'Qtr2',
    'Qtr3',
    'Qtr4',
    'Sum Quarter'];

var colWidth = [0,
    75,
    52,
    52,
    52,
    52,
    52,
    52,
    52,
    52,
    52,
    52,
    52,
    52,
    52,
    0,
    0,
    0,
    0,
    0];

function hideColumns() {
    var locHeaders = [];
    var locColumns = [];
    for (var i = 0; i < globlHeaders.length; i++) {
        if (colsToHide.indexOf(i) <= -1) {
            locHeaders.push(globlHeaders[i]);
            locColumns.push(globalColumns[i]);
        }
    }
    updateSettings(locHeaders, locColumns);
}

function generateTable(response) {

    container = document.getElementById("GridTable");
    hot = new Handsontable(container, {
        data: response,
        height: 150,
        width: 450,
        contextMenu: false,
        rowHeaders: false,
        manualColumnResize: false,
        disableVisualSelectionBoolean: 'current',
        formulas: true,
        colWidths: colWidth,
        wordWrap: false,
        rowHeights: 15,        
        colHeaders: globlHeaders,
        columns: globalColumns
    });
    toggle();
}

function updateSettings(colHeader,colCoulumns) {
    //hot.colHeader = new Handsontable.colHeader(colHeader);
    hot.updateSettings({
        colHeaders: colHeader,
        columns: colCoulumns
    });
    hot.render();
}

function toggle() {
    var container = $('[id$="toggleBtn"]');
    var value = container.val();
    var qtr = "Show Quaterly";
    var mon = "Show Monthly";
    if (value == qtr) {
        container.val(mon);
        colsToHide = [];
        colsToHide = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    }
    else {
        container.val(qtr);
        colsToHide = [];
        colsToHide = [0, 15, 16, 17, 18, 19];
    }
    hideColumns();
}