import CardTitle from "../cardTitle/cardTitle.component";
import CardFeaturesList from "../cardFeaturesList/cardFeaturesList.component";

const PriceCard = ({features, ...otherProps}) => {
  
  return (
    <div className="col-lg-4">
      <div className="card mb-5 ">
        <div className="card-body">
          <CardTitle {...otherProps} />
          <hr />
          <CardFeaturesList features={features} />
          <a href="#" className="btn btn-block btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
