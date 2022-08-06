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
        <form className="row g-3">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" maxLength="20" minLength="5"
                value={title} onChange={handleChangeTitle} />
            <label htmlFor="advice">Advice</label>
            <input id="advice" type="text" minLength="8" maxLength="30"
                value={advice} onChange={handleChangeAdvice} />
            <button onClick={handleSendAdvice}>Enviar</button>
        </form>
    )
}