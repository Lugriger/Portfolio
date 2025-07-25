
import Navbar from './Navbar';

function Layout(){
    return(
        <>
            <Navbar/>
            <main className='p-4'>
                <Outlet/>
            </main>
        </>
    );

}


export default Layout;