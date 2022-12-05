import React from "react";
import { createContext, useState, useCallback } from "react";
import axios from "axios";

const CampaignContext = createContext();

const CampaignProvider = React.memo(({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [campaign, setCampaign] = useState({});

  const fetchCampaigns = useCallback(async (code) => {
    const res = await axios.get(`https://api.charitism.com/campaigns/all${code ? `?code=${code}` : ""}`);
    setCampaigns([...res.data.docs]);
  }, []);

  const fetchOneCampaign = useCallback(async (code) => {
    const res = await axios.get(`https://api.charitism.com/campaigns?code=${code}`);
    setCampaign(res.data);
  }, []);

  return <CampaignContext.Provider value={{ campaigns, campaign, fetchCampaigns, fetchOneCampaign }}>{children}</CampaignContext.Provider>;
});

export { CampaignProvider };
export default CampaignContext;
