import LayoutDefault from '@/layout/LayoutDefault';
import { FC } from 'react';
import { Route } from 'react-router-dom';

type Props = {
  component: FC;
  layout?: FC;
  access?: 'public';
  exact?: boolean;
  path?: string;
};

const defaultProps: Props = {
  component: LayoutDefault,
  layout: LayoutDefault,
  access: 'public',
  exact: true,
};

const SpecialRoute: FC<Props> = (props) => {
  const { component: PageComponent, layout: Layout, access, ...rest } = props;

  if (!Layout) return null;

  return (
    <Layout>
      <Route {...rest} exact render={() => <PageComponent />} />
    </Layout>
  );
};

SpecialRoute.defaultProps = defaultProps;

export default SpecialRoute;
