import { useNavigate } from "react-router-dom"

export const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return(
        <div className="unauthorized">
            <h1>
                4<span className="cero">0</span>1
            </h1>
            <div>
                <h2>Oops! Seems you're not allowed to access this page'</h2>
                {/* Uncomment this when the search function is working globably */}
                {/* <form action="">
                    <input type="text" placeholder="Search" />
                    <h3>Or...</h3>
                    <button>Go Back</button>
                </form> */}
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
}