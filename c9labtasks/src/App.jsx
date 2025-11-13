import axios from "axios";
import React, { useEffect, useState } from "react";
import Task3 from "./task 3/Task3";

const App = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]); 
  const [search, setSearch] = useState("");

  useEffect(() => {
    apicall();
  }, []);

  function apicall() {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
      setAllData(res.data); 
    });
  }

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (!value.trim()) {
    
      setData(allData);
    } else {
      const filtered = allData.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      setData(filtered);
    }
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          placeholder="Search by name"
          style={{ padding: "5px" }}
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="stylecss">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}
            >
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Company:</strong> {item.company.name}
              </p>
            </div>
          ))}
      </div>

      {/* task 3 */}
      <Task3 />
    </>
  );
};

export default App;
