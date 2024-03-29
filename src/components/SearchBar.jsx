import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { admOff } from "../assets/adviceSlice"

export default function SearchBar({ setFilteredAdvices }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAdm = useSelector(data => data.advices.isAdm)
    const advices = useSelector(data => data.advices.advices)

    function handleLogin() {
        dispatch(admOff())
        navigate("/")
    }

    function handleFilterAdvice(e) {
        if (e === "") {
            setFilteredAdvices(null)
        }
        const filtered = advices.filter(adv => adv.advice.toLowerCase().includes(e.toLowerCase()))
        setFilteredAdvices(filtered)
    }

    return (
        <nav className="nav bg-primary text-start d-flex align-items-center justify-content-between">
            <div className="search-bar d-flex">
                <label htmlFor="searc" className="text-white me-1"></label>
                <button className="btn me-2 p-0 px-1 bg-secondary" onClick={handleFilterAdvice}>&#x1F50E;</button>
                <input type="text" placeholder="Pesquisar" className="form-control py-0 ps-1" style={{ width: 130 }} onChange={e => handleFilterAdvice(e.target.value)} />
            </div>
            <ul className="nav-items d-flex justify-content-between gap-3 py-1 px-0 mb-0">
                <li>
                    <Link to="/" className="text-light text-decoration-none">Inicio</Link>
                </li>
                <li className="d-flex">
                    <Link to="/createAdvice" className="text-light text-decoration-none">Criar</Link>
                </li>

            </ul>
            {isAdm ? <button className="btn text-light m-0 py-0 px-1" onClick={handleLogin}>Sair</button> :
                <ul className="d-flex justify-content-between gap-2 py-1 px-0 m-0">
                    <li className="">
                        <Link to="/admin" className="text-light text-decoration-none">Admin</Link>
                    </li>
                </ul>}
        </nav>
    )
}