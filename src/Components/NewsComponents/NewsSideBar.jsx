function NewsSideBar() {
  const recentItem = (topic) => {
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>;
  };

  return (
    // <Col md={2}>
    <div className="contai">
      <div classname="NewsSideBar">
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
          <p>Recent</p>
          {recentItem("programming")}
          {recentItem("software")}
          {recentItem("hardware")}
          {recentItem("design")}
        </div>
      </div>
    </div>
    // </Col>
  );
}

export default NewsSideBar;
