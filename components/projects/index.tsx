import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  const data = [
    {
      image: "/assets/cov.png",
      title: <a href="https://ingfocovid.netlify.app/">Covid Todays</a>,
      body: "A website to see the spread of covid cases in Indonesia such as the number of dead, recovered, treated which is updated every day using the API",
    },
    {
      image: "/assets/Quotes.png",
      title: <a href="https://animerz.netlify.app/">Get Rand Quotes</a>,
      body: "This is the right website for you to search for conversation quotes from Japanese animation. This website uses a public API that provides thousands of quotes",
    },
    {
      image: "/assets/slice.png",
      title: <a href="https://next1.netlify.app/">Slice Design</a>,
      body: "Nothing special. Just convert design into code",
    },
    {
      image: "/assets/quranapp.png",
      title: <a href="https://quran-apps.netlify.app/">Simple Quran App</a>,
      body: "Website based Quran application. The data is taken from the API of the Indonesian Ministry of Religion, through the equran id website.",
    },
    {
      image: "/assets/notes.png",
      title: <a href="https://awikwok-note.herokuapp.com/">Notes App</a>,
      body: "This is an application built using the MERN stack. there are login, register and CRUD features",
    },
  ];

  return (
    <>
      <div className="is-project">
        <h3 className="text-2xl text-center text-white font-bold pt-5">
          Projects
        </h3>
        <div className="container mx-auto">
          {data.map((show, index) => {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row w-full mb-3"
              >
                <div className="flex w-full px-2 md:flex-col md:w-2/4 py-4">
                  <div className="w-full">
                    <img
                      src={show.image}
                      alt="project"
                      className="my-project rounded shadow-2xl"
                      width={600}
                      height={450}
                    />
                  </div>
                </div>
                <div className="flex flex-col pb-2 justify-center items-center md:w-2/4 md:py-4 px-6">
                  <h3 className="t-project text-xl text-white font-bold justify-center underline underline-offset-8">
                    {show.title}
                  </h3>
                  <p className="text-xs text-white text-gray-700 py-2">
                    *Click title to see detail website
                  </p>
                  <p className="text-white text-md py-2">{show.body}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center text-white">
          <p>About Me</p>
        </div>
        <div className="flex justify-center h-[5vh] items-center text-white">
          <a href="#skills" className="text-2xl">
            <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </div>
      </div>
    </>
  );
}
