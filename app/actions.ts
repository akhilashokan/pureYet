'use server'
export default async function getcity(currentState, formdata: FormData) {
    // console.log(formdata, currentState);
    const city = formdata?.get('city')?.toString();
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
    return fetch(url)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
}



export async function getPolutionData(currentState, formdata: FormData) {
    const city = formdata?.get('selectedCity')?.toString() || '';
    const cityCords = city?.split(',');
    if (cityCords?.length < 1) return null;
    const [latitude, longitude] = cityCords;
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=pm10,pm2_5`
    return fetch(url)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
}
