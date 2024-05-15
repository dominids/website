import PropTypes from 'prop-types'
function Students(props:any){
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

//nice addition to debugging but it won't stop the code from working if there's a conflict
Students.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
//default values for props
Students.defaultProps={
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Students;