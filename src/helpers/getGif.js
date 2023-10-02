 
 export const getGif = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=15njSe2HMmrgan0NmMlnHj5WfipnDG8b&q=${ category }&limit=5`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    

    //*****************Solo extrae de la data el id, titulo y url...lo demas lo desecha********/

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    
    return gifs;

};

