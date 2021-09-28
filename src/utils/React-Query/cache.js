import { QueryCache } from "react-query";

const queryCache = new QueryCache({
  onError: (error) => {
    return error;
  },
  onSuccess: (data) => {
    return data;
  },
});

export default {
  cacheOne: function (key) {
    return queryCache.find(key);
  },
};
