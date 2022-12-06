import React, { useContext } from "react";
import { Link } from "./../";
import "./CampaignCard.css";
import { Progress } from "./../";
import { NavigationContext } from "../../context";

const CampaignCard = ({ campaign }) => {
  const { navigate } = useContext(NavigationContext);

  const onCardClickHandler = () => navigate(`/campaign/${campaign.code}`);

  return (
    <div className="card" onClick={onCardClickHandler}>
      <div className="card__image">
        <img src={campaign.image} alt="campaign" />
      </div>

      <div className="card__tag">Tax Benifit</div>

      <div className="card__body">
        <h3 className="card__title">{campaign.title}</h3>
        <p className="card__description">{campaign.description}</p>
      </div>

      <div className="card__stats">
        <div className="card__stats--numbers">
          <p className="text--m">
            ₹{campaign.amountLeft} <span className="text--thin">left out of </span>₹{campaign.targetAmount}
          </p>
        </div>
        <Progress fillPercent={(campaign.raisedAmount / campaign.targetAmount) * 100} />
      </div>

      <div className="card__footer">
        <Link to="/" className="btn btn-secondary">
          Share
        </Link>
        <Link to="/" className="btn btn-primary">
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default CampaignCard;
