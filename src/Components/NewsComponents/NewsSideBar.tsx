import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

function NewsSideBar() {
  const data = useSelector((state: RootState) => state.profile.me);

  return (
    <div className="contai">
      <div className="NewsSideBar">
        <div className="sidebar_top">
          <img
            src={data.image}
            alt="img"
            style={{
              height: "120px",
              width: "100%",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
          <h2 className="m-1">
            {data.name} {data.surname}
          </h2>
          <h6 style={{ fontSize: "0.8em" }}>{data.email}</h6>
        </div>
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className="sidebar_statNumber">1.365</p>
          </div>
          <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="sidebar_statNumber">983</p>
          </div>
        </div>
        <div className="sidebar_bottom">
          <p>#Recent</p>
          <p>#Programming</p>
          <p>#Software</p>
          <p>#Hardware</p>
          <p>#Design</p>
          {/* {recentItem("programming")}
            {recentItem("software")}
            {recentItem("hardware")}
            {recentItem("design")} */}
        </div>
      </div>
    </div>
  );
}

export default NewsSideBar;
