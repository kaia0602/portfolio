import { useState } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import * as icons from "simple-icons";



const Section = styled.section`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 24px;
`;

const ModalContent = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
  text-align: center;

  h2 {
    margin-top: 0;
    margin-bottom: 8px;
  }
  h3 {
    margin-top: 20px;
    margin-bottom: 8px;
    font-weight: 700;
  }

  img {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    border-radius: 8px;
    margin: 16px 0;
  }

  ul {
    margin: 16px 0;
    padding-left: 20px;
    text-align: left;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 12px;
    justify-content: center;
  }

  .tech-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.05);
    font-size: 14px;
    font-weight: 500;
  }

  .close-btn {
    display: inline-block;
    margin-top: 20px;
    padding: 8px 16px;
    border-radius: 6px;
    border: none;
    background: ${({ theme }) => theme.primary};
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.primary}cc;
    }
  }
`;

const techMap: Record<string, any> = {
  Java: icons.siJava,
  "Spring Framework": icons.siSpring,
  "Spring Boot": icons.siSpringboot,
  React: icons.siReact,
  TypeScript: icons.siTypescript,
  "Styled-components": icons.siStyledcomponents,
  "Framer Motion": icons.siFramer,
  Vite: icons.siVite,
  MariaDB: icons.siMariadb,
  AWS: icons.siAmazonAWS,
  Tomcat: icons.siApachetomcat,
};


export default function Portfolio() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Grid>
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} onSelect={() => setSelected(p)} />
        ))}
      </Grid>

      <ReactModal
        isOpen={!!selected}
        onRequestClose={() => setSelected(null)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          },
          content: {
            inset: "unset",
            width: "600px",
            maxHeight: "80vh",
            margin: "auto",
            borderRadius: "12px",
            padding: "24px",
            overflowY: "auto",
          },
        }}
      >
        {selected && (
          <ModalContent>
            <h2>{selected.title}</h2>
            <p>{selected.tagline}</p>
            {selected.period && (
              <p>
                <b>기간:</b> {selected.period}
              </p>
            )}
            <img src={selected.image} alt={`${selected.title} preview`} />

            {selected.background && (
              <>
                <h3>프로젝트 배경</h3>
                <p>{selected.background}</p>
              </>
            )}

            {selected.goal && (
              <>
                <h3>목표</h3>
                <p>{selected.goal}</p>
              </>
            )}

            <h3>상세 내용</h3>
            <ul>
              {selected.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <h3>사용 기술</h3>
            <div className="tech-stack">
              {selected.stack.map((tech, idx) => {
                const icon = techMap[tech];
                return icon ? (
                  <div key={idx} className="tech-badge">
                    <svg
                      role="img"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={`#${icon.hex}`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={icon.path} />
                    </svg>
                    <span>{tech}</span>
                  </div>
                ) : (
                  <div key={idx} className="tech-badge">
                    {tech}
                  </div>
                );
              })}
            </div>

            <button className="close-btn" onClick={() => setSelected(null)}>
              닫기
            </button>
          </ModalContent>
        )}
      </ReactModal>
    </Section>
  );
}
