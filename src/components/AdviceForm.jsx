import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAdvice,getAdv, setSuggestedAdvice } from "../assets/adviceSlice"
import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"
export default function AdviceForm() {

    const [title, setTitle] = useState("")
    const [advice, setAdv] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = v4()
    const isAdm = useSelector(data => data.advices.isAdm)

    function handleChangeTitle(e) {
        setTitle(e.target.value)
    }
    function handleChangeAdvice(e) {
        setAdv(e.target.value)
    }
    async function handleSendAdvice() {
        if (title.length < 5) {
            alert("o titulo deve ter mais de 5 caracteres")
        } else if (advice.length < 5) {
            alert("o conselho deve ter mais de 5 caracteres")
        }
        else {
            dispatch(setSuggestedAdvice({ title: title, advice: advice }))
            window.location.reload()
            navigate("/")
        }
    }
    function handleAddAdv() {
        if (title.length < 5) {
            alert("o titulo deve ter mais de 5 caracteres")
        } else if (advice.length < 5) {
            alert("o conselho deve ter mais de 5 caracteres")
        }
        else {
            dispatch(setAdvice({id:id, title: title, advice: advice }))
            dispatch(getAdv())
            navigate("/")

        }
    }
    return (
        <div className="col-8 mx-auto p-2">
            <label htmlFor="title" className="form-label">Title</label>
            <input id="title" type="text" maxLength="20"
                minLength="5" autoComplete="off"
                className="form-control" value={title} onChange={handleChangeTitle} />
            <label htmlFor="advice" className="form-label">Advice</label>
            <input id="advice" type="text" minLength="8"
                maxLength="55" autoComplete="off"
                className="form-control" value={advice} onChange={handleChangeAdvice} />
            <button onClick={isAdm === true ? handleAddAdv : handleSendAdvice} className="btn btn-primary mt-2" >Enviar</button>
        </div>
    )
}