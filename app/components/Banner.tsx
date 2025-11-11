export default function Banner() {
  return (
    <div className="relative mt-16 max-w-4xl mx-auto neon-card rounded-2xl p-10 text-center text-[#00ffff]">

      <h1
        className="text-5xl font-extrabold mb-4"
        style={{
          textShadow: "0 0 4px #a200ff, 0 0 6px #ff00ff, 0 0 8px #c0b3ff"
        }}
      >
        Science Theatre Hackathon
      </h1>

      {/* Poster Section */}
      <div className="mb-8">
        <img
          src="/poster.jpg" 
          className="w-full rounded-xl shadow-lg border border-[#00ffff30]"
        />
      </div>
      
      <p className="text-lg mt-10 mb-4 text-[#00ffffb0]">
        National Science Communication Competition by{" "}
        <span className="text-[#ff00ff] font-semibold">BRAC University</span>
      </p>

      <p className="text-md mb-8 text-[#ffffff99]">
        Tackle real-world challenges, pitch your ideas, and win from a prize pool of{" "}
        <span className="text-[#f5ff00] font-bold">BDT 225,000!</span>
      </p>

      <a
        href="#register"
        className="neon-btn inline-block px-8 py-3 rounded-lg text-lg font-bold tracking-widest uppercase text-white"
      >
        Register Now
      </a>
    </div>
  );
}
