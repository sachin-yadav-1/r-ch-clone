import React from "react";
import "./CampaignDetails.css";
import { Carousal, Progress, Product } from "..";

const CampaignDetails = ({ campaign }) => {
  console.log("Inside Camp Details: ", campaign);

  return (
    <div className="section section--gradient">
      <div className="container">
        <div className="campaign-details">
          <div className="camapign-details__text">
            <h1 className="mb-sm">{campaign.title}</h1>
            <p className="mb-m">{campaign.description}</p>

            <Carousal classes="mb-m" images={campaign.images} />
            <p className="mb-sm">{`₹${campaign.amountLeft} is required by the end of ${campaign.type.split("LY")[0]}`}</p>
            <Progress classes="mb-l" fillPercent={(campaign.raisedAmount / campaign.targetAmount) * 100} />

            <h3 className="mb-sm">About</h3>
            <div dangerouslySetInnerHTML={{ __html: campaign.story }} />
          </div>
          <div className="campaign-details__products">
            <div className="product-list__header">
              <p>❤️ We ensure 100% transparency</p>
            </div>
            <p className="campaign-details__productcount">Total Products: {campaign.products.length}</p>

            <div>
              {campaign.products.map((p) => (
                <Product key={p.code} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
