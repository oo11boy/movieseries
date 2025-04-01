import Footer from "@/Components/Footer/Footer";
import HeaderContainer from "@/Components/Header/HeaderContainer";
import OnlineView from "@/Components/OnlineView/OnlineView";
import React from "react";

export default function page() {
  return (
    <div>
      <HeaderContainer />
      <OnlineView />
      <Footer />
    </div>
  );
}
