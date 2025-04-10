import ImageGallery from '@/components/ImageGallery';

export default async function TravelPage() {
  const belize = [
    { src: "/travel/belize_island.JPG", alt: "Belize Island" },
  ]
  const eu = [
    { src: "/travel/eu_pena.JPG", alt: "Pena Castle, Portugal", caption: <>Pena Castle in Sintra, Portugal</> },
    { src: "/travel/eu_sagrada.JPG", alt: "Sagrada Familia, Spain", caption: <>Sagrada Família, Barcelona, Spain</> },
    { src: "/travel/eu_pompeii.JPG", alt: "Pompeii, Italy", caption: <>Pompeii, Italy</> },
    { src: "/travel/eu_vatican.JPG", alt: "Vatican City and Rome, Italy", caption: <>Vatican City (taken from the top of the church) and Rome, Italy</> },
  ]

  return (
    <>
      <h1 className="h2">Travel Gallery</h1>
      <h3 className='h3 italic'>(Not finished...but here&apos;s some pictures anyways)</h3>
      <section>
        <h3 className="h3">Backpacking Europe (2023 Summer)</h3>
        <div className="h-[500px]">
          <ImageGallery images={eu} />
        </div>
      </section>

      <section>
        <h3 className="h3">Belize (2021 Spring)</h3>
        <p>It was (sort of) a school organized trip to stay on an island with <a href="https://www.belizeadventures.com/" className="underline decoration-sky-500">Belize Adventures</a> at Long Caye. The island is a 3 hours boat ride off Belize City and surrounded by an atoll. The staff were amazing people, I loved the coconuts (pulled fresh off the tree!), learned windsurfing, and tried scuba diving for the first time! </p>
        <div className="h-[500px]">
          <ImageGallery images={belize} />
        </div>
      </section>
    </>
  );
}