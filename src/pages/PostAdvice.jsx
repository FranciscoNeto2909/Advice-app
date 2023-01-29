import { useState } from "react"
import { useDispatch } from "react-redux"
import { setAdvice, getAdv, showMsg, setMsg, hideMsg } from "../assets/adviceSlice"
import { v4 } from "uuid"
import { useNavigate } from "react-router-dom"

export default function PostAdvice() {
    const navigate = useNavigate()
    const [author, setAuthor] = useState("")
    const [advice, setAdv] = useState("")
    const dispatch = useDispatch()
    const id = v4()

    function handleChangeAuthorName(e) {
        setAuthor(e.target.value)
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
        if (author.length < 5) {
            alert("o titulo deve ter mais de 5 caracteres")
        } else if (advice.length < 5) {
            alert("o conselho deve ter mais de 5 caracteres")
        }
        else {
            dispatch(setAdvice({ id: id, author: author, advice: advice }))
            dispatch(getAdv())
            handleShowMsg()
            navigate("/")
        }
    }
    return (
        <div className="container mx-auto p-2 px-4 mt-5">
            <label htmlFor="author" className="form-label">Author</label>
            <input id="author" type="text" maxLength="20"
                minLength="5" autoComplete="off"
                className="form-control mb-2" value={author} onChange={handleChangeAuthorName} />
            <label htmlFor="advice" className="form-label">Advice</label>
            <input id="advice" type="text" minLength="8"
                maxLength="55" autoComplete="off"
                className="form-control" value={advice} onChange={handleChangeAdvice} />
            <button onClick={handleAddAdv} className="btn btn-primary mt-3 px-5" >Enviar</button>
        </div>
    )
}