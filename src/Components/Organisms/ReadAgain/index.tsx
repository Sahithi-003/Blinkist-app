
import { Button } from "@mui/material";
import axios from "axios";
type propTypes = {
   id:number,
 }
 

 const ReadAgain = ({id}:propTypes) => {

  async function addToCurrent(){
   
    await  axios.get(`http://localhost:3000/dataBase/${id}`)
      .then(async response=>{
          response.data["status"]="reading";
          console.log(response.data);
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
    onClick={addToCurrent}
  >
   Read Again
  </Button>
);
  }
 

export default ReadAgain;