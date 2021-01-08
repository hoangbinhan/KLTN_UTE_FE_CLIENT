import React, { useState, useEffect } from "react";
import { Select, Button, AutoComplete } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import useDebounce from "../../../common/useDebound";
import queryString from "querystring";
import { searchDataProduct } from "../../../actions/home";

const { Option } = Select;

function SearchBarMobile({ placeholder }) {
  const [value, setValue] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { listSearchProducts } = useSelector(
    (state) => state.home.searchDataProducts
  );
  const [search, setSearch] = useState("");
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);
  const debouncedValue = useDebounce(value, 300);
  useEffect(() => {
    if (debouncedValue) {
      dispatch(searchDataProduct({ params: { text: debouncedValue } }));
    }
  }, [debouncedValue]);
  const renderAutoFillItem = () => {
    return listSearchProducts?.data?.map((item) => ({
      value: item.productName,
      id: item._id,
    }));
  };
  const openDropdownOption = (value) => {
    setValue(value);
    setShowDropdownOptions(true);
    setSearch(value);
  };
  const closeDropdownOption = () => {
    setShowDropdownOptions(false);
  };
  const onSelectOption = (value, option) => {
    router.push(`/product/${option.id}`);
    setSearch(value);
    closeDropdownOption();
  };
  const onSearch = () => {
    if (!search || search === "") {
      router.push("/");
    } else {
      let currentParam = { ...router.query };
      delete currentParam.slug;
      router.push({
        pathname: "/",
        query: { text: search, ...currentParam },
      });
    }
  };
  return (
    <div className="menu-search">
      <div className="menu-search__form">
        <div className="menu-search__form-input">
          <AutoComplete
            allowClear
            backfill={true}
            open={showDropdownOptions}
            onSearch={openDropdownOption}
            onBlur={closeDropdownOption}
            onSelect={onSelectOption}
            options={renderAutoFillItem()}
            placeholder={placeholder}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            onKeyUp={(e) => {
              if (e.keyCode === 13) {
                e.preventDefault();
                onSearch();
              }
            }}
          />
          <Button onClick={onSearch}>
            <i className="icon_search" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SearchBarMobile);
