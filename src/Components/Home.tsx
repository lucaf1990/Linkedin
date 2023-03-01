import Feed from "./NewsComponents/Feed";
import NewsSideBar from "./NewsComponents/NewsSideBar";
import SideBar from "./ProfileComponent/SideBar";

function Home() {
  return (
    <div className="d-flex mt-3">
      <NewsSideBar />
      <Feed />
      <SideBar />
    </div>
  );
}
export default Home;
