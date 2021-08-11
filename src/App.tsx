import "antd/dist/antd.css";
import firebase from "helpers/config/firebase";
import "firebase/firestore";
import { useEffect, useState } from "react";
import { Colors } from "helpers/enums";
import { Box, Header, SideMenu } from "components";
import { Home } from "pages/Home/Home";

function App() {
  const db = firebase.firestore();
  const [data, setData] = useState<Array<any>>([]);
  const [state, setState] = useState({
    title: "",
    cover: "",
    file: "",
  });
  useEffect(() => {
    fetchTraks();
  }, []);

  const fetchTraks = () => {
    db.collection("Tracks").onSnapshot((snapshot) => {
      const tracks = snapshot.docs.map((i) => ({ id: i.id, ...i.data() }));
      setData(tracks);
    });

    // db.collection("Tracks")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.docChanges().forEach((el) => {
    //       const data = el.doc.data();
    //       // console.log(data.doc.data());
    //       setData((prev) => [...prev, data]);
    //     });
    //   });
  };

  console.log(data);

  const handleInput = (e: any) => {
    // const value: any = e.target.value;
    // console.log(value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (state.title === "" && state.cover === "" && state.file === "") {
      console.log("canot be empty");
    } else {
      db.collection("Tracks").add({
        title: state.title,
        cover: state.cover,
        file: state.file,
      });
    }
  };

  const del = (id: string) => {
    console.log(id);
    db.collection("Tracks")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Deleted");
      });
  };

  return (
    <div className="App">
      <Header />
      <Box display="flex">
        <SideMenu />
      </Box>
      {/* <div style={{ backgroundColor: `${Colors.EbonyClay}`, color: "#fff" }}>
        data
        <div>
          {data.map((d) => (
            <div key={d.id} onClick={() => del(d.id)}>
              {d.title}
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Title"
            value={state.title}
            onChange={handleInput}
            name="title"
          />
          <input
            type="text"
            placeholder="Cover"
            value={state.cover}
            onChange={handleInput}
            name="cover"
          />
          <input
            type="text"
            placeholder="File"
            value={state.file}
            onChange={handleInput}
            name="file"
          />
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </form>
      </div> */}
    </div>
  );
}

export default App;
