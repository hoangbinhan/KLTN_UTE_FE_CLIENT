import { Select } from "antd";
const { Option } = Select;

function ShopContentHeader() {
  const handleChange = (value) => {
    console.log("value :>> ", value);
  };
  return (
    <div className="shop-content__header">
      <div className="shop-content__header-showing">
        <h5>
          Showing 1 - {productPerPage} of {data.length} Products
        </h5>
      </div>
      <div className="shop-content__header-filter">
        <p>Filter by:</p>
        <Select
          className="shop-content__header-filter__select"
          style={{ width: 250 / 16 + "em" }}
          onChange={handleChange}
        >
          <Option value="default">Default</Option>
          <Option value="lowHigh">Price: Low to High</Option>
          <Option value="highLow">Price: High to Low</Option>
          <Option value="az">A to Z</Option>
          <Option value="za">Z to A</Option>
        </Select>
      </div>
    </div>
  );
}

export default React.memo(ShopContentHeader);
