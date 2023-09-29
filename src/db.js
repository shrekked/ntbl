import fs from 'node:fs/promises'

const DB_PATH = new URL('../db.json', import.meta.url).pathname;

export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, 'utf-8')
    return JSON.parse(db)
}

export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 4))
    return db
}

export const insertDB = async (note) => {
    const db = await getDB()
    db.notes.push(note)
    await saveDB(db)
    return note
}

export const findNotes = async (filter) => {
    const { notes } = await getDB()
    return notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()))
}

export const removeNote = async id => {
    const notes = await getDB()
    const match = notes.find(note => note.id === id)

    if (match) {
        const newNotes = notes.filter(note => note.id !== id)
        await saveDB({notes: newNotes})
        return id
    }
}

export const removeAllNotes = () => saveDB({notes: []})
