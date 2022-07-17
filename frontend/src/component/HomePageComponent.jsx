import styled from 'styled-components';
import homeImg from './image/30202458.png';
import topImg from './image/homeImg1.png';
import featureImg from './image/21.png';
import sustainability from './image/sustainability 1.png';
import check from './image/check.png';
import sosmed from './image/sosmed.png';
import footLogo from '../assets/LogoBlue.png';
import HomeNavbar from "./HomeNavbar";
const Property = styled.div`
  display: flex;
  flex-direction: column;
  height: 2316px;
`
const Home = styled.div`
  height: 900px;
  background: url(${homeImg});
  background-size: cover;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 10px;
  position: absolute;
  width: 163px;
  height: 59px;
  left: 80px;
  top: 622px;
  background: #4D7393;
  border-radius: 12px;
`
const Button = styled.button`
  width: 115px;
  height: 27px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  letter-spacing: 0.02em;
  color: #FFFFFF;
  background: #4D7393;
`
const SmallText = styled.div`
  position: absolute;
  height: 60px;
  left: 80px;
  right: 749px;
  top: 514px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #94959B;
`
const BigText = styled.div`
  position: absolute;
  height: 300px;
  left: 80px;
  right: 614px;
  top: 262px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 96px;
  color: #222222;
`
const TopImg = styled.img`
  position: absolute;
  width: 176px;
  height: 252px;
  left: 632px;
  top: 576px;
`
const Feature = styled.div`
  display: flex;
  justify-content: space-between;
  height: 900px;
  background: url(${featureImg});
  background-size: cover;
`
const Sustainability = styled.img`
  width: 584px;
  height: 868px;
  margin-left: 39px;
  margin-top: 22px;
`
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 72px;
  height: 807px;
  margin-right: 70px;
  right: 72px;
  margin-top: 84px;
`
const RightTitleBOX = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 648px;
  height: 204px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`
const BigRT = styled.div`
  width: 648px;
  height: 120px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 150%;
  /* or 60px */
  letter-spacing: 0.02em;
  color: #222222;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`
const SmallRT = styled.div`
  width: 648px;
  height: 60px;
  /* Paragraph Regular 20pt */
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #94959B;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`
const FeaturesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 85px;
  gap: 20px;

  width: 648px;
  height: 531px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`
const FeatureBox = styled.div`
  width: 648px;
  height: 104px;
  display: flex;
`
const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  width: 72px;
  height: 72px;
  background: rgba(18, 109, 98, 0.15);
  border-radius: 8px;
`
const FeatureBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  height: 104px;
  width: 576px;
  margin-left: 30px;
`
const Check = styled.img`
  width: 32px;
  height: 32px;
`
const FeatureTitle = styled.text`
  width: 576px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */
  letter-spacing: 0.02em;
  color: #222222;
`
const FeatureText = styled.div`
  width: 576px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #94959B;
`
const Footer = styled.div`
  height: 516px;
  background: #FFFFFF;
  display: flex;
  justify-content: space-between;
`
const LeftSection = styled.div`
  width: 232px;
  height: 132.5px;
  margin-left: 71px;
  margin-top: 72.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Sosmed = styled.img`
  width: 184px;
  height: 48px;
`
const FootLogo = styled.img`
  /* width: 232px;
  height: 56px; */
`
const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 126px;
  width: 794px;
  height: 316px;
  margin-right: 72px;
  margin-top: 72px;
`
const Sitemap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 26px;
`
const FootTitle = styled.text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.02em;
  color: #222222;
`
const FootText = styled.text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #94959B;
`

const FootLogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoText = styled.b`
    position:relative;
    left: 15px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.04em;
    color: #4D7393;
`
const HomePageComponent = () => {
  return(
    <Property>
      <Home>
        <HomeNavbar></HomeNavbar>
        <ButtonContainer><Button>Getting Test</Button></ButtonContainer>
        <SmallText>Knowing the sustainability progress of your organisations is important for planning further</SmallText>
        <BigText>Get your guides for sustainability</BigText>
        <TopImg src={ topImg }></TopImg>
      </Home>
      <Feature>
        <Sustainability src={sustainability}></Sustainability>
        <RightBox>
          <RightTitleBOX>
            <BigRT>One Tool Covers Everything You Need</BigRT>
            <SmallRT>We assess your sustainability progress with a board range of metrics.</SmallRT>
          </RightTitleBOX>
          <FeaturesBox>
            <FeatureBox>
              <Icon><Check src={check}></Check></Icon>
              <FeatureBoxRight>
                <FeatureTitle>Greenhouse Gas Emissions</FeatureTitle>
                <FeatureText>We will calculate the CO2 emissions of your organisations daily activities</FeatureText>
              </FeatureBoxRight>
            </FeatureBox>
            <FeatureBox>
              <Icon><Check src={check}></Check></Icon>
              <FeatureBoxRight>
                <FeatureTitle>Energy Consumptions</FeatureTitle>
                <FeatureText>We will analyse the components of energy sources for your organisations</FeatureText>
              </FeatureBoxRight>
            </FeatureBox>
            <FeatureBox>
              <Icon><Check src={check}></Check></Icon>
              <FeatureBoxRight>
                <FeatureTitle>Water Use</FeatureTitle>
                <FeatureText>We will include water usage into our calculator engine</FeatureText>
              </FeatureBoxRight>
            </FeatureBox>
            <FeatureBox>
              <Icon><Check src={check}></Check></Icon>
              <FeatureBoxRight>
                <FeatureTitle>Waste Management</FeatureTitle>
                <FeatureText>Waste management will be a part in the calculations</FeatureText>
              </FeatureBoxRight>
            </FeatureBox>
          </FeaturesBox>
        </RightBox>
      </Feature>
      <Footer>
        <LeftSection>
          <FootLogoContainer>
            <FootLogo src={footLogo}></FootLogo>
            <LogoText>G'Tracker</LogoText>
          </FootLogoContainer>
          <Sosmed src={sosmed}></Sosmed>
        </LeftSection>
        <RightSection>
          <Sitemap>
            <FootTitle>Sitemap</FootTitle>
            <FootText>Home</FootText>
            <FootText>Features</FootText>
          </Sitemap>
          <Sitemap>
            <FootTitle>Landing</FootTitle>
            <FootText>Property</FootText>
            <FootText>Personal Website</FootText>
            <FootText>Web Developer</FootText>
            <FootText>Online Course</FootText>
            <FootText>Donation</FootText>
          </Sitemap>
          <Sitemap>
            <FootTitle>Utility</FootTitle>
            <FootText>FAQ</FootText>
            <FootText>Terms & Conditions</FootText>
          </Sitemap>
        </RightSection>
      </Footer>
    </Property>
  )
}
export default HomePageComponent;
