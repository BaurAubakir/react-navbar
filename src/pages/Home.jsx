import { useStoreState } from 'easy-peasy';

import Loader from 'components/Loader';
import styles from 'styles/Home.module.scss';

const Home = () => {
  const isLoading = useStoreState((state) => state.data.isLoading);
  return (
    <div className={styles.container}>
      {isLoading ? <Loader /> : <h1>Hello from React</h1>}
    </div>
  );
};

export default Home;
