import { Card, Chip } from "@mui/material";
import React from "react";
import CoinDetails from "../../../Utilities/CoinDetails/CoinDetails";

export default function GridViewOverview({ cardData, searchQuery }) {
  return (
    <>
      {cardData.length > 0 ? (
        cardData.map((data, i) => (
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              width: "500px",
              padding: "1.5%",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                  {data.name}
                </div>
                <div style={{ color: "grey" }}>Vishal . {data.budget_name}</div>
              </div>
              {/* <div>
              <Button
                variant="contined"
                style={{
                  borderRadius: "100px",
                  minWidth: "20px",
                  backgroundColor: "pink",
                }}
              >
                j
              </Button>
            </div> */}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Chip
                  label={data.card_type}
                  variant="outlined"
                  style={{
                    border: "2px solid grey",
                    borderRadius: "5px",
                    color: "grey",
                    fontWeight: "600",
                    height: "20px",
                  }}
                />
                {data.status === "Blocked" ? (
                  <Chip
                    label="Blocked"
                    variant="Blocked"
                    style={{
                      marginLeft: "5px",
                      backgroundColor: "rgb(255, 0, 0,0.1)",
                      border: "2px solid red",
                      borderRadius: "5px",
                      color: "red",
                      fontWeight: "600",
                      height: "20px",
                    }}
                  />
                ) : (
                  ""
                )}
              </div>

              <div>Expires: {data.expiry}</div>
            </div>
            <div
              style={{
                backgroundColor: "#018749",
                borderRadius: "20px",
                height: "12px",
              }}
            ></div>
            <CoinDetails
              color={"#E85467"}
              title={"Spent"}
              coin={`${data.spent.value}``${data.spent.currency}`}
            />
            <CoinDetails
              color={"#018749"}
              title={"Available to spend"}
              coin={`${data.available_to_spend.value}``${data.available_to_spend.currency}`}
            />
          </Card>
        ))
      ) : (
        <div>
          No Card Found with name <b>{searchQuery}</b>
        </div>
      )}
    </>
  );
}
