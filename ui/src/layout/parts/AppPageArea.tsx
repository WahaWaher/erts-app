import { FC } from 'react';

const AppContentArea: FC = ({ children, ...rest }) => (
  <div {...rest} className="page-area">{children}</div>
);

export default AppContentArea;
