import { useSelector } from 'react-redux';

import Loader from 'components/Loader';

const HomePage = () => {
  const { isLoading } = useSelector((state) => state.app);

  return (
    <div className='container'>
      {isLoading ? <Loader /> : <h1>Hello from React</h1>}
    </div>
  );
};

export default HomePage;
