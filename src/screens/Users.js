import React, { useState, useEffect } from 'react';
import { Header, Table } from 'semantic-ui-react';
import usersService from '../services/usersService';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await usersService.fetchUsers();
            setUsers(data ?? []);
        };

        fetchUsers();
    }, []);

    return (
        <>
            <Header content="Users" />
            <Table singleLine striped unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell />
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {users.length > 0 ? (
                        users.map((x) => (
                            <Table.Row key={x.id}>
                                <Table.Cell>
                                    {x.firstName} {x.lastName}
                                </Table.Cell>
                                <Table.Cell>{x.email}</Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        ))
                    ) : (
                        <Table.Row>
                            <Table.Cell>No users were found</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </>
    );
};

export default Users;
