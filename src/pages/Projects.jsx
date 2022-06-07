import { useSelector } from 'react-redux';

import Loader from 'components/Loader';

const ProjectsPage = () => {
  const { isLoading } = useSelector((state) => state.app);

  return (
    <div className='container'>
      {isLoading ? <Loader /> : <h1>Progects Page</h1>}
    </div>
  );
};

export default ProjectsPage;
