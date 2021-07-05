import { useStoreCommonActions } from '@/store/hooks/useStoreActions';
import { getCommon } from '@/store/selectors/commonSelectors';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const Home: FC = () => {
  const common = useSelector(getCommon);
  const { setCommon } = useStoreCommonActions();

  return (
    <div>
      <h2>Desktop App Template</h2>
      <small>Electron / React / TypeScript</small>
      <div style={{ margin: '15px 0' }}>
        <button onClick={() => setCommon({ test: common.test + '.' })}>
          Change Common State
        </button>
      </div>
      <code>
        <pre>{JSON.stringify(common, null, 2)}</pre>
      </code>
    </div>
  );
};

export default Home;
