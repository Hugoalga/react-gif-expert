const getGifs = async (item) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=L6eLqHvUfauBGzx5vkFBlGNjK7sm4k0J&q=${item}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    //crear un elemento por cada gif con los siguientes datos
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url

    }))

    // console.log(gifs);
    return gifs;
}

export default getGifs;

