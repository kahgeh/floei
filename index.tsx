import * as React from 'react'
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import "@material/react-drawer/dist/drawer.css";
import '@material/react-list/dist/list.css';
import './index.css';

import TopAppBar, {
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarFixedAdjust,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import Drawer, { DrawerHeader, DrawerTitle, DrawerContent, DrawerAppContent } from '@material/react-drawer';
import List, { ListItem, ListItemGraphic, ListItemText } from '@material/react-list';

import { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.setState({ showDrawer: false });
    }

    onMenuClick = () => {
        const { showDrawer } = this.state;
        this.setState({ showDrawer: !this.state.showDrawer });
    }

    mapShowDrawerToClassName(showDrawer: boolean) {
        if (showDrawer) {
            return "drawer-visible";
        }
        return "drawer-hidden";
    }

    state = { selectedIndex: 0, showDrawer: false };
    render() {
        const { showDrawer } = this.state;
        return (<div className='drawer-container'>
            <Drawer className={this.mapShowDrawerToClassName(showDrawer)}>
                <DrawerHeader>
                    <DrawerTitle tag='h2'>
                        jane.smith@gmail.com
            </DrawerTitle>
                </DrawerHeader>

                <DrawerContent>
                    <List singleSelection selectedIndex={this.state.selectedIndex}>
                        <ListItem>
                            <ListItemGraphic graphic={<MaterialIcon icon='folder' />} />
                            <ListItemText primaryText='Mail' />
                        </ListItem>
                    </List>
                </DrawerContent>
            </Drawer>

            <DrawerAppContent className='drawer-app-content'>
                <MaterialIcon hasRipple icon='menu' onClick={this.onMenuClick} />
            </DrawerAppContent>
        </div>)
    }
}

render(<App />, document.getElementById('root'))