import { useEffect, useState } from 'react';
import VideobeamsClass from '../../api/videobeam';
import FacturaprestamoClass from '../../api/facturaprestamo';
import RoomsClass from '../../api/room';
import {useNavigate} from "react-router-dom";

import "./Videobeams.scss";

export function Videobeams() {
  const navigate = useNavigate();
  
  const videobeamsclass = new VideobeamsClass();
  const facturaprestamoclass = new FacturaprestamoClass();
  const roomsclass = new RoomsClass();
  let response = "videobeam";

  // const [videobeams, setVideobeams] = useState([]);
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);
  const [title, setTitle] = useState("");
  // const [search, setSearch] = useState("")

  // const SetSearch = (collection) => {
  //   setSearch(collection);
  // }
  
  async function getVideobeams(collection) {
    if (collection === "videobeam") {
      response = await videobeamsclass.getVideobeams();
      setTitle("Videobeams")
    } else if (collection === "room") {
      response = await roomsclass.getRooms();
      setTitle("Salone")
    } else if (collection === "facturaprestamo") {
      response = await facturaprestamoclass.getFacturaprestamo();
      setTitle("Solicitudes")
    } else {
      return
    }

    if (!response.status) return alert(response.msg);

    const resultValues = response.msg.map(data => Object.values(data));

    // setVideobeams(response.msg);
    setKeys(Object.keys(response.msg[0]?response.msg[0]:{}))

    // response.msg.map((data, index) => {
    //   resultValues.push(Object.values(data?data:[]));
    // })

    // console.log("🚀 ~ getVideobeams ~ resultValues:", resultValues)
    setValues(resultValues);
  }

  useEffect(() => {
    getVideobeams("videobeam");
    // console.log(values);
  }, [])
  // setKeys(a);

  const activarVideobeam = async (e) => {
    e.preventDefault();

    const response = await videobeamsclass.updateVideobeam(e.target.sn_videobeam_update.value, true)
    alert(response.msg)
    navigate("/videobeam")
  }

  return (
    <>
      <div>
        <button onClick={()=> navigate('/')}>HOME</button>
        <br />
        <hr />
        <br />
        <button onClick={() => getVideobeams("facturaprestamo")}>Reservas</button>
        <button onClick={() => getVideobeams("room")}>Salones</button>
        <button onClick={() => getVideobeams("videobeam")}>Videobeams</button>
        <form onSubmit={activarVideobeam}>
          <input type="number" name="" id="sn_videobeam_update" placeholder='Ingrese SN del videobeam' />
          <button type="submit">Activar estado videobeam</button>
        </form>
        <button onClick={()=> navigate('/solicitarprestamovideobeam')}>SOLICITAR VIDEOBEAM</button>
        <h1>{title}</h1>
      </div>
      <table className="my-table">
        <thead>
          <tr>
            {keys.map((key, index) => {
              if (key)
              return <th key={index}>{(String(key))}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {/* {videobeams.map((data, index) => (
            <tr key={index}>
              <td>{data._id&&data._id}</td>
              <td>{data.sn&&data.sn}</td>
              <td>{data.status?.toString()}</td>
            </tr>
          ))} */}
          {values.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{String(cell)}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}
