import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import Box from "@mui/material/Box";

export default function TabComp({ tabViews, tabLabels }) {
  return (
    <Box sx={{ width: "80%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs defaultValue={0}>
          <TabsList>
            {tabLabels.map((label, i) => (
              <Tab key={i} value={i}>
                {label}
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
      </Box>
    </Box>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#1f405d",
  200: "#1b3852",
  800: "#142d44",
};
const gray = {
  50: "#fafafa",
  100: "#efefef",
  200: "#e8e8e8",
  300: "#e1e1e1",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  //background-color: transparent;
  width: 50%;
  //line-height: 1.5;
  padding: 10px 12px;
  margin: 0px;
  border: none;
  display: flex;
  justify-content: center;
  border-radius: 100px;

  &:hover {
    //background-color: ${blue[50]};
  }

  &:focus {
    color: ${blue[50]};
    outline: 0px solid ${blue[800]};
  }

  &.${tabClasses.selected} {
    background-color: ${blue[800]};
    color: #fff;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 80%;
  background-color: ${gray[300]};
  border-radius: 100px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px ${theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
    };
  `
);
