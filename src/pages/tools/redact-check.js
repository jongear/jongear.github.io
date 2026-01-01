import { useEffect } from 'react';

const RedactCheckRedirect = () => {
  useEffect(() => {
    window.location.replace('https://jongear.github.io/redact-check/');
  }, []);

  return null;
};

export default RedactCheckRedirect;
