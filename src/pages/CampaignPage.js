import React, { useContext, useEffect } from "react";
import { CampaignDetails, Header } from "./../components";
import { CampaignContext } from "../context";

const CampaignPage = () => {
  const { fetchOneCampaign, campaign } = useContext(CampaignContext);
  const code = window.location.pathname.split("/")[2];

  useEffect(() => {
    fetchOneCampaign(code);
  }, [code, fetchOneCampaign]);

  return (
    <>
      <Header />
      {campaign?.code === code ? <CampaignDetails campaign={campaign} /> : null}
    </>
  );
};

export default CampaignPage;
