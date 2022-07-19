import { Button } from "@mui/material";
import axios from "axios";
type propTypes = {
   id:number,

 }


 const Finished = ({id}:propTypes) => {
// export const funct =async ()=>{
async function addToFinished(){
   
      await  axios.get(`http://localhost:3000/dataBase/${id}`)
        .then(async response=>{
          
            response.data["status"]="finished";
            await axios.delete(`http://localhost:3000/dataBase/${id}`)
          await  axios.post(`http://localhost:3000/dataBase/`,response.data);
          document.location.reload();
          }
        )
        ;
  
        
       
  }

  

  return(

  <Button variant="text" sx={{
      width: "100%",
      textTransform: "none",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      color: "#0365F2",

    }}
    data-testid="Banner"
    onClick={addToFinished}
  >
    Finished
  </Button>
);
  }

export default Finished;


