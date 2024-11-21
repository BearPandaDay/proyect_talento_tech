import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import VideobeamsClass from '../../api/videobeam';
import RoomsClass from '../../api/room';
import FacturaprestamoClass from '../../api/facturaprestamo';

export function SolicitarPrestamoVideobeam() {
  const navigate = useNavigate();
  
  const videobeamsclass = new VideobeamsClass();
  const roomsclass = new RoomsClass();
  const facturaprestamoclass = new FacturaprestamoClass();

  const [videobeams, setVideobeams] = useState([]);
  const [rooms, setRooms] = useState([]);

  const solicitarVideobeam = async (e) => {
    e.preventDefault();

    if (!e.target.name.value) return alert("Nombre requerido");
    if (!e.target.date_prestamo.value) return alert("Fecha requerida");
    const date = new Date(e.target.date_prestamo.value);

    const resultDateLocal = getDateLocal(date);

    const responsePostFacturaprsetamo = await facturaprestamoclass.postFacturaprestamo(e.target.numberroom.value, e.target.id_videobeam.value, resultDateLocal, e.target.id_videobeam.value, e.target.name.value);
    if (!responsePostFacturaprsetamo.status) return alert(responsePostFacturaprsetamo.msg);

    return navigate("/videobeam");
  }
  
  function getDateLocal(date) {
    // Ajustar la fecha a la hora local de Colombia (GMT-5)
    const colombiaOffset = 10 * 60; // GMT-5 en minutos GMT 10 en minutos
    const localOffset = date.getTimezoneOffset(); // Obtener el offset local en minutos

    // Ajustar la fecha al offset de Colombia
    const colombiaDate = new Date(date.getTime() + (localOffset - colombiaOffset) * 60000);

    // Formatear la fecha y hora en el formato deseado (por ejemplo, ISO 8601 
    return colombiaDate.toISOString();
  }
  
  async function handleGetVideobeams() {
    const responseGetRooms = await roomsclass.getRooms();

    if (responseGetRooms.status) setRooms(responseGetRooms.msg);

    const responseGetVideobeams = await videobeamsclass.getVideobeams(null, true);
    if (responseGetVideobeams.status) setVideobeams(responseGetVideobeams.msg);

    if (responseGetRooms.status) setRooms(responseGetRooms.msg);
  }
  
  useEffect(() => {
    handleGetVideobeams();
  }, []);
  
  
  
  return (
    // <center>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <form onSubmit={solicitarVideobeam}>
        <h3>Reserva tu VideoBeam</h3>
        <label htmlFor="Nombre del solicitante">Nombre del solicitante</label>
<br />
        <input id="name" type="text" placeholder='Nombre del solicitante' />
<br />
<br />

        <label htmlFor="Selecciona salón">Selecciona salón</label>
<br />
        <select id="numberroom" name="numberroom">
          <option key={-1} value="" disabled selected >Select room</option>
          {rooms.map((data, index) => {
            return <option key={index} value={data?.numberroom}>{data?.numberroom}</option>
          })}
        </select>
<br />
<br />
        <label htmlFor="Selecciona video-beam">Selecciona video-beam</label>
<br />
        <select id="id_videobeam" name="id_videobeam">
<option key={-1} value="" disabled selected>Select videobeam</option>
          {videobeams.map((data, index) => {
            return <option key={index} value={data?.sn}>{data?.sn}</option>
          })}
        </select>
<br />
<br />
        <input id="date_prestamo" type="datetime-local" />
<br />
<br />
        <button type="submit">SOLICITAR VIDEOBEAM</button>
      </form>
    </div>
    // </center>

  )
}
