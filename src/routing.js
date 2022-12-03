import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardViewOverview from "./Components/CardViews/CardViewOverview/CardViewOverview";
import HomeOverview from "./Components/Home/HomeOverview";
import { VirtualCardsData } from "./Data/VirtualCards";
export default function Routing({ name }) {
  const [viewMode, setViewMode] = useState("Grid");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleViewMode = (mode) => {
    setViewMode(mode);
  };

  const handleFilterModalOpen = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };
  return (
    <BrowserRouter>
      <HomeOverview
        viewMode={viewMode}
        handleFilterModalOpen={handleFilterModalOpen}
        handleViewMode={handleViewMode}
        handleSearchQuery={handleSearchQuery}
        isFilterModalOpen={isFilterModalOpen}
      />
      <Routes>
        <Route
          path="/my-cards"
          element={
            <CardViewOverview
              viewMode={viewMode}
              searchQuery={searchQuery}
              cardData={VirtualCardsData}
            />
          }
        />
        <Route
          path="/"
          element={
            <CardViewOverview
              viewMode={viewMode}
              searchQuery={searchQuery}
              cardData={VirtualCardsData}
            />
          }
        />
        <Route
          path="/blocked-cards"
          element={
            <CardViewOverview
              viewMode={viewMode}
              searchQuery={searchQuery}
              cardData={VirtualCardsData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
