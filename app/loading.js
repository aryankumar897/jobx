"use client";

import { Skeleton } from "antd";
import { useState } from "react";

export default function Loading() {
  const skeletonCount = 5; // Number of Skeleton components you want to display

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {[...Array(skeletonCount)].map((_, index) => (
        <Skeleton
          key={index}
          active
          style={{
            width: "90%",
            height: "15%",
            marginBottom: "10px",
          }}
        />
      ))}
    </div>
  );
}
