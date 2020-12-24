import LayoutOne from "../../../components/layouts/LayoutOne";
import Container from "../../../components/other/Container";
import InformationTabs from "../../../components/Information";

export default function Information() {
  return (
    <LayoutOne title="product" clearSpaceTop>
      <Container>
        <InformationTabs />
      </Container>
    </LayoutOne>
  );
}
