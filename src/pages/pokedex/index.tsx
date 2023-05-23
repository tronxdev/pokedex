import { Layout } from "../../components";
import Header from "./sections/header";
import Search from "./sections/search";
import Grid from "./sections/grid";

export default function Page() {
  return (
    <Layout>
      <Header />
      <Search />
      <Grid query="" />
    </Layout>
  );
}
