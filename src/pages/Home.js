import { useState } from "react";
import Section from "../components/Section";
import Header from "../components/Header";
import styled from "styled-components";
import { InputSection } from "../components/InputSection";
import Footer from "../components/Footer";
import FormSection2 from "../components/FormSection2";
const Container = styled.div``;
export default function Home() {
  const [sliderInput, setSliderInput] = useState({});

  return (
    <Container>
      <Header bg="#121212" />
      <Section />
      <FormSection2 setSliderInput={setSliderInput} />
      {/* <FormSection setSliderInput={setSliderInput} /> */}
      <InputSection sliderInput={sliderInput} />
      <Footer />
    </Container>
  );
}
