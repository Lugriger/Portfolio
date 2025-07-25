function About () {
    return (
        <>
            <section id='about' className=" flex justify-center flex-col items-center gap-4 ">
                <hr className=" backdrop-blur-3xl  w-3/4 h-4 mb-30"/>
                <h1 className=" text-4xl border-2 bg-boxColor rounded-lg w-96 h-24 flex items-center justify-center transition-all duration-150 mb-10">About Me</h1>
                <div className="  flex flex-col gap-2 justify-center max-w-full items-center py-4 mt-10 bg-boxColor px-4  rounded-lg text-center font-sans font-semibold">
                    <p className="text-xl leading-9 tracking-wider p-4">
                        After spending several years working in a warehouse with SAP, I decided to take a completely new direction.
                        <br />
                        On May 6th, 2025, I wrote my first lines of code — and since then, I’ve been fully committed to learning programming.
                        <br />
                        So far, I’ve learned HTML, CSS, and JavaScript, and I’m currently building this portfolio using React and TailwindCSS, which I really enjoy working with.
                        <br />
                        I’m fascinated by the whole concept of web development — both frontend and backend.
                        <br />
                        To get some backend experience, I started working on a  project using Node.js, Express, and MongoDB.
                        <br />
                         It’s still a work in progress, but it’s already helping me understand how everything connects.
                        <br />
                        I’m excited to keep learning, building, and sharing more as I grow on this journey!
                    </p>
                </div>
                
                
                
            </section>
            
        
        </>
    )
}


export default About;