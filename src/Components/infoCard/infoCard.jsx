import "./infoCard.css";

export function InfoCard(props) {
  return (
    <>
      <div className="cardContainer flx-c-nw">
        <h3 className="flx-r-nw">{props.title}</h3>
        <p className="flx-r-nw"> {props.content}</p>
      </div>
    </>
  );
}
