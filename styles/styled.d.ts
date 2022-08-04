import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      gray: string;
    };

    display: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
