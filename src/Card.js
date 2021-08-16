const Card = ({CardContent}) => {
console.log({CardContent});
    return (
        <div className="Card">
           <h1 className="CardTitle">{CardContent.title}</h1>
           <h2 className="CardBody">{CardContent.body}</h2>
           <h2 className="CardLink"><a href={CardContent.link} rel='noreferrer' target="_blank">Live Link to: {CardContent.title}</a></h2>
           <img className="CardImage" src={CardContent.image} alt="Card" />
           
        </div>
    );
}

export default Card;