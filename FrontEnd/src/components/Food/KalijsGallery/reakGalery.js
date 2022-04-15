import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem, { imageListItemClasses } from '@mui/material/ImageListItem';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { CardMedia, Paper } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import LoadingPlaceHolder from '../loading/loading';
import { Fade } from 'react-reveal';
import { PaginateGallery } from '../kalijFile/Component/pagination/pagination';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function MasonryImageList() {
    const theme = createTheme({
        breakpoints: {
            values: {
                mobile: 0,
                bigMobile: 600,
                tablet: 900,
                desktop: 1360
            }
        }
    });
    const classes = useStyles();
    const navigate = useNavigate();
    const { Kal, isLoading } = useSelector((state) => state.Kalijs);
    const query = useQuery();
    const page = query.get('page' || 1);
    console.log(page, 'page');
    return (
        (isLoading) ?
            <ThemeProvider theme={theme}>
                <Box
                    className={classes.realBox}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            mobile: "repeat(1, 1fr)",
                            bigMobile: "repeat(2, 1fr)",
                            tablet: "repeat(3, 1fr)",
                            desktop: "repeat(4, 1fr)"
                        },
                        marginTop: "75px",
                        marginBottom: "-75px",
                        gridGap: "15px",
                        [`& .${imageListItemClasses.root}`]: {
                            display: "flex",
                            flexDirection: "column"
                        }
                    }}
                >
                    {Array.from(Array(Math.ceil(6)).keys()).map((item) => (
                        <Fade top duration={2000}>
                            <ImageListItem key={item?.img}>
                                <LoadingPlaceHolder extraStyles={{
                                    height: 0,
                                    paddingTop: '70%', objectFit: 'fit',
                                    margin: 'auto', borderRadius: '10px',
                                }} />
                                <ImageListItemBar
                                    sx={{ letterSpacing: "2px" }}
                                    title={<LoadingPlaceHolder extraStyles={{
                                        height: '5px', width: '200px',
                                        borderRadius: '12px', margin: '3px 0px', padding: '0.1rem 0rem',
                                    }} />}
                                    subtitle={<LoadingPlaceHolder extraStyles={{
                                        height: '5px', width: '200px',
                                        borderRadius: '12px', margin: '3px 0px', padding: '0.1rem 0rem',
                                    }} />}
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: "lightgray" }}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        </Fade>
                    ))}
                </Box>
                <Paper className={classes.Gpagination} elevation={4}>
                    <PaginateGallery page={page} />
                </Paper>
            </ThemeProvider >
            : (
                <ThemeProvider theme={theme}>
                    <Box
                        className={classes.realBox}
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                mobile: "repeat(1, 1fr)",
                                bigMobile: "repeat(2, 1fr)",
                                tablet: "repeat(3, 1fr)",
                                desktop: "repeat(4, 1fr)"
                            },
                            marginTop: "75px",
                            gridGap: "15px",
                            [`& .${imageListItemClasses.root}`]: {
                                display: "flex",
                                flexDirection: "column"
                            }
                        }}
                    >
                        {/* <ImageList  gap={8} cols={3}> */}
                        {Kal?.map((item) => (
                            <Fade top duration={2000}>
                                <ImageListItem key={item.selectedFile}>
                                    <CardMedia className={classes.media} style={{ backgroundImage: `url(${item.selectedFile})` }} title={item.title} />
                                    <ImageListItemBar
                                        sx={{ letterSpacing: "2px", lineHeight: "2", borderRadius: "10px" }}
                                        title={item.title}
                                        subtitle={item?.message.split(' ').splice(0, 7).join(' ').concat('...')}
                                        // position="below"
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                                aria-label={`info about ${item.title}`}
                                                onClick={() => {
                                                    navigate(`/kalijs/${item._id}`);
                                                }}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            </Fade>
                        ))}
                    </Box>
                    <Paper className={classes.Gpagination} elevation={4}>
                        <PaginateGallery page={page} />
                    </Paper>
                </ThemeProvider >
            )
    );
}

