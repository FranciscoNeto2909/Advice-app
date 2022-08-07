import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSuggestedAdvice } from "../assets/adviceSlice"

export default function AdviceForm() {
    
    const [title, setTitle] = useState("")
    const [advice, setAdvice] = useState("")
    const dispatch = useDispatch()

    function handleChangeTitle(e) {
        setTitle(e.target.value)
    }
    function handleChangeAdvice(e) {
        setAdvice(e.target.value)
    }
    function handleSendAdvice() {
        if (title.length < 5) {
            alert("o titulo deve ter mais de 5 caracteres")
        } else if (advice.length < 5) {
            alert("o conselho deve ter mais de 5 caracteres")
        }
        else {
            dispatch(setSuggestedAdvice({ title, advice }))
        }
    }
    return (
        <form className="col-8 mx-auto p-2">
            <label htmlFor="title" className="form-label">Title</label>
            <input id="title" type="text" maxLength="20" minLength="5"
                className="form-control" value={title} onChange={handleChangeTitle} />
            <label htmlFor="advice" className="form-label">Advice</label>
            <input id="advice" type="text" minLength="8" maxLength="55"
                className="form-control" value={advice} onChange={handleChangeAdvice} />
            <button onClick={handleSendAdvice} className="btn btn-primary mt-2" >Enviar</button>
        </form>
    )
}