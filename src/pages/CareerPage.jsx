import { useRef, useState } from "react";
import axiosInstance from "../api/axiosInstance.js";
import { useLoading } from "../context/LoadingContext.jsx";

const Input = ({ label, ...props }) => (
  <div className="w-full">
    <label className="block mb-1 font-medium">{label}</label>
    <input
      {...props}
      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
  </div>
);

const RadioGroup = ({ title, options, name }) => (
  <div className="space-y-2">
    <p className="font-semibold mb-2">{title}</p>
    <div className="grid sm:grid-cols-2 gap-2">
      {options.map((opt, i) => (
        <label key={i} className="flex items-center gap-2">
          <input type="radio" name={name} value={opt} required />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

const FileUpload = ({ label, inputRef, name }) => (
  <div>
    <label className="block font-medium mb-2">{label}</label>
    <input
      type="file"
      name={name}
      ref={inputRef}
      className="w-full border border-dashed border-gray-400 p-3 rounded-lg bg-gray-50"
      required
    />
  </div>
);

const CareerPage = () => {
  const formRef = useRef();
  const resumeRef = useRef();
  const { setIsLoading } = useLoading();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      
      formData.append("formType", "career");

      formData.append("full_name", formRef.current["full_name"].value);
      formData.append("phone", formRef.current["phone"].value);
      formData.append("email", formRef.current["email"].value);
      formData.append("dob", formRef.current["dob"].value);
      formData.append("city", formRef.current["city"].value);
      formData.append("qualification", formRef.current["qualification"].value);
      formData.append("post", formRef.current["post"].value);
      formData.append("experience", formRef.current["experience"].value);
      formData.append("designation", formRef.current["designation"].value);
      formData.append("salary", formRef.current["salary"].value);
      formData.append("notice", formRef.current["notice"].value);

      if (resumeRef.current.files[0]) {
        formData.append("resume", resumeRef.current.files[0]);
      }

      await axiosInstance.post("/form/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setStatus("success");
      formRef.current.reset();
      resumeRef.current.value = "";
    } catch (err) {
      console.error("Career form submission failed", err);
      setStatus("error");
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section className="bg-white text-gray-800 px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Online Job Application</h1>

      {status && (
        <div
          className={`mb-6 px-4 py-2 rounded-xl border text-center font-medium ${
            status === "success"
              ? "bg-green-100 text-green-800 border-green-300"
              : "bg-red-100 text-red-800 border-red-300"
          }`}
        >
          {status === "success"
            ? "Application submitted successfully! We'll contact you soon."
            : "Something went wrong. Please try again."}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
        {/* Personal Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-b pb-2">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Full Name" type="text" name="full_name" required />
            <Input label="Contact Number" type="text" name="phone" required />
            <Input label="Email Address" type="email" name="email" required />
            <Input label="Date of Birth" placeholder="dd-mm-yyyy" name="dob" required />
            <Input label="City" type="text" name="city" required />
            <Input label="Highest Qualification" type="text" name="qualification" required />
          </div>
        </div>

        {/* Job Details */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-b pb-2">Job Details</h2>
          <RadioGroup
            title="Post Applied For"
            name="post"
            options={[
              "TGT- English", "TGT- Social Science", "TGT- Hindi",
              "PGT Accountancy", "PGT Business Studies", "PGT Economics",
              "PRT- All Subjects", "Pre-Primary Educator", "PGT Maths", "Other"
            ]}
          />
          <RadioGroup
            title="Experience (in Years)"
            name="experience"
            options={["Fresher (Below 1 Year)", "1-2", "3-4", "5 & Above"]}
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Designation" name="designation" />
            <Input label="Last Drawn Salary" name="salary" />
          </div>
          <RadioGroup
            title="Notice Period"
            name="notice"
            options={["ASAP", "15 Days", "30 Days", "90 Days"]}
          />
        </div>

        {/* Upload Resume */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-b pb-2">Upload Resume</h2>
          <FileUpload
            label="Upload Resume (PDF / Doc)"
            name="resume"
            inputRef={resumeRef}
          />
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-purple-700 text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-purple-800 transition"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
};

export default CareerPage;
