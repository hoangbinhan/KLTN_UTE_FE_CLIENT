import React from "react";
import ShopContentHeader from "./ShopContentHeader";
import ShopContentProduct from "./ShopContentProduct";

function ShopContent({
  fiveColumn,
  productResponsive,
  data,
  productPerPage,
  productStyle,
}) {
  return (
    <div className="shop-content">
      <ShopContentHeader />
      <ShopContentProduct
        productStyle={productStyle}
        fiveColumn={fiveColumn}
        productResponsive={productResponsive}
        data={data}
        productPerPage={productPerPage}
      />
    </div>
  );
}

export default React.memo(ShopContent);
