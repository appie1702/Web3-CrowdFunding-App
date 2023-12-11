import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import { DisplayCampaigns } from "../components";
const Profile = () => {
  const [isLoading, setisLoading] = useState(false);
  const [campaigns, setcampaigns] = useState([]);

  const { getUserCampaigns, address, contract } = useStateContext();

  const fetchCampaigns = async () => {
    setisLoading(true);
    try {
      const data = await getUserCampaigns();
      setcampaigns(data);
    } catch (error) {
      setisLoading(false);
    }
    setisLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  console.log(campaigns);
  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Profile;
