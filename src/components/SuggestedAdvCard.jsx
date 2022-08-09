import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getAdv, setAdvice, removeSugestedAdv, getSuggestedAdvice } from "../assets/adviceSlice"
import { v4 } from "uuid"

export default function SuggestedAdvCard({adv}) {
    const id = v4()
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    
    function handlePostSuggestedAdv() {
        dispatch(setAdvice({id:id, title: adv.title, advice: adv.advice}))
        dispatch(getAdv())
        navigate("/")
    }
    function handleRemoveAdv() {
        dispatch(removeSugestedAdv(adv.id))
        dispatch(getSuggestedAdvice())
        dispatch(getAdv())
    }
    return(
        <div className="card">
            <div className="card-body position-relative">
                <button className="btn btn-close position-absolute top-0 end-0 mt-1 me-1" aria-label="Close" onClick={handleRemoveAdv}></button>
                <h3 className="card-title">{adv.title}</h3>
                <p className="card-text">{adv.advice}</p>
                <button className="btn btn-primary position-absolute bottom-0 end-0 mb-1 me-1" onClick={handlePostSuggestedAdv}>Adicionar</button>
            </div>
        </div>
    )
}