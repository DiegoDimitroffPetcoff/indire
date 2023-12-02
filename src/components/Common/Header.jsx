import  Logo  from "../../assets/INDIRE_LOGO.png";
export const Header = () =>{
    return(
        <header>
            <figure>
                <img src={Logo}alt="Indire Logo" style={{width: "50px"}}/>
            </figure>
        </header>
    )
}