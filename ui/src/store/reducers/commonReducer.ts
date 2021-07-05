import * as commonAC from '@/store/actions/action-creators/commonAC';
import * as commonActionTypes from '@/store/constants/commonConstants';
import { InferValueTypes } from '@/store/types';

export type CommonState = {
  test: string;
};

export type CommonActionTypes = ReturnType<InferValueTypes<typeof commonAC>>;

export const initialProfileState: CommonState = {
  test: '',
};

export const commonReducer = (
  state = initialProfileState,
  action: CommonActionTypes
): CommonState => {
  switch (action.type) {
    case commonActionTypes.SET_COMMON: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
