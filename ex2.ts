interface IStudent {
    name: string
    score: number
}

interface IStore {
    subject: string
    students: IStudent[]
}

interface IStudentUpdateScore {
    name: string
    scores: Record<string, number>
}

interface IRemoveStudentScore {
    name: string
    subject: string
}

interface IStudentScore {
    [key: string]: any
}


export const updateStudentScore = (store: IStore[], update: IStudentUpdateScore): IStore[] => {
    let checkName = update.name
    let checkSub = Object.getOwnPropertyNames(update.scores)
    checkSub.forEach((sub) => {
        let indexPush
        const indexSub = store.findIndex(i => i.subject === sub)
        store.forEach((value, index) => {
            if (indexSub === index) {
                let indexName = store[indexSub].students.findIndex(i => i.name === checkName)
                if (indexName >= 0) {
                    store[indexSub].students[indexName] = {name: update.name, score: update.scores[value.subject]}
                } else {
                    store[indexSub].students.push({name: update.name, score: update.scores[value.subject]})
                }
            }
            if (indexSub === -1) {
                if (!indexPush) {
                    indexPush = store.push({
                        subject: sub,
                        students: [{name: update.name, score: update.scores[sub]}]
                    })
                }
            }
        })
    })
    console.log('Store= ', store)
    console.log('Store= ', JSON.stringify(store))
    return store
}

export const removeStudentScoreBySubject = (store: IStore[], record: IRemoveStudentScore): IStore[] => {
    let checkName = record.name
    let checkSub = record.subject
    const indexSub = store.findIndex(i => i.subject === checkSub)
    let indexName = store[indexSub].students.findIndex(i => i.name === checkName)
    store.forEach((value, index, array) => {
        if (checkSub === value.subject) {
            store[indexSub].students.splice(indexName, 1)
        }
    })
    console.log('Store= ', store)
    console.log('Store= ', JSON.stringify(store))
    return store
}

export const getStudentScoreBySubject = (store: IStore[], subjects: string[]): IStudentScore[] => {
    let studentScoreBySubject = []
    subjects.forEach((subject) => {
        const found = store.find(element => element.subject == subject);
        found.students.forEach((value) => {
            let checkName = studentScoreBySubject.find(element => element.name == value.name);
            if (checkName) {
                let checkNameIndex = studentScoreBySubject.findIndex(element => element.name == value.name);
                if (found.students.length === 1) {
                    let getData = studentScoreBySubject[checkNameIndex + 1]
                    studentScoreBySubject[checkNameIndex + 1] = {
                        ...getData,
                        [subject]: null,
                    }
                }
                studentScoreBySubject[checkNameIndex] = {
                    ...checkName,
                    [subject]: value.score,
                }
            } else {
                studentScoreBySubject.push({
                    name: value.name,
                    [subject]: value.score,
                })
            }
        })
    })

    console.log('studentScoreBySubject=', studentScoreBySubject)
    return studentScoreBySubject
}
