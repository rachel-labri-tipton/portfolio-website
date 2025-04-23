
import Link from 'next/link';

const Navbar = () => (
    <nav>
        <div className="navbar-logo">
            <Link href="#"><i className="fas fa-arrow-up"></i></Link>
        </div>
        <div>
            <ul className="nav-menu" id="dynamic-nav">
                <li><Link href="#about">About</Link></li>
                <li><Link href="#work">Work</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#skills">Skills</Link></li>
                <li><Link href="#resources">Resources</Link></li>
                <li><Link href="#writing">Writing</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;