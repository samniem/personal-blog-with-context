import { Link } from "react-router-dom"
import './Header.css'


export const Header = () => {
    return <div className="HeaderContainer">
        <h1>Bilingual Personal Blog</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
        </nav>
        <select>
            <option selected value="english">English</option>
            <option value="finnish">Finnish</option>
        </select>
    </div>
}