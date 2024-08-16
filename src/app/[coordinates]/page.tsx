"use client";
import React, { useRef, useState } from "react";

function ChartPage({params}: {params: {coordinates: string}}) {
  const coordinates = params.coordinates.split('xy')

  console.log(coordinates);
  
  return (
    <div>
      <h2>עמוד בדיקות</h2>
      <p>תוצאה: x={coordinates[0]}, y={coordinates[1]}</p>
    </div>
  );
}

export default ChartPage;
