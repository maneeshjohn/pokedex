const _Left = "Left";
const _Right = "Right";

export interface Left<E> {
  _tag: typeof _Left;
  _left: E;
}

export interface Right<A> {
  _tag: typeof _Right;
  _right: A;
}

export type Either<E, A> = Left<E> | Right<A>;

const left = <E, A = never>(e: E): Either<E, A> => ({ _tag: _Left, _left: e });

const right = <A, E = never>(a: A): Either<E, A> => ({ _tag: _Right, _right: a });

const isLeft = <E>(x: any): x is Left<E> => x?._tag === _Left;

const isRight = <A>(x: any): x is Right<A> => x?._tag === _Right;

export {
  _Left,
  _Right,
  left,
  right,
  isLeft,
  isRight,
}
