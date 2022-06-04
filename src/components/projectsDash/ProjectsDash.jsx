import React from 'react'
import AppLayout from '../../layout/AppLayout'
import ProjectsPage from '../projectsPage/ProjectsPage'
import ListProjects from '../listProjects/ListProjects'
import { projects } from '../../projects-data'


export default function ProjectsDash() {
    return (
        <AppLayout>
            <ProjectsPage />
            <ListProjects featured={false} limit={20} projects={projects} />
        </AppLayout>
    )
}
