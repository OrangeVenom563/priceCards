import pricingData from "../../data/pricingSchemeData";
import PriceCard from "../priceCard/priceCard.component";
import "./priceCardsContainer.styles.css";

const PriceCardsContainer = () => {
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {pricingData.map(({id, ...otherFeatures}) => (
              <PriceCard key={id} {...otherFeatures} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceCardsContainer;
