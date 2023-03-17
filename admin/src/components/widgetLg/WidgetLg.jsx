import { useState, useEffect } from "react";
import "./widgetLg.css";
import axios from "axios";
import { hostURL } from "../../URL";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${hostURL}/orders?_limit=5`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Phone Number</th>
          <th className="widgetLgTh">Account Number</th>
          <th className="widgetLgTh">Amount</th>
        </tr>
        {orders.map((o) => {
          return (
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">{o.accountholder}</span>
              </td>
              <td className="widgetLgPhone">{o.phone}</td>
              <td className="widgetLgAccountNumber">{o.accountnumber}</td>
              <td className="widgetLgAmount">Rs.{o.amount}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
