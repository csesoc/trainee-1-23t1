import React from 'react';
import { Helmet } from 'react-helmet';
import BottomNav from './BottomNav';

type Props = {
    children: React.ReactNode;
    showHeader?: boolean;
  };
  
const PageTemplate = ({ children, showHeader = true }: Props) => (
    <>
      <Helmet>
        <title>Partnr</title>
        <meta name="description" content="Partnr UNSW Group Finder" />
        <meta name="keywords" content="partnr, unsw, csesoc, course, groups, partners" />
      </Helmet>
      {showHeader && <BottomNav />}
      <div>
        {children}
      </div>
    </>
  );
  
  export default PageTemplate