import styles from "./Button.module.css"

export default function Button (props) {
    return (
        <button
        {...props}
        className={styles.wrapper}
        >
            {props.children}
        </button>
    )
}