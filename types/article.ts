export interface Article {
  id: string;
  href: string;
  thubnamil?: {
    src: string;
    width: number;
    height: number;
    sizes: string;
  };
  datetime: string;
  title: string;
  description: string;
  writer_url: string;
  writer: string;
}
