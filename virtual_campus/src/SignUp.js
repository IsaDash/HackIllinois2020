import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "./signUpErrorMessage";
import "./SignUp.css";

function App() {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
    console.log(data)
    //TODO write to firebase
  };
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const validateUserName = async value => {
    await sleep(1000);
    if (value !== "bill") {
      setError("username", "validate");
    } else {
      clearError("username");
    }
  };

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  console.log(uploadedImage)

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>

    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" ref={register({ required: true })} />
      <ErrorMessage error={errors.firstName} />

      <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true, minLength: 2 })} />
      <ErrorMessage error={errors.firstName} />

      <label>Email</label>
      <input
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <ErrorMessage error={errors.email} />

      <label>Password</label>
      <input
        name="password"
        ref={register({ required: true, min: 18 })}
      />
      <ErrorMessage error={errors.age} />

      <label>Year In School</label>
      <input
        name="year"
        ref={register({ required: false, min: 18 })}
      />
      <ErrorMessage error={errors.age} />

      <label>Major</label>
      <input
        name="major"
        ref={register({ required: false, min: 18 })}
      />
      <ErrorMessage error={errors.age} />

      <label>Semester Class List (comma separated list)</label>
      <input
        name="classes"
        ref={register({ required: false, min: 18 })}
      />
      <ErrorMessage error={errors.age} />

      <label>A Couple Sentences About You</label>
      <textarea name="aboutyou" ref={register} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      <label style={{ color: 'white' }}>Click to upload an image of yourself! (face only)</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: "none"
          }}
        />
        <div
          style={{
            height: "100px",
            width: "100px",
          }}
          onClick={() => imageUploader.current.click()}
        >
          <img
            ref={uploadedImage}
            style={{
              width: "100%",
              height: "100%",
              position: "acsolute"
            }}
          />
        </div>

      </div>

      <input disabled={isSubmitting} type="submit" />

    </form>

    </div>

  );
}

export default App;
