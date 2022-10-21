import { Livro3, Livro4 } from "./componente"

export default function Biblioteca(){
    return(
        <div>
            <table border="2">
                <thead>
                    <tr>
                        <th> Titulo </th>
                        <th> ISBN </th>
                        <th> Categoria </th>
                    </tr>
                </thead>
                <tbody>
                    <Livro1/>
                    <Livro2/>
                    <Livro3/>
                    <Livro4/>
                </tbody>
            </table>
        </div>
    )
}

export function Livro1(){
    return(
        <tr>
            <td> Box de Luxo - Trono de Vidro </td>
            <td> 121564841321 </td>
            <td> Fantasia </td> 
        </tr>
    )
}

export function Livro2(){
    return(
        <tr>
            <td> Carrie, A Estranha </td>
            <td> 678456468465 </td>
            <td> Terror </td>
        </tr>
    )
}

