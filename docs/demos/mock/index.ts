export type MockData = {
  id: string;
  name: string;
  age: number;
  gender: string;
  hobby: string;
  bestFirend: {
    name: string;
    age: number;
  };
  description: string;
};

export type MockConfig = {
  total?: number;
  timeout?: number;
  throwErr?: boolean;
};

export const getData = async (
  config?: MockConfig,
): Promise<{
  result: MockData[];
  total: number;
}> => {
  const { total = 100, timeout = 1500, throwErr = false } = config || {};
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (throwErr) {
        reject('出错啦');
      }

      resolve({
        result: Array(total)
          .fill({})
          .map((_, index) => ({
            id: `${index + Math.floor(Math.random() * 100)}`,
            name: `name${index}`,
            age: Math.floor(Math.random() * 100),
            gender: `gender${index}`,
            hobby: `hobby${index}`,
            firend: `firend${index}`,
            description: `description${index}`,
            bestFirend: {
              name: `zhanag ${index}`,
              age: Math.floor(Math.random() * 100),
            },
          })),
        total,
      });
    }, timeout);
  });
};
