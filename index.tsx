import * as React from 'react'
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';

import TopAppBar, {
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
    render() {
        return (<div>
            <TopAppBar shortCollapsed>
                <TopAppBarRow>
                    <TopAppBarSection align='start'>
                        <TopAppBarIcon navIcon tabIndex={0}>
                            <MaterialIcon hasRipple icon='menu' onClick={() => console.log('click')} />
                        </TopAppBarIcon>
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>

        </div>)
    }
}

render(<App />, document.getElementById('root'))