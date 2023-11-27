
const MenuItem = ({item}) => {
    const {image, recipe, name, price} = item;
    console.log(image);
    return (
        <div className="flex">
            <div><img src={image} alt="" /></div>
            <div className="">
                <div className="flex">
                <h1>{name}</h1>
                <p>-------------</p>
                </div>
                <p>{recipe}</p>
            </div>
            
            <div>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;