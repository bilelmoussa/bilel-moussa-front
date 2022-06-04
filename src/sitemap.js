import { projects } from './projects-data';
import fs from 'fs';
import moment from 'moment';


const renderURLs = () => {
    return projects
    .map((project) => {
        return `
    <url>

        <loc>${`https://www.bilel-moussa.com/portfolio/${project.url}`}</loc>
            
        <lastmod>${`${moment().format()}`}</lastmod>

    </url>
        ` 
    }).join("")
}

const sitemap = `<?xml version='1.0' encoding='UTF-8'?>

<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

         xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"

         xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>

        <loc>https://www.bilel-moussa.com</loc>

        <lastmod>${`${moment().format()}`}</lastmod>

    </url>

    <url>

        <loc>https://www.bilel-moussa.com/about</loc>

        <lastmod>${`${moment().format()}`}</lastmod>

    </url>

    <url>

        <loc>https://www.bilel-moussa.com/contact</loc>

        <lastmod>${`${moment().format()}`}</lastmod>

    </url>

    <url>

        <loc>https://www.bilel-moussa.com/skills</loc>

        <lastmod>${`${moment().format()}`}</lastmod>

    </url>

    <url>

        <loc>https://www.bilel-moussa.com/404</loc>

        <lastmod>${`${moment().format()}`}</lastmod>

    </url>

	<url>

		<loc>https://www.bilel-moussa.com/portfolio</loc>

        <lastmod>${`${moment().format()}`}</lastmod>

	</url>

    ${renderURLs()}
</urlset>`;


fs.writeFileSync('../public/sitemap.xml', sitemap);