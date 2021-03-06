import { useSelector } from 'react-redux';

import { Loader } from 'components';

export const AboutPage = () => {
  const { isLoading } = useSelector((state) => state.app);

  return (
    <div className='container'>
      {isLoading ? <Loader /> : <h1>About Page</h1>}
    </div>
  );
};
