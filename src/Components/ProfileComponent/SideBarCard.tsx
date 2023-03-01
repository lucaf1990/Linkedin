import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

const SideBarCard = () => {
  const data = useSelector((state: RootState) => state.profile.profilesFetch);
  console.log(data);

  const shuffledData = data.sort(() => Math.random() - 0.5);

  return (
    <>
      {shuffledData.slice(0, 4).map((profile, i) => {
        return (
          <Row className="border-bottom py-3" key={i}>
            <img
              className="ms-4"
              src={profile.image}
              alt={profile.name}
              style={{
                height: "50px",
                width: "50px",
                padding: "0",
                borderRadius: "100%",
              }}
            />
            <Col>
              <h6>{profile.name}</h6>
              <p className="p-Profile text-truncate ">{profile.title}</p>
              <span className="Profile-Btn3 btn-light text-secondary">
                Connect
              </span>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default SideBarCard;
