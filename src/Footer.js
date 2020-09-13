import React from 'react'
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import SkipNextIcon from "@material-ui/icons/SkipNext";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                 <img className="footer__albumLogo" src="https://avatars3.githubusercontent.com/u/50895949?s=460&u=4566407f143de04afa1cba038d735b46e64a94ef&v=4" alt=""/>
                 <div className="footer__songInfo">
                     <h4>Cendol Dawet</h4>
                     <p>MG86</p>
                 </div>
            </div>
            
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
