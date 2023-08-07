export const getGifs = async ( category ) => {
    const apiKey = 'fgmvIJKGZWIW7pxfMPLchV4F0HoW1Liz';
    const limit = 10;
    const resp = await fetch(`http://api.giphy.com/v1/gifs/search?limit=${limit}&api_key=${apiKey}&q=${category}`);
    const { data = [] } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    // console.log('gifs', gifs);

    return gifs;
}