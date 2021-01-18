import React, {useContext, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Table, Card} from 'react-bootstrap';
import axios from 'axios';
import { useTable, useSortBy } from 'react-table'
import ReactMarkdown from 'react-markdown'

import Item from '../items/Item';
import {AuthContext} from '../core/context';

export default function CollectionTable() {
    const {collId} = useParams();
    const [loading, setLoading] = useState(true)
    const {isAuth, isAdmin, userId} = useContext(AuthContext);
    const [collection, setCollection] = useState()
    const [colData, setColData] = useState([])
    const [cellData, setCellData] = useState([])

    useEffect(()=>{    /// layot
        if (!collection) {
            let params = {collection_id: collId}
            axios.get('/api/collection', {params})
            .then((res)=>{
                setCollection(res.data);
                setColData(
                    res.data.field_mask
                    .filter((f,i) => !!f && !( i >= 6 && i < 9))
                    .map((f, i) => new Object({ Header: f, accessor: `col${i}`}))
                )
                setCellData(
                    res.data.items.map((item, index) =>
                        Object.assign(
                        {
                            name: item.name,
                            created: item.created,
                            tags: item.tags_id.map(tag => tag.name),
                        },
                        Object.fromEntries(item.fieldset_id.fields
                        .filter((f,i) => !!f && !( i >= 6 && i < 9))
                        .map((f, i) => [`col${i}`, f.value])))
                    )
                )
                setLoading(false)
             })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            })
        }
    }, [])

    const data = React.useMemo(() =>
        [...cellData], [cellData]
    )

    const columns = React.useMemo(() => [
        { Header: "Name", accessor: `name`},
        ...colData,
        { Header: "Created", accessor: `created`},
        { Header: "Tags", accessor: `tags`}
    ], [colData] )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy)

    if (loading) { return ''} else {
    return (
        <Card className="bg-dark text-light my-1">
            <Card.Header as="h5">Collection NAME:</Card.Header>
            <Card.Body>
                <Table size="sm" bordered hover responsive variant="dark">
                    <thead>
                        { headerGroups.map(headerGroup => (
                            <tr { ...headerGroup.getHeaderGroupProps() }>
                                { headerGroup.headers.map(column => (
                                    <th { ...column.getHeaderProps(column.getSortByToggleProps()) }>
                                        {column.render('Header')}
                                        <span> {column.isSorted ? column.isSortedDesc ? '↑' : '↓' : ''} </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        { rows.map(row => { prepareRow(row); return (
                            <tr {...row.getRowProps()} >
                                { row.cells.map(cell => { return (
                                    <td {...cell.getCellProps()} > { cell.render('Cell')} </td>
                                )})}
                            </tr>
                        )})}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )}
}
