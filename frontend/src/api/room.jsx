export default class RoomsClass {

  async getRooms(numberroom) {
    try {
      const filter = {
        numberroom: ""
      };

      if (numberroom) filter.id_room = numberroom;
      // if (id_videobeam) filter.id_videobeam = id_videobeam
      // if (date_request) filter.date_request = date_request
      // if (date_prestamo) filter.date_prestamo = date_prestamo
      
      const url = `http://localhost:3977/api/v1/room?numberroom=${filter.numberroom}`;

      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${accessToken}`,
        },
        // body: JSON.stringify(form),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      // if (!result.status) return result.status;
      return result;

    } catch (error) {
      // console.log("Error en solicitud API Frontend");
      console.log();
      // console.log("🚀 ~ GetData ~ getVideobeams ~ error:", error)
    }
  }

  async postRoom(formData) {

    try {
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
  
      const url = new URL(`http://localhost:3977/api/v1/room`);
  
      const response = await fetch(url, params);
      const result = await response.json();
  
      return result;
    } catch (error) {
      return {msg: "Error al proceso de guardar postRoom.", status: false};
    }
  }
}