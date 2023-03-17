import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {hostURL} from "../../URL";

export default function WidgetSm() {
  const [newMembers, setNewMembers] = useState([]);

  useEffect(() => {
    axios
      .get(`${hostURL}/users?_limit=5`)
      .then((res) => {
        setNewMembers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => {
          return (
            <li className="widgetSmListItem">
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
                <span className="widgetSmUserTitle">{user.usertype}</span>
              </div>
              <Link to={`/user/${user.id}`}>
                <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
