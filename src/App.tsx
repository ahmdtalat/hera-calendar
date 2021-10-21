import React, { useEffect, useState } from "react";
import dataset from "./dataset.json";
import { CalendarEvent } from "./types";
import "./App.css";

const data: CalendarEvent[] = dataset;

function App() {
  return (
    <div className="App">
      <div className="CalendarView">{`${data.length} events to display here`}</div>
      <div className="SidePanel">Display event details here</div>
    </div>
  );
}

export default App;
