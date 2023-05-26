import React from "react";
import BoxContainer from "../element/boxContainer";
import Button from '@material-ui/core/Button';
import FishtaskLogo from "../../images/fishtask-hd.svg";
import {Link} from "react-router-dom";

export default function aboutContent() {
    return (
        <BoxContainer>
                <div style={{textAlign:"center"}}>
                    <Link to="/dashboard">
                        <Button variant="contained" size="large">
                            Dashboard
                        </Button>
                    </Link>
                </div>
                <br/>
                <div>
                    <img src={FishtaskLogo} alt="logo fishtask" style={{width: "100%", margin:"auto", height:"500px"}}></img>
                </div>
        </BoxContainer>
    );
}
