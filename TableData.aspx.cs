using BusinessService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class TableData : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {       
        DataLoader bs = new DataLoader();
        Response.ContentType = "application/json"; 
        Response.Write(bs.GetData());
        Response.Flush();
    }
}