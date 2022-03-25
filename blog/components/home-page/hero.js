import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {


    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/jeff.jpg" alt="An image showing Jeff" width={300} height={300} />
        </div>
        <h1>Hi, I'm Jeff</h1>
        <p>I blog about web develoment - especially frontend frameworks like React, Nextjs</p>
    </section>
};

export default Hero;