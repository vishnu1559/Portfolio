import './Card.css';


const Card=({image, heading, para})=>{
    return(
        <div className='card'>
                <div className='card_left'>
                    <img src={image} alt={"vishnu"} />
                </div>
                <div className='card_right'>
                    <h2>{heading}</h2>
                    <p>{para}</p>
                </div>
        </div>
    );
}

export default Card;