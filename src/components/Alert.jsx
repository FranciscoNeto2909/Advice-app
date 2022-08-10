import { useSelector } from "react-redux/es/exports";

export default function Alert() {
    const advices = useSelector(data => data.advices)
    return (
        <>
            {advices.hasMsg && <div className="container-fluid">
                <h3>{advices.msg}</h3>
            </div>
            }
        </>
    )
}