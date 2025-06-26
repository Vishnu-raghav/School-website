import {
  FaSchool,
  FaFileAlt,
  FaChartLine,
  FaChalkboardTeacher,
  FaUserTie,
  FaTools,
} from "react-icons/fa";

const Section = ({ icon, title, children }) => (
  <div className="bg-[#f0f6ff] border border-blue-200 rounded-xl px-6 py-5 mb-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-blue-700 text-lg">{icon}</div>
      <h2 className="text-xl font-semibold text-blue-900 border-l-4 pl-3 border-blue-500">
        {title}
      </h2>
    </div>
    <div className="text-gray-800 text-sm leading-relaxed">{children}</div>
  </div>
);

export default function MandatoryDisclosure() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-10">
          Mandatory Public Disclosure
        </h1>

        {/* A. General Information */}
        <Section icon={<FaSchool />} title="A. General Information">
          <ul className="grid sm:grid-cols-2 gap-3">
            <li><strong>School Name:</strong> Krishna Public School</li>
            <li><strong>Affiliation No:</strong> 1234567</li>
            <li><strong>School Code:</strong> 998877</li>
            <li><strong>Address:</strong> ABC Road, XYZ City</li>
            <li><strong>Principal:</strong> Mr. Sharma</li>
            <li><strong>Qualification:</strong> M.Sc, B.Ed</li>
            <li><strong>Email:</strong> info@kpschool.edu.in</li>
            <li><strong>Phone:</strong> +91-9876543210</li>
          </ul>
        </Section>

        {/* B. Documents */}
        <Section icon={<FaFileAlt />} title="B. Documents & Information">
          <ul className="list-disc pl-5 space-y-2">
            {[
              "Affiliation/Upgradation Letter",
              "Society Registration Certificate",
              "NOC from State Govt.",
              "Recognition Certificate (RTE)",
              "Building Safety Certificate",
              "Fire Safety Certificate",
              "DEO/Self Certification",
              "Water, Health & Sanitation Certificates",
            ].map((doc, idx) => (
              <li key={idx}>
                {doc}: <a href="#" className="text-blue-700 underline">Click here</a>
              </li>
            ))}
          </ul>
        </Section>

        {/* C. Academics */}
        <Section icon={<FaChartLine />} title="C. Result & Academics">
          <ul className="list-disc pl-5 space-y-2">
            {[
              "Fee Structure",
              "Academic Calendar",
              "School Management Committee (SMC)",
              "PTA Members",
              "Last 3 Years Board Results",
            ].map((item, idx) => (
              <li key={idx}>
                {item}: <a href="#" className="text-blue-700 underline">Click here</a>
              </li>
            ))}
          </ul>
        </Section>

        {/* D. Staff */}
        <Section icon={<FaChalkboardTeacher />} title="D. Staff (Teaching)">
          <ul className="grid sm:grid-cols-2 gap-3">
            <li><strong>Total Teachers:</strong> 40</li>
            <li><strong>PGTs:</strong> 10</li>
            <li><strong>TGTs:</strong> 15</li>
            <li><strong>PRTs:</strong> 15</li>
            <li><strong>Special Educator:</strong> Available</li>
            <li><strong>Counsellor:</strong> Available</li>
            <li><strong>Ratio:</strong> 1:1.50</li>
          </ul>
        </Section>

        {/* E. Results */}
        <Section icon={<FaUserTie />} title="E. Results (Class X & XII)">
          {["Class X", "Class XII"].map((label, i) => (
            <div key={i} className="mb-5">
              <h3 className="font-medium mb-2 text-blue-800">{label}</h3>
              <table className="w-full text-sm border border-blue-200">
                <thead className="bg-blue-100 text-blue-900">
                  <tr>
                    {["Year", "Registered", "Passed", "Pass %", "Remarks"].map((th) => (
                      <th key={th} className="border px-2 py-1">{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[2021, 2022, 2023].map((year) => (
                    <tr key={year} className="text-center">
                      <td className="border px-2 py-1">{year}</td>
                      <td className="border px-2 py-1">100</td>
                      <td className="border px-2 py-1">98</td>
                      <td className="border px-2 py-1">98%</td>
                      <td className="border px-2 py-1">-</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </Section>

        {/* F. Infrastructure */}
        <Section icon={<FaTools />} title="F. School Infrastructure">
          <ul className="grid sm:grid-cols-2 gap-3">
            <li><strong>Campus Area:</strong> 8000 sq.m.</li>
            <li><strong>Classrooms:</strong> 40 (45 sq.m.)</li>
            <li><strong>Labs:</strong> 5 (60 sq.m.)</li>
            <li><strong>Internet:</strong> Yes</li>
            <li><strong>Girls Toilets:</strong> 10</li>
            <li><strong>Boys Toilets:</strong> 12</li>
            <li>
              <strong>Inspection Video:</strong>{" "}
              <a href="#" className="text-blue-700 underline">Watch</a>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
