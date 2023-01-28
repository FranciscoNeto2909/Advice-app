import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setAdvice, removeSugestedAdv, getSuggestedAdvice } from "../assets/adviceSlice"
import { v4 } from "uuid"

export default function AdminCard({adv}) {
    const id = v4()
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    
    function handlePostSuggestedAdv() {
        dispatch(setAdvice({id:id, title: adv.title, advice: adv.advice}))
        navigate("/")
        handleRemoveAdv()
    }
    function handleRemoveAdv() {
        dispatch(removeSugestedAdv(adv.id))
        dispatch(getSuggestedAdvice())
    }
    return(
        <div className="card my-2 p-1">
            <div className="card-body position-relative">
                <button className="btn btn-close position-absolute top-0 end-0 mt-1 me-1" aria-label="Close" onClick={handleRemoveAdv}></button>
                <h3 className="card-title text-start">{adv.title}</h3>
                <p className="card-text text-start">{adv.advice}</p>
                <button className="btn btn-primary position-absolute bottom-0 end-0 mb-1 me-1" onClick={handlePostSuggestedAdv}>Adicionar</button>
            </div>
        </div>
    )
}