import useSWR from 'swr'
export default function Novo(){
    const {data, error} = useSWR(`https://extreme-ip-lookup.com/json/?key=lOrbxjRbt2JB1UT1GtFz`, fetcher)    
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            { Object.keys(data).map( m => (<div> {m} -- {data[m]} </div> ))}
        </div>
    )    
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}