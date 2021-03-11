import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex h-screen -mt-16">
      <Head>
        <title>BlueBuckDesigns</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper-img flex-grow mt-48">
        <section className="flex max-w-screen-xl mx-auto py-2">
          <div className="left-sec">
            <div className="sectext text-gray-400 tracking-wider">
              Power your ideas with BlueBuck Designs
            </div>
            <div className="primtext text-5xl font-bold my-10 leading-normal">
              Need a complete solution to implement your ideas?
              <br />
              <span className="text-prim">I’m your man !</span>
            </div>
            <button className="bg-prim text-white px-4 py-2 rounded-full">
              Checkout Projects
            </button>
          </div>
          <div className="right-sec w-full h-full">
            <img src="/graphic/right-sec.svg" alt="" />
          </div>
        </section>
        <div className="wrap-transp">
          <section className="max-w-screen-xl mx-auto flex py-12 mt-6 items-center justify-between">
            <div className="flex flex-col bg-gray-50 px-6 h-48 justify-between py-6 rounded-lg relative whocard z-10">
              <h6 className="text-secprim font-bold text-lg">Nikhil Joshi</h6>
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/27.jpg"
                  alt="Nikhil Joshi"
                  className="w-10 rounded-full mr-6"
                />
                <div className="text-sm text-gray-500">
                  A professional with over 7 years in the software industry with
                  experiece in multiple technology domains.
                </div>
              </div>
              <button className="bg-secprim py-1 px-4 rounded-lg font-bold text-white w-max">
                Know More
              </button>
            </div>
            <div className="text-2xl font-bold">
              The who’s who of <span className="text-prim">BlueBuck</span> !
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
