import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bg: string;
    text: string;
    sub: string;
    primary: string;
    card: string;
    border: string;
    shadow: string;
    muted: string;
    heroBg: string;
    mode: "light" | "dark";
  }
}
