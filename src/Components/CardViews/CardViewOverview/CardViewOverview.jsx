import React, { useState, useEffect } from "react";
import GridViewOverview from "../GridView/GridViewOverview";
import ListViewOverview from "../ListView/ListViewOverview";
import { VirtualCardsData } from "../../../Data/VirtualCards";
export default function CardViewOverview({ viewMode, searchQuery }) {
  const [virtualCardDetails, setVirtualCardDetails] =
    useState(VirtualCardsData);
  const [filteredData, setFilteredData] = useState(VirtualCardsData);

  const path = window.location.pathname.slice(1);
  useEffect(() => {
    var filterCardData = [];
    if (path === "blocked-cards") {
      filterCardData = VirtualCardsData.filter((e) => e.status === "Blocked");
      setVirtualCardDetails(filterCardData);
    } else if (path === "my-cards") {
      //owner_id == "1" is considered hard codedly as no authentication implemented
      filterCardData = VirtualCardsData.filter((e) => e.owner_id === 1);
      setVirtualCardDetails(filterCardData);
    } else {
      setVirtualCardDetails(VirtualCardsData);
    }
  }, [path]);

  useEffect(() => {
    const filteredData = virtualCardDetails.filter((item) => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredData(filteredData);
  }, [searchQuery, virtualCardDetails]);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "22px",
        padding: "2%",
      }}
    >
      {viewMode === "Grid" ? (
        <GridViewOverview
          searchQuery={searchQuery}
          cardData={searchQuery.length > 0 ? filteredData : virtualCardDetails}
        />
      ) : (
        <ListViewOverview
          searchQuery={searchQuery}
          cardData={searchQuery.length > 0 ? filteredData : virtualCardDetails}
        />
      )}
    </div>
  );
}
