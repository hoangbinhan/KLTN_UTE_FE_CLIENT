import { useRouter } from "next/router";
import { Row } from "antd";
import LayoutOne from "../../../components/layouts/LayoutOne";
import Container from "../../../components/other/Container";
import { useDispatch } from "react-redux";
import InformationTabs from "../../../components/information";

export default function Information() {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <LayoutOne title="product" clearSpaceTop>
      <Container>
        <InformationTabs />
      </Container>
    </LayoutOne>
  );
}
