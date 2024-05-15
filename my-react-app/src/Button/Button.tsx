import styles from "./Button.module.css"

function Button(){


    /*
    inline style
    const styles= {
        backgroundColor: "red",
        color: "white"
    }
    className={styles}
    //json style

    */
   return (<button className={styles.button}>Click me</button>); 
}

export default Button