import { ChangeEvent,FormEvent,useState} from "react"
import { Button, Form, FormGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { uploadPost } from "../../Redux/ActionTypes/homeAction"
import { RootState } from "../../Redux/Store"
const fileUpload = ()=>{
    const myId = useSelector((state:RootState)=> state.profile.me._id);
    const [formData,setFormData] = useState(new FormData());

    const handleSubmit = async() => {
        let x = await uploadPost(myId,formData);
    };
    const handleFile = (e: ChangeEvent<HTMLInputElement>) => 
        setFormData((prev)=>{
            prev.delete('post');
            prev.append('post',e.target.files![0])
            return prev
        })
    };
    return(
        <>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Label>Aggiungi un file:</Form.Label>
                <Form.Control type="file" onChange={handleFile}>
                <Button>SEND</Button>
                </Form.Control>
            </FormGroup>
        </Form>
        </>
    )
}
export default fileUpload