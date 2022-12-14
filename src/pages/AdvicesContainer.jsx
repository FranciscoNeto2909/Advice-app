import { useSelector } from "react-redux"
import AdviceCard from "../components/AdviceCard"
export default function AdvicesContainer() {
    const advices = useSelector(data => data.advices.advices)
    return(
        <div className="container container-sm mt-4">
            {advices.map((adv, i) => <AdviceCard adv={adv} key={i}/>)}
        </div>
    )
}