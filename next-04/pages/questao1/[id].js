import useSWR from 'swr'
import { useRouter } from 'next/router'

export default function Movies2(){
    const router = useRouter();
    const { id } = router.query;
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=fe65a93e&i=` + id, fetcher);   
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            <img src={data.Poster}></img> <br/> <br/>
            {data.Title} -- {data.Year}
        </div>
    )    
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}