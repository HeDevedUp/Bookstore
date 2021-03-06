import { CHECK_STATUS } from '../../util/constant';

const initialState = 'UNDERCONTRUCTION';

// const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_STATUS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
const checkStatus = () => ({
  type: CHECK_STATUS,
});

export { checkStatus };
