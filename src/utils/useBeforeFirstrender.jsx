import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function useBeforeFirstrender(client) {
    
    let navigate = useNavigate();
    useEffect(() => {
        if (!client) navigate("/dashboard")
    }, [])
    

}

export default useBeforeFirstrender;