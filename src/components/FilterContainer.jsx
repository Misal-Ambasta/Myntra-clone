import React from 'react';
import { makeStyles, Box, RadioGroup, Radio, Typography, Paper, Checkbox, FormControl, FormControlLabel } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    formControlLabel: {
        // fontSize: "17px",
        // fontWeight: "300",
    },
    paperFilter: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        width: '100%',
        cursor: 'pointer',
        height: 'max-content'
        // boxShadow: "11px 11px 28px -11px rgba(0,0,0,0.75)",
    }
}));

export default function FilterContainer() {
    const classes = useStyles();
    return (
        <Paper className={classes.paperFilter}>
            <Box>
                <Typography gutterBottom variant="button" color="textPrimary">
                    Filters
                </Typography>
                <hr />
                <RadioGroup aria-label="category" name="category">
                    <FormControlLabel size="small" style={{ color: 'black' }} value="men" control={<Radio color="secondary" size="small" />} label="Men" />
                    <FormControlLabel size="small" style={{ color: 'black' }} value="women" control={<Radio color="secondary" size="small" />} label="Women" />
                    <FormControlLabel size="small" style={{ color: 'black' }} value="boys" control={<Radio color="secondary" size="small" />} label="Boys" />
                    <FormControlLabel size="small" style={{ color: 'black' }} value="girls" control={<Radio color="secondary" size="small" />} label="Girls" />
                </RadioGroup>
            </Box>
            <hr />
            <Box>
                <FormControl component="fieldset">
                    {/* <FormLabel component="legend" >Purpose</FormLabel> */}
                    <Typography gutterBottom variant="button" color="secondary">
                        Purpose
                    </Typography>
                    <FormControlLabel name="delivery" style={{ fontSize: '1px' }} value="online delivery" control={<Checkbox color="secondary" />} label={<Typography className={classes.formControlLabel}>Only for online delivery</Typography>} labelPlacement="end" />
                    <FormControlLabel name="social" value="social media" control={<Checkbox color="secondary" />} label={<Typography className={classes.formControlLabel}>For social media</Typography>} labelPlacement="end" />
                    <FormControlLabel name="food" value="videography" control={<Checkbox color="secondary" />} label={<Typography className={classes.formControlLabel}>Food preparation videography</Typography>} labelPlacement="end" />
                    <FormControlLabel name="prAct" value="PR Activity" control={<Checkbox color="secondary" />} label={<Typography className={classes.formControlLabel}>PR activity</Typography>} labelPlacement="end" />
                </FormControl>
            </Box>

            <hr />
            <Box>
                <FormControl component="fieldset">
                    {/* <FormLabel component="legend" >Purpose</FormLabel> */}
                    <Typography gutterBottom variant="button" color="secondary">
                        Purpose
                    </Typography>
                    <FormControlLabel name="delivery" style={{ fontSize: '1px' }} value="online delivery" control={<Checkbox color="secondary" />} label={<Typography className={classes.formControlLabel}>Only for online delivery</Typography>} labelPlacement="end" />
                    <FormControlLabel name="social" value="social media" control={<Checkbox color="secondary" />} label={<Typography className={classes.formControlLabel}>For social media</Typography>} labelPlacement="end" />
                    <FormControlLabel name="food" value="videography" control={<Checkbox color="secondary" />} label={<Typography className={classes.formControlLabel}>Food preparation videography</Typography>} labelPlacement="end" />
                    <FormControlLabel name="prAct" value="PR Activity" control={<Checkbox color="secondary" />} label={<Typography className={classes.formControlLabel}>PR activity</Typography>} labelPlacement="end" />
                </FormControl>
            </Box>
        </Paper>
    );
}
