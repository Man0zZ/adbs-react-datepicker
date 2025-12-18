import { useState } from "react";
import Datepicker from "../src/Datepicker";

export default function App() {
  const [date, setDate] = useState("");
  console.log("Selected date:", date);

  return (
    <div className='flex gap-4'>
      <Datepicker calendar='AD' onChange={(d) => setDate(d)} />
      <Datepicker calendar='BS' onChange={(d) => setDate(d)} />
    </div>
  );
}
