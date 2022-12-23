import React, { useCallback, useState } from "react";
import CommonHero from "../components/CommonHero/CommonHero";
import styles from "./../sass/pages/Submission.module.scss";
import { useDropzone } from "react-dropzone";

function Submission() {
  return (
    <div>
      <CommonHero
        title="Clearance"
        info=""
        bg={
          "https://www.np.edu.sg/images/default-source/admissions-enrolment2/guide-for-prospective-students/course-fee.jpg"
        }
      />
      <form>
        <div>
          <label>Email: </label>
          <input />
        </div>
        <div>
          <label htmlFor="pre">Submission Type</label>
          <select>
            <option value="" hidden>
              {" "}
              Choose Clearance Type
            </option>
            <option value="Manuscript">Manuscript</option>
            <option value="Advert">Advert</option>
            <option value="Exhibition">Exhibition</option>
          </select>
        </div>
        <div>
          <label>Evidence of Payment</label>
          <FileUploader />
        </div>
        <div>
          <label>Submission</label>
          <FileUploader />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

const FileUploader = () => {
  const [requiredUpload, setRequiredUpload] = useState(null);
  const onDrop = useCallback(async (acceptedFiles) => {
    setRequiredUpload("");
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={styles.fileInput} {...getRootProps()}>
      <input {...getInputProps()} directory="" webkitdirectory="" type="file" />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>
          {requiredUpload
            ? "File Ready"
            : "Drag and drop some files here, or click to select files"}
        </p>
      )}
    </div>
  );
};

export default Submission;
