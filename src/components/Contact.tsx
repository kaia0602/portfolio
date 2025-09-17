// src/components/Contact.tsx
import styled from "styled-components";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_inm69vq",   
        "template_m27ddtd",  
        formRef.current,
        "jkg6yUZgu92t-B-bc"   
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );
  };

  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Message>감사합니다. <br/>궁금하신 점이 있으시면 편하게 연락주세요</Message>
      <InfoWrap>
        <InfoItem>
          <FaGithub />
          <a href="https://github.com/kaia0602" target="_blank" rel="noreferrer">
            github.com/kaia0602
          </a>
        </InfoItem>
        <InfoItem>
          <FaEnvelope />
          <a href="mailto:hyun5611@nate.com">hyun5611@nate.com</a>
        </InfoItem>
      </InfoWrap>

      <Form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="이름" required />
        <input type="email" name="user_email" placeholder="이메일" required />
        <textarea name="message" placeholder="메시지를 입력해주세요" rows={5} required />
        <button type="submit">보내기</button>
      </Form>

      {status === "success" && <SuccessMsg>메시지가 성공적으로 전송되었습니다.
        <br/>빠른 시일 내에 답변드리겠습니다.</SuccessMsg>}
      {status === "error" && <Msg>전송 중 문제가 발생했습니다. 다시 시도해주세요.</Msg>}
    </Section>
  );
}

const Section = styled.section`
  padding: 100px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.text};

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;

  input, textarea {
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    font-size: 14px;
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
  }

  button {
    padding: 10px 14px;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    background: ${({ theme }) => theme.primary};
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.primary}cc;
    }
  }
`;

const Msg = styled.p`
  margin-top: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
`;

const SuccessMsg = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.muted};
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;

const Message = styled.p`
  margin: -8px 0 24px;
  font-size: 15px;
  color: ${({ theme }) => theme.muted};
  text-align: center;
`;

