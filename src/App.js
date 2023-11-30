import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HomeIcon from '@mui/icons-material/Home';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import PlaceIcon from '@mui/icons-material/Place';


import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Home from './Home'
import About from './About'
import Users from './Users'
import CheckIn from './CheckIn'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function App() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Router>
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        {/* Rest of your existing code */}
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            {/* Update these to Links */}

            <BottomNavigationAction
              label="Home"
              icon={<HomeRoundedIcon/>}
              component={Link}
              to="/"
            />
            <BottomNavigationAction
              label="Find"
              icon={<PlaceIcon />}
              component={Link}
              to="/about"
            />
            {/* <BottomNavigationAction
              label="Archive"
              icon={<ArchiveIcon />}
              component={Link}
              to="/users"
            /> */}

              <BottomNavigationAction
              label="Checkin"
              icon={<CloudUploadIcon />}
              component={Link}
              to="/checkin"
            />
              <BottomNavigationAction
              label="Settings"
              icon={<SettingsIcon />}
              component={Link}
              to="/users"
            />

          </BottomNavigation>
        </Paper>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/checkin" element={<CheckIn />} />
      </Routes>
    </Router>
  );

  // return (
  //   <Box sx={{ pb: 7 }} ref={ref}>
  //     <CssBaseline />
  //     <List>
  //       {messages.map(({ primary, secondary, person }, index) => (
  //         <ListItem button key={index + person}>
  //           <ListItemAvatar>
  //             <Avatar alt="Profile Picture" src={person} />
  //           </ListItemAvatar>
  //           <ListItemText primary={primary} secondary={secondary} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
  //       <BottomNavigation
  //         showLabels
  //         value={value}
  //         onChange={(event, newValue) => {
  //           setValue(newValue);
  //         }}
  //       >
  //         <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  //         <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  //         <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
  //       </BottomNavigation>
  //     </Paper>
  //   </Box>
  // );
}

const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/images/unnamed.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];
