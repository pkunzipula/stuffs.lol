import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./Homepage";
import AddStuffs from "./AddStuffs";
import SeeStuffs from "./SeeStuffs";
import { Router } from "@reach/router";
import { openDB, deleteDB } from "idb";

const initDatabase = async () => {
  const dbName = "zeeStuffs";
  const storeName = "stuffsStore";
  const version = 1;

  const db = await openDB(dbName, version, {
    upgrade(db, oldVersion, newVersion, transaction) {
      const store = db.createObjectStore(storeName, { autoIncrement: true });
    }
  });
  return [db, storeName];
};

const initStuffs = async () => {
  const [db, storeName] = await initDatabase();
  const tx = db.transaction(storeName, "readonly");
  const store = tx.objectStore(storeName).getAll();
  await tx.done;
  return store;
};

const storeStuffs = async stuff => {
  let [db, storeName] = await initDatabase();
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  // await store.put(stuff);
  store.put(stuff);
  await tx.done;
};

const sortStuffs = async () => {
  let stuffs = await initStuffs();
  // Sort Stuffs in DESC order by date

  stuffs = stuffs.sort((a, b) => {
    return new Date(b.datetime) - new Date(a.datetime);
  });

  return stuffs;
};

function App() {
  const [stuffs, setStuffs] = useState([]);

  useEffect(() => {
    (async () => {
      const store = await sortStuffs();
      setStuffs(store);
    })();
  }, [setStuffs]);

  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <AddStuffs path="add-stuffs" storeStuffs={storeStuffs} />
        <SeeStuffs path="see-stuffs" stuffs={stuffs} />
      </Router>
    </div>
  );
}

export default App;
