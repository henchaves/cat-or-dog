import React from "react";

const FormUpload = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Upload cat or dog image</h2>
      <form
        action=""
        method="POST"
        encType="multipart/form-data"
        style={styles.form}
      >
        <input type="file" name="file" style={styles.input} />
        <button type="submit">Predict</button>
      </form>
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
    boxShadow: "box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
  },

  title: {
    fontSize: 36,
    fontFamily: "Ubuntu",
  },

  form: {
    display: "flex",
  },

  input: {
    width: 280,
  },
};

export default FormUpload;
