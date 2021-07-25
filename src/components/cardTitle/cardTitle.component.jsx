const CardTitle = ({title,pricePer,currency,price}) => (
  <>
    <h5 className="card-title text-muted text-uppercase text-center">
      {title}
    </h5>
    <h6 className="card-price text-center">
      {`${currency}${price}`}
      <span className="period">/{pricePer}</span>
    </h6>
  </>
);

export default CardTitle;