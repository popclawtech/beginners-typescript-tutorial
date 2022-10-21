import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

type MyType = Pick<User,"firstName" |"lastName">;
//type MyType = Omit<User,"id">;


type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
