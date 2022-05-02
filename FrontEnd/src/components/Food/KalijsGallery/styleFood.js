import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        padding: '1rem 0rem',
        ['@media (max-width:600px)']: {
            padding: '1rem 3rem',
        },
        ['@media (max-width:500px)']: {
            padding: '1rem 1rem',
        },
        ['@media (max-width:400px)']: {
            padding: '1rem 0rem',
        },
    },
    // pagenotfound
    PageNotFound: {
        marginTop: '180px',
    },
    // cart
    marg: {
        marginTop: '150px',
    },
    // gallery
    Food: {
        color: 'gray',
        fontWeight: '800',
        textAlign: 'center',
    },
    spanFood: {
        backgroundColor: '#4abdac',
        padding: '0.2rem 1rem',
        color: 'white',
        borderRadius: '8px'
    },
    media: {
        width: '100%',
        height: '230px',
        ObjectFit: 'cover',
        ObjectPosition: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '280px',
        },
        ['@media (max-width:420px)']: {
            height: '220px',
        },
    },

    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        borderRadius: '20px',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        padding: '5px 17px 10px 17px',
    },
    title: {
        color: 'gray',
        fontSize: '18px',
        fontWeight: '600',
        padding: '16px 15px 4px 15px',
    },
    cartTitle: {
        padding: '5px 17px 7px 17px',
        fontSize: '15px',
        color: '#A2816C'
    },
    message: {
        padding: '4px 20px',
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
}));

