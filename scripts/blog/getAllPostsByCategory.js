import grayMatter from 'gray-matter'
import fs from 'fs';
import {remark} from 'remark';
import remarkHtml from 'remark-html';
import listAllFolders from './listAllFolders';

const allPosts = [];

function preparePost(filename, metadata, htmlContent) {
    return {
        metadata:{
            slug: filename.slice(0, -3),
            href: `/${metadata.category}/${filename.slice(0, -3)}`,
            ...metadata
        },
        content: htmlContent
    };
}

function addPost(post , metadata, category) {
    switch (category) {
        case 'all':
            allPosts.push(post)
            break;
    
        default:
            if (metadata.category == category){
                allPosts.push(post)
            }
            break;
    }
}

export default function getAllPostsByCategory(category = 'all') {
    const allSubFolders = listAllFolders();
    
    allSubFolders.forEach(subFolderDir => {
        let postsOfTheMonth = fs.readdirSync(subFolderDir);
        postsOfTheMonth.forEach(filename => {
            let postDir = subFolderDir+filename;
            let fileContent = fs.readFileSync(postDir, 'utf-8');
            const {content, data: metadata} = grayMatter(fileContent);
            const htmlContent = remark()
                .use(remarkHtml)
                .processSync(content)
                .toString();
            
            let post = preparePost(filename, metadata, htmlContent);
            addPost(post, metadata, category);
        })
    })

    return(allPosts);
}