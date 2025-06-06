import axios from "axios";

import { useState, useEffect } from "react";

const useFetch = (identifier) => {
  const [dataArtists, setDataArtists] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const getArtists = async () => {
    try {
      let { data } = await axios.get(identifier);
      console.log("dentro de datas");

      console.log(data);
      setDataArtists({
        loading: false,
        data: data,
        error: null,
      });
    } catch (error) {
      setDataArtists({
        loading: false,
        data: null,
        error:
          error.message !== null &&
          "Hubo un problema al cargar los datos. Intenta nuevamente",
      });
    }
  };
  useEffect(() => {
    getArtists();
  }, [identifier]);
  return dataArtists;
};

export default useFetch;
