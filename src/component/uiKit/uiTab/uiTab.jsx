import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { useTheme, Typography, Box, Button, Grid } from "@mui/material";

export default function TabComp({ tabViews, tabLabels }) {
  const theme = useTheme("theme");

  return (
    <Tabs
      defaultValue={0}
      className="bg-red-200 w-full flex flex-col  items-center"
    >
      <TabsList>
        {tabLabels.map((label, i) => (
          <Tab sx={{ width: "100%" }} key={i} value={i}>
            <Typography variant="button">{label}</Typography>
          </Tab>
        ))}
      </TabsList>
      {tabViews.map((tabView, i) => {
        return (
          <TabPanel index={i} key={i}>
            {tabView}
          </TabPanel>
        );
      })}
    </Tabs>
  );
}

const Tab = styled(BaseTab)(
  ({ theme }) => `
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  //background-color: transparent;
  width: 50%;
  height:40px;
  //line-height: 1.5;
  padding: 10px 12px;
  margin: 0px;
  border: none;
  display: flex;
  justify-content: center;
  border-radius: 100px;

  &:hover {
    //background-color: ${theme.palette.base.main};
  }
  &:focus {
    color: ${theme.palette.base.light};
    outline: 0px solid ${theme.palette.base.main};
  }

  &.${tabClasses.selected} {
    background-color:${theme.palette.base.main} ;
    color: #fff;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
);

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  width:270px;
  @media only screen and (min-width: 980px) {
   width:60%;
  }
  @media only screen and (min-width: 420px) and (max-width: 980px) {
   width:70%
  }
  @media screen and (max-width: 420px) {
   width:50%
  }
  background-color: ${theme.palette.disable.main};
  border-radius: 100px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
  };
  `
);
