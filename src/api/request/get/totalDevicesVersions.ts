import { TotalDevicesVersionsDTO } from "@/interfaces/TotalDevicesVersionsDTO/TotalDevicesVersionsDTO"

export const totalDevicesVersions = async () => {
    try {
    const response = await fetch("", {
            method: "GET"
        })
        const results = await response.json()
        const result: TotalDevicesVersionsDTO[] = results
        return result
    } catch (error) {
    }
}