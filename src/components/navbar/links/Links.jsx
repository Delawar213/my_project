import Link from 'next/link';
import styles from "./links.module.css";
import Navlink from './navLink/navLinks';

const Links = () => {
    const links = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Catalog', path: '/catalog' },
        // { title: 'TDS&MDS', path: '/tdsmds' },
        { title: 'contact', path: '/contact' },
        { title: 'Blog', path: '/blog' }
    ];

    const session = true;
    const isAdmin = true;


    return (
        <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <Navlink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
  );
};
export default Links
