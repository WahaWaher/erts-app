import * as commonAT from '@/store/constants/commonConstants';
import { CommonState } from '@/store/reducers/commonReducer';

/**
 * setCommon action creator
 * @param info
 */
export const setCommon = (data: RecursivePartial<CommonState>) =>
  <const>{
    type: commonAT.SET_COMMON,
    payload: data,
  };
