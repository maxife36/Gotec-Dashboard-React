import "./userDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function formatDate(date) {
  const formateDate = new Date(date);
  const year = formateDate.getFullYear();
  let month = (1 + formateDate.getMonth()).toString().padStart(2, "0");
  let day = (formateDate.getDate() + 1).toString().padStart(2, "0");
  // Formatea la fecha en formato YYYY-MM-DD para el input date
  return `${year}-${month}-${day}`;
}

export function UserDetail() {
  const [userDetail, setUserDetail] = useState({
    profileImg: null,
    email:"example@mail.com",
    fullname:"Nombre Completo",
    birthday: new Date(),
    address: "Calle falsa 123"
  });
  const { userId } = useParams()

  useEffect(() => {
    //mount
    async function getData() {
      try {
        const resultJSON = await fetch(`http://localhost:4000/api/users/${userId}`);
        const result = await resultJSON.json();

        setUserDetail(result);
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div className="detail-profile-img-section flx-c-w">
        <div className="detail-profile-img-container">{userDetail.profileImg ? <img src={userDetail.profileImg} /> : <img src="./img/user-img.svg" />}</div>
      </div>
      <div className="detail-inputsConatiner flx-c-nw">
        <div className="detail-dataConatiner flx-r-nw">
          <label htmlFor="userEmail" className="flx-r-nw">
            Email
          </label>
          <input type="text" name="userEmail" id="userEmail" value={userDetail.email} required disabled />
        </div>
        <div className="detail-dataConatiner flx-r-nw">
          <label htmlFor="fullName" className="flx-r-nw">
            Nombre Completo
          </label>
          <input type="text" name="fullName" id="fullName" value={userDetail.fullname} required disabled />
        </div>
        <div className="detail-dataConatiner flx-r-nw">
          <label htmlFor="userBirthday" className="flx-r-nw">
            Fecha de Nacimiento
          </label>
          <input type="date" name="userBirthday" id="userBirthday" value={formatDate(userDetail.birthday)} required disabled />
        </div>
        <div className="detail-dataConatiner flx-r-nw">
          <label htmlFor="userAdress" className="flx-r-nw">
            Domicilio
          </label>
          <input type="text" name="userAdress" id="userAdress" value={userDetail.address} disabled />
        </div>
      </div>
    </>
  );
}
