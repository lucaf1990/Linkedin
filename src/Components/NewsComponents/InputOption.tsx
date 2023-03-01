import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type InputProps = {
  Icon: ReactJSXElement;
  title: String;
};

const InputOption = (props: InputProps) => {
  const { Icon, title } = props;
  return (
    <div className="inputOption">
      {Icon}
      <p className="inputOption_title">{title}</p>
    </div>
  );
};

export default InputOption;
