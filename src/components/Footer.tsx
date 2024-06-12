import { useState } from "react";


const Footer = () => {
    const curYear = useState(new Date(Date.now()).getFullYear())
    return (
        <div className="footer">
            <p>&copy;{curYear[0]} Aaron M.</p>
        </div>
    )
}

export default Footer