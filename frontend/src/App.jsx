import { useState } from "react";
import axios from "axios";
import {
  Page, Nav, LogoWrap, LogoMark, LogoText, NavButtons, LoginBtn, SignupBtn,
  Hero, HeroGrid, Headline, SubHeadline, HeroDesc, ClosingLine, HeroVisual,
  Console, ConsoleAccent, ConsoleInner, Field, Label, FileDrop, Textarea,
  SubmitButton, ErrorText, ResultCard, StampWrap, ScoreStamp, StampNumber,
  StampOutOf, StampLabel, Summary, SectionBlock, SectionTitle, SkillRow,
  SkillMark, SkillText, SuggestionList, FooterSection, FooterInner,
  FooterBrand, FooterLogoWrap, FooterLogoMark, FooterLogoText, FooterTagline,
  FooterCol, FooterColTitle, FooterLink, FooterBottom,HowSection, HowTitle, StepsRow, StepConnector, Step, StepNumber, StepTitle, StepDesc,
WhySection, WhyInner, WhyTitle, WhyGrid, WhyItem, WhyIconWrap, WhyItemTitle, WhyItemDesc,
} from "./App.styles";

function ResumeIllustration() {
  return (
    <svg width="280" height="330" viewBox="0 0 280 330" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="10" width="220" height="300" rx="4" fill="#fff" stroke="#E4DEF2" strokeWidth="2" />
      <rect x="44" y="36" width="90" height="10" rx="2" fill="#211F26" />
      <rect x="44" y="54" width="60" height="6" rx="2" fill="#C9BEEA" />
      <rect x="44" y="82" width="50" height="7" rx="2" fill="#5B21B6" />
      <rect x="44" y="98" width="172" height="5" rx="2" fill="#E4DEF2" />
      <rect x="44" y="110" width="172" height="5" rx="2" fill="#E4DEF2" />
      <rect x="44" y="122" width="130" height="5" rx="2" fill="#E4DEF2" />
      <rect x="42" y="96" width="176" height="14" rx="2" fill="#FDE68A" opacity="0.7" />
      <rect x="44" y="150" width="50" height="7" rx="2" fill="#5B21B6" />
      <rect x="44" y="166" width="172" height="5" rx="2" fill="#E4DEF2" />
      <rect x="44" y="178" width="150" height="5" rx="2" fill="#E4DEF2" />
      <rect x="42" y="164" width="176" height="14" rx="2" fill="#FDE68A" opacity="0.7" />
      <rect x="44" y="206" width="50" height="7" rx="2" fill="#5B21B6" />
      <rect x="44" y="222" width="172" height="5" rx="2" fill="#E4DEF2" />
      <rect x="44" y="234" width="100" height="5" rx="2" fill="#E4DEF2" />
      <line x1="10" y1="60" x2="270" y2="230" stroke="#5B21B6" strokeWidth="2" strokeDasharray="6 6" opacity="0.5" />
      <g transform="translate(190, 250) rotate(-8)">
        <rect x="0" y="0" width="62" height="30" rx="4" fill="none" stroke="#5B21B6" strokeWidth="2" />
        <text x="31" y="20" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="13" fill="#5B21B6">ATS</text>
      </g>
    </svg>
  );
}
function ScoreIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#5B21B6" strokeWidth="2" />
      <path d="M12 7v5l3.5 2" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19h16M4 19V9l5-4 5 4v10M9 19v-6h4v6" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 9l3-2-3-2" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SuggestionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3a6 6 0 00-3.5 10.9c.4.3.5.7.5 1.1v1h6v-1c0-.4.1-.8.5-1.1A6 6 0 0012 3z" stroke="#5B21B6" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 19h4M11 21h2" stroke="#5B21B6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="#5B21B6" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  const [resume, setResume] = useState(null);
  const [jd, setJd] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!resume || !jd.trim()) {
      setError("Please upload a resume and paste a job description.");
      return;
    }
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("job_description", jd);
      const res = await axios.post("https://resumeiq-backend-tbvb.onrender.com/analyze", formData);      setResult(res.data);
    } catch (err) {
      setError("Something went wrong. Check the backend terminal for details.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 75) return "#5B21B6";
    if (score >= 50) return "#B45309";
    return "#E11D48";
  };

  return (
    <Page>
      <Nav>
        <LogoWrap>
          <LogoMark>IQ</LogoMark>
          <LogoText>ResumeIQ</LogoText>
        </LogoWrap>
        <NavButtons>
          <LoginBtn>Log in</LoginBtn>
          <SignupBtn>Sign up</SignupBtn>
        </NavButtons>
      </Nav>

      <Hero>
        <HeroGrid>
          <div>
            <Headline>ResumeIQ</Headline>
            <div><SubHeadline>See Your Resume Through an ATS's Eyes.</SubHeadline></div>
            <HeroDesc>
              AI-powered resume analysis that scores your ATS compatibility,
              matches your skills to job requirements, identifies gaps, and
              tells you exactly how to improve.
            </HeroDesc>
            <br />
            <ClosingLine>Stop Guessing. Start Optimizing.</ClosingLine>
          </div>
          <HeroVisual>
            <ResumeIllustration />
          </HeroVisual>
        </HeroGrid>
      </Hero>

      <Console>
        <ConsoleAccent />
        <ConsoleInner>
          <Field>
            <Label>Resume</Label>
            <FileDrop>
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={(e) => setResume(e.target.files[0])}
                style={{ display: "none" }}
              />
              {resume ? resume.name : "Choose a PDF file"}
            </FileDrop>
          </Field>

          <Field>
            <Label>Job description</Label>
            <Textarea
              rows={8}
              placeholder="Paste the job description here..."
              value={jd}
              onChange={(e) => setJd(e.target.value)}
            />
          </Field>

          <SubmitButton onClick={handleSubmit} disabled={loading}>
            {loading ? "Analyzing..." : "Analyze match"}
          </SubmitButton>

          {error && <ErrorText>{error}</ErrorText>}
        </ConsoleInner>
      </Console>

      {result && (
        <ResultCard>
          <StampWrap>
            <ScoreStamp $color={getScoreColor(result.match_score)}>
              <StampNumber $color={getScoreColor(result.match_score)}>
                {result.match_score}
              </StampNumber>
              <StampOutOf>/100</StampOutOf>
              <StampLabel>ATS match</StampLabel>
            </ScoreStamp>
          </StampWrap>

          <Summary>{result.summary}</Summary>

          <SectionBlock>
            <SectionTitle>Matched skills</SectionTitle>
            {result.matched_skills.map((s, i) => (
              <SkillRow key={i}>
                <SkillMark $ok>✓</SkillMark>
                <SkillText>{s}</SkillText>
              </SkillRow>
            ))}
          </SectionBlock>

          <SectionBlock>
            <SectionTitle>Missing skills</SectionTitle>
            {result.missing_skills.length === 0 ? (
              <SkillRow>
                <SkillMark $ok>✓</SkillMark>
                <SkillText>None — great match!</SkillText>
              </SkillRow>
            ) : (
              result.missing_skills.map((s, i) => (
                <SkillRow key={i}>
                  <SkillMark>✕</SkillMark>
                  <SkillText>{s}</SkillText>
                </SkillRow>
              ))
            )}
          </SectionBlock>

          <SectionBlock>
            <SectionTitle>Suggestions</SectionTitle>
            <SuggestionList>
              {result.suggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </SuggestionList>
          </SectionBlock>
        </ResultCard>
      )}
      <HowSection>
        <HowTitle>How it works</HowTitle>
        <StepsRow>
          <StepConnector />
          <Step>
            <StepNumber>1</StepNumber>
            <StepTitle>Upload your resume</StepTitle>
            <StepDesc>Drop in your resume as a PDF — ResumeIQ reads it exactly as an ATS would.</StepDesc>
          </Step>
          <Step>
            <StepNumber>2</StepNumber>
            <StepTitle>Paste the job description</StepTitle>
            <StepDesc>Add the role you're applying for so we know what to measure your resume against.</StepDesc>
          </Step>
          <Step>
            <StepNumber>3</StepNumber>
            <StepTitle>Get your match report</StepTitle>
            <StepDesc>See your ATS score, matched and missing skills, and exactly what to fix.</StepDesc>
          </Step>
        </StepsRow>
      </HowSection>

      <WhySection>
        <WhyInner>
          <WhyTitle>Why ResumeIQ</WhyTitle>
          <WhyGrid>
            <WhyItem>
              <WhyIconWrap><ScoreIcon /></WhyIconWrap>
              <WhyItemTitle>ATS compatibility score</WhyItemTitle>
              <WhyItemDesc>Know your real odds of getting past automated screening before you hit submit.</WhyItemDesc>
            </WhyItem>
            <WhyItem>
              <WhyIconWrap><GapIcon /></WhyIconWrap>
              <WhyItemTitle>Skill gap detection</WhyItemTitle>
              <WhyItemDesc>See exactly which required skills are missing from your resume, not just a vague score.</WhyItemDesc>
            </WhyItem>
            <WhyItem>
              <WhyIconWrap><SuggestionIcon /></WhyIconWrap>
              <WhyItemTitle>Tailored suggestions</WhyItemTitle>
              <WhyItemDesc>Get specific, actionable edits for this job — not generic resume advice.</WhyItemDesc>
            </WhyItem>
            <WhyItem>
              <WhyIconWrap><SpeedIcon /></WhyIconWrap>
              <WhyItemTitle>Results in seconds</WhyItemTitle>
              <WhyItemDesc>No sign-up wait, no back-and-forth — upload, paste, and get your report instantly.</WhyItemDesc>
            </WhyItem>
          </WhyGrid>
        </WhyInner>
      </WhySection>

      <FooterSection>
        <FooterInner>
          <FooterBrand>
            <FooterLogoWrap>
              <FooterLogoMark>IQ</FooterLogoMark>
              <FooterLogoText>ResumeIQ</FooterLogoText>
            </FooterLogoWrap>
            <FooterTagline>
              AI-powered resume analysis that helps you match, not guess.
            </FooterTagline>
          </FooterBrand>

          <FooterCol>
            <FooterColTitle>Product</FooterColTitle>
            <FooterLink>How it works</FooterLink>
            <FooterLink>Features</FooterLink>
            <FooterLink>Pricing</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>Company</FooterColTitle>
            <FooterLink>About</FooterLink>
            <FooterLink>Contact</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterColTitle>Legal</FooterColTitle>
            <FooterLink>Privacy policy</FooterLink>
            <FooterLink>Terms of service</FooterLink>
          </FooterCol>
        </FooterInner>

        <FooterBottom>© 2026 ResumeIQ. All rights reserved.</FooterBottom>
      </FooterSection>
    </Page>
  );
}

export default App;