export default function AboutSection() {
  return (
    <section className="space-y-4 group">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-2xl font-bold text-white tracking-tight">About</h3>
        <div className="h-[3px] w-12 bg-emerald-500 rounded-full transition-all duration-500 ease-out group-hover:w-24 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
      </div>
      
      <p className="text-zinc-400 leading-relaxed text-base md:text-sm max-w-3xl">
        Experienced in software development with a strong focus on web development. I am an Informatics Engineering student at UDINUS with experience in building web platforms, IoT integration, and Cloud Computing.
      </p>
    </section>
  );
}