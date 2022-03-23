import Image from "next/image";
import Button from "../UI/Button";
import classes from './EventItem.module.css';

const EventItem = (props) => {

    const { title, image, date, location, id} = props;

    const readbleDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return <li className={classes.item}>
        <Image width={200} height={200} src={'/' + image} alt="이미지" />
        <div className={classes.content}>
            <div className={classes.summery}>
                
                <h2>{title}</h2>
                
                <div className={classes.date}>
                    <time>{readbleDate}</time>
                </div>
                <div className={classes.address}>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    Explore Event
                </Button>
            </div>
        </div>
    </li>
};

export default EventItem;