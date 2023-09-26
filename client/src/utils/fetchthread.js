import { SERVER_ADDRESS } from "./fetchsection";

export async function fetchThread(){
    const threadData = await fetch(SERVER_ADDRESS + "thread");
    const threadList = await threadData.json();
    return threadList;
}