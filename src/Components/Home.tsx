import Feed from "./NewsComponents/Feed";
import NewsSideBar from "./NewsComponents/NewsSideBar";

function Home() {
  return (
    <div className="d-flex">
      <NewsSideBar />
      <Feed />
    </div>
  );
}
export default Home;
