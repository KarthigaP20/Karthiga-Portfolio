// src/pages/Resume.jsx
const Resume = () => {
  return (
    <section className="min-h-screen p-10 bg-[#1f1f1f] text-white">
      <div className="max-w-4xl mx-auto bg-[#2a2a2a] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Resume</h2>

        <div className="mb-6">
          <a
            href="/Karthiga_ResuMe.pdf"
            download
            className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            Download Resume
          </a>
        </div>

        <div className="border border-gray-700 rounded-md overflow-hidden shadow-inner">
          <iframe
            src="/Karthiga_ResuMe.pdf"
            title="Karthiga Resume"
            width="100%"
            height="600px"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
