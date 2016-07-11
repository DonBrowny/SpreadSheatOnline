using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessService
{
    public class DataLoader
    {
        public String GetData() 
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("Type");
            dt.Columns.Add("Description");
            dt.Columns.Add("Jan");
            dt.Columns.Add("Feb");
            dt.Columns.Add("Mar");
            dt.Columns.Add("Apr");
            dt.Columns.Add("May");
            dt.Columns.Add("Jun");
            dt.Columns.Add("Jul");
            dt.Columns.Add("Aug");
            dt.Columns.Add("Sep");
            dt.Columns.Add("Oct");
            dt.Columns.Add("Nov");
            dt.Columns.Add("Dec");
            dt.Columns.Add("Sum Month");
            dt.Columns.Add("Qtr1");
            dt.Columns.Add("Qtr2");
            dt.Columns.Add("Qtr3");
            dt.Columns.Add("Qtr4");
            dt.Columns.Add("Sum Quarter");

            for (int i = 0; i < 10; i++)
            {

                DataRow dr = dt.NewRow();
                dr[0] = (i % 3 == 0) ? "CT" : "ST";
                dr[1] = "Description " + i;
                for (int j = 0; j < 12; j++)
                {
                    Random rnd = new Random((int)DateTime.Now.Ticks);
                    dr[j+2] = rnd.Next(100);
                }
                dr[14] = "=SUM(C" + (i + 1) + ":N" + (i + 1) + ")";
                for (int j = 0; j < 4; j++)
                {
                    Random rnd = new Random();
                    dr[j + 15] = rnd.Next(100);
                }
                dr[19] = "=SUM(P" + (i + 1) + ":S" + (i + 1) + ")";
                dt.Rows.Add(dr);
            }
            //writeExcel(dt);
            //return dt;
            return ConvertToJson(dt);
        }

        public void writeExcel(DataTable dt)
        {
            String file = @"C:\Users\kishore\Desktop\Out.txt";
            foreach (DataRow item in dt.Rows)
            {
                foreach (String temp in item.ItemArray)
                {
                    File.AppendAllText(file, temp + " \t");
                }
                File.AppendAllText(file, " " + Environment.NewLine);
            }
        }

        public static string ConvertToJson(DataTable dt) 
        {
            return JsonConvert.SerializeObject(dt, Formatting.Indented);
        }
        
    }
}
