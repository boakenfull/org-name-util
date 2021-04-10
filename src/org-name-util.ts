// Anything exported from this file is importable by other in-browser modules.
export async function publicApiFunction() {
    const resp = await fetch('https://restcountries.eu/rest/v2/all')
    return resp.json();
}
