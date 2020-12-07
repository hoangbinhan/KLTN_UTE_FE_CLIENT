//libs
import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { Select, Image } from "antd";
import queryString from "query-string";
import { useRouter } from "next/router";

function ShopSidebar({ dataCategories }) {
  const router = useRouter();
  const { Option } = Select;

  const onChooseSubCategory = (data) => {
    console.log(data);
    if (!data || data === "all") {
      const currentParam = { ...router.query };
      delete currentParam.category;
      router.push(
        `${router.pathname}?${queryString.stringify(currentParam)}`,
        undefined,
        { shallow: true }
      );
      return;
    }
    const currentParam = { ...router.query, category: data };
    router.push(
      `${router.pathname}?${queryString.stringify(currentParam)}`,
      undefined,
      { shallow: true }
    );
  };
  const handleChange = (value) => {
    onChooseSubCategory(value);
  };
  return (
    <div className="shop-sidebar">
      <h5>Categories</h5>
      <div className="shop-sidebar__subcategory">
        <ul>
          <li
            className={classNames({
              active: !router.query.category,
            })}
          >
            <Link href="">
              <a
                onClick={(e) => {
                  onChooseSubCategory("all");
                }}
              >
                <i className="icon_document_alt" />
                All Category
              </a>
            </Link>
          </li>
          {dataCategories &&
            dataCategories.map((item, index) => (
              <li
                key={index}
                className={classNames({
                  active: router.query.category === item.categoryName,
                })}
              >
                <a
                  onClick={(e) => {
                    onChooseSubCategory(item.categoryName);
                  }}
                >
                  <Image width={16} src={item.imageUrl} />
                  <span style={{ marginLeft: 12 }}>{item.categoryName}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="shop-sidebar__subcategory-mobile">
        <Select
          defaultValue="all"
          style={{ width: "100%" }}
          onChange={handleChange}
        >
          <Option value="all">
            <i className="icon_document_alt" />
            All Category
          </Option>
          {dataCategories &&
            dataCategories.map((item, index) => (
              <Option key={index} value={item.categoryName}>
                {" "}
                <Image width={16} src={item.imageUrl} />
                <span style={{ marginLeft: 12 }}>{item.categoryName}</span>
              </Option>
            ))}
        </Select>
      </div>
    </div>
  );
}

export default React.memo(ShopSidebar);
