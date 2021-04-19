import React from 'react';

const UserTable = (props) => {
    console.log(props.users);
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Nota</th>
                    <th>Dirección</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user =>(
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.nombre}</td>
                          <td>{user.telefono}</td>
                          <td>{user.nota}</td>
                          <td>{user.direccion}</td>
                            <td>
                            <button className="button muted-button"
                            onClick={() => {props.editRow(user)}}
                            >Editar</button>

                            <button className="button muted-button"
                            onClick={()=>{props.deleteUser(user.id)}}
                            >Eliminar</button>
                            </td>
                        </tr>

                    )) :(
                        <tr>
                            <td colSpan={5}>Sin Regitros</td>
                        </tr>
                    )
                }
                
            </tbody>
        </table>
      );
}
 
export default UserTable;
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Actions</th>
        </tr>
    </thead>
</table>