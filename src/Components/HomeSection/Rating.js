/* eslint-disable max-len */
import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  margin: {
    height: theme.spacing(3),
  },
}));

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';


const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    'height': 20,
    'width': 20,
    'backgroundColor': '#fff',
    'boxShadow': iOSBoxShadow,
    'marginTop': -10,
    'marginLeft': -10,
    '&:focus, &:hover, &$active': {
      'boxShadow': '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    'left': 'calc(-50% + 5px)',
    'top': -20,
    '& *': {
      background: 'transparent',
      color: '#3880ff',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

/**
 * Component to visualize the rating slider
 * @param {prop} prop - Get slider props
 * @return {React.ReactElement}
 */

export default function CustomizedSlider(props) {
  const classes = useStyles();


  return (
    <div className={classes.margin}>
      <IOSSlider
        testid='IOSSliderId'
        aria-label="ios slider"
        // defaultValue={75}
        // marks={marks}
        valueLabelDisplay="on"
        // getAriaValueText={valuetext}
        value={props.currentValue}
        onChange={props.onChange}
        step={1}
        marks
        min={1}
        max={5}
        />
        {/* {value} */}
    </div>
  );
}

CustomizedSlider.propTypes = {
  inputSliderAction: PropTypes.func,
  currentValue: PropTypes.number,
  onChange: PropTypes.func,
};
