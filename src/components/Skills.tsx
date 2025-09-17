import styled from "styled-components";
import { motion } from "framer-motion";
import {
  SiSpring, SiMariadb, SiApachetomcat, SiOracle,
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3,
  SiAmazon, SiPostman, SiNotion, SiFigma, SiAdobeillustrator,
  SiGithub, SiGit, SiOpenjdk
} from "react-icons/si";

const Section = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Category = styled.div``;

const CatTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled(motion.div)<{ color?: string }>`
  width: 120px;
  height: 120px;
  background: ${({ theme }) => theme.card}cc;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 20px;
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 600;

  svg {
    font-size: 36px;
    color: ${({ color }) => color || "#999"};
    transition: transform 0.2s ease;
  }

  &:hover {
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 6px 18px
      ${({ color }) => (color ? `${color}55` : "rgba(0,0,0,0.15)")};
    svg {
      transform: scale(1.2);
    }
  }
`;

export default function Skills() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 }
    }),
  };

  return (
    <Section id="skills">
      <Title>Skills</Title>
      <Grid>
        <Category>
          <CatTitle>Backend</CatTitle>
          <Items>
            {[
              { icon: <SiOpenjdk />, name: "Java", color: "#007396" },
              { icon: <SiSpring />, name: "Spring", color: "#6DB33F" },
              { icon: <SiApachetomcat />, name: "JSP / Servlet", color: "#F8DC75" },
              { icon: <SiMariadb />, name: "MariaDB", color: "#003545" },
              { icon: <SiOracle />, name: "Oracle", color: "#F80000" },
              { icon: <SiAmazon />, name: "AWS", color: "#FF9900" },
            ].map((s, i) => (
              <Card
                key={s.name}
                color={s.color}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                {s.icon}
                <span>{s.name}</span>
              </Card>
            ))}
          </Items>
        </Category>

        <Category>
          <CatTitle>Frontend</CatTitle>
          <Items>
            {[
              { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
              { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
              { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
              { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
              { icon: <SiReact />, name: "React", color: "#61DAFB" },
            ].map((s, i) => (
              <Card
                key={s.name}
                color={s.color}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                {s.icon}
                <span>{s.name}</span>
              </Card>
            ))}
          </Items>
        </Category>

        <Category>
          <CatTitle>Tools</CatTitle>
          <Items>
            {[
              { icon: <SiGit />, name: "Git", color: "#F05032" },
              { icon: <SiGithub />, name: "GitHub", color: "#181717" },
              { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
              { icon: <SiNotion />, name: "Notion", color: "#000000" },
              { icon: <SiFigma />, name: "Figma", color: "#F24E1E" },
              { icon: <SiAdobeillustrator />, name: "Illustrator", color: "#FF9A00" },
            ].map((s, i) => (
              <Card
                key={s.name}
                color={s.color}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                {s.icon}
                <span>{s.name}</span>
              </Card>
            ))}
          </Items>
        </Category>
      </Grid>
    </Section>
  );
}
