import { Link } from "react-router-dom"
const ResCard=(props)=>{
    const{restaurant}=props
return(

<div className='res-card'>
    
            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+restaurant.cloudinaryImageId}></img>
            <Link to={"/restaurant/"+restaurant.id}>
            <div>{restaurant.name}</div>
            <div>🌟{restaurant.avgRatingString} | {restaurant.costForTwo}</div>
            <br></br>
            <div>{restaurant.cuisines?.join(", ")}</div>
            </Link>
</div>
)
}

export default ResCard