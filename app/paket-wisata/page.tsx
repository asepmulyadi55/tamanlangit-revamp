import Section from "../../components/Section";

export default async function PaketWisataPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;
  const checkIn = params?.checkIn;
  const checkOut = params?.checkOut;
  const guests = params?.guests;
  return (
    <Section title="Paket Wisata" description="Temukan paket yang sesuai.">
      {(checkIn || checkOut || guests) && (
        <div className="card-base mb-6">
          <p className="meta-text">Filter: {checkIn && `Check-in ${checkIn}`} {checkOut && `• Check-out ${checkOut}`} {guests && `• Tamu ${guests}`}</p>
        </div>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <div className="card-base">
          <h3 className="font-semibold">Camping Basic</h3>
          <p className="mt-1 meta-text">Mulai Rp 150.000</p>
        </div>
        <div className="card-base">
          <h3 className="font-semibold">Camping Plus</h3>
          <p className="mt-1 meta-text">Mulai Rp 250.000</p>
        </div>
        <div className="card-base">
          <h3 className="font-semibold">Family Trip</h3>
          <p className="mt-1 meta-text">Mulai Rp 500.000</p>
        </div>
      </div>
    </Section>
  );
}