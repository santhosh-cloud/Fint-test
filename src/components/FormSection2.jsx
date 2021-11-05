import React, { useState } from "react";
import Slider from "react-input-slider";
import styled from "styled-components";
import CarouselWrapper from "./Carousel";
import devices from "../breakpoints";
const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 3rem;
  background: #00b4db;
  background-color: -webkit-linear-gradient(to bottom right, #418599, #185f73);
  background-color: linear-gradient(to bottom right, #418599, #185f73);
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media ${devices.m} {
    flex-direction: row;
    align-items: center;
  }
`;
const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;
  z-index: 0;
  @media ${devices.m} {
    width: 50%;
    margin-bottom: 0;
  }
`;
const FormContainer = styled.div`
  margin-bottom: 2rem;
  /* width: 40%; */
  border: 1px solid #fed39f;
  border-radius: 1rem;
  padding: 2rem;
  margin: auto;
  background-color: white;
  @media ${devices.m} {
    width: 80%;
  }
`;

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #af460f;

  height: 100%;
`;
const HeroTitle = styled.h2`
  font-size: 1.75rem;

  padding: 20px 0;
  color: white;
  opacity: 0.9;
  text-align: center;
  @media ${devices.m} {
    font-size: 3rem;
    text-align: center;
    /* line-height: 96px; */
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  width: 100%;
`;

const Label = styled.label``;
const Title = styled.h2``;
const SliderContainer = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  /* border: 2px solid black; */
  cursor: pointer;
  padding: 10px 15px;
  border: none;
  background: black;
  color: white;
  border-radius: 0.5rem;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: white;
`;

const FormSection2 = ({ setSliderInput }) => {
  const [firstInput, setFirstInput] = useState({ x: 10 });
  const [secondInput, setSecondInput] = useState({ x: 10 });

  const pushValues = () => {
    setSliderInput({ firstInput, secondInput });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pushValues();
  };
  return (
    <Container>
      <Wrapper>
        <CarouselContainer>
          <HeroTitle>We make your money move</HeroTitle>
          <CarouselWrapper />
        </CarouselContainer>
        <FormWrapper>
          <FormContainer>
            <Title>
              Tell us you’re saving without telling us you’re saving
            </Title>
            <Form onSubmit={handleSubmit}>
              <Option>
                <Label>How much are you willing to spend?</Label>
                <SliderContainer>
                  <Slider
                    axis="x"
                    x={firstInput.x}
                    onChange={({ x }) =>
                      setFirstInput((state) => ({ ...state, x }))
                    }
                  />
                  {firstInput.x}
                </SliderContainer>
              </Option>
              <Option>
                <Label>How much are you willing to spend?</Label>
                <SliderContainer>
                  <Slider
                    axis="x"
                    x={secondInput.x}
                    onChange={({ x }) =>
                      setSecondInput((state) => ({ ...state, x }))
                    }
                  />
                  {secondInput.x}
                </SliderContainer>
              </Option>
            </Form>
          </FormContainer>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default FormSection2;
