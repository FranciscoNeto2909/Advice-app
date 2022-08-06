import { useSelector } from "react-redux"

export default function AdviceCard({adv}) {
    const adm = useSelector(data => data.advices.isAdm)
    console.log(adm)
    return(
        <div className="card">
            <div className="card-body position-relative">
                { adm && <button className="btn btn-close position-absolute top-0 end-0 mt-1 me-1" aria-aria-label="Close"></button>}
                <h3 className="card-title">{adv.title}</h3>
                <p className="card-text">{adv.advice}</p>
            </div>
        </div>
    )
}