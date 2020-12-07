//libs
import { Select } from "antd";
import { useRouter } from "next/dist/client/router";
import queryString from "querystring";

const { Option } = Select;

function ShopContentHeader() {
  const router = useRouter();
  const handleChange = (value) => {
    let currentParam = { ...router.query };
    if (value === "default") {
      delete currentParam.sort;
    } else {
      currentParam = { ...router.query, sort: value };
    }
    router.push(
      `${router.pathname}?${queryString.stringify(currentParam)}`,
      undefined,
      { shallow: true }
    );
  };
  return (
    <div className="shop-content__header">
      <div></div>
      <div className="shop-content__header-filter">
        <p>Filter by:</p>
        <Select
          className="shop-content__header-filter__select"
          style={{ width: 250 / 16 + "em" }}
          onChange={handleChange}
          value={router.query.sort ? router.query.sort : "default"}
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
