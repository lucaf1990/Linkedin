import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import "../../App.css";

type HeaderProps = {
  Icon: ReactJSXElement;
  title: String;
};

const HeaderOption = (props: HeaderProps) => {
  const { Icon, title } = props;
  return (
    <div className="HeaderOption">
      <>
        {Icon}
        <p className="headerOption_title">{title}</p>
      </>
    </div>
  );
};

export default HeaderOption;
