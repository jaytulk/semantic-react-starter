import React, { useState, useEffect } from 'react';
import { Header, Table } from 'semantic-ui-react';
import itemsService from '../services/itemsService';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const data = await itemsService.fetchItems();
            setItems(data ?? []);
        };

        fetchItems();
    }, []);

    return (
        <>
            <Header content="Items" />
            <Table singleLine striped unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell />
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {items.length > 0 ? (
                        items.map((x) => (
                            <Table.Row key={x.id}>
                                <Table.Cell>Image would go here...</Table.Cell>
                                <Table.Cell>{x.name}</Table.Cell>
                                <Table.Cell>{x.description}</Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        ))
                    ) : (
                        <Table.Row>
                            <Table.Cell>No items were found</Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </>
    );
};

export default Items;
