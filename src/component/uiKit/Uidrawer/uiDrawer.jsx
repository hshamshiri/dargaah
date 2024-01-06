import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
//icons
import UiIcon from "../../uiKit/uiIcon/uiIcon";
import godlogo from "../../../images/godlogo.png";
//
import avatarImg from "../../../images/avatar.png";
//translation
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: "relative",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const [t] = useTranslation();
  //const sideItems= [{t("dashboard.home")},{},{},{},{}]
  const sideItems = [
    { label: t("dashboard.drawer.home"), iconName: "home" },
    { label: t("dashboard.drawer.notifications"), iconName: "notification" },
    { label: t("dashboard.drawer.mychild"), iconName: "mychild" },
    { label: t("dashboard.drawer.servieces"), iconName: "servieces" },
    { label: t("dashboard.drawer.graduates"), iconName: "graduates" },
    { label: t("dashboard.drawer.organizational"), iconName: "organizational" },
  ];

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "inherit" }}>
        <Toolbar>
          <Typography
            variant="h6"
            color="base.main"
            noWrap
            sx={{ flexGrow: 1 }}
            component="div"
          >
            درگاه وزارت آموزش و پرورش
          </Typography>
          <IconButton
            color="base.main"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        {/* <DrawerHeader sx={{ backgroundColor: "red", width: 300 }} /> */}

        {/*         
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader sx={{ boxShadow: 3 }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        {/* <Divider /> */}

        <List sx={{ padding: 0 }}>
          <TopView />

          {sideItems.map((item, index) => (
            <Box>
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                    }}
                    primaryTypographyProps={{
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                    primary={item.label}
                  />
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      minWidth: 40,
                      justifyContent: "end",
                    }}
                  >
                    <UiIcon iconName={item.iconName} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}

const TopView = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "drawer.main",
          position: "relative",
          height: 200,
        }}
      >
        <div className="w-full h-1/2">
          <img className=" h-full object-contain" src={godlogo} />
        </div>
        <div className="w-full flex p-1 justify-between items-center h-1/2  s">
          <UiIcon iconName={"dots"} classes={{ color: "white" }} />
          <Typography variant="body1" sx={{ color: "white", fontWeight: 700 }}>
            حسن شیرازی
          </Typography>
        </div>
        <Avatar
          alt="hassan"
          src={avatarImg}
          sx={{
            width: 90,
            height: 90,
            boxShadow: 3,
            position: "absolute",
            bottom: -45,
            left: drawerWidth / 2 - 45,
            zIndex: 10,
          }}
        />
      </Box>
      <Box sx={{ backgroundColor: "drawer.main", height: 150 }}>
        <LogoutView />
      </Box>
    </Box>
  );
};

const LogoutView = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      fff asdfasdf
    </Box>
  );
};
