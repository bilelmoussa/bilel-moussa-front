import React from 'react'
import { useParams } from "react-router-dom"
import { getProjectsById } from '../projects-data'
import { Helmet } from "react-helmet"
import loadable from '@loadable/component'

const ProjectComponent = loadable(() => import('../components/project/Project'));


export default function Project() {
    let params = useParams();
    const projectUrl = params.projectId;
    const project = getProjectsById({ url: params.projectId });
    const projectTitle = project?.title || "";
    const projectShortDescription = project?.shortDescription || "";

    console.log(projectShortDescription)

    return (
        <>
            <Helmet>
                <title>{projectTitle} - Bilel Moussa</title>
                <meta name="description" content={`${projectShortDescription}`} />
                <link rel="canonical" href={`https://www.bilel-moussa.com/${projectUrl}`} />
            </Helmet>
            <ProjectComponent projectUrl={params.projectId} />
        </>
    )
}
