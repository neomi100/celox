// const { error } = require('console');
// const fs = require('fs')
// import { storageService } from './async-storage.service.js'
const gYacht = require('../../data/yacht.json')

// const PAGE_SIZE = 5;

export const yachtService = {
    query,
    // getById,
    // remove,
    // save
}


function query() {
    // return storageService.query(gYacht)
    // const regex = new RegExp(filterBy.txt, 'i')
    // const startIdx = filterBy.pageIdx * PAGE_SIZE
    // let bugsToSend = gBugs.filter(bug => regex.test(bug.vendor))
    // bugsToSend = bugsToSend.slice(startIdx, startIdx + PAGE_SIZE)
    return Promise.resolve(gYacht)
    // return axios.get('/yachtPage').then(res => res.data)
}

// function getById(bugId) {
//     const bug = gBugs.find(bug => bug._id === bugId)
//     return Promise.resolve(bug)
// }

// function remove(bugId, user) {
//     console.log('user._id :>> ', user._id);
//     const idx = gBugs.findIndex(bug => bug._id === bugId && (user.isAdmin || bug.creator._id === user._id))
//     console.log('idx :>> ', idx);
//     if (idx >= 0) {
//         gBugs.splice(idx, 1);
//         return _saveBugsToFile()
//     }
//     return Promise.reject('Not your bug ' + bugId)
// }

// function save(bugToSave, user) {
//     // console.log('bugToSave :>> ', bugToSave);
//     const bug = {
//         _id: bugToSave._id || _makeId(),
//         title: bugToSave.title,
//         description: bugToSave.description,
//         severity: bugToSave.severity,
//         createdAt: bugToSave.createdAt,
//         creator: bugToSave.creator
//     }
//     if (bugToSave._id) {
//         const idx = gBugs.findIndex(bug => bug._id === bugToSave._id && (user.isAdmin || bug.creator._id === user._id))
//         gBugs[idx] = bug;
//     } else {
//         gBugs.unshift(bug)
//     }
//     return _saveBugsToFile().then(() => {
//         return bug;
//     })
// }

// function _makeId(length = 5) {
//     const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var txt = '';
//     for (let i = 0; i < length; i++) {
//         txt += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return txt;
// }

// function _saveBugsToFile() {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('data/bug.json', JSON.stringify(gBugs, null, 2), (err) => {
//             if (err) return reject(err)
//             resolve();
//         })
//     })
// }

// function getEmptyBug() {
//     return { _id: '', vendor: '', maxSpeed: 0 }
// }