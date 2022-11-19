export async function getServerSideProps(context){
    const res = await fetch(`http://www.omdbapi.com/?apikey=fe65a93e&s=bagdad`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
    
  }
  
  export default function Movies({data}){
    return (
      <div>
        <div>
          {data.Search.map( (m) => <div> <a key={m.imdbID} href={`./` + m.imdbID}> {m.Title} --- {m.Year}</a>  <br></br> <img width="200x" src={m.Poster}/> </div>)}
        </div>
      </div>
    )
  }