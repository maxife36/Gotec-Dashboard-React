import "./general.css";
import { InfoCard } from "../infoCard/infoCard";
import { InfoCardLarge } from "../infoCard/infoCardLarge";
import { DisplayTitle } from "../displayContainer/displayTitle";

export function General(props) {
  const { userInfo, productsInfo } = props;

  return (
    <>
      <DisplayTitle title={props.title} />
      <div className="showInfo flx-c-w">
        <InfoCard title="Ventas Netas" content={`$ ${productsInfo ? productsInfo.totalNetSales : 0}`} />
        <InfoCard title="Costos de Envío" content={`$ ${productsInfo ? productsInfo.totalShippingCost : 0}`} />
        <InfoCard title="Cantidad de Productos" content={`${productsInfo ? productsInfo.count : 0} prod.`} />
        <InfoCardLarge title="Categorias" allCategories={productsInfo ? productsInfo.countByCategory : {}} />
      </div>
    </>
  );
}
