import React, {createRef, useState} from 'react';
import UserTable from './componentes/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './componentes/AddUserForm';
import EditUserForm from './componentes/EditUserForm';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Pdf from 'react-to-pdf';



function App(){

  const usersData =[
    {id: uuidv4(), nombre: 'Nico', telefono: 225635632, nota: 'nota jdjdb njbs', direccion:'calle felipe calderon'},
    {id: uuidv4(), nombre: 'Jordy', telefono: 22457683, nota: 'nota hhwrbfs', direccion:'calle enrique peña nieto'},
    {id: uuidv4(), nombre: 'Pecla', telefono: 2456766778, nota: 'nota hsfisjikjio', direccion:'calle AMLO'},
   
    
  ]


  

  const [users, setUsers] = useState(usersData);
  

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  const deleteUser = (id) =>{
    console.log(id)

    setUsers(users.filter(user => user.id !=id))
  }

  const [bandera, setbandera] = useState(false);

  const [currentUser, setcurrentUser]= useState({
    id: null,
    nombre: '',
    telefono:'',
    nota:'',
    direccion:''
  });

  const editRow = (user) =>{
    setbandera(true);
    setcurrentUser({
      id: user.id,
      nombre: user.nombre,
      telefono: user.telefono,
      nota: user.nota,
      direccion: user.direccion
    })
  }

  const updateUser = (id, updateUser) =>{
    setbandera(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  
  const ref = React.createRef();
  return(
    <div className="contauner">
      <h1>Examen U2</h1> 

      

      <div className="flex-row">
        <div className="flex-large">
          {
            bandera?(
              <div>
                <h3>Editar Registro</h3>
                <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
              </div>

            ):(
              <div>
                <h3>Registrate</h3>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </div>

        <table className="flex-large" id="table-to-xls"  >
          <h3>Ver Registros</h3>
          
          <UserTable users={users}
           deleteUser={deleteUser}
          
           editRow={editRow}/>
          

      
        </table>

        <table>
        <ReactHTMLTableToExcel className="btn btn-danger" id="table-to-xls" table="table-to-xls" filename="Tabla" sheet="datos" buttonText="Descargar XLS"/>
        </table>

        <Pdf targetRef={ref} filename="Tabla.pdf">
        {({ toPdf }) => <button  type="button" class="btn btn-danger" onClick={toPdf}>Descargar PDF</button>}</Pdf>
      


       
      </div>
   
    </div>

    

  );
  
  

}



export default App;