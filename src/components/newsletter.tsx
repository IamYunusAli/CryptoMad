import React from "react";

const NewsLetter = () => {
    return (
        <div>
        <div className="grow-0 shrink-0 basis-auto bg-[#3a466b] m-10 rounded-lg">
          <div className="px-6 py-12 md:px-12 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-6">
              Do not miss any updates.
              <br />
              <span className="text-blue-600">Subscribe to the newsletter</span>
            </h2>
            <p className="text-gray-500 mb-12">
              We will write rarely and only high-quality content.
            </p>
            <div className="md:flex flex-row flex items-center justify-center w-auto">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}


export default NewsLetter;