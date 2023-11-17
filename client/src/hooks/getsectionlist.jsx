import { useEffect, useState } from "react";

const SERVER_ADDRESS = "http://localhost:3000/";


// returns the list of all sections
export default function getSectionList(){
  const [sectionList, setSectionList] = useState([]);

  async function fetchSectionList() {
    const data = await fetch(SERVER_ADDRESS + "section");
    const sectionList = await data.json();
    return setSectionList(sectionList);
  }

  useEffect(() => {
    fetchSectionList()
  }, [])
  return sectionList;
}

