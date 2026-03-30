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

          {/* A. General Information */}
        <Section title="A. General Information">
          <Table
            headers={["S.No.", "Information", "Details"]}
            rows={[
              ["1", "Name of School", "Krishna Public School"],
              ["2", "Affiliation No. (If Applicable)", "Not Applicable"],
              ["3", "School Code (If Applicable)", "Not Applicable"],
              ["4", "Complete Address", "SEHATPUR, FARIDABAD, HARYANA-121013"],
              ["5", "Principal Name", "Mr. Sunny Kumar Sharma"],
              ["6", "Principal Qualification", "M.A., B.Ed."],
              ["7", "School Email ID", "Kps5358@gmail.com"],
              ["8", "Contact Details", "9871918619"],
            ]}
          />
        </Section>

{/* B. Documents */}
{/* <Section title="B. DOCUMENTS AND INFORMATION">
  <div className="w-full">
    <table className="w-full text-xs sm:text-sm border border-blue-300 table-auto">
      <thead className="bg-blue-100 text-blue-900">
        <tr>
          <th className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold">
            S.No.
          </th>
          <th className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold">
            DOCUMENTS/INFORMATION
          </th>
          <th className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold">
            LINKS OF UPLOADED ON YOUR SCHOOL'S WEBSITE
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          ["1", "Affiliation Certificate", "/docs/Affiliation.pdf"],
          ["2", "Society Registration Certificate", "/docs/Krishna-society_RC.pdf"],
          ["3", "NOC from State Government", "/docs/NOC.pdf"],
          ["4", "Recognition Certificate", "/docs/Recognition.pdf"],
          ["5", "Building Fitness Certificate (PWD)", "/docs/KSafety.pdf"],
          ["6", "Fire Safety Certificate", "/docs/Fire-Certificate.pdf"],
          ["7", "Self-Certification", "/docs/selfcertificate.pdf"],
          ["8", "Water, Health & Sanitation", "/docs/Water_Health.pdf"],
        ].map(([sn, title, link], index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
            <td className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 text-blue-900">{sn}</td>
            <td className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 text-blue-900 break-words">
              {title}
            </td>
            <td className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 break-words">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                Click here
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Section> */}



