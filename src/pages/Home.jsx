import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAdv } from "../assets/adviceSlice"
import Card from "../components/Card"

export default function Home({filteredAdvices}) {
    const advices = useSelector(data => data.advices.advices)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAdv())
    }, [dispatch, advices])
    return (
        <div className="home container container-sm">
            {filteredAdvices ?
                filteredAdvices.map((adv, i) => <Card adv={adv} key={i} />) : advices && advices.map((adv, i) => <Card adv={adv} key={i} />)}
        </div>
    )
}