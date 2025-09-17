import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styled from "styled-components";

const rotatingWords = ["도전하는", "소통하는", "발전하는"];

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;s
  overflow: hidden;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? "linear-gradient(135deg, #fafafa 0%, #f0f4ff 100%)"
      : "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)"};
`;

const BgCircles = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;

  div {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.3;
  }

  .circle1 {
    width: 400px; height: 400px;
    background: #ff004f;
    top: -100px; left: -100px;
  }
  .circle2 {
    width: 500px; height: 500px;
    background: #6366f1;
    bottom: -150px; right: -100px;
  }
  .circle3 {
    width: 300px; height: 300px;
    background: #0ea5e9;
    bottom: 100px; left: 20%;
  }
`;



const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 960px;
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: clamp(36px, 6vw, 72px);
  color: ${({ theme }) => theme.text};
  line-height: 1.2;

  span {
    color: ${({ theme }) => theme.primary};
    
  }
`;

const Desc = styled.p`
  margin: 16px 0 32px;
  color: ${({ theme }) => theme.muted};
  font-size: clamp(14px, 1.6vw, 18px);
`;

const CTA = styled.a`
  margin-top: 32px;
  padding: 14px 28px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px ${({ theme }) => theme.primary}55;
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.muted};
  font-size: 14px;
  animation: bounce 1.8s infinite;

  @keyframes bounce {
    0%, 100% { transform: translate(-50%, 0); }
    50% { transform: translate(-50%, -8px); }
  }
`;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % rotatingWords.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <Section>
      <BgCircles>
        <div className="circle1" />
        <div className="circle2" />
        <div className="circle3" />
      </BgCircles>

      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>
            안녕하세요, <span>{rotatingWords[index]}</span>
            <br />개발자 안소현입니다.
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <Desc>
            효율적인 아키텍처와 최적화된 코드로 <br />
            신뢰할 수 있는 시스템을 구현합니다.
          </Desc>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CTA href="#projects">프로젝트 보러가기</CTA>
        </motion.div>
      </Inner>

      {/* 스크롤 힌트 */}
      <ScrollHint>↓ Scroll</ScrollHint>
    </Section>
  );
}
