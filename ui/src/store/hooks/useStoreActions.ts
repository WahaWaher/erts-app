import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from '@/store/actions/commonActions';

export const useStoreCommonActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(commonActions, dispatch);
};
