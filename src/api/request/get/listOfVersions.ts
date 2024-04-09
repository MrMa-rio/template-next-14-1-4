import { ListOfVersionsDTO } from "@/interfaces/ListOfVersionsDTO/ListOfVersionsDTO"

export const listOfVersions = async () => {
    try {
    const response = await fetch("", {
            method: "GET"
        })
        const results = await response.json()
        const result: any = results //ListOfVersionsDTO
        return result
    } catch (error) {
    }
}