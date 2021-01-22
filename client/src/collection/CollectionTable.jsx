import React, {useContext, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Table, Card, Button, ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import { useTable, useSortBy } from 'react-table'
import {TrashFill, PenFill} from 'react-bootstrap-icons';

import Item from '../items/Item';
import { AuthContext } from '../core/context';
import { ColorContext } from '../core/context';

export default function CollectionTable() {
    const {collId} = useParams();
    const {colormode} = useContext(ColorContext);
    const [loading, setLoading] = useState(true);
    const {isAuth, isAdmin, userId} = useContext(AuthContext);
    const [collection, setCollection] = useState();
    const [checkedItems, setCheckedItems] = useState([]);
    const [colData, setColData] = useState([]);
    const [cellData, setCellData] = useState([]);

    const generateColumns = (field_mask) => {
        let result = field_mask.filter((f,i) => !!f && !( i >= 6 && i < 9))
        .map((f, i, ) => new Object({ Header: f, accessor: `col${field_mask.indexOf(f)}`}))
        return [
            { Header: "Name", accessor: `name`},
            ...result,
            { Header: "Created", accessor: `created`},
            { Header: "Tags", accessor: `tags`}]
    }

    const generateData = (items) => {
        let result = items.map((item, index) => Object.assign(
            {
                name: item.name,
                created: new Date(item.created).toLocaleDateString(),
                tags: item.tags_id.map(tag => tag.name).join(', '),
            },
            Object.fromEntries(
                item.fieldset_id.fields.slice(0, 6)
                .filter((f,i) => f !== null)
                .map((f, i) => [`col${item.fieldset_id.fields.indexOf(f)}`, `${f.value}`])
            ),
            Object.fromEntries(
                item.fieldset_id.fields.slice(9, 12)
                .filter((f,i) => f !== null)
                .map((f, i) => [`col${item.fieldset_id.fields.indexOf(f)}`, `${new Date(f.value).toLocaleDateString()}`])
            ),
            Object.fromEntries(
                item.fieldset_id.fields.slice(12, 15)
                .filter((f,i) => f !== null)
                .map((f, i) => [`col${item.fieldset_id.fields.indexOf(f)}`, `${f.value ? 'Yes' : 'No'}`])
            )
        ))
        return result;
    }

    useEffect(()=>{    /// layot
        if (!collection) {
            let params = {collection_id: collId}
            axios.get('/api/collection', {params})
            .then((res)=>{
                setCollection(res.data);
                setColData(generateColumns(res.data.field_mask))
                setCellData(generateData(res.data.items))
                setLoading(false)
             })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            })
        }
    }, [])

    const data = React.useMemo(() => [...cellData], [cellData])
    const columns = React.useMemo(() => [...colData], [colData] )
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy)

    const getItemIdForRow = (tr) => {
        let result;
        collection.items.forEach((item, index) => {
            if (item.name === tr.childNodes[1].textContent.trim()) {
                result =  item._id;
            }
        });
        return result;
    }

    const editHandle = (event)=>{
        console.log(getItemIdForRow(event.target.closest('tr')))
    }

    const deleteHandle = (event)=>{
        console.log(getItemIdForRow(event.target.closest('tr')))
    }

    if (loading) { return ''} else {
    return (
        <Card className={"my-1" + colormode.asClasses}>
            <Card.Header as="h5">{`Collection "${collection.name.toUpperCase()}":`}</Card.Header>
            <Card.Body>
                <Button
                    as="a"
                    href={`/collection/create_item/${collection._id}`}
                    size="sm"
                    variant="success"
                    className="my-2 mx-1">
                    {'Add Item'}
                </Button>
                <Table size="sm" bordered hover responsive variant={colormode.table}>
                    <thead>
                        { headerGroups.map(headerGroup => (
                            <tr { ...headerGroup.getHeaderGroupProps() }>
                                    <th></th>
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
                        { rows.map((row, index) => { prepareRow(row); return (
                            <tr {...row.getRowProps()} >
                                <td className="text-center">
                                    <ButtonGroup >
                                        <Button size="sm" variant="info" onClick={editHandle}>
                                            <PenFill color="white" />
                                        </Button>
                                        <Button size="sm" variant="danger" onClick={deleteHandle}>
                                            <TrashFill color="white" />
                                        </Button>
                                    </ButtonGroup>
                                </td>
                                { row.cells.map(cell => { return (
                                    <td {...cell.getCellProps()}> { cell.render('Cell')} </td>
                                )})}
                            </tr>
                        )})}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )}
}
