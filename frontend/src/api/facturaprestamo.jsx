export default class FacturaprestamoClass {

  async getFacturaprestamo(id_room, id_videobeam, date_request, date_prestamo) {
    console.log("id_room: ",id_room)
    try {
      const filter = {
        id_room: "",
        id_videobeam: "",
        date_request: "",
        date_prestamo: ""
      };
      
      if (id_room != undefined) filter.id_room = id_room
      if (id_videobeam != undefined) filter.id_videobeam = id_videobeam
      if (date_request != undefined) filter.date_request = date_request
      if (date_prestamo != undefined) filter.date_prestamo = date_prestamo
      
      if (id_room != undefined) filter.id_room = id_room
      if (id_videobeam != undefined) filter.id_videobeam = id_videobeam
      if (date_request != undefined) filter.date_request = date_request
      if (date_prestamo != undefined) filter.date_prestamo = date_prestamo
      
      const url = `http://localhost:3977/api/v1/facturaprestamo?id_room${filter.id_room}&id_videobeam=${filter.id_videobeam}&date_request=${filter.date_request}&date_prestamo=${filter.date_prestamo}`;

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

  async postFacturaprestamo(id_room, id_videobeam, date_prestamo, sn, name) {
    try {
      const formData = {
        id_room: '', 
        id_videobeam: '', 
        date_prestamo: '',
        name: ''
      };

      if (id_room === "") return {msg: "ID requerido", status: false}
      if (name === "") return {msg: "NAME requerido", status: false}

      if (id_room) formData.id_room = id_room
      if (id_videobeam) formData.id_videobeam = id_videobeam
      if (date_prestamo) formData.date_prestamo = date_prestamo
      if (sn) formData.sn = sn
      if (name) formData.name = name

      const url = `http://localhost:3977/api/v1/facturaprestamo`;
      
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      // if (!result.status) return result.status;
      return result;

    } catch (error) {
      console.log("Error en solicitud API Frontend");
      console.log();
      console.log("🚀 ~ GetData ~ getVideobeams ~ error:", error);

      return {msg: "ERROR EN FacturaprestamoClass.jsx", status: false};
    }
  }
}