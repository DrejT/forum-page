import { useLoaderData } from 'react-router-dom';
import Layout from './pages/layout/layout';

function App() {
  const loaderData = useLoaderData();
  return (
    <>
    <Layout/>
    </>
  )
}

export default App
