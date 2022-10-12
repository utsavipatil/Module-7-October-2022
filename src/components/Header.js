const headerCard = {
    margin : "10px",
    height : "100px",
    width : "100px",
    display : "flex",
    alignItems : "center"
}

function Header(props){
    return <div>
    <p style={headerCard}>{props.name} | {props.price} | {props.rating} </p>
    <img src = {props.productImage}></img>
    </div>;
}

export default Header;