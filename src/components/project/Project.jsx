import React from 'react'
import AppLayout from '../../layout/AppLayout'
import SingleProject from '../singleProject/SingleProject'


export default function Project({ projectUrl }) {
    return (
        <AppLayout>
            <SingleProject projectUrl={projectUrl} />
        </AppLayout>
    )
}
