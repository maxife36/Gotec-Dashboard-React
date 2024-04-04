import "./infoCard.css";
import { v4 as uuidv4 } from "uuid";

export function InfoCardLarge(props) {
  const { allCategories } = props;
  return (
    <>
      <div className="largeCardContainer flx-c-nw">
        <h3 className="flx-r-nw">{props.title}</h3>

        <ul className="flx-c-nw">
          {Object.entries(allCategories).map(([key, value]) => (
            <li className="flx-r-nw" key={uuidv4()}>
              <strong>🔹{key}</strong>:
              <p className="flx-r-nw"> {value} un.</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
