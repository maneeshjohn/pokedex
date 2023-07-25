const _Some = "Some";
const _None = "None";

export interface Some<A> {
  _tag: typeof _Some;
  _value: A;
}

export interface None {
  _tag: typeof _None;
}

export type Option<A> = Some<A> | None;

const some = <A>(x: A): Option<A> => ({ _tag: _Some, _value: x });

const none: Option<never> = { _tag: _None };

const isSome = <A>(x: any): x is Some<A> => x?._tag === _Some;

const isNone = (x: any): x is None => x?._tag === _None;

export {
  _None,
  _Some,
  some,
  none,
  isNone,
  isSome,
}
