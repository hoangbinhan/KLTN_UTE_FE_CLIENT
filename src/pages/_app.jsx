import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "../redux/store";
import "../styles/antd.less";
import "../styles/styles.scss";
import Loading from "../components/other/Loading";
import withReduxStore from "../common/withReduxStore";
import { UserProvider } from "../context/UserContext";
import { doAxiosRequestIntercept } from "../configs/Interceptors";

const App = ({ Component, pageProps, reduxStore }) => {
  doAxiosRequestIntercept();
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </PersistGate>
    </Provider>
  );
};

export async function getStaticProps({ Component, ctx }) {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps: pageProps };
}

export default withReduxStore(App);
