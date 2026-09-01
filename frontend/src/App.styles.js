import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #F7F5F1;
  color: #211F26;
  font-family: "Inter", system-ui, sans-serif;
`;

export const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 40px;
  max-width: 1040px;
  margin: 0 auto;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoMark = styled.span`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 13px;
  background: #5B21B6;
  color: #fff;
  padding: 5px 8px;
  border-radius: 4px;
`;

export const LogoText = styled.span`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 17px;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LoginBtn = styled.button`
  background: transparent;
  border: none;
  color: #211F26;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 6px;
  transition: background 0.15s ease;

  &:hover {
    background: #EDE6FB;
  }
`;

export const SignupBtn = styled.button`
  background: #5B21B6;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  padding: 9px 18px;
  border-radius: 6px;
  transition: background 0.15s ease;

  &:hover {
    background: #4C1D95;
  }
`;

/* ---------- Hero ---------- */

export const Hero = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding: 40px 40px 60px;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const Headline = styled.h1`
  font-family: "Fraunces", serif;
  font-style: italic;
  font-weight: 600;
  font-size: clamp(44px, 6vw, 64px);
  line-height: 1;
  margin: 0 0 20px;
  letter-spacing: -0.01em;
  color: #211F26;
`;

export const SubHeadline = styled.h2`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: clamp(22px, 2.6vw, 30px);
  line-height: 1.5;
  margin: 0 0 20px;
  display: inline;
  background-image: linear-gradient(180deg, transparent 62%, #FDE68A 62%);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

export const HeroDesc = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #5B5560;
  max-width: 460px;
  margin: 20px 0 0;
`;

export const ClosingLine = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #5B21B6;
  margin-top: 22px;
  padding-bottom: 2px;
  display: inline-block;
  border-bottom: 2px solid #5B21B6;
`;

export const HeroVisual = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 760px) {
    display: none;
  }
`;

/* ---------- Console (upload form) ---------- */

export const Console = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 40px 60px;
`;

export const ConsoleAccent = styled.div`
  height: 3px;
  background: #5B21B6;
  border-radius: 3px 3px 0 0;
`;

export const ConsoleInner = styled.div`
  background: #FFFFFF;
  border: 1px solid #E4DEF2;
  border-top: none;
  border-radius: 0 0 10px 10px;
  padding: 36px;
`;

export const Field = styled.div`
  margin-bottom: 22px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 13px;
  color: #5B5560;
  margin-bottom: 8px;
