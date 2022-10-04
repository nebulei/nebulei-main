import React from 'react';


const Highlight = () => {

  return (
    <>
    <section className="bg-white flex items-center justify-center mb-20">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Why are we doing this?
                </h2>
                <p className="mb-4">
                  We want to inspire more humans to take part in the advancement of civilization upon all aspects as we believe this is what 
                  humans were meant to do. Nowadays their has been progression in censorship, which is horrible for any further advancement 
                  in any subject; so therefore we allow the public to be the judge of any work, opinion, or publication and then possibly 
                  combat it with there own.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://storage.googleapis.com/nebulei-main-images/gifs/3.gif" alt="office content 1"></img>
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://storage.googleapis.com/nebulei-main-images/gifs/2.gif" alt="office content 2"></img>
            </div>
        </div>
    </section>
    </>
  );
};

export default Highlight;