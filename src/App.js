import "./styles.css";
import React, { useState } from "react";
import EventTable from "./components/Table.tsx";

export default function App() {
  return (
    <div className="App">
      <EventTable />
    </div>
  );
}
