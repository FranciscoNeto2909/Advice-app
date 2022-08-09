import { useSelector } from "react-redux"
import SuggestedAdvCard from "../components/SuggestedAdvCard"
export default function AdvSuggestedContainer() {
    const advices = useSelector(data => data.advices.suggestedAdvices)
    return(
        <div className="container container-sm">
            {advices.map((adv, i) => <SuggestedAdvCard adv={adv} key={i}/>)}
        </div>
    )
}