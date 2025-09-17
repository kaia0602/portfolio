// src/components/ProjectCard.tsx
import styled from "styled-components";
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  tagline: string;
  period?: string;
  stack: string[];
  repo?: string;
  link?: string;
  onSelect: () => void; // 상세보기 콜백
}

export default function ProjectCard({
  title,
  tagline,
  period,
  stack,
  repo,
  link,
  onSelect,
}: ProjectCardProps) {
  return (
    <Card>
      <ProjectTitle>{title}</ProjectTitle>
      <Tagline>{tagline}</Tagline>
      {period && <Period>{period}</Period>}

      <Stack>
        {stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </Stack>

      <LinkGroup>
        {repo && (
          <IconButton href={repo} target="_blank" rel="noreferrer">
            <FaGithub />
          </IconButton>
        )}
        {link && (
          <TextButton href={link} target="_blank" rel="noreferrer">
            <FaLink /> Demo
          </TextButton>
        )}
        <TextButton as="button" onClick={onSelect}>
          자세히 보기
        </TextButton>
      </LinkGroup>
    </Card>
  );
}

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  margin: 0;
`;

const Tagline = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  margin: 0;
`;

const Period = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.sub};
  margin: 0;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  span {
    background: ${({ theme }) => theme.bg};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 13px;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;

const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.bg};
`;

const TextButton = styled.a`
  padding: 6px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
`;
