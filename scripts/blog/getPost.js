import grayMatter from 'gray-matter'
import fs from 'fs';
import {remark} from 'remark';
import remarkHtml from 'remark-html';
import listAllFolders from './listAllFolders';
import markdown from 'remark-parse';

function preparePost(filename, metadata, htmlContent) {
    return {
        metadata:{
            slug: filename.slice(0, -3),
            href: `./${metadata.category}/${filename.slice(0, -3)}`,
            ...metadata
        },
        content: htmlContent
    };
}

function compareTarget(metadata, slug) {
    if (slug.toLowerCase() == metadata.toLowerCase()) {
        return (true);
    }
    return (false);
}

function getTarget(allSubFolders, slug) {
    let target = ''
    allSubFolders.forEach(subFolderDir => {
        let postsOfTheMonth = fs.readdirSync(subFolderDir);
        postsOfTheMonth.forEach(filename => {
            let postDir = subFolderDir+filename;
            let fileContent = fs.readFileSync(postDir, 'utf-8');
            const {content, data: metadata} = grayMatter(fileContent);

            const htmlContent = remark()
                .use(markdown)
                .use(remarkHtml)
                .processSync(content)
                .toString();
            
            const post = preparePost(filename, metadata, htmlContent);
            const isTarget = compareTarget(post.metadata.slug, slug)
            if (isTarget) {
                target =  post;
            };
        })
    })
    return(target);
}

export default function getPost(slug) {
    const allSubFolders = listAllFolders();
    const targetPost = getTarget(allSubFolders, slug);
    return(targetPost);
}