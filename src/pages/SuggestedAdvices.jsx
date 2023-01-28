import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSuggestedAdvice } from "../assets/adviceSlice"
import SuggestedCard from "../components/SuggestedCard"

export default function SuggestedAdvices() {
    const dispatch = useDispatch()
    const advices = useSelector(data => data.advices.suggestedAdvices)
    
    useEffect(() =>{
        dispatch(getSuggestedAdvice())
    },[dispatch])
    return(
        <div className="container container-sm mt-4">
            {advices && advices.map((adv, i) => <SuggestedCard adv={adv} key={i}/>)}
        </div>
    )
}