
export const updateVersionDevice = async () => {
    try {
    const response = await fetch("", {
            method: "POST"
        })
        const results = await response.json()
        const result: any = results
        return result
    } catch (error) {
    }
}