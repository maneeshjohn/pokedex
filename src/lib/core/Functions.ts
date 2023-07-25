import { Option, none, isNone, _None, _Some, None } from "./Option";
import { _Left, _Right, isLeft } from "./Either";

const compose = (...fns: Array<(g: any) => any>) => (x: any) => {
  fns.reduceRight((acc, fn) => fn(acc), x);
}

const pipe = (...fns: Array<(g: any) => any>) => (x: any) => {
  fns.reduce((acc, fn) => fn(acc), x);
}

type ComposeTwo = <A,B,C>(
  f: (b: B) => C,
  g: (a: A) => B
) => (a: A) => C;

const composeTwo: ComposeTwo = (f, g) => (x) => f(g(x)); 

type PipeTwo = <A,B,C>(
  f: (a: A) => B,
  g: (b: B) => C
) => (a: A) => C;

const pipeTwo: PipeTwo = (f, g) => x => g(f(x));

const mutate = (reference: any, value: any) => {
  reference = value;
  return reference;
}

const unwrap = <A>(x: any): A | None => (
  x?._tag === _Some
    ? x._value
    : x?._tag === _Right
      ? x._right
      : x?._left || none
);

const unwrapOr = <A,B>(x: Option<A>, cb: () => B) => (
  (isNone(unwrap(x)) || isLeft(unwrap(x)))
    ? cb()
    : none
);

export {
  compose,
  composeTwo,
  pipe,
  pipeTwo,
  mutate,
  unwrap,
  unwrapOr,
}
