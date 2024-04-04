
import { Link } from 'react-router-dom';

export function MenuTitle(props) {
  return (
    <article className="settingsArt">
      <Link to={props.to} className="optionName flx-r-nw" id="purchases">
        <h4> {props.title} </h4>
        <i className="fa-solid fa-angle-right"></i>
      </Link>
    </article>
  );
}

