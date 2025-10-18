"use client";
import axios from "axios";
import { useEffect, useState } from "react";
const dummyData = {
  subjects:["English,Maths"],
  Semester:["I","II"],
  Year:["III","IV"]};
export default function Home() {
  const [Subject, setSub] = useState<string[]>([]);
  const [Semester, setSemester] = useState<string[]>([]);
  const [Year, setYear] = useState<string[]>([]);

  const getData = async()=>{
    // let data = await fetch("http://localhost:3000/hello");
    // console.log(data);
    // let things = await data.json()
    // console.log(things.subjects)
    // setData(things.subjects)
    setSub(dummyData.subjects)
    setSemester(dummyData.Semester)
    setYear(dummyData.Year);
  }
  useEffect(()=>{getData()},[]);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <p>Subject:</p>
      <p>{Subject}</p>
    <p>Semester:</p>
      <p>{Semester}</p>
    <p>Year:</p>
      <p>{Year}</p>
    </div>
  );
}
