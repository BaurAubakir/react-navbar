import { useStoreState } from 'easy-peasy';

import Loader from 'components/Loader';
import styles from 'styles/Home.module.scss';

const About = () => {
  const isLoading = useStoreState((state) => state.data.isLoading);
  return (
    <div className={styles.container}>
      {isLoading ? <Loader /> : <h1>About Page</h1>}
    </div>
  );
};

export default About;
