import { useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { admOn, getAdv } from "../assets/adviceSlice"
import {useNavigate} from "react-router-dom"
export default function Admin() {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleChangeName(e) {
        setName(e.target.value)
    }
    function handleChangePass(e) {
        setPass(e.target.value)
    }
    function handleLogin() {
        if (name === "user" && pass === "12345") {
            dispatch(admOn())
            dispatch(getAdv())
            setName("")
            setPass("")
            navigate("/")
        }
    }
    return (
        <div className="admin">
            <h4>Área de administradores</h4>
            <p className="font-smaller">Insira seu nome de administrador e sua senha para ter total acesso a aplicação.</p>
            <form className="col-10 mx-auto p-2">
                <div className="row">
                    <input type="text" className="form-control" placeholder="Name" aria-label="First name"
                        value={name} onChange={handleChangeName} />
                </div>
                <div className="row my-2">
                    <input type="password" className="form-control" placeholder="Password" aria-label="Password"
                        value={pass} onChange={handleChangePass} />
                </div>
                <button className="btn btn-form btn-primary mx-auto"
                    onClick={handleLogin} type="button">Acessar</button>
            </form>
        </div>
    )
}