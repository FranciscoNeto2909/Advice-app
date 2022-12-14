import { useSelector } from "react-redux/es/exports";

export default function Alert() {
    const advices = useSelector(data => data.advices)
    return (
        <>
            {advices.hasMsg && <div className="alert container-fluid position-absolute p-0 m-0">
                <h3>{advices.msg}</h3>
            </div>
            }
        </>
    )
}