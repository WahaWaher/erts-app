import { CommonState } from '@/store/reducers/commonReducer';
import * as commonAC from '@/store/actions/action-creators/commonAC';
import { ThunkVoidAction } from '@/store/types';

/**
 * setCommon
 */
export const setCommon =
  (data: RecursivePartial<CommonState> = {}): ThunkVoidAction =>
  (dispatch) => {
    dispatch(commonAC.setCommon(data));
  };
