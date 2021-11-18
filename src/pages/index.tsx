import type { NextPage } from "next";
import NextLink from "next/link";
import styled from "styled-components";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Background>
      <Wrapper>
        <Title>Welcome to Daily Vegetables!</Title>
        <Content>
          <ImageWrapper>
            <Image
              src="/images/vegetables.jpg"
              width="341"
              height="516"
              alt="carrot image"
            />
            <ImageCaption>Image of Vegetables from Wikipedia</ImageCaption>
          </ImageWrapper>
          <NextLink href="/carrot" passHref>
            <Anchor>Find out the best vegetable in the world</Anchor>
          </NextLink>
        </Content>
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  background-color: #3a9106;
  height: 100%;
`;

const Wrapper = styled.main`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  padding-top: 40px;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Nunito", sans-serif;
  text-align: center;
  font-style: italic;
`;

const Content = styled.section`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Anchor = styled.a`
  font-size: 1.5rem;
  font-family: "Bitter", serif;
  color: inherit;
  text-decoration: none;

  &:before {
    content: "-";
    padding-right: 10px;
  }

  &:hover {
    color: #354e2c;
  }
`;

const ImageWrapper = styled.figure`
  max-width: 300px;
  width: 100%;
  margin-bottom: 20px;

  & img {
    border-radius: 50px;
  }
`;

const ImageCaption = styled.figcaption`
  font-size: 0.75rem;
  text-align: right;
  font-style: italic;
`;

export default Home;
