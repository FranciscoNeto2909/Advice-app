import { useState } from "react"
import { useDispatch } from "react-redux"
import { setAdvice, getAdv, showMsg, setMsg, hideMsg } from "../assets/adviceSlice"
import { v4 } from "uuid"
import { useNavigate } from "react-router-dom"

export default function PostAdvice() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [advice, setAdv] = useState("")
    const dispatch = useDispatch()
    const id = v4()

    function handleChangeTitle(e) {
        setTitle(e.target.value)
    }
    function handleChangeAdvice(e) {
        setAdv(e.target.value)
    }
    function handleShowMsg() {
        dispatch(showMsg())
        dispatch(setMsg("Advice added"))
        setTimeout(() => {
            dispatch(hideMsg())
            dispatch(setMsg(""))
        }, 2500);
    }

    function handleAddAdv() {
        if (title.length < 5) {
            alert("o titulo deve ter mais de 5 caracteres")
        } else if (advice.length < 5) {
            alert("o conselho deve ter mais de 5 caracteres")
        }
        else {
            dispatch(setAdvice({ id: id, title: title, advice: advice }))
            dispatch(getAdv())
            handleShowMsg()
            navigate("/")
        }
    }
    return (
        <div className="col-8 mx-auto p-2 mt-5">
            <label htmlFor="title" className="form-label">Title</label>
            <input id="title" type="text" maxLength="20"
                minLength="5" autoComplete="off"
                className="form-control" value={title} onChange={handleChangeTitle} />
            <label htmlFor="advice" className="form-label">Advice</label>
            <input id="advice" type="text" minLength="8"
                maxLength="55" autoComplete="off"
                className="form-control" value={advice} onChange={handleChangeAdvice} />
            <button onClick={handleAddAdv} className="btn btn-primary mt-2" >Enviar</button>
        </div>
    )
}