import "./App.css";
import { SideMenu } from "./Components/sideMenu/SideMenu";
import { HeaderNav } from "./Components/header/headerNav";
import { DisplayContainer } from "./Components/displayContainer/displayContainer";

import { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const location = useLocation()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("userId");

    async function getData() {
      try {
        const resultJSON = await fetch(`http://localhost:4000/api/users?userId=${userId}`);
        const result = await resultJSON.json();
        setUserInfo(result);
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, []);

  return (
    <>
      <SideMenu />
      <div className="flx-c-nw">
        <HeaderNav userInfo={userInfo}/>
        <DisplayContainer userInfo={userInfo}/>
      </div>
    </>
  );
}

export default App;
