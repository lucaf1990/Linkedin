import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { EXPERIENCE_FETCH, fetchMyExperience, fetchMyProfile, ME } from "../../Redux/ActionTypes";
import { RootState } from "../../Redux/Store";

const SideBarCard = () => {
  const data = useSelector((state: RootState) => state.profile.profilesFetch);
  const myState = useSelector((state: RootState) => state.profile.me);
  
  const {user} = useParams()
  const dispatch = useDispatch()
 
  const random = [...data]
 
  
  const shuffledData = random.sort(() => Math.random() - 0.5);
 
    const sidebarProfile= async (id:string) => {
      let data = await fetchMyProfile(id);
      dispatch({
        type: ME,
        payload: data,
      });     
      let data2 = await fetchMyExperience(id)
      dispatch({
        type: EXPERIENCE_FETCH,
        payload: data2,
      })
    console.log("sono sidebar");
    
    }
  
  return (
    <>
      {random.slice(0, 4).map((profile, i) => {
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
                <Link to={`/Profile/${profile._id}`} onClick={()=>sidebarProfile(profile._id)} ><h6>{profile.name}</h6></Link>
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
 

