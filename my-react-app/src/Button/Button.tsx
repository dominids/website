import styles from "./Button.module.css"

function Button(){

    /*
    inline style
    const styles= {
        backgroundColor: "red",
        color: "white"
    }
    className={styles}//json style
    */
    const handleClick=(e: any) => e.target.textContent = "OUCH";

    //const handleClick2=(name:any) => console.log("ey!");
   //return (<button onClick={()=> handleClick2("BRO")} className={styles.button}>Click me</button>);
   return (<button onDoubleClick={(e)=> handleClick(e)} className={styles.button}>Click me</button>); 
}

export default Button