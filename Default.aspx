<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>HandsOnTable Test</title>
    <script src="Scripts/jquery-2.2.4.js"></script>

    <%--HandsOnTable JS--%>
    <script src="Scripts/handsontable.full.js"></script>
    <script src="Scripts/Table.js"></script>
    <link href="Themes/handsontable.css" rel="stylesheet" />

    <%--Formula JS--%>
    <%--<link href="Themes/handsontable.formula.css" rel="stylesheet" />--%>
    <script src="Scripts/lodash.js"></script>
    <script src="Scripts/underscore.string.js"></script>
    <script src="Scripts/moment.js"></script>
    <script src="Scripts/numeral.js"></script>
    <script src="Scripts/numeric.js"></script>
    <script src="Scripts/md5.js"></script>
    <script src="Scripts/jstat.js"></script>
    <script src="Scripts/formula.js"></script>
    <script src="Scripts/parser.js"></script>
    <script src="Scripts/ruleJS.js"></script>
    <script src="Scripts/handsontable.formula.js"></script>


    <script lang="javascript">
        //$(document).ready(function () {
        //    $.ajax({
        //        type: "GET",
        //        datatype: "json",
        //        contentType: "application/json; charset=utf-8",
        //        url: "TableData.aspx",
        //        success: function (response) {
        //            generateTable(response);
        //        },
        //        error: function (jqXHR, textStatus, errorThrown) {
        //            alert(jqXHR.responseText);
        //        }
        //    });
        //});
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <%--<asp:Button id="toggleBtn" runat ="server" Text="Show Quaterly" OnClientClick="toggle();" />--%>
            <input id="toggleBtn" type="button" value="Show Quaterly" onclick="toggle();" />
            <div id="GridTable"></div>
        </div>
    </form>
</body>
</html>
