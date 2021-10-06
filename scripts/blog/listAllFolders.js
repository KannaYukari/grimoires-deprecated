import fs from 'fs';

function arrangeFolders() {
    const postsDir = './_posts/';
    let folders = fs.readdirSync(postsDir);
    folders = folders.map((year) => {
        let folderYear = postsDir + year;
        return {year: year,root: folderYear,}
    })
    return (folders)
}

function setSubFolders(allFolders) {
    let allSubFolders = []
    allFolders.forEach(posts => {
        let foldersByMonth = fs.readdirSync(posts.root);
        foldersByMonth.map((month) => {allSubFolders.push(`${posts.root}/${month}/`)})
    });
    return(allSubFolders);
}

export default function listAllFolders(){
    const allFolders = arrangeFolders();
    return (setSubFolders(allFolders));
}