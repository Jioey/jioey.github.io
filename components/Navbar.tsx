import Link from 'next/link';

export default function Navbar() {
    const nav_text:string = "block lg:inline-block lg:mt-0 hover:text-teal-200 ml-10 mr-4";

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    {/* Icon here? */}
                    <h3 className="text-2xl">Joey Zhu</h3>
                </div>

                <div className="w-full block justify-end lg:flex lg:items-center lg:w-auto">
                    <div className="text-lg lg:flex-grow">
                        <Link href="/" className={nav_text}>About Me</Link>
                        <Link href="/dev_blog" className={nav_text}>Developer Blog</Link>
                        <Link href="/travel" className={nav_text}>Travel Gallery</Link>
                        {/* <a href="" className={nav_text}>Raspberry-Pi Cluster</a> */}
                        <Link href="/#contact" className={nav_text}>Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}