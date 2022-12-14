export default function Skills() {
  return (
    <>
      <section id="skills" className="max-w-full bg-[#111111]">
        <div className="flex flex-col justify-center items-center px-3 lg:px-20 pt-10 pb-20 space-y-12">
          <h1 className="text-[50px] font-Quicksand font-bold">Skills</h1>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-x-10 w-[80%] space-y-20">
            <div className="flex justify-center items-center">
              <img src="/assets/Untitled design.gif" alt="skill-image" />
            </div>
            <div className="grid grid-cols-3 place-items-center gap-10 lg:gap-5 py-3 text-center font-Pridi font-medium">
              <div className="space-y-4">
                <img
                  className="w-24"
                  src="/skills/HTML logo.svg"
                  alt="html-logo"
                />
                <h3>HTML</h3>
              </div>
              <div className="space-y-4">
                <img
                  className="w-24"
                  src="/skills/CSS logo.svg"
                  alt="css-logo"
                />
                <h3>CSS</h3>
              </div>
              <div className="space-y-4">
                <img className="w-24" src="/skills/JS logo.svg" alt="js-logo" />
                <h3>JavaScript</h3>
              </div>
              <div className="space-y-4">
                <img
                  className="w-24"
                  src="/skills/React logo.svg"
                  alt="react-logo"
                />
                <h3>React</h3>
              </div>
              <div className="space-y-4">
                <img
                  className="w-24"
                  src="/skills/Tailwind logo.svg"
                  alt="tailwind-logo"
                />
                <h3>Tailwind</h3>
              </div>
              <div className="space-y-4">
                <img
                  className="w-24"
                  src="/skills/Bootstrap logo.svg"
                  alt="bootstrap-logo"
                />
                <h3>Bootstrap</h3>
              </div>
              <div className="lg:col-span-3 space-y-4">
                <img
                  className="w-24"
                  src="/skills/Figma logo.svg"
                  alt="figma-logo"
                />
                <h3 className="text-center">Figma</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
