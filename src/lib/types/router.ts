export interface RouterContextModel {
  path: string;
  push: (path: string) => void;
  pop: () => void;
}
