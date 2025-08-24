


import RotatingText from '../components/RotatingText'
  


function Home() {
    


    return (
    <>
        <section className=" tracking-wider  flex justify-center items-center min-w-full min-h-screen" id="home">

            <div className="flex flex-col sm:flex-row min-w-full gap-12 px-8  items-center justify-center">
                <div className="justify-end flex px-14 w-full">
                    <img className='w-screen min-w-[200px] md:w-[500px] rounded-2xl h-full shadow-md hover:scale-110 transition-all duration-200'src="./images/prPic.webp" alt="profile picture" />
                </div>
                <div className="w-full max-sm:w-screen max-sm:px-8 flex flex-col gap-5 items-center md:items-start">
                    <h1 className="text-4xl mb-2 leading-6">Hi , I'am </h1>
                    <RotatingText
                        texts={['Lukáš', 'Gríger']}
                        mainClassName="px-2 sm:w-screen sm:px-2 md:px-3 bg-boxColor max-w-96 text-txcolor text-8xl  overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 15 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                    <div className="py-4 mt-4 max-w-96 sm:w-full bg-boxColor px-4  rounded-lg">
                        <p className="text-xl font-sans font-semibold"> I'm a self-taught web developer exploring the world of frontend and backend technologies.
                        </p>
                    </div>
                    <a href="/LukasGrigerCV.pdf" download className='w-40  text-xl border flex justify-center rounded-2xl text-center hover:bg-hoverCol transition-all duration-300'>download CV</a>

                </div>

            </div>
            
            
                        



        </section>
    
    </>
  )
}
export default Home;