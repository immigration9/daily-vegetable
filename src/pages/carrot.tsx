import styled from "styled-components";
import Image from "next/image";

const Carrot = () => {
  return (
    <Background>
      <Wrapper>
        <Title>Carrots</Title>
        <Content>
          <ImageWrapper>
            <Image
              src="/images/carrot.jpg"
              width="1269"
              height="720"
              alt="carrot image"
            />
            <ImageCaption>Image of Carrot from Wikipedia</ImageCaption>
          </ImageWrapper>
          <Description>
            The carrot (Daucus carota subsp. sativus) is a root vegetable,
            typically orange in color, though purple, black, red, white, and
            yellow cultivars exist all of which are domesticated forms of the
            wild carrot, Daucus carota, native to Europe and Southwestern Asia.
            The plant probably originated in Persia and was originally
            cultivated for its leaves and seeds. The most commonly eaten part of
            the plant is the taproot, although the stems and leaves are also
            eaten. The domestic carrot has been selectively bred for its greatly
            enlarged, more palatable, less woody-textured taproot. The carrot is
            a biennial plant in the umbellifer family, Apiaceae. At first, it
            grows a rosette of leaves while building up the enlarged taproot.
            Fast-growing cultivars mature within three months (90 days) of
            sowing the seed, while slower-maturing cultivars need a month longer
            (120 days). The roots contain high quantities of alpha- and
            beta-carotene, and are a good source of vitamin K and vitamin B6.
            The United Nations Food and Agriculture Organization (FAO) reports
            that world production of carrots and turnips (these plants are
            combined by the FAO) for 2018 was 40 million tonnes, with 45% of the
            world total grown in China. Carrots are widely used in many
            cuisines, especially in the preparation of salads, and carrot salads
            are a tradition in many regional cuisines.
          </Description>
        </Content>
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  background-color: hsl(32.94, 85%, 52.94%);
`;

const Wrapper = styled.main`
  max-width: 1024px;
  width: 100%;
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

  color: hsl(25, 100%, 47%);
`;

const Content = styled.section`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.p`
  font-family: "Bitter";
  font-size: 1rem;
  font-weight: lighter;
`;

const ImageWrapper = styled.figure`
  max-width: 600px;
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

export default Carrot;
