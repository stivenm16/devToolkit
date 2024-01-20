const Card = () => {
  return (
    <div className="w-72 rounded-xl px-6 overflow-hidden shadow-xl bg-indigo-800 mx-auto">
      <img
        className="w-full h-40"
        src="https://www.svgrepo.com/show/448244/pack.svg"
        alt="Product name"
      />
      <div className=" py-4">
        <div className="font-bold text-xl mb-2 text-white">Product</div>
        <p className="text-white text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          porro iste quibusdam distinctio laudantium velit earum sint! Nobis,
          quibusdam.
        </p>
      </div>
      <div className=" pt-4 pb-2">
        <span className="inline-block bg-white   rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Category
        </span>
        <span className="inline-block bg-white   rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #Category
        </span>
      </div>
      <div className=" py-4">
        <span className="text-lg text-white">$99.99</span>
        <button className="bg-indigo-600 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full inline-flex items-center ml-4">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16 4a2 2 0 0 0-2 2h-2a2 2 0 0 0-4 0H6a2 2 0 0 0-2-2 1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM8 14H6v-2h2v2zm0-4H6V7h2v3zm10 4h-2v-2h2v2zm0-4h-2V7h2v3z" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Card
