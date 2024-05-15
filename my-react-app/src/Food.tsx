function Food(){
const food1="pizza";
const food2="strawberry"

    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toLowerCase()}</li>
        </ul>
    );
}

export default Food