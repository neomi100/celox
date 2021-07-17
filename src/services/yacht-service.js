import { storageService } from './async-storage.service.js'
const gYachts = require('../../data/yacht.json')

export const yachtService = {
    query,
    getById,
    remove,
    save
}

// query()

function query(filterBy) {
    console.log(filterBy, 'service');
    const { rate } = filterBy
    const { price } = filterBy
   
    console.log(rate,'rate service');
        const { size } = filterBy
        let yachts = JSON.parse(JSON.stringify(gYachts))
      yachts=yachts.filter((yacht)=>yacht.price<price)
        switch (size) {
                    case 'All' || '':
                        break;
                    case 'Small':
                        yachts = yachts.filter((yacht) => yacht.size==='small');
                        break;
                    case 'Medium':
                        yachts = yachts.filter((yacht) => yacht.size==='medium');
                        break;
                    case 'Large':
                        yachts = yachts.filter((yacht) => yacht.size==='large');
                        break;
                }
        switch (rate) {
                    case 'All' || '':
                        break;
                    case 1:
                        yachts = yachts.filter((yacht) =>{
                           
                            console.log(yacht,'yacht service 1');
                            yacht.reviews[0].rate===1;
                            console.log(yacht.reviews[0].rate,'yacht service 1');
                        } )
                        break;
                    case 2:
                        yachts = yachts.filter((yacht) => yacht.reviews[0].rate===2);
                        break;
                    case 3:
                        yachts = yachts.filter((yacht) => yacht.reviews[0].rate===3);
                        break;
                    case 4:
                        yachts = yachts.filter((yacht) => yacht.reviews[0].rate===4);
                        break;
                    case 5:
                        yachts = yachts.filter((yacht) => yacht.reviews[0].rate===5);
                        break;
                }
    return Promise.resolve(yachts)
}


function remove(yachtId) {
    return storageService.delete('yacht', yachtId)

}


function getById(yachtId) {
    const yacht = gYachts.find(yacht => yacht._id === yachtId)
    return Promise.resolve(yacht)
}


async function save(yacht) {
    if (yacht._id) {
        return storageService.put('yacht', yacht)
    } else {
        return storageService.post('yacht', yacht)
    }
}



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