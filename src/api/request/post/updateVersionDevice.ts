import { ResponseDetailDeviceDTO } from "@/interfaces/ResponseDetailDeviceDTO/ResponseDetailDeviceDTO"

export const updateVersionDevice = async () => {
    try {
    const response = await fetch("", {
            method: "POST"
        })
        const results = await response.json()
        const result: ResponseDetailDeviceDTO[] = results
        return result
    } catch (error) {
    }
}