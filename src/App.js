import React from 'react';
import { Route, Redirect, Switch, Link, useLocation } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import styled from '@emotion/styled';
import logo from './resources/logo.svg';
import UsersScreen from './screens/Users';
import Items from './screens/Items';

const paths = {
    items: '/items',
    landing: '/',
    users: '/users',
};

const AppHeaderRoot = styled.div`
    .ui.menu {
        border-radius: 0;
        flex: 1;
        .item {
            padding: 0.6em 1em;
            &.logo-container {
                font-size: 1.5rem;
                font-weight: bold;
            }
            .logo {
                height: 32px;
                margin-right: 15px;
                width: 32px;
            }
        }
    }
`;

const AppHeader = () => {
    const location = useLocation();
    return (
        <AppHeaderRoot>
            <Menu secondary>
                <Menu.Item
                    as={Link}
                    className="logo-container"
                    to={paths.landing}
                >
                    <Image
                        className="logo"
                        src={logo}
                        title="Streamline Labs, LLC"
                    />
                    Streamline Labs, LLC
                </Menu.Item>
                <Dropdown item text="Manage">
                    <Dropdown.Menu>
                        <Dropdown.Item
                            as={Link}
                            to={paths.items}
                            active={location.pathname === paths.items}
                        >
                            Items
                        </Dropdown.Item>
                        <Dropdown.Item
                            as={Link}
                            to={paths.users}
                            active={location.pathname === paths.users}
                        >
                            Users
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </AppHeaderRoot>
    );
};

const PageContainerRoot = styled.div`
    display: flex;
    background-color: #f5f5f5;
    flex: 1;
    flex-direction: column;
    padding: 24px 12%;
    div.ui.header {
        font-size: 1.8em;
    }
`;

const PageContainer = ({ children }) => {
    return <PageContainerRoot>{children}</PageContainerRoot>;
};

const PageRoute = ({ path, component }) => (
    <PageContainer>
        <Route path={path} component={component} />
    </PageContainer>
);

const AppRoot = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    .content {
        display: flex;
        flex: 1;
    }
`;

function App() {
    return (
        <AppRoot>
            <AppHeader />
            <div className="content">
                <Switch>
                    <PageRoute path={paths.items} component={Items} />
                    <PageRoute path={paths.landing} exact component={Items} />
                    <PageRoute path={paths.users} component={UsersScreen} />
                    <Redirect to={paths.landing} />
                </Switch>
            </div>
        </AppRoot>
    );
}

export default App;
