import React from 'react'
import {Tab} from 'semantic-ui-react'

import PlayerDataComponent from "./PlayerDataComponent";
import SettingsComponent from "./SettingsComponent";
import SummaryComponent from "./SummaryComponent";

const panes = [
    {menuItem: 'Summary', pane: {content: <SummaryComponent/>}},
    {menuItem: 'Player Data', pane: {content: <PlayerDataComponent/>}},
    {menuItem: 'Settings', pane: {content: <SettingsComponent/>}},
];

const NavigationComponent = () =>
    <Tab
        panes={panes}
        renderActiveOnly={false}
    />;

export default NavigationComponent