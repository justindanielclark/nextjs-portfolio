interface Position {
  x: number;
  y: number;
}
interface Speed {
  xVel: number;
  yVel: number;
}
interface hasPositionUpdate {
  update: () => void;
}
interface hasPosition {
  getX: () => number;
  getY: () => number;
}

type Meta = {
  id: string;
  title: string;
  date: string;
  tags: string[];
};

type BlogPost = {
  meta: Meta;
  content: ReactElement<any, string | JSXElementConstructor<any>>;
};

type Filetree = {
  tree: [{ path: string }];
};

type FileInfo = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: BufferEncoding;
  _links: {
    self: string;
    git: string;
    html: string;
  };
};
