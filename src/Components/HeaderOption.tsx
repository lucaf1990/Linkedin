import "../App.css";

type HeaderProps = {
  title: String;
};

const HeaderOption: React.FunctionComponent<HeaderProps> = (props) => {
  const { title } = props;
  return (
    <div className="HeaderOption">
      {/* {Icon && <Icon className="headerOption_icon" />} */}
      <p className="headerOption_title">{title}</p>
    </div>
  );
};

export default HeaderOption;
