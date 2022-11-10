export async function getServerSideProps(context, pesquisa="bagdad"){
  const res = await fetch(`http://www.omdbapi.com/?apikey=fe65a93e&s=${pesquisa}`)
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
        {data.Search.map( (m) => <div> {m.Title} --- {m.Year} <br></br> <img width="200x" src={m.Poster}/> </div>)}
      </div>
    </div>
  )
}