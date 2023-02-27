import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MyState } from "../Redux/Interfaces";

const ProfileSection = () => {
  const data = useSelector((state: MyState) => state.me);
  console.log(data);

  return <Container></Container>;
};
export default ProfileSection;
