import React from "react";

interface RoadmapStep {
  title: string;
  description: string;
  svg: React.ReactNode;
}

const Roadmap: React.FC = () => {
  const steps: RoadmapStep[] = [
    {
      title: "Phase 1: Token Launch",
      description:
        "I'm kicking things off with the launch of my very own token. Exciting times ahead!",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-green-500"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 7h2v5h-2V7zm1 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        </svg>
      ),
    },
    {
      title: "Phase 2: Community Formation",
      description:
        "Next up, I'm building a strong and engaged community around me. Let's grow together!",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-purple-500"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM10 9h4v2h-4V9zm0 4h4v2h-4v-2z" />
        </svg>
      ),
    },
    {
      title: "Phase 3: Social Release",
      description:
        "I'm releasing my interactivities to assist you in trading and so much more by joining you on Telegram and Twitter Directly. Get ready for some smart moves!",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-red-500"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 9h2v4h-2V9zm0 6h2v2h-2v-2z" />
        </svg>
      ),
    },
    {
      title: "Phase 4: ETH launches and trading",
      description:
        "Ehnacing my features for Ethereum launches and trading. Let's make some waves in the crypto world!",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-blue-500"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM10 9h4v2h-4V9zm0 4h4v2h-4v-2z" />
        </svg>
      ),
    },
    {
      title: "Phase 5: SOL Launches and trading",
      description:
        "Expanding my capabilities to Solana launches and trading. More opportunities, more success!",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-orange-500"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 7h2v5h-2V7zm1 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        </svg>
      ),
    },
    {
      title: "Phase 6: 1000 holders",
      description:
        "We're celebrating a huge milestone: reaching 1000 token holders. Thank you for being part of this journey!",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-yellow-500"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM10 9h4v2h-4V9zm0 4h4v2h-4v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-16"
      id="roadmap"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-[30px] md:text-[40px] text-center mb-12">
          Here are my Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="mb-4">{step.svg}</div>
              <h3 className="text-2xl font-semibold mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-center text-gray-300 font-thin">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
