import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Button, Drawer, Avatar, Dropdown, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  CloseOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  ExceptionOutlined,
} from "@ant-design/icons";
import productsData from "../../../data/product.json";
import CartSidebar from "../../cart/CartSidebar";
import WishlistSidebar from "../../wishlist/WishlistSidebar";
import MenuSidebar from "./MenuSidebar";
import SearchBar from "./SearchBar";
import { getTotalProductInCart } from "../../../common/shopUtils";
import Container from "../../other/Container";
import Cookie from "js-cookie";
import { UserContext } from "../../../context/UserContext";
import { useRouter } from "next/router";
import { getCart } from "../../../actions/user";

function MenuComponent({ containerType }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const infoToken = useContext(UserContext);
  const cartState = useSelector((state) => state.cartReducer);
  const wishlistState = useSelector((state) => state.wishlistReducer);
  const { cart } = useSelector((state) => state.user.getCart);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [menuSidebarOpen, setMenuSidebarOpen] = useState(false);
  const [wishlistSidebarOpen, setWishlistSidebarOpen] = useState(false);

  const onLogout = async () => {
    await Cookie.remove("refresh_token");
    await Cookie.remove("token");
    await router.push("/", undefined, { shallow: true });
  };

  const handleClickCart = () => {
    if (infoToken?.email) {
      setCartSidebarOpen(true);
    } else {
      router.push("/login", undefined, { shallow: true });
    }
  };

  const contentMenu = (
    <Menu>
      <Menu.Item>
        <div className="item-user-control">
          <ExceptionOutlined style={{ marginRight: ".3rem" }} />
          Infomation
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="item-user-control">
          <SettingOutlined style={{ marginRight: ".3rem" }} />
          Change Password
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className="item-user-control" onClick={onLogout}>
          <LogoutOutlined style={{ marginRight: ".3rem" }} />
          Logout
        </div>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    if (infoToken?.email) {
      dispatch(getCart({ params: { email: infoToken?.email } }));
    }
    () => {};
  }, [dispatch]);

  return (
    <>
      <div className="menu">
        <Container type={containerType}>
          <div className="menu-wrapper">
            <a
              href="#"
              className="menu-sidebar-opener"
              onClick={(e) => {
                e.preventDefault();
                setMenuSidebarOpen(true);
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </a>
            <div className="menu-logo">
              <Link href="/">
                <a style={{ color: "white", fontSize: "2rem" }}>DA STORE</a>
              </Link>
            </div>
            <SearchBar
              fillData={productsData}
              placeholder="What are you looking for ?"
            />
            <div className="menu-functions">
              {infoToken?.email ? (
                <Dropdown overlay={contentMenu}>
                  <div className="user-control">
                    <Avatar size={38} icon={<UserOutlined />} />
                    <span className="user-control-name">{infoToken.name}</span>
                  </div>
                </Dropdown>
              ) : (
                <Button>
                  <Link href="/login">
                    <a>Join now</a>
                  </Link>
                </Button>
              )}

              <div className="menu-function-item" onClick={handleClickCart}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/header/menu-bag.png"
                  }
                  alt=""
                />
                <span>{cart?.totalQuantity || 0}</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="menu-mobile-search">
        <Container>
          <SearchBar fillData={productsData} placeholder="Searching..." />
        </Container>
      </div>
      <Drawer
        placement="right"
        // title={`Wishlist (${wishlistState.length})`}
        closable={true}
        onClose={() => setWishlistSidebarOpen(false)}
        closeIcon={
          <>
            <p>Close</p> <CloseOutlined />
          </>
        }
        visible={wishlistSidebarOpen}
        width={445}
        className="menu-side"
      >
        <WishlistSidebar />
      </Drawer>

      {/* Cart */}
      <Drawer
        placement="right"
        title={`Shopping cart (${cart?.totalQuantity || 0})`}
        closable={true}
        onClose={() => setCartSidebarOpen(false)}
        closeIcon={
          <>
            <p>Close</p> <CloseOutlined />
          </>
        }
        visible={cartSidebarOpen}
        width={445}
        className="menu-side"
      >
        <CartSidebar />
      </Drawer>

      <Drawer
        placement="right"
        closable={true}
        title=" "
        onClose={() => setMenuSidebarOpen(false)}
        closeIcon={
          <>
            <p>Close</p> <CloseOutlined />
          </>
        }
        visible={menuSidebarOpen}
        width={350}
        className="menu-side"
      >
        <MenuSidebar />
      </Drawer>
    </>
  );
}

export default MenuComponent;
