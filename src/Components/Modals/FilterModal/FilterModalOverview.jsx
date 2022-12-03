import React from "react";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Select,
} from "@mui/material";
import { X } from "phosphor-react";
export default function FilterModalOverview({ closeModal }) {
  return (
    <div
      style={{
        width: "470px",
        position: "absolute",
        right: "5%",
        top: "23%",
      }}
    >
      <Card style={{ borderRadius: "15px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "4%",
          }}
        >
          <div style={{ fontWeight: "500" }}>Filters</div>
          <Button
            color="secondary"
            onClick={() => closeModal()}
            style={{
              color: "#E85467",
              minWidth: "0",
            }}
          >
            <X size={25} />
          </Button>
        </div>
        <Divider />
        <div
          style={{
            padding: "4%",
            display: "flex",
            flexDirection: "column",

            gap: "27px",
          }}
        >
          <div>
            <label>Type</label>
            <div style={{ marginTop: "2%" }}>
              <FormControl
                onChange={(e) => console.log(e.target.value)}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <FormControlLabel
                  style={{ width: "50%" }}
                  control={<Checkbox />}
                  label="Burner"
                />
                <FormControlLabel control={<Checkbox />} label="Subscription" />
              </FormControl>
            </div>
          </div>
          <div>
            <label>Cardholder</label>
            <div style={{ marginTop: "2%" }}>
              <Select style={{ width: "100%" }} />
            </div>
          </div>
          <div style={{ display: "flex", gap: "30px" }}>
            <Button
              variant="contained"
              style={{
                width: "50%",
                backgroundColor: "#E85467",
                padding: "2%",
              }}
            >
              Apply
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{
                width: "50%",
                color: "#E85467",
                border: "1px solid #E85467",
                padding: "2%",
              }}
            >
              Clear
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
