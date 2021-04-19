import React, {Fragment} from 'react';
import { useForm } from "react-hook-form";



const AddUserForm = (props) => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) =>{
        console.log(data);
        props.addUser(data)

        e.target.reset();
    } 


    return ( 
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre:</label>
                <input name='nombre' type="text" {...register("nombre", { required: true, message:"Campo Obligatorio" })} />
               <span className="text-danger">{errors?.name?.message}</span>
               
                <label>Teléfono:</label>
                <input type='text' name='telefono' {...register("telefono", { required: true, message:"Campo Obligatorio" })} />
                <span className="text-danger">{errors?.name?.message}</span>
                
                <label>Nota:</label>
                <input type='text' name='nota' {...register("nota", { required: true, message:"Campo Obligatorio" })}/>
                <span className="text-danger">{errors?.name?.message}</span>

                <label>Dirección:</label>
                <input type='text' name='direccion' {...register("direccion", { required: true, message:"Campo Obligatorio" })}/>
                <span className="text-danger">{errors?.name?.message}</span>

                <button>Registrar</button>

            </form>
        </Fragment>
        
     );
}
 
export default AddUserForm;
