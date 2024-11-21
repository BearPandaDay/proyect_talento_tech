export default class VideobeamsClass {
  async getVideobeams(sn, status) {
    try {
      const filter = {
        sn: '',
        status: ''
      };
      
      
      if (sn) filter.sn = sn;
      if (status === false || status === true) filter.status = status;
      
      const url = new URL(`http://localhost:3977/api/v1/videobeam?sn=${filter.sn}&status=${filter.status}`);

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

  async updateVideobeam(sn, status) {
    try {
      if (!sn) return {msg: "SN requerido.", status: false};
      if (!status) return {msg: "STATUS requerido", status: false};
      
      const filter = {
        sn,
        status
      };

      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${accessToken}`,
        },
        // body: JSON.stringify(form),
      };

      const url = new URL(`http://localhost:3977/api/v1/videobeam?sn=${filter.sn}&status=${filter.status}`);

      const response = await fetch(url, params);
      const result = await response.json();
      return (result);

    } catch (error) {
      return {msg: `Error en solicitud: ${error.code}`, status: false};
    }
  }

  async postVideobeam(formData) {

    console.log("🚀 ~ VideobeamsClass ~ postVideobeam ~ formData:", formData);
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    const url = new URL(`http://localhost:3977/api/v1/videobeam`);

    const response = await fetch(url, params);
    const result = await response.json();

    return result;
  }
}