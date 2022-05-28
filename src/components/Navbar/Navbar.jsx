import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import { ReactComponent as Bars } from './icons/bars-solid.svg';
import { ReactComponent as Xmark } from './icons/xmark-solid.svg';
import styles from './styles/Navbar.module.scss';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showMenu = show && (
    <MobileMenu className={styles.mobileMenu} onClick={() => setShow(!show)}>
      <CustomLink to='/projects' onClick={() => setShow(!show)}>
        Projects
      </CustomLink>
      <CustomLink to='/about' onClick={() => setShow(!show)}>
        About
      </CustomLink>
    </MobileMenu>
  );
  return (
    <header className={styles.navbar}>
      <ul className={styles.logo}>
        <CustomLink to='/'>Logobakery</CustomLink>
      </ul>
      <Menu className={styles.menu}>
        <CustomLink to='/projects'>Projects</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <button>Contacts</button>
      </Menu>
      <button className={styles.menuIcon} onClick={() => setShow(!show)}>
        <Bars style={{ width: 25, height: 25, fill: '#3498db' }} />
      </button>
      {showMenu}
    </header>
  );
};

const Menu = ({ children, className }) => (
  <nav className={className}>
    <ul className={styles.navLinks}>{children}</ul>
  </nav>
);

const MobileMenu = ({ children, className, onClick }) => (
  <nav
    className={className}
    style={{
      animation: 'fadeInLeft 0.3s ease',
    }}
  >
    <button className={styles.xmark} onClick={onClick}>
      <Xmark style={{ width: 20, height: 20, fill: '#ecf0f1' }} />
    </button>
    <ul>{children}</ul>
  </nav>
);

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li>
      <Link className={isActive ? 'active' : ''} to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
