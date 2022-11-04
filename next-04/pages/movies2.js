import useSWR from 'swr'
export default function Movies2(){
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=fe65a93e&s=bagdad`, fetcher)    
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            { data.Search.map( (m) => <div> <a href={"http://www.omdbapi.com/?apikey=fe65a93e&i=" + m.imdbID}> {m.Title} --- {m.Year}</a> <br></br> <img width="200x" src={m.Poster}/> </div> ) }
        </div>
    )    
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}