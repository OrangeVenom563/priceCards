const CardFeaturesList = ({features}) => (
    
        <ul className="fa-ul">
              {features.map(({id,name,access}) =>
                 (
                  <li key={id} className={access? '':'text-muted'}>
                    <span className="fa-li">
                      <i className={`fas fa-${access? 'check':'times' }`}></i>
                    </span>
                    {name}
                  </li>
                ) 
              )}
            </ul>
);

export default CardFeaturesList;

