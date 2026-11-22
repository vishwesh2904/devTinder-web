
const Home = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">

      <div className="text-center max-w-2xl">

        <div className="text-6xl mb-6">💻❤️</div>

        <h1 className="text-5xl md:text-6xl font-extrabold">
          Find your next
          <span className="text-primary"> Dev Match</span>
        </h1>

        <p className="text-base-content/70 mt-6 text-lg">
          Connect with developers, find coding partners,
          share ideas and build something amazing together.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="btn btn-primary rounded-full px-8">
            Get Started
          </button>

          <button className="btn btn-outline btn-primary rounded-full px-8">
            Explore Developers
          </button>
        </div>

      </div>

    </div>
  );
};

export default Home;
