function NewsSideBar() {
  // type NavBarProps = {
  //   title: String;
  // };
  // const recentItem = (props: NavBarProps) => {
  //   const { title } = props;
  //   console.log(props);
  //   <div className="sidebar_recentItem">
  //     <span className="sidebar_hash">#</span>
  //     <p>{title}</p>
  //   </div>;
  // };

  return (
    <div className="contai">
      <div className="NewsSideBar">
        <div className="sidebar_top">
          <img src="" alt="" />
          {/* AVATAR */}
          <h2>Nome e cognome</h2>
          <h4>EMAIL</h4>
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
