import styled from "styled-components";
import { FaGithub} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer(){
  return (
    <Wrap>
      <Icons>
        <a href="https://github.com/kaia0602" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="mailto:hyun5611@nate.com"><FiMail /></a>
      </Icons>
      <small>© {new Date().getFullYear()} . All rights reserved.</small>
    </Wrap>
  );
}

const Wrap = styled.footer`
  padding: 40px 24px;
  border-top: 1px solid ${({ theme }) => theme.border};
  text-align: center;
  color: ${({ theme }) => theme.sub};
  font-size: 14px;
`;

const Icons = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  gap: 20px;
  a {
    font-size: 20px;
    color: ${({ theme }) => theme.sub};
    transition: color 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
