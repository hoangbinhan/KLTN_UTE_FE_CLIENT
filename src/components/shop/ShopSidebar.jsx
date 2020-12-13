//libs
import React, { useEffect } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Select, Image } from "antd";
import queryString from "query-string";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataCategories } from "../../actions/home";

function ShopSidebar({ dataCategories }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { listCategories } = useSelector(
    (state) => state.home.fetchDataCategories
  );
  const { Option } = Select;
  const onChooseSubCategory = async (data) => {
    let currentParam = { ...router.query };
    currentParam.page ? await delete currentParam.page : null;
    currentParam.size ? await delete currentParam.size : null;
    if (!data || data === "all") {
      currentParam = { ...router.query };
      delete currentParam.category;
      router.push(
        `${router.pathname}?${queryString.stringify(currentParam)}`,
        undefined,
        { shallow: true }
      );
      return;
    }
    currentParam = { ...currentParam, category: data };
    router.push(
      `${router.pathname}?${queryString.stringify(currentParam)}`,
      undefined,
      { shallow: true }
    );
    return;
  };
  const handleChange = (value) => {
    onChooseSubCategory(value);
  };

  useEffect(() => {
    dispatch(fetchDataCategories());
  }, []);

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
          {listCategories &&
            listCategories.map((item, index) => (
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
          {listCategories &&
            listCategories.map((item, index) => (
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
