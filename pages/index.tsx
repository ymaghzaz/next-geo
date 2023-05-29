import { useState } from "react";
import MapUi from "@/src/components/MapUi";
import HistoryUi from "@/src/components/HistoryUi";
import { AppProvider } from "@/src/providers/AppContext";

const Page = () => {
  return (
    <AppProvider>
      <div
        // add grid with 2 columns
        className="grid grid-cols-2  w-full h-screen"
      >
        <HistoryUi />
        <MapUi />
      </div>
    </AppProvider>
  );
};

export default Page;
