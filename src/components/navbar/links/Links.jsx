"use client";
import Link from 'next/link';
import styles from "./links.module.css";
import Navlink from './navLink/navLinks';
import { useState } from 'react';
import Image from 'next/image';



const links = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Catalog', path: '/catalog' },
  // { title: 'TDS&MDS', path: '/tdsmds' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' }
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <Navlink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <Navlink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>
     
      <Image src="/menu.png"
      className={styles.menuButton}
      alt=""
      width={30}
      height={30}
      onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
