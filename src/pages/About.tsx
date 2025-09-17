import styled from "styled-components";

const Section = styled.section`
  padding: 120px 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 24px;
`;

const Desc = styled.p`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.muted};
`;

const Strong = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
`;


export default function AboutMe() {
  return (
    <Section id="about">
      <Title>About Me</Title>

      <Desc>
        안녕하세요 👋 <br />
        저는 끈기 있게 문제를 해결하는 개발자 <Strong>안소현</Strong>입니다.
      </Desc>
      <Desc>
        문제를 끝까지 파고드는 집요함이 있지만,
        동시에 협업 과정에서 소통과 배려를 중요하게 생각합니다.
      </Desc>
      <Desc>
        개발은 단순히 코드를 짜는 일이 아니라,
        사람과 사람을 잇는 과정이라고 생각합니다.
      </Desc>
      <Desc>
        팀과 함께 현실적인 문제를 해결하며,
        <b>더 나은 가치를 만드는 개발자</b>가 되고자 합니다.
      </Desc>
    </Section>
  );
}
