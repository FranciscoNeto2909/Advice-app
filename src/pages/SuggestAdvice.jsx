import { useState } from "react"
import { useDispatch} from "react-redux"
import { setSuggestedAdvice, showMsg, setMsg, hideMsg, getSuggestedAdvice, getAdv } from "../assets/adviceSlice"
import { v4 } from "uuid"

export default function SuggestAdvice() {
    
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
        dispatch(setMsg("Sugest send"))
        setTimeout(() => {
            dispatch(hideMsg())
            dispatch(setMsg(""))
        }, 2500);
    }
    async function handleSuggestAdvice() {
        if (title.length < 5) {
            alert("o titulo deve ter mais de 5 caracteres")
        } else if (advice.length < 5) {
            alert("o conselho deve ter mais de 5 caracteres")
        }
        else {
            dispatch(setSuggestedAdvice({id:id, title: title, advice: advice }))
            dispatch(getSuggestedAdvice())
            dispatch(getAdv())
            handleShowMsg()

        }
    }
    return (
        <form className="container mx-auto p-3 mt-5">
        <label htmlFor="title" className="form-label">Title</label>
        <input id="title" type="text" maxLength="20"
            minLength="5" autoComplete="off"
            className="form-control mb-3" value={title} onChange={handleChangeTitle} />
        <label htmlFor="advice" className="form-label">Advice</label>
        <input id="advice" type="text" minLength="8"
            maxLength="55" autoComplete="off"
            className="form-control" value={advice} onChange={handleChangeAdvice} />
        <button type="button" onClick={handleSuggestAdvice} className="btn btn-primary mt-2 px-4" >Enviar</button>
    </form>
    )
}