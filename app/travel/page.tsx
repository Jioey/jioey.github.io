import ImageGallery from '@/components/ImageGallery';

export default async function TravelPage() {
  const belize = [
    { src: "/travel/belize_island.JPG", alt: "Belize Island" },
  ]
  const eu = [
    { src: "/travel/eu_pena.JPG", alt: "Pena Castle, Portugal" },
    { src: "/travel/eu_pompeii.JPG", alt: "Pompeii, Italy" },
    { src: "/travel/eu_sagrada.JPG", alt: "Sagrada Familia, Spain" },
    { src: "/travel/eu_vatican.JPG", alt: "Vatican City, Italy (sorta)" },
  ]

  return (
    <>
      <h1 className="h2">Travel Gallery</h1>
      <section>
        <h3 className="h3">Backpacking Europe (2023 Summer)</h3>
        <ImageGallery images={eu} />
      </section>

      <section>
        <h3 className="h3">Belize ___ (Spring)</h3>
        <ImageGallery images={belize} />
      </section>
    </>
  );
}