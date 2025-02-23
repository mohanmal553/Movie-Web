//Export a function within a component
export const getMoviesDetails = async ({params}) => {
    try{
        let API_KEY = import.meta.env.VITE_MYKEY;
        let response = await fetch(` https://www.omdbapi.com/?i=${params.id}&apikey=${API_KEY}`);
        let data = await response.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}