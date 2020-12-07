import './App.css';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
          <a
            className="App-link"
            href="https://appmasters.io/"
            target="_blank"
          >
            App Masters
          </a>
          <a
              className="App-link"
              href="https://codejr.com.br/"
              target="_blank"
          >
            Code Júnior
          </a>
        </div>  
    </footer>
  );
}

export default Footer;
