export default function Principal(){
    return (
       <div>
          <h1>Nova Página</h1>
          <MariaPrea texto="Morreu Maria Preá"/>
       </div>
    )
}

export function MariaPrea({texto}){

    return (
       <h2>{texto}</h2>
    )
 
 }