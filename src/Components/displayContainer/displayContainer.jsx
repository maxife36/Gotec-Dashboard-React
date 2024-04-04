import "./displayContainer.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { General } from "../general/general";
import { Users } from "../users/users";
import { UserDetail } from "../usersDetail/userDetail";
import { Products } from "../products/products";
import { DisplayTitle } from "./displayTitle";

export function DisplayContainer(props) {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [productsInfo, setProductsInfo] = useState(null);

  useEffect(() => {
    //mount
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    async function getData() {
      try {
        const resultJSON = await fetch(`http://localhost:4000/api/products`);
        const result = await resultJSON.json();
        setProductsInfo(result);
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();

    //unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flx-r-nw" id="displayContainer" style={{ width: `${viewportWidth - 200}px`, height: `${viewportHeight - 60}px` }}>
      <article className="userDataConatiner flx-c-nw" style={{ width: `${viewportWidth - 200}px`, height: `${viewportHeight - 60}px` }}>
        <div className="centerConatiner flx-r-w">
          <Routes>
            <Route path="/" exact element={<General title="Información General" userInfo={props.userInfo} productsInfo={productsInfo} />} />
            <Route path="/users" element={<Users title="Usuarios"  userInfo={props.userInfo} />} />
            <Route path="/users/:userId" element={<UserDetail/>} />
            <Route path="/products" element={<Products title="Productos"  productsInfo={productsInfo} />} />
          </Routes>
        </div>
      </article>
    </section>
  );
}
