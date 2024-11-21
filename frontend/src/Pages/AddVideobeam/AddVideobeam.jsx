import { useState } from "react";
import VideobeamsClass from '../../api/videobeam';
import { useNavigate } from "react-router-dom";

export function AddVideobeam() {
  const navigate = useNavigate();
  
  const videobeamsclass = new VideobeamsClass();
  
  const [data, setData] = useState({});
  
  const PostVideobeam = async () => {
    const response = await videobeamsclass.postVideobeam(data);

    if (!response.status) return alert("Error al guardar videobeam.");

    alert("Videobeam guardado.");
    navigate("/videobeam");
  }

  const handleChange = (e) => {
    e.preventDefault();
    setData({...data, [e.target.name]: e.target.value});
  }
  
  return (
    <div>
      <span>Ingrese SN del videobeam</span>
      <br />

      {/* <form onSubmit={PostVideobeam}> */}
        <form onChange={handleChange}>
          <input type="number" name="sn" />
        </form>
        <br />
        <button onClick={PostVideobeam}>Agregar videobeam</button>
      {/* </form> */}
    </div>
  )
}
