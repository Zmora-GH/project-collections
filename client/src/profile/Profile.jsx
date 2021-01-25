import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import {Table, Button, Card} from 'react-bootstrap';
import axios from 'axios';
import {AuthContext, ColorContext} from '../core/context';
import { withTranslation } from 'react-i18next';
import ProfileCard from './ProfileCard';
import TableRowCollection from './TableRowCollection';

export default withTranslation()(function Profile({ t, i18n }) {
    const { profileUserName } = useParams()
    const {isAdmin, username} = useContext(AuthContext);
    const [profile, setProfile] = useState({
        userdata: {
            username: "",
            email: "",
            created: "",
            collections: []
        },
        collections: []
    })

    useEffect(() => {
        if (isAdmin || profileUserName === username) {
            let params = { username: profileUserName}
            axios.get('/api/profile', {params})
            .then((res)=>{
                setProfile({userdata: res.data.userdata, collections: res.data.collections})
            })
            .catch((err)=>{console.log(err)})
        } else {
            window.location.replace('/')
        }

    }, [])

    return (
        <ColorContext.Consumer>
            {({colormode}) => (
            <div>
                <ProfileCard userData={profile.userdata} t={t} i18n={i18n}/>
                <Card className= {`${colormode.asClasses} my-1`}>
                    <Card.Header as="h5">{t('profile_collections')}:</Card.Header>
                    <Card.Body>
                        <Table size="sm" bordered hover responsive variant={colormode.table}>
                            <thead>
                                <tr>
                                    <th colSpan="7">
                                        <Button
                                            className="my-2"
                                            variant="outline-success"
                                            as="a"
                                            href={`/collection/create/${profileUserName}`}
                                            >{t('profile_create')}</Button>
                                    </th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>{t('profile_table_name')}<small> ({t('profile_table_small')}) </small> </th>
                                    <th>{t('profile_image_url')}</th>
                                    <th>{t('profile_theme')}</th>
                                    <th>{t('profile_items')}</th>
                                    <th>{t('profile_created')}</th>

                                </tr>
                            </thead>
                            <tbody>
                                { profile.collections.map( (coll, index) => {
                                    return <TableRowCollection  data={coll} key={index} colormode={colormode}/>
                                })}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
            )}
        </ColorContext.Consumer>
    )
})
