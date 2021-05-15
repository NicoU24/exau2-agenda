import React, {Fragment} from 'react';
import { useForm } from "react-hook-form";



const EditUserForm = (props) => {
    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues : props.currentUser
    });

    setValue('nombre', props.currentUser.nombre);
    setValue('telefono', props.currentUser.telefono);
    setValue('nota', props.currentUser.nota);
    setValue('direccion', props.currentUser.direccion);




    const onSubmit = (data, e) =>{
        console.log(data);

        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
        
        e.target.reset();
    } 


    return ( 
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre:</label>
                <input name='nombre' type="text" {...register("nombre", { required: true, message:"Campo Obligatorio" })} />
                <span className="text-danger">{errors?.name?. message}</span>
               
                <label>Teléfono:</label>
                <input type='text' name='telefono' {...register("telefono", { required: true, message:"Campo Obligatorio" })} />
                <span className="text-danger">{errors?.name?.message}</span>
                
                <label>Nota:</label>
                <input type='text' name='nota' {...register("nota", { required: true, message:"Campo Obligatorio" })}/>
                <span className="text-danger">{errors?.name?.message}</span>

                <label>Dirección:</label>
                <input type='text' name='direccion' {...register("direccion", { required: true, message:"Campo Obligatorio" })}/>
                <span className="text-danger">{errors?.name?.message}</span>

                <button>Guardar Cambios</button>

            </form>
        </Fragment>
        
     );
}
 
export default EditUserForm;
