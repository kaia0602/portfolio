import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{ box-sizing:border-box; }
  html, body, #root { height:100%; }
  body{
    margin:0;
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
    background: ${({ theme }: any) => theme.bg};
    color: ${({ theme }: any) => theme.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a{ color:inherit; text-decoration:none; }
  img{ display:block; max-width:100%; }
  ::selection{ background: ${({ theme }: any) => theme.primary}; color:#fff; }
`;
