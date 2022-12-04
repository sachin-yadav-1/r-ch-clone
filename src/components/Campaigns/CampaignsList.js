import React, { useContext, useEffect } from "react";
import { CampaignContext } from "../../context";
import { CampaignCard, Link } from "..";
import { SearchBar } from "..";
import "./CampaignsList.css";

const CampaignsList = () => {
  const { campaigns, fetchCampaigns } = useContext(CampaignContext);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const onSearchTermHandler = (term) => fetchCampaigns(term);

  return (
    <div className="section section--grey">
      <div className="container">
        <h2 className="section__heading">Featured Campaigns</h2>
        <div className="section__search">
          <SearchBar onSearchTerm={onSearchTermHandler} />
        </div>
        <div className="card-container mb-m">
          {campaigns.map((camp) => (
            <CampaignCard key={camp.id} campaign={camp} />
          ))}
        </div>
        <Link to="/search" className="btn btn-primary fit-content center">
          View More
        </Link>
      </div>
    </div>
  );
};

export default CampaignsList;
