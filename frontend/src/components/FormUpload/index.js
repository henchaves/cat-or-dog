import React from "react";
// import axios from "axios";

const FormUpload = () => {
  const apiUrl = "http://localhost:5000/";

  const [loading, setLoading] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [predictedClass, setPredictedClass] = React.useState(null);
  var formData = new FormData();

  function handleFileChange(e) {
    setPredictedClass(null);
    setImage(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    formData.append("file", image);
    setLoading(true);
    const response = await fetch(apiUrl, {
      // mode: "no-cors",
      method: "POST",
      body: formData,
    });

    const responseJson = await response.json();

    setLoading(false);
    setPredictedClass(responseJson["predicted_class"]);
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Upload cat or dog image</h2>
      <div style={styles.form}>
        <div style={styles.row}>
          <input
            type="file"
            name="file"
            style={styles.input}
            onChange={handleFileChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Predict
          </button>
        </div>
        {loading && <p style={{textAlign: "center"}}>Loading...</p>}
        {predictedClass && (
          <p style={{ textAlign: "center" }}>
            Predicted:{" "}
            <span style={styles.predicted}>{predictedClass.toUpperCase()}</span>
          </p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: "64px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(88, 88, 120, 0.3)",
    borderRadius: 5,
    width: 480,
    height: 280,
    padding: 20,
    boxShadow:
      "box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },

  title: {
    fontSize: 36,
    fontFamily: "Ubuntu",
  },

  row: {
    display: "flex",
  },

  form: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    width: 280,
  },

  predicted: {
    color: "#bb0000",
  },
};

export default FormUpload;
