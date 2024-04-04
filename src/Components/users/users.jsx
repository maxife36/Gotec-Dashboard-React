import "./users.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import { DisplayTitle } from "../displayContainer/displayTitle";

function formatDate(date) {
  const formateDate = new Date(date);
  const year = formateDate.getFullYear();
  let month = (1 + formateDate.getMonth()).toString().padStart(2, "0");
  let day = (formateDate.getDate() + 1).toString().padStart(2, "0");
  // Formatea la fecha en formato YYYY-MM-DD para el input date
  return `${year}-${month}-${day}`;
}

export function Users(props) {
  const data = props.userInfo.data
  data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <DisplayTitle title={props.title} />
      <div className="showInfo flx-r-w">
        {data.map((user) => (
          <Link to={`/users/${user.userId}`} className="profileCartDataConatiner flx-r-nw" key={uuidv4()}>

            <div className="leftProfileCartBorder"></div>

            <div className="profileCart-userImg-container flx-r-nw">{user.profileImg ? <img src={user.profileImg} style={{ width: "70px", height: "70px" }} /> : <img src="./img/user-img.svg" />}</div>

            <input type="date" className="purchaseCreatedDate" value={formatDate(user.createdAt)} disabled />

            <p className="userInfoFullname">{user.fullname}</p>

            <p className="userInfoEmail">{user.email}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
