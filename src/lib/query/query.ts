import { useEffect } from "react";
import { Options, Query } from "../types/query";

const createQuery = <S, A>(
  args: Options<S, A>,
  callback: (o: Query<S, A>) => void,
): void => {

  const { key, queryFn } = args;

  let query: Query<S, A> = {
    key,
    data: null,
    isLoading: false,
    error: null,
  };

  let promise: Promise<S> | null = null;

  const fetchData = async () => {
    query = {
      ...query,
      isLoading: true,
    };
    callback(query);
    try {
      const data = await queryFn();
      query = {
        ...query,
        data,
        error: null,
        isLoading: false,
      };
    } catch (error) {
      query = {
        ...query,
        error,
        data: null,
        isLoading: false,
      };
    } finally {
      callback(query);
    };
  }

  useEffect(() => {
    if (promise) return;
    fetchData();
  }, [key]);
}

export {
  createQuery,
}
