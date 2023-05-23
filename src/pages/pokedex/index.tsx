import { Wrapper, InnerWrapper } from "./styled";
import Header from "./sections/header";
import Search from "./sections/search";
import Grid from "./sections/grid";

export default function Page() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Header />
        <Search />
        <Grid query="" />
      </InnerWrapper>
    </Wrapper>
  );
}
