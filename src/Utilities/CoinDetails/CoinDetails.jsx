import React from "react";

export default function CoinDetails({ color, coin, title }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "500",
          fontSize: "1.1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: `${color}`,
              borderRadius: "50%",
              height: "12px",
              width: "12px",
            }}
          ></div>
          {title}
        </div>
        <div>{coin}</div>
      </div>
    </>
  );
}
