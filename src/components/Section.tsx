import styled from "styled-components";
export default function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return <Wrap id={id}>{children}</Wrap>;
}
const Wrap = styled.section`
  padding: 96px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;
