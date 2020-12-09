import styles from './Comment.module.css';
import classNames from 'classnames';

const Comment = () => {
    return (
        <div className={styles.comment} style={{padding: 20}}>
            <input className={styles.input} type={"text"} style={{margin: 5}} placeholder="Comentar Agora" />
            <button className={classNames(styles.button, styles.disable)}>Comentar</button>
        </div>
    )
}

export default Comment;