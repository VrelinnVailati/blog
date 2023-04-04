export type Post = {
  id: string;
  sequence: number;
  title: string;
  body: string;
  tag: {
    short: string;
    long: string;
  };
};
