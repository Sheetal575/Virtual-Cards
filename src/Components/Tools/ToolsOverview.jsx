import React, { useState } from "react";
import { Button, Tab, Tabs } from "@mui/material";
import {
  FunnelSimple,
  List,
  MagnifyingGlass,
  SquaresFour,
  X,
} from "phosphor-react";
import "./ToolsOverview.style.css";
export default function ToolsOverview({
  view,
  handleView,
  handleViewMode,
  handleFilterModalOpen,
  viewMode,
  handleSearchQuery,
}) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  return (
    <>
      <div
        style={{
          borderBottom: "2px solid rgb(220,220,220)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Tabs
            textColor="inherit"
            indicatorColor="primary"
            value={view}
            onChange={(event, value) => handleView(value)}
          >
            <Tab label={<div>My Cards</div>} value={"MyCards"} />
            <Tab label={<div>All</div>} value={"All"} />
            <Tab label={<div>Blocked</div>} value={"Blocked"} />
          </Tabs>
        </div>
        <div>
          <Button
            color="secondary"
            onClick={() => handleViewMode("List")}
            style={{
              minWidth: "0",
              color: viewMode === "List" ? "#E85467" : "grey",
            }}
          >
            <List size={28} weight="bold" />
          </Button>
          <Button
            color="secondary"
            onClick={() => handleViewMode("Grid")}
            style={{
              minWidth: "0",
              color: viewMode === "Grid" ? "#E85467" : "grey",
            }}
          >
            <SquaresFour size={28} weight="fill" />
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
        {showSearchBar ? (
          <input
            className="searchBar"
            onChange={(e) => handleSearchQuery(e.target.value)}
            style={{
              width: "20%",
            }}
            placeholder="Search by name"
          />
        ) : (
          ""
        )}
        <Button
          onClick={() => setShowSearchBar(!showSearchBar)}
          style={{ minWidth: "0", color: "#E85467" }}
          color="secondary"
        >
          {showSearchBar ? (
            <X size={28} weight="bold" />
          ) : (
            <MagnifyingGlass size={28} weight="bold" />
          )}
        </Button>

        <Button
          onClick={() => handleFilterModalOpen()}
          style={{ color: "black", backgroundColor: "rgb(220,220,220,0.3)" }}
        >
          <FunnelSimple size={28} style={{ marginRight: "8px" }} /> Filter
        </Button>
      </div>
    </>
  );
}
