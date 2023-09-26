export const SERVER_ADDRESS = "http://localhost:3000/"

export async function fetchSection() {
    const sectionData = await fetch(SERVER_ADDRESS + "section");
    const sectionList = await sectionData.json();
    return sectionList;
}