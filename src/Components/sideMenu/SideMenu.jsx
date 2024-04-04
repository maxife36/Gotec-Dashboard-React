import "./SideMenu.css";
import { MenuTitle } from "./menuTitle";
import { ProfileImg } from "./profileImg";

export function SideMenu() {
  return (
    <div id="sideMenuContainer" className="flx-c-nw">
      <ProfileImg/>
      <MenuTitle to="/" exact title="General"/>
      <MenuTitle to="/users" title="Usuarios"/>
      <MenuTitle to="/products" title="Productos"/>
    </div>
  );
}
