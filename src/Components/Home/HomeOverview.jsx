import { Button, Modal } from "@mui/material";
import { React, useEffect, useState } from "react";
import GridViewOverview from "../CardViews/GridView/GridViewOverview";
import ListViewOverview from "../CardViews/ListView/ListViewOverview";
import FilterModalOverview from "../Modals/FilterModal/FilterModalOverview";
import ToolsOverview from "../Tools/ToolsOverview";
import { VirtualCardsData } from "../../Data/VirtualCards";
export default function HomeOverview() {
  const [view, setView] = useState("All");
  const [viewMode, setViewMode] = useState("Grid");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(VirtualCardsData);
  const [virtualCardDetails, setVirtualCardDetails] =
    useState(VirtualCardsData);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    handleDataForView();
  }, [view]);

  const handleDataForView = () => {
    var filterCardData = [];
    if (view == "Blocked") {
      filterCardData = virtualCardDetails.filter((e) => e.status == "Blocked");
      setVirtualCardDetails(filterCardData);
    } else if (view == "MyCards") {
      //owner_id == "1" is considered hard codedly as no authentication implemented
      filterCardData = virtualCardDetails.filter((e) => e.owner_id == "1");
      setVirtualCardDetails(filterCardData);
    } else {
      setVirtualCardDetails(VirtualCardsData);
    }
  };

  const handleView = (e) => {
    setView(e);
  };

  const handleViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleFilterModalOpen = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
    const filteredData = virtualCardDetails.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  return (
    <>
      <div
        style={{
          padding: "2%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "2rem", fontWeight: "700" }}>
            Virtual Cards
          </div>
          <div>
            <Button>+ Virtual Card</Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <ToolsOverview
            handleViewMode={handleViewMode}
            view={view}
            viewMode={viewMode}
            handleView={handleView}
            handleFilterModalOpen={handleFilterModalOpen}
            handleSearchQuery={handleSearchQuery}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "22px",
          }}
        >
          {viewMode == "Grid" ? (
            <GridViewOverview
              searchQuery={searchQuery}
              cardData={
                searchQuery.length > 0 ? filteredData : virtualCardDetails
              }
            />
          ) : (
            <ListViewOverview
              searchQuery={searchQuery}
              cardData={
                searchQuery.length > 0 ? filteredData : virtualCardDetails
              }
            />
          )}
        </div>
        <div>
          <Modal
            open={isFilterModalOpen}
            onClose={() => handleFilterModalOpen()}
          >
            <FilterModalOverview closeModal={handleFilterModalOpen} />
          </Modal>
        </div>
      </div>
    </>
  );
}
