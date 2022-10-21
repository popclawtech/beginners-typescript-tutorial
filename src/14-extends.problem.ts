import { string } from "zod";
import { Equal, Expect } from "./helpers/type-utils";

interface id  {
  id: string;
}

interface User extends id {
  firstName: string;
  lastName: string;
}

interface Post extends id{
  title: string;
  body: string;
}

interface Comment extends id {
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>,
];
