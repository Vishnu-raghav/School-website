import {
  FaSchool,
  FaFileAlt,
  FaChartLine,
  FaChalkboardTeacher,
  FaUserTie,
  FaTools,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full text-xs sm:text-sm border border-blue-300 mb-6 table-auto">
      <thead className="bg-gray-100 text-blue-900 text-left">
        <tr>
          {headers.map((head, i) => (
            <th key={i} className="border px-2 sm:px-3 py-2 font-semibold whitespace-nowrap">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50">
            {row.map((cell, j) => (
              <td
                key={j}
                className="border px-2 sm:px-3 py-2 text-gray-800 text-left whitespace-pre-line align-top break-words"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Section = ({ icon, title, children }) => (
  <div className="bg-[#f0f6ff] border border-blue-200 rounded-xl px-4 sm:px-6 py-5 mb-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="text-blue-700 text-lg">{icon}</div>
      <h2 className="text-lg sm:text-xl font-semibold text-blue-900 border-l-4 pl-3 border-blue-500">
        {title}
      </h2>
    </div>
    {children}
  </div>
);

export default function MandatoryDisclosure() {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-8 overflow-x-hidden">
      <Helmet>
        <title>Mandatory Public Disclosure | Krishna Public School Faridabad</title>
        <meta
          name="description"
          content="Mandatory Public Disclosure of Krishna Public School including infrastructure details, staff information, certificates, academic results, and more."
        />
        <meta
          name="keywords"
          content="Krishna Public School Mandatory Disclosure, school certificates, school results, CBSE school documents, school infrastructure Faridabad"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://krishnapublicschool.net/mandatory-disclosure" />
        <meta property="og:title" content="Mandatory Public Disclosure | Krishna Public School Faridabad" />
        <meta property="og:description" content="Explore the mandatory public disclosure section of Krishna Public School. Find certificates, results, staff, and infrastructure details." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishnapublicschool.net/mandatory-disclosure" />
        <meta property="og:image" content="https://krishnapublicschool.net/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mandatory Disclosure - Krishna Public School" />
        <meta name="twitter:description" content="All CBSE required disclosures: certificates, results, infrastructure, and staff info from Krishna Public School, Faridabad." />
        <meta name="twitter:image" content="https://krishnapublicschool.net/preview.jpg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Mandatory Public Disclosure",
            "url": "https://krishnapublicschool.net/mandatory-disclosure",
            "description": "This page displays the official mandatory public disclosures of Krishna Public School including CBSE-required documents, infrastructure, and academic information.",
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "Krishna Public School",
              "url": "https://krishnapublicschool.net",
              "logo": {
                "@type": "ImageObject",
                "url": "https://krishnapublicschool.net/logo.png"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sarswati Colony, Sehatpur",
                "addressLocality": "Faridabad",
                "addressRegion": "Haryana",
                "postalCode": "121003",
                "addressCountry": "IN"
              }
            }
          }
        `}</script>
      </Helmet>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-blue-900 mb-10">
          Mandatory Public Disclosure
        </h1>

        {/* Sections go here - unchanged content below remains as-is, following Table & Section structure */}
                {/* A. General Information */}
        <Section icon={<FaSchool />} title="A. General Information">
          <Table
            headers={["S.No.", "Information", "Details"]}
            rows={[
              ["1", "Name of School", "Krishna Public School"],
              ["2", "Affiliation No. (If Applicable)", "Not Applicable"],
              ["3", "School Code (If Applicable)", "Not Applicable"],
              ["4", "Complete Address", "Sarwan Colony, Sewarpar, Gorakhpur, 273401"],
              ["5", "Principal Name", "Mr. Sunny Kumar Sharma"],
              ["6", "Principal Qualification", "M.A., B.Ed."],
              ["7", "School Email ID", "info@kpschool.edu.in"],
              ["8", "Contact Details", "+91-9876543210"],
            ]}
          />
        </Section>

        {/* Other sections would go below following similar structure... */}
        {/* B. Documents */}
        <Section icon={<FaFileAlt />} title="B. Documents & Information">
          <Table
            headers={["S.No.", "Documents", "Download"]}
            rows={[
              ["1", "Self-Certification", <a href="/docs/GetSelfCertification.pdf" download className="text-blue-700 underline">Click here</a>],
              ["2", "Water, Health & Sanitation", <a href="/docs/Water_Health.pdf" download className="text-blue-700 underline">Click here</a>],
              ["3", "Building Fitness Certificate (PWD)", <a href="/docs/BFC_PWD.pdf" download className="text-blue-700 underline">Click here</a>],
              ["4", "Fire Safety Certificate", <a href="/docs/Fire-Certificate.pdf" download className="text-blue-700 underline">Click here</a>],
              ["5", "Recognition Certificate", <a href="/docs/Recognition.pdf" download className="text-blue-700 underline">Click here</a>],
              ["6", "NOC from State Government", <a href="/docs/NOC.pdf" download className="text-blue-700 underline">Click here</a>],
              ["7", "Society Registration Certificate", <a href="/docs/Krishna-society_RC.pdf" download className="text-blue-700 underline">Click here</a>],
              ["8", "Affiliation Certificate", <a href="/docs/Affiliation.pdf" download className="text-blue-700 underline">Click here</a>],
            ]}
          />
        </Section>

        {/* C. Result & Academics */}
        <Section icon={<FaChartLine />} title="C. Result & Academics">
          <Table
            headers={["S.No.", "Information", "Download"]}
            rows={[
              ["1", "Fee Structure", <a href="/docs/Fee-Structure .pdf" download className="text-blue-700 underline">Click here</a>],
              ["2", "Annual Academic Calendar", <a href="/docs/Annual-Calender .pdf" download className="text-blue-700 underline">Click here</a>],
              ["3", "School Management Committee (SMC)", <a href="/docs/Krishna-SMC.pdf" download className="text-blue-700 underline">Click here</a>],
              ["4", "PTA Members", "-"],
              ["5", "Last 3 Year Board Result", <a href="/docs/Krishna-Result.pdf" download className="text-blue-700 underline">Click here</a>],
            ]}
          />
        </Section>
{/* D. Staff (Teaching) */}
<Section icon={<FaChalkboardTeacher />} title="D. Staff (Teaching)">
  <Table
    headers={["S.No.", "Information", "Details"]}
    rows={[
      ["1", "Principal", "SHIKHA BHATT"],
      ["2", "Total Number of Teachers", ""],
      ["", "Principal", "1"],
      ["", "Vice Principal", "1"],
      ["", "PGT", "11"],
      ["", "TGT", "18"],
      ["", "PRT", "20"],
      ["", "PET", "1"],
      ["", "Librarian", "1"],
      ["", "NTT", "05"],
      ["", "Wellness Teacher", "1"],
      ["", "Special Educator", "1"],
      ["3", "Teachers Section Ratio", ""],
      ["4", "Details of Special Educator", "Chirag Sengar, BEd (Spl. Edn), BA"],
      ["5", "Details of Counsellor and Wellness Teacher", "Karishma Rani, MA (Psychology), BEd"]
    ]}
  />
</Section>


{/* E. Results */}
<Section icon={<FaUserTie />} title="E. Results (Class X & XII)">
  {/* Result Class X */}
  <h3 className="font-semibold text-blue-900 mb-3">RESULT CLASS: X</h3>
  <table className="w-full text-sm border border-blue-300 table-auto">
    <thead className="bg-blue-100 text-blue-900">
      <tr>
        {["S.No.", "Year", "No. of Registered Students", "No. of students passed", "Pass %", "Remarks"].map((text, i) => (
          <th key={i} className="border px-2 py-1 text-left text-xs sm:text-sm">
            {text}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {[
        ["1", "2024-25", "98", "98", "100", "Yashi = 97%"],
        ["2", "2023-24", "90", "90", "100", "Tajinder Saini = 92.8%"],
        ["3", "2022-23", "77", "73", "95", "Akansha Kumari = 96.8%"],
      ].map((row, i) => (
        <tr key={i} className="text-gray-800">
          {row.map((cell, j) => (
            <td key={j} className="border px-2 py-1 text-xs sm:text-sm align-top break-words">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>

  {/* Result Class XII */}
  <h3 className="font-semibold text-blue-900 mt-8 mb-3">RESULT CLASS: XII</h3>
  <table className="w-full text-sm border border-blue-300 table-auto">
    <thead className="bg-blue-100 text-blue-900">
      <tr>
        {["S.No.", "Year", "No. of Registered Students", "No. of students passed", "Pass %", "Remarks"].map((text, i) => (
          <th key={i} className="border px-2 py-1 text-left text-xs sm:text-sm">
            {text}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {[
        ["1", "2024-25", "30", "30", "100", "Neeraj Aswal = 93%"],
        ["2", "2023-24", "29", "28", "97", "Yuvika Semalti = 94%"],
        ["3", "2022-23", "17", "16", "94", "-"],
      ].map((row, i) => (
        <tr key={i} className="text-gray-800">
          {row.map((cell, j) => (
            <td key={j} className="border px-2 py-1 text-xs sm:text-sm align-top break-words">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</Section>




<Section icon={<FaTools />} title="F. School Infrastructure">
  <div className="w-full">
    <table className="w-full table-auto border border-gray-300 text-sm md:text-base">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border border-gray-300 text-left align-top w-[10%]">S.No.</th>
          <th className="p-2 border border-gray-300 text-left align-top w-[45%]">Information</th>
          <th className="p-2 border border-gray-300 text-left align-top w-[45%]">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border border-gray-300 align-top">1</td>
          <td className="p-2 border border-gray-300">TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td>
          <td className="p-2 border border-gray-300">8093.44 Sq.M.</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-300 align-top">2</td>
          <td className="p-2 border border-gray-300">NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)</td>
          <td className="p-2 border border-gray-300">-</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-300 align-top">3</td>
          <td className="p-2 border border-gray-300">
            NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)
          </td>
          <td className="p-2 border border-gray-300 whitespace-pre-line leading-relaxed break-words">
            01 – Science Lab (55.74 Sq.M.)<br />
            01 – Maths Lab (46.45 Sq.M.)<br />
            01 – Computer Lab (55.74 Sq.M.)<br />
            01 – Physics Lab (57.97 Sq.M.)<br />
            01 – Chemistry Lab (68.51 Sq.M.)<br />
            01 – Biology Lab (57.06 Sq.M.)
          </td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-300 align-top">4</td>
          <td className="p-2 border border-gray-300">INTERNET FACILITY</td>
          <td className="p-2 border border-gray-300">Yes</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-300 align-top">5</td>
          <td className="p-2 border border-gray-300">NO. OF GIRLS TOILETS</td>
          <td className="p-2 border border-gray-300">28 + 02 CWSN + 03 Staff (Female)</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-300 align-top">6</td>
          <td className="p-2 border border-gray-300">NO. OF BOYS TOILETS</td>
          <td className="p-2 border border-gray-300">26 + 02 CWSN + 03 Staff (Male)</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-300 align-top">7</td>
          <td className="p-2 border border-gray-300">
            LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL
          </td>
          <td className="p-2 border border-gray-300">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="text-blue-700 underline"
            >
              ClickHere
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</Section>




      </div>
    </div>
  );
}
