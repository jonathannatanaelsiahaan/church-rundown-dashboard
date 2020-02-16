import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Dialog from '@material-ui/core/Dialog';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DevicesIcon from '@material-ui/icons/Devices';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import AccountMenu from "components/account"
import RundownMenu from "components/rundown_menu"
import ConcregationMenu from "components/concregation_menu"
import DeviceInventoryMenu from "components/device_inventory_menu"
import ServiceScheduleMenu from "components/service_schedule_menu"
import SectorCoordinatorMenu from "components/sector_coordinator_menu"
import LogoutForm from './logout_form';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [menu, setOpenedMenu] = React.useState("Rundown");
  const [isPopupOpened, setIsPopUpOpened] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAccountMenuOpen = () =>  {
      setOpenedMenu("Account");
  }

  const handleRundownMenuOpen =  () => {
      setOpenedMenu("Rundown");
  }

  const handleConcregationMenuOpen = () => {
      setOpenedMenu("Concregation");
  }

  const handleDeviceInventoryMenuOpen = () => {
      setOpenedMenu("DeviceInventory");
  }

  const handleServiceScheduleMenuOpen = () => {
      setOpenedMenu("ServiceSchedule");
  }

  const handleSectorCoordinatorMenuOpen = () => {
      setOpenedMenu("SectorCoordinator");
  }

  const handleClosePopup = () => {
    setIsPopUpOpened(false);
  }

  const handleOpenPopup = () => {
    setIsPopUpOpened(true);
  }

  var contentMenu = <div/>

  if(menu == "Account") {
    contentMenu = <AccountMenu />
  }

  if(menu == "Rundown") {
      contentMenu =  <RundownMenu />
  }

  if(menu == "Concregation") {
    contentMenu = <ConcregationMenu />
  }

  if(menu == "DeviceInventory") {
    contentMenu = <DeviceInventoryMenu />
  }

  if(menu == "ServiceSchedule") {
    contentMenu = <ServiceScheduleMenu />
  }

  if(menu == "SectorCoordinator") {
    contentMenu = <SectorCoordinatorMenu />
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <ExitToAppIcon onClick={handleOpenPopup.bind(this)}/>
            <Dialog
              open={isPopupOpened}
              onClose={handleClosePopup.bind(this)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <LogoutForm hide={handleClosePopup.bind(this)}/>
            </Dialog>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
            <div>
                <ListItem button onClick={handleAccountMenuOpen}>
                  <ListItemIcon>
                      <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Akun" />
                </ListItem>
                <ListItem button onClick={handleRundownMenuOpen}>
                  <ListItemIcon>
                      <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tata Acara Ibadah" />
                </ListItem>
                <ListItem button onClick={handleConcregationMenuOpen}>
                  <ListItemIcon>
                      <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Data Jemaat" />
                </ListItem>
                <ListItem button onClick={handleDeviceInventoryMenuOpen}>
                  <ListItemIcon>
                      <DevicesIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inventory Perangkat" />
                </ListItem>
                <ListItem button onClick={handleServiceScheduleMenuOpen}>
                  <ListItemIcon>
                      <ScheduleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Jadwal Pelayanan" />
                </ListItem>
                <ListItem button onClick={handleSectorCoordinatorMenuOpen}>
                  <ListItemIcon>
                      <SupervisedUserCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kordinator Sektor" />
                </ListItem>
            </div>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            { contentMenu }
          </Grid>
        </Container>
      </main>
    </div>
  );
}