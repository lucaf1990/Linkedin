import Feed from "./NewsComponents/Feed";
import NewsSideBar from "./NewsComponents/NewsSideBar";
import RightBar from "./NewsComponents/rightCard";

function Home() {
  return (
    <div className="d-flex mt-3">
      <NewsSideBar />
      <Feed />
      <RightBar />
    </div>
  );
}
export default Home;
