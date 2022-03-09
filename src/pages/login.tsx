import { Fragment, Component, ReactNode } from "react";
import { FaUser } from "react-icons/fa";
import "../css/login.css"

export default class Login extends Component {
    constructor(props: any){
        super(props);
        this.state = {
            id : ""
        }
    }

        render(){
            return(
                <Fragment>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <h2 className="active"> Sign In </h2>
                        <h2 className="inactive underlineHover">Sign Up </h2>
    
                        <div className="fadeIn first">
                            <FaUser className="icon" />
                        </div>
    
                        <form method="POST">
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                            <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" />
                            <input type="submit" className="fadeIn fourth" value="Log In" />
                        </form>
                        <div id="formFooter">
                            <a className="underlineHover" href="##">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </Fragment>
            )
        }
} 