<Section title="B. DOCUMENTS AND INFORMATION">
  <div className="w-full">
    <table className="w-full text-xs sm:text-sm border border-blue-300 table-auto">
      <thead className="bg-blue-100 text-blue-900">
        <tr>
          <th className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold">
            S.No.
          </th>
          <th className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold">
            DOCUMENTS/INFORMATION
          </th>
          <th className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold">
            LINKS OF UPLOADED ON YOUR SCHOOL'S WEBSITE
          </th>
        </tr>
      </thead>

      <tbody>
        {[
          ["1", "Affiliation Certificate"],
          ["2", "Society Registration Certificate"],
          ["3", "NOC from State Government"],
          ["4", "Recognition Certificate"],
          ["5", "Building Fitness Certificate (PWD)"],
          ["6", "Fire Safety Certificate"],
          ["7", "Self-Certification"],
          ["8", "Water, Health & Sanitation"],
        ].map(([sn, title], index) => {
          return (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}>
              
              <td className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 text-blue-900">
                {sn}
              </td>

              <td className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 text-blue-900 break-words">
                {title}
              </td>

              <td className="border border-blue-300 px-2 sm:px-4 py-1 sm:py-2 break-words">
                <span
                  className="text-gray-400 underline cursor-not-allowed"
                  title="Coming Soon"
                >
                  Click here
                </span>
              </td>

            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</Section>
{/* <Section title="C. Result & Academics">
  <Table
    headers={["S.No.", "Information", "Download"]}
    rows={[
      ["1", "Fee Structure", <a href="/docs/Fee-StructureN.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Click here</a>],
      ["2", "Annual Academic Calendar", <a href="/docs/Annual-Calender .pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Click here</a>],
      ["3", "School Management Committee (SMC)", <a href="/docs/Krishna-SMC.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Click here</a>],
      ["4", "PTA Members", <a href="/docs/C4_PTA.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Click here</a>],
      ["5", "Last 3 Year Board Result", <a href="/docs/Krishna-Result.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Click here</a>],
    ]}
  />
</Section> */}

<Section title="C. Result & Academics">
  <Table
    headers={["S.No.", "Information", "Download"]}
    rows={[
      [
        "1",
        "Fee Structure",
        <a
          href="/docs/Fee-StructureN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900"
        >
          Click here
        </a>,
      ],

      [
        "2",
        "Annual Academic Calendar",
        <span className="text-gray-400 underline cursor-not-allowed">
          Click here
        </span>,
      ],

      [
        "3",
        "School Management Committee (SMC)",
        <span className="text-gray-400 underline cursor-not-allowed">
          Click here
        </span>,
      ],

      [
        "4",
        "PTA Members",
        <span className="text-gray-400 underline cursor-not-allowed">
          Click here
        </span>,
      ],

      [
        "5",
        "Last 3 Year Board Result",
        <span className="text-gray-400 underline cursor-not-allowed">
          Click here
        </span>,
      ],
    ]}
  />
</Section>


{/* D. Staff (Teaching) */}
<Section title="D. STAFF (TEACHING)">
  <Table
    headers={["S.No.", "INFORMATION", "DETAILS"]}
    rows={[
      ["1","Principal","MR. Sunny Kumar Sharma"],
      ["2", "Total Number of Teachers", "36"],
      ["", "PGT", "06"],
      ["", "TGT", "15"],
      ["", "PRT", "15"],
      ["3", "Teachers Section Ratio", "1:1:35"],
      ["4", "Details of Special Educator", "Madhu"],
      ["5", "Details of Counsellor and Wellness Teacher", "Binu Sharma"]
    ]}
  />
  
{/* Result Class X */}
<h3 className="font-semibold text-blue-900 mt-8 mb-3">RESULT CLASS: X</h3>
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
    <tr>
      <td colSpan={6} className="p-2 border border-gray-300 text-center text-sm text-gray-700">
        NOT AFFILIATED WITH C.B.S.E. HENCE, NOT APPLICABLE
      </td>
    </tr>
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
    <tr>
      <td colSpan={6} className="p-2 border border-gray-300 text-center text-sm text-gray-700">
        NOT AFFILIATED WITH C.B.S.E. HENCE, NOT APPLICABLE
      </td>
    </tr>
  </tbody>
</table>
</Section>


{/* <Section title="E. School Infrastructure">
  <div className="w-full">
    <table className="w-full table-auto border border-gray-300 text-sm md:text-base">
      <thead className="bg-blue-100 text-blue-900">
        <tr>
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
          <td className="p-2 border border-gray-300">No. of class Rooms: 19 Size: 44 Sq.M. </td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-300 align-top">3</td>
          <td className="p-2 border border-gray-300">
            NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)
          </td>
          <td className="p-2 border border-gray-300 whitespace-pre-line leading-relaxed break-words">
            Labs=03 Size= 111 sq.M
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
          <td className="p-2 border border-gray-300">9</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-300 align-top">6</td>
          <td className="p-2 border border-gray-300">NO. OF BOYS TOILETS</td>
          <td className="p-2 border border-gray-300">11 + 05 Urinals</td>
        </tr>
     <tr>
  <td className="p-2 border border-gray-300 align-top">7</td>

  <td className="p-2 border border-gray-300">
    LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL
  </td>

  <td className="p-2 border border-gray-300">
    <a
      href="https://www.youtube.com/watch?v=0jnpNmO0LpI"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
      Click here to view video
    </a>
  </td>
</tr>

        <tr>
          <td className="p-2 border border-gray-300 align-top">8</td>
          <td className="p-2 border border-gray-300">
            Teacher Details
          </td>
          <td className="p-2 border border-gray-300">
            <a
             href="/docs/TEACHERS_details.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="text-blue-600 underline hover:text-blue-800"
           >   
           View Teacher Details
           </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</Section> */}

<Section title="E. School Infrastructure">
  <div className="w-full">
    <table className="w-full table-auto border border-gray-300 text-sm md:text-base">
      <thead className="bg-blue-100 text-blue-900">
        <tr>
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
          <td className="p-2 border border-gray-300">No. of class Rooms: 19 Size: 44 Sq.M.</td>
        </tr>

        <tr>
          <td className="p-2 border border-gray-300 align-top">3</td>
          <td className="p-2 border border-gray-300">
            NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)
          </td>
          <td className="p-2 border border-gray-300 whitespace-pre-line leading-relaxed break-words">
            Labs=03 Size= 111 sq.M
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
          <td className="p-2 border border-gray-300">9</td>
        </tr>

        <tr>
          <td className="p-2 border border-gray-300 align-top">6</td>
          <td className="p-2 border border-gray-300">NO. OF BOYS TOILETS</td>
          <td className="p-2 border border-gray-300">11 + 05 Urinals</td>
        </tr>

        <tr>
          <td className="p-2 border border-gray-300 align-top">7</td>
          <td className="p-2 border border-gray-300">
            LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL
          </td>
          <td className="p-2 border border-gray-300">
            <a
              href="https://www.youtube.com/watch?v=0jnpNmO0LpI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Click here to view video
            </a>
          </td>
        </tr>

        <tr>
          <td className="p-2 border border-gray-300 align-top">8</td>
          <td className="p-2 border border-gray-300">
            Teacher Details
          </td>
          <td className="p-2 border border-gray-300">
            <span
              className="text-gray-400 underline cursor-not-allowed"
              title="Coming Soon"
            >
              View Teacher Details
            </span>
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
