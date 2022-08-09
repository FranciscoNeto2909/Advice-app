import { useSelector } from "react-redux"
import AdviceCard from "./AdviceCard"
export default function AdvicesContainer() {
    const advices = useSelector(data => data.advices.advices)
    return(
        <div className="container container-sm">
            {advices.map((adv, i) => <AdviceCard adv={adv} key={i}/>)}
        </div>
    )
}