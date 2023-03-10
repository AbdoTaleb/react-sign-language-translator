import {createHeaders } from "."
const apiUrl = process.env.REACT_APP_API_URL

export const addTranslate = async (user, translate) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                username: user.username,
                translations: [...user.translations, translate]
            })
        })
        if(!response.ok){
            throw new Error("could not update the user")
        }
        const result = await response.json()
        return [null, result]
    } catch (error) {
        return [error.message, null ]
    }

} 


export const translateClearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        
        
        if(!response.ok){
            throw new Error("could not update translations")
            
        }
        const result = await response.json()
        return [null, result]
    } catch (error) {
        return [error.message, null]
    }
}