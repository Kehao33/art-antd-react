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
  len?: number;
  timeout?: number;
  throwErr?: boolean;
};
export const getData = async (config?: MockConfig): Promise<MockData[]> => {
  const { len = 21, timeout = 1500, throwErr = false } = config || {};
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (throwErr) {
        reject('出错啦');
      }

      resolve(
        Array(len)
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
      );
    }, timeout);
  });
};
