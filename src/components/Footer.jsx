
import { SocialIcon } from 'react-social-icons'


function Footer() {

   
    return (
        <footer className="w-full py-8 px-4 text-center text-sm bg-bgCol text-txCol border-t border-gray-500/20 mt-12">

            <section id="footer">
                <div className='flex justify-between'>
                    <div className='flex flex-row gap-6 items-center justify-start'>
                        <SocialIcon url='github.com' href='https://github.com/Lugriger'target='_blank' bgColor='black'className='hover:scale-110 transition-all duration-300'/>
                        <SocialIcon url='linkedin.com' href='https://www.linkedin.com/in/lukas-griger-b598232b6/?trk=public-profile-join-page' target='_blank'   className='hover:scale-110 transition-all duration-300'/> 
                    </div>
                    <div className="">
                        <p className="mb-2">© 2025 Lukáš Gríger. All rights reserved.</p>
                            <p className="text-xs text-gray-400">Built with React & Tailwind CSS | {new Date().getFullYear()}</p>
                    </div>
                </div>
                
                
                
                
                
                
            </section>
        
        </footer>
  );
}

export default Footer;