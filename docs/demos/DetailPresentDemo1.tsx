import { DetailPresent } from 'art-antd-react';

const Demo1 = () => {
  const responseData = {
    user: '张良',
    age: '88',
    hobby: ['谋略', '兵法', '识人'],
    state: '中国-汉朝',
    sex: '男',
    friend: {
      user: '韩非子',
    },
  };

  const keyMapLabel = {
    user: '姓名',
    age: '年龄',
    sex: '性别',
    state: '国籍',
    hobby: '爱好',
    friend: '朋友',
  };

  return (
    <DetailPresent
      title="谋圣信息"
      detail={{
        ...responseData,
        friend: responseData.friend.user,
      }}
      keyMapLabel={keyMapLabel}
    />
  );
};

export default Demo1;
