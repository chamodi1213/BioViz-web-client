import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

// import css modules
import style from './assets/css/image.module.css';

const useStyles = makeStyles((theme) => ({

    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function ViewMore({title, description}) {
  const classes = useStyles();

  return (
    <div className='view' >
      <div className={classes.root} >
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className={classes.heading}
              testid='ViewMore_title'>{title}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={style.subTitle}>
              {description}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
}


ViewMore.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
