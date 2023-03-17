import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { hostURL } from "../../URL";

export default function Transaction() {
  const [data, setData] = useState(productRows);

  useEffect(() => {
    axios
      .get(`${hostURL}/orders`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "accountholder",
      headerName: "Account Holder",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">{params.row.accountholder}</div>
        );
      },
    },
    { field: "phone", headerName: "Phone Number", width: 200 },
    { field: "accountnumber", headerName: "Account Number", width: 200 },
    { field: "ifsc", headerName: "IFSC Code", width: 150 },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
    },
  ];

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="productList">
          <h1 style={{ color: "darkblue" }}>All Transactions</h1>
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
