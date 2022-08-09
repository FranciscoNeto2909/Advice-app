import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { admOff } from "../assets/adviceSlice"

export default function SearchBar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAdm = useSelector(data => data.advices.isAdm)

    function handleLogin() {
        dispatch(admOff())
        navigate("/")
    }

    return (
        <nav className="bg-primary text-start p-2 d-flex align-items-center justify-content-between mb-4">
            <div className="d-flex">
                <label htmlFor="searc" className="text-white me-1">&#x1F50E;</label>
                <input type="text" className="border rounded ps-1" style={{ width: 110 }} />
            </div>
            <ul className="d-flex justify-content-between mx-auto py-1" style={{ margin: 0 }}>
                <li>
                    <Link to="/" className="text-light text-decoration-none">Inicio</Link>
                </li>
                {isAdm === true && <li className="d-flex">
                    <Link to="/postAdvice" className="text-light text-decoration-none mx-2">postar</Link>
                </li>}

                <li>
                    <Link to="/suggestAdvice" className="text-light text-decoration-none mx-4">{isAdm ? "Criar" : "Sugerir"}</Link>
                </li>
                {isAdm === false &&
                    <>
                        <li>
                            <Link to="/admin" className="text-light text-decoration-none">Adm</Link>
                        </li>
                    </>
                }
            </ul>
            {isAdm && <button className="btn text-light m-0 py-0 px-1" onClick={handleLogin}>Sair</button>}
        </nav>
    )
}