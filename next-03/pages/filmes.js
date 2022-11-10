export async function getServerSideProps(context, pesquisa="x-men"){
    const res = await fetch(`http://www.omdbapi.com/?apikey=fe65a93e&s=${pesquisa}`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}

export default function Filmes({data}){
    return (
        <div>
            <div>
                {data.Search.map( (m) => <div> {m.Title} -- {m.Year} <br></br> <img width="200px" src={m.Poster}/> </div>)}
            </div>
        </div>
    )
}