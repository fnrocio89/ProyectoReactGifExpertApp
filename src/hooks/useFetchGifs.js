import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 



  // ******esta es una manera de hacerlo*******////

  // useEffect(() =>{
  //      getGif(category).then((newImages)=> setImages(newImages)  );    


  // },[]);

  //************************************************ */


  // *********** y esta es Otra!!!!!!!******/////  


  const getImages = async () => {

    const newImages = await getGif(category);

    setImages(newImages);
    setIsLoading(false);


  }

  useEffect(() => {
    getImages();
    
  },[]);

  //****************************************************** */

return {
  images,
  isLoading
}


  
   
  
}

