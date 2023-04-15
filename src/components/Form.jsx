import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {

    const [userData,setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({...userData,
            [event.target.name] : event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }    

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange} />
            {errors.email && <p> {errors.email} </p>}
            <hr/>
            <label htmlFor="password">CONTRASEÑA</label>
            <input type="text" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p> {errors.password} </p>}
            
            <button>SUBMIT</button>

        </form>
    )
}

export default Form;