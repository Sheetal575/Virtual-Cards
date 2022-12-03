import { Button, Modal } from "@mui/material";
import { React } from "react";
import FilterModalOverview from "../Modals/FilterModal/FilterModalOverview";
import ToolsOverview from "../Tools/ToolsOverview";
import { Outlet } from "react-router-dom";
export default function HomeOverview({
  handleViewMode,
  viewMode,
  handleSearchQuery,
  handleFilterModalOpen,
  isFilterModalOpen,
}) {
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
            viewMode={viewMode}
            handleFilterModalOpen={handleFilterModalOpen}
            handleSearchQuery={handleSearchQuery}
          />
        </div>

        <Outlet name="jk" />
      </div>
      <div>
        <Modal open={isFilterModalOpen} onClose={() => handleFilterModalOpen()}>
          <FilterModalOverview closeModal={handleFilterModalOpen} />
        </Modal>
      </div>
    </>
  );
}
