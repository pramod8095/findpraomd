import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
      <div style={{
          marginTop:'175%',
          fontFamily: 'Dancing Script'
      }}>
          <p style={{
              marginTop:'175%',
              fontFamily: 'Dancing Script',
              color:'white',
              fontSize:'80px',
              marginLeft:'38%'
          }}>
              My Journey so far
          </p>
            <Timeline align="alternate">
            <TimelineItem>        
                <TimelineSeparator>
                <TimelineDot>
                    
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1" style={{
                        fontFamily: 'Dancing Script',
                        fontSize:'30px'
                    }}>
                    B.E: Electronics And Communications Engineering
                    </Typography>
                    <Typography style={{
                        fontFamily: 'Dancing Script',
                        fontSize:'20px'
                    }}>Graduated from SIT Tumkur with <br/>Engineer in Electronics with 8.6 CGPS</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1" style={{
                        fontFamily: 'Dancing Script',
                        fontSize:'30px'
                    }}>
                    Jr. Software Deloper
                    </Typography>
                    <Typography style={{
                        fontFamily: 'Dancing Script',
                        fontSize:'20px'
                    }}>It all started in Oct 2017 'Allstate India' as a Freshermen from college.<br/>Got exposure to HTML, CSS, JS, ReactJS, from here ther is was no <br/>turning back. ARIA was my first project got lucky to work along with onsite<br/> discussion with Business for design </Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                
                <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1" style={{
                        fontFamily: 'Dancing Script',
                        fontSize:'30px'
                    }}>
                    Software Developer
                    </Typography>
                    <Typography style={{
                        fontFamily: 'Dancing Script',
                        fontSize:'20px'
                    }}>Yeah, I GOT PROMOTED!!!<br/>till today worked on many projects, delivered design. Learned some important lessions
                    <br/>Don't be discouraged with failures
                    <br/>Don't stop learning
                    <br/>Work Smart
                    <br/>Conflicts happen, but don’t lose yourself
                    <br/>Follow your hear </Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                
                </TimelineSeparator>
                <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1" style={{
                        fontFamily: 'Dancing Script',
                        fontSize:'30px'
                    }}>
                    Code
                    </Typography>
                    <Typography style={{
                        fontFamily: 'Dancing Script',
                        fontSize:'20px'
                    }}>Hell Yeah!! there's long way to go.</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
            </Timeline>
    </div>
  );
}
