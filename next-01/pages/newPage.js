import {Livro3, Livro4} from "./subQ2/componente"
export default function Library(){
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
                    <Livro3/>
                    <Livro4/>
                </tbody>
            </table>
        </div>
    )
}
