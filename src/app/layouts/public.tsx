import React from 'react';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>Public Header</header>
      <main>{children}</main>
      <footer>Public Footer</footer>
    </div>
  );
};

export default PublicLayout;