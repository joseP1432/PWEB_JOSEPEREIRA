export default function Gerencia(){
    return(
        <div>
            <table border="2">
                <thead>
                    <tr>
                        <th> Nome </th>
                        <th> Função </th>
                        <th> Salario </th>
                    </tr>
                </thead>
                <tbody>
                    <Funcionario1 />
                    <Funcionario2/>
                </tbody>
            </table>
        </div>
    )
}

export function Funcionario1(){
    return(
        <tr>
            <td> Francisco das Chagas </td>
            <td> Administrador </td>
            <td> R$ 2.000 </td> 
        </tr>
    )
}

export function Funcionario2(){
    return(
        <tr>
            <td> Maricota Lacerda dos Santos </td>
            <td> Desenvolvedora Back-end </td>
            <td> R$ 9.000 </td>
        </tr>
    )
}