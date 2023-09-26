import { useState, useEffect } from "react";

const SERVER_ADDRESS = "http://localhost:3000/";

export default function getThreadList(){
    const [ThreadList, setThreadList] = useState([]);
  
    async function fetchThreadList() {
      const data = await fetch(SERVER_ADDRESS + "thread");
      const threadList = await data.json();
      return setThreadList(threadList);
    }
  
    useEffect(() => {
      fetchThreadList()
    }, [])
    return threadList;
  }
  