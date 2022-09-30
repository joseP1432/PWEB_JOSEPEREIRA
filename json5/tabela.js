let novo = []



const carregamento = cs => {
    const div = document.getElementById("novaDiv")
    const itensHtml = cs.map(({id, uid, yeast, blg}) => `<tr><td> ${id} </td><td> ${uid} </td><td> ${yeast} </td>
    <td> ${blg} </td></tr>` ) 
    div.innerHTML =
    `<tr> <th> ID </th> <th> UID </th> <th> YEAST </th> <th> BLG </th> </tr> ${itensHtml.join("\n")}`
}

async function carregarNovo(){
    try{
        let novato = await fetch("https://random-data-api.com/api/v2/beers?size=4")
        novo = await novato.json()
        carregamento(novo)
    }catch(err){
        document.getElementById("cervejasDiv").innerHTML = "Fudeu..."
    }
  }