import { useNavigate } from "react-router-dom";
import { imgUdc } from "../../utils/images";

export function Home() {
  const navigate = useNavigate();
  
  return (
    <div>
      <img src={imgUdc} alt="" style={{width: '100%', maxWidth: '830px',}}/>
      <h1></h1>
      <button onClick={()=> navigate("/addvideobeam")}>AGREGAR VIDEOBEAM</button>
      <button onClick={()=> navigate("/addroom")}>AGREGAR SALON</button>
      <button onClick={()=> navigate("/videobeam")}>VER VIDEOBEAMS, SALONES, RESERVAS</button>
      <button onClick={()=> navigate("/solicitarprestamovideobeam")}>SOLICITAR VIDEOBEAM</button>
    </div>
  )
}
