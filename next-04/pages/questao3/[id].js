import { useRouter } from 'next/router'

export async function getServerSideProps(context){
    const { id } = context.query;
    const res = await fetch(`http://www.omdbapi.com/?apikey=fe65a93e&i=` + id)
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
          <img width="200x" src={data.Poster}/> <br/> <br/>
          {data.Title} -- {data.Year}
        </div>
      </div>
    )
  }