export interface Query<S, A> {
  key: keyof S;
  data: A | null;
  isLoading: boolean;
  error: unknown;
}

export interface Options<S, A> {
  key: keyof S;
  queryFn: () => Promise<A>;
  staleTime?: number;
  cacheTime?: number;
}
