// import { getAllPosts, PostMeta } from '@/lib/posts';
import ImageGallery from '@/components/ImageGallery';
import ContactIcons from '@/components/ContactIcons'

import Image from 'next/image';

// Uses Tailwind CSS

export default async function HomePage() {
  // We can only run this on the server side in Next.js 13 with the 'app' folder
  // because reading fs is not allowed on the client side.
  // Therefore, we'll use a special "async" server component approach:
  // const posts: PostMeta[] = getAllPosts();

  // List of images for the image gallery
  const images = [
    { src: "/landing/springs_hall.JPG", alt: "Springs Town Hall", caption: <>My high school, Indian Springs School in Birmingham, Alabama. Fun fact: our most famous alumnus is probably <a href="https://en.wikipedia.org/wiki/John_Green" style={{textDecoration: "underline"}}>John Green</a>!</> },
    // TODO: add Seamester 
    { src: "/landing/bu_nick.jpg", pref: "/landing/bu_nick.HEIC", alt: "Boston University, Nickerson Field", caption: <>Started at Boston University in Spring 2023 as a student in the College of General Studies (CGS), and later transferred into computer science.</> },
    { src: "/landing/london_bu.jpg", pref: "/landing/london_bu.HEIC", alt: "Boston University London", caption: <>Studied abroad in Boston University London as part of the CGS program. This is one of the classroom buildings, and we had some classes in UCL&apos;s building too!</>},
    // TODO: maybe graduation?
  ]

  return (
    <>
      {/* <div style={{ padding: '2rem' }}>
                <h1>My Blog</h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug} style={{ marginBottom: '1rem' }}>
                            <Link href={`/posts/${post.slug}`}>
                                {post.title}
                            </Link>
                            <br />
                            <small>
                                {post.date} by {post.author}
                            </small>
                        </li>
                    ))}
                </ul>
            </div> */}
      <section className="flex h-screen mx-8 pb-8">
        <div className="flex-1 p-2 flex flex-col justify-center m-16">
          <p className='text-4xl'>Hi there, welcome to my page!</p>
        </div>
      </section>

      <section className="flex py-44 mx-28 h-[110vh]">
        <div className="flex-1 mr-16 flex flex-col justify-center">
          <p className='text-2xl'>&emsp; My name is Joey, born and raised in Shanghai, China. I begin school at SUIS Pudong and came to the US as an international student since 2017. I graduated from Boston University in 2025 with a Computer Science degree and I&apos;m currently exploring my career possibilities.</p>
          <br />
          <p className='text-2xl'>&emsp; My main career interests at the moment are in technology and business. My recent classwork inspires me to persue work in the intersection between hardware and software, such as an embedded systems engineer or system architect. I also studied some business during my time in college and I&apos;m looking to explore carrers such as a technology consultant or project manager.</p>
        </div>

        <div className="flex-1 relative">
          <Image src="/me_sq.jpg" alt="Picture of me" className="rounded-lg" fill={true}
            style={{
              objectFit: 'cover',
            }} />
        </div>
      </section>

      <section className="mb-36">
        <h2 className="h2 ml-4">My Journey in Pictures</h2>
        <p className="ml-4 mb-2 text-xl">Here&apos;s some cool pictures of my academic journey.</p>
        <div className="h-[600px]">
          <ImageGallery images={images} />
        </div>
      </section>

      {/* TODO */}
      <section>
        {/* <h2 className="h2">The Tech I Know</h2> */}
        {/* SystemVerilog, C, OCaml, Java, Python */}
        {/* This website is built using Next.js and hosted through Github Pages */}
        {/* -- Look for more in resume */}
      </section>

      <section id='contact' className="flex flex-col items-center justify-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-2">Feel free to reach out about anything!</p>
        <p className="mb-4">My email: yifanzhu233 at gmail.com</p>
        <ContactIcons />
      </section>
    </>
  );
}