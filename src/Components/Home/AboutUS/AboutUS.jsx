

const AboutUS = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
         <div className="w-1/2 relative">
         <img src="/src/assets/images/about_us/person.jpg" className="max-w-sm rounded-lg shadow-2xl w-3/4" />
          <img src="/src/assets/images/about_us/parts.jpg" className="max-w-sm rounded-lg shadow-2xl absolute right-4 top-1/2 w-1/2 border-neutral-300 border-8" />
         </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default AboutUS;