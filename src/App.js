import React from "react";
import Main from "./components/layout/Main";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImgText from "./components/section/ImgText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <Slider />
        <Image attr={["section", "nexon", "container"]} />
        <ImgText attr={["nexon", "section", "gray", "container"]} />
        <Card attr={["section", "nexon", "container"]} />
        <Banner attr={["nexon", "container"]} />
        <Text attr={["section", "nexon", "container"]} />
      </Main>
      <Footer attr={["section", "nexon", "gray", "container"]} />
    </>
  );
}
export default App;
