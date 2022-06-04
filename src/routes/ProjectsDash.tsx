import React from 'react'
import loadable from '@loadable/component'

const ProjectsDashComponent = loadable(() => import('../components/projectsDash/ProjectsDash'));


export default function ProjectsDash() {
    return (
        <ProjectsDashComponent />
    )
}
