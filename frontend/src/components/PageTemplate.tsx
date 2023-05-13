import React from 'react';
import { Helmet } from 'react-helmet';
import BottomNav from './BottomNav';

type Props = {
  children: React.ReactNode;
  showBottomNav?: boolean;
  showYellowBg?: boolean;
};

const PageTemplate = ({
  children,
  showBottomNav = true,
  showYellowBg = true,
}: Props) => (
  <>
    <Helmet>
      <title>Partnr</title>
      <meta name='description' content='Partnr UNSW Group Finder' />
      <meta
        name='keywords'
        content='partnr, unsw, csesoc, course, groups, partners'
      />
    </Helmet>
    {showBottomNav && <BottomNav />}
    <div
      style={
        showYellowBg
          ? { backgroundColor: '#EEBE6F' }
          : { backgroundColor: '#F7EDE2' }
      }
      className='container flex justify-center items-center min-h-screen'
    >
      {children}
    </div>
  </>
);

export default PageTemplate;