`;

export const FileDrop = styled.label`
  display: block;
  border: 1.5px dashed #C9BEEA;
  border-radius: 6px;
  padding: 14px 16px;
  font-size: 14px;
  color: #5B5560;
  cursor: pointer;
  background: #FBFAFE;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: #5B21B6;
    background: #F8F5FD;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  border: 1px solid #DCD3F0;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
  background: #FBFAFE;
  transition: border-color 0.15s ease;

  &:focus {
    outline: none;
    border-color: #5B21B6;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  background: #5B21B6;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Space Grotesk", sans-serif;
  transition: background 0.15s ease;

  &:hover {
    background: #4C1D95;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const ErrorText = styled.p`
  color: #E11D48;
  margin-top: 12px;
  font-size: 14px;
`;

/* ---------- Results ---------- */

export const ResultCard = styled.section`
  max-width: 1040px;
  margin: 0 auto 40px;
  padding: 40px;
  background: #FFFFFF;
  border: 1px solid #E4DEF2;
  border-radius: 10px;
  position: relative;
`;

export const StampWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
`;

export const ScoreStamp = styled.div`
  border: 3px solid ${(props) => props.$color};
  border-radius: 6px;
  padding: 14px 24px;
  transform: rotate(-3deg);
  text-align: center;
  background: #fff;
`;

export const StampNumber = styled.span`
  font-family: "Fraunces", serif;
  font-weight: 700;
  font-size: 40px;
  color: ${(props) => props.$color};
`;

export const StampOutOf = styled.span`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #9B92B0;
  margin-left: 2px;
`;

export const StampLabel = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #5B5560;
  margin-top: 4px;
`;

export const Summary = styled.p`
  color: #3B3742;
  line-height: 1.7;
  margin-bottom: 28px;
  text-align: center;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionBlock = styled.div`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h4`
  font-family: "Space Grotesk", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #211F26;
  margin-bottom: 12px;
`;

export const SkillRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #F0EBFB;

  &:last-child {
    border-bottom: none;
  }
`;

export const SkillMark = styled.span`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  background: ${(props) => (props.$ok ? "#5B21B6" : "#E11D48")};
`;

export const SkillText = styled.span`
  font-size: 14px;
  color: #211F26;
`;

export const SuggestionList = styled.ol`
  padding-left: 20px;
  color: #3B3742;
  line-height: 1.7;

  li {
    margin-bottom: 8px;
    padding-left: 4px;
  }

  li::marker {
    font-weight: 700;
    color: #5B21B6;
  }
`;

/* ---------- How it works ---------- */

export const HowSection = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding: 20px 40px 80px;
`;

export const HowTitle = styled.h3`
  font-family: "Fraunces", serif;
  font-style: italic;
  font-weight: 600;
  font-size: clamp(28px, 3.5vw, 38px);
  color: #211F26;
  margin: 0 0 48px;
`;

export const StepsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  position: relative;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const StepConnector = styled.div`
  position: absolute;
  top: 22px;
  left: 12%;
  right: 12%;
  height: 0;
  border-top: 2px dashed #C9BEEA;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Step = styled.div`
  position: relative;
`;

export const StepNumber = styled.span`
  font-family: "Fraunces", serif;
  font-weight: 700;
  font-size: 22px;
  color: #5B21B6;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 2px solid #5B21B6;
  border-radius: 50%;
  background: #F7F5F1;
  position: relative;
  z-index: 1;
`;

export const StepTitle = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #211F26;
  margin: 16px 0 8px;
`;

export const StepDesc = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #5B5560;
  max-width: 260px;
`;

/* ---------- Why ResumeIQ ---------- */

export const WhySection = styled.section`
  background: #F7F5F1;
  padding: 70px 40px;
`;

export const WhyInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

export const WhyTitle = styled.h3`
  font-family: "Fraunces", serif;
  font-style: italic;
  font-weight: 600;
  font-size: clamp(28px, 3.5vw, 38px);
  color: #211F26;
  margin: 0 0 48px;
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const WhyItem = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WhyIconWrap = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: #EDE6FB;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

export const WhyMarker = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: #FDE68A;
  margin-top: 8px;
  flex-shrink: 0;
`;

export const WhyItemTitle = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #211F26;
  margin: 0 0 8px;
`;


export const WhyItemDesc = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #5B5560;
`;

/* ---------- Footer ---------- */

export const FooterSection = styled.footer`
  background: #EDE6FB;
  border-top: none;
`;

export const FooterInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 48px 40px 32px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
`;

export const FooterBrand = styled.div`
  max-width: 280px;
`;

export const FooterLogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const FooterLogoMark = styled.span`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 13px;
  background: #5B21B6;
  color: #fff;
  padding: 5px 8px;
  border-radius: 4px;
`;

export const FooterLogoText = styled.span`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #211F26;
`;

export const FooterTagline = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #5B5560;
`;

export const FooterCol = styled.div`
  min-width: 140px;
`;

export const FooterColTitle = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #211F26;
  margin-bottom: 14px;
`;

export const FooterLink = styled.a`
  display: block;
  font-size: 14px;
  color: #5B5560;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #5B21B6;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 20px 40px 32px;
  border-top: 1px solid #E4DEF2;
  font-size: 13px;
  color: #8A8299;
  text-align: center;
`;