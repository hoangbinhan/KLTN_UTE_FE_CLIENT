import React from "react";

import MenuComponent from "./elements/Menu";
import TopNav from "./elements/TopNav";

function Header({ containerType, headerStyle }) {
  const renderStyleClass = (type) => {
    switch (type) {
      case "two":
        return "-style-two";
      default:
        return "default";
    }
  };
  return (
    <div className={`header-one ${renderStyleClass(headerStyle)}`}>
      <TopNav containerType={containerType} />
      <MenuComponent containerType={containerType} />
    </div>
  );
}

export default React.memo(Header);
