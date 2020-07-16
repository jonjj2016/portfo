import React, { useEffect } from 'react';
import Aos from 'aos';

const Aoss = ({ children, duration }) => {
  useEffect(() => {
    Aos.init({ duration });
  }, []);
  return <div>{children}</div>;
};

export default Aoss;
