import Footer from "@/Components/Footer/Footer";
import HeaderContainer from "@/Components/Header/HeaderContainer";
import AdvancedSearchContainer from "@/Components/SearchBox/AdvancedSearch/AdvancedSearchContainer";
import ListSearchContainer from "@/Components/SearchBox/ListSearch/ListSearchContainer";

import React from "react";

export default function page() {
  return (
    <>
      <HeaderContainer />
      <AdvancedSearchContainer />
      <ListSearchContainer />
      <Footer />
    </>
  );
}
