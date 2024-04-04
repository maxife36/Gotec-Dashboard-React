import "./headerNav.css";

import { useState, useEffect } from "react";

export function HeaderNav(props) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    //mount
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    //unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flx-r-nw" id="header" style={{ width: viewportWidth - 200 }} >
      {props.userInfo? (<h1>Bienvenido {props.userInfo.admin.fullname}!</h1>) :  (<h1>Bienvenido!</h1>)}
      
    </header>
  );
}
