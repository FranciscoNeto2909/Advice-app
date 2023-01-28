import { useDispatch, useSelector } from "react-redux"
import { getAdv, removeAdvice } from "../assets/adviceSlice"

export default function Card({adv}) {
    const adm = useSelector(data => data.advices.isAdm)
    const dispatch = useDispatch()
    function handleRemoveAdv() {
        dispatch(removeAdvice(adv.id))
        dispatch(getAdv())
    }
    return(
        <div className="card my-2">
            <div className="card-body position-relative">
                { adm && <button className="btn btn-close position-absolute top-0 end-0 mt-1 me-1" aria-label="Close" onClick={handleRemoveAdv}></button>}
                <h3 className="card-title">{adv.title}</h3>
                <p className="card-text">{adv.advice}</p>
            </div>
        </div>
    )
}