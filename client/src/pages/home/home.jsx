import { useOutletContext } from "react-router-dom";
import Forum from "../../components/home/forum";

const Home = () => {
  const [sections] = useOutletContext();
  return (
    <>
    <div id="forum" className="">
      <Forum sectionList={sections}/>
    </div>
    </>
  )
}

export default Home;