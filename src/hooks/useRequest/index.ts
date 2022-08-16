import { useState, useEffect } from 'react';

export type RequestService<Params = any, Res = any> = (params?: Params) => Promise<Res>;

export interface OptionConfig<Params, Res> {
  lazy?: boolean;
  defaulParams?: Params;
  onSuccess?: (data?: Res) => void;
  onError?: (e?: Error) => void;
  formaResult?: (res: any) => Res;
}

export const useRequest = <Params, Res>(
  request: RequestService<Params, Res>,
  config?: OptionConfig<Params, Res>,
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Res>();
  const [error, setError] = useState<Error>();

  const { lazy, defaulParams, onSuccess, onError, formaResult } = config || {};

  const lazyService = (params?: Params) => {
    setLoading(true);
    request(params)
      .then((result) => {
        setData(formaResult ? formaResult(result) : result);

        if (onSuccess) {
          onSuccess(result);
        }
      })
      .catch((err) => {
        setError(err);

        if (onError) {
          onError(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!lazy) {
      lazyService(defaulParams);
    }
  }, [lazy]);

  return {
    lazyService,
    data,
    error,
    loading,
    setLoading,
  };
};
