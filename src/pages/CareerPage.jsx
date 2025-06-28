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
          <input type="radio" name={name} />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

const FileUpload = ({ label }) => (
  <div>
    <label className="block font-medium mb-2">{label}</label>
    <input
      type="file"
      className="w-full border border-dashed border-gray-400 p-3 rounded-lg bg-gray-50"
    />
  </div>
);

const CareerPage = () => {
  return (
    <section className="bg-white text-gray-800 px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Online Job Application</h1>
      <form className="space-y-10">

        {/* Section: Personal Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-b pb-2">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Input label="Full Name" type="text" autoFocus />
            <Input label="Contact Number" type="text" />
            <Input label="Email Address" type="email" />
            <Input label="Date of Birth" placeholder="dd-mm-yyyy" />
            <Input label="City" type="text" />
            <Input label="Highest Qualification" type="text" />
          </div>
        </div>

        {/* Section: Job Details */}
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
            <Input label="Designation" />
            <Input label="Last Drawn Salary" />
          </div>
          <RadioGroup
            title="Notice Period"
            name="notice"
            options={["ASAP", "15 Days", "30 Days", "90 Days"]}
          />
        </div>

        {/* Section: Uploads */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold border-b pb-2">Upload Documents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FileUpload label="Upload Resume (PDF / Doc)" />
            <FileUpload label="Upload Passport Size Photo (JPG only)" />
          </div>
        </div>

        {/* Submit */}
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
