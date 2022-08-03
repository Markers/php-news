import { Article } from "./article";

export namespace API {
  export namespace GET {
    export type Articles = {
      data?: {
        data: Article[];
        item: string;
        message: string;
        total: number;
      };
      error: boolean;
    };
  }
}
