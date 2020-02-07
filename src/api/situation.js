import axios from '@/utils/http';

export const fetchData = options => axios.request({
  ...options,
  url: '/data',
}).catch((e) => {
  throw new Error(e);
});

export const getAllGeo = () => axios.request({
  url: 'https://geo.datav.aliyun.com/areas/bound/100000.json',
});
export default {};
