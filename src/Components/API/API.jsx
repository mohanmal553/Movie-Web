//Export a function within a component
export const getMoviesData = async () => {
    try{
        let API_KEY = import.meta.env.VITE_MYKEY;
        let response = await fetch(` https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=titanic`);
        let data = await response.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}
