import AppHeaderBar from '@/layout/parts/AppHeaderBar';
import AppPageArea from '@/layout/parts/AppPageArea';
import { FC } from 'react';

const LayoutDefault: FC = ({ children, ...rest }) => (
  <div {...rest}>
    <AppHeaderBar />
    <AppPageArea>{children}</AppPageArea>
  </div>
);

export default LayoutDefault;
