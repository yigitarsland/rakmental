import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
