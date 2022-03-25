import Logo from './logo';
import Link from 'next/link';
import classes from './main-navigation.module.css';

const MainNavigation = () => {

    //Link 안에 text가아닌 다른 컴포넌트가 들어간다면 <a></a>로 감싸줘야 a tag기능이 동작한다. href는 Link에 적어주면된다.
    return <header className={classes.header}>
        <Link href="/">
            <a>
                <Logo />
            </a>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
};

export default MainNavigation;