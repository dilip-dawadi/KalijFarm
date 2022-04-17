import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        paddingTop: '72px',
        margin: 'auto',
        ['@media (max-width:550px)']: {
            paddingTop: '50px',
        },
    },
    media: {
        height: '90vh',
        objectFit: 'cover',
        width: '95.5%',
        borderRadius: '1rem',
        margin: 'auto',
        ['@media (max-width:768px)']: {
            width: '99.9%',
            height: '90vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '55vh',
            borderRadius: '0px',
        },
    },
    text: {
        display: 'none',
        ['@media (max-width:768px)']: {
            display: 'block',
        },
    },
    gurantee: {
        maxWidth: '120px',
        maxheight: '50px',
        borderRadius: '1rem',
        margin: '10px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ['@media (max-width:400px)']: {
            maxWidth: '90px',
            maxheight: '50px',
        },
    },
    guranteeMessage: {
        fontWeight: '300',
        fontSize: '1rem',
        lineHeight: '2',
        color: 'gray',
        textAlign: 'justify',
    },
    guranteeTitle: {
        fontWeight: '600',
        borderRadius: '5px',
        padding: '4px 10px',
        backgroundColor: 'coral',
        color: 'white',
    },
}));

