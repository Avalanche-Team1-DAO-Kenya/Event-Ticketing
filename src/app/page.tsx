import Image from "next/image";
import Link from "next/link";





export default function Home() {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Music Concert",
      description: "Join us for an amazing live concert with top artists!",
      date: "2025-02-20",
      image: "/concert.jpg", // Put an image URL here
    },
    {
      id: 2,
      title: "Comedy Night",
      description: "Laugh out loud with the best comedians in the country.",
      date: "2025-03-10",
      image: "/comedy.jpg", // Put an image URL here
    },
    {
      id: 3,
      title: "Tech Conference",
      description: "A gathering of innovators and tech enthusiasts.",
      date: "2025-04-15",
      image: "/tech.jpg", // Put an image URL here
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="text-center py-12 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Welcome to Evently</h1>
        <p className="mt-4 text-lg">Your go-to platform for upcoming events</p>
      </header>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Upcoming Events</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{event.title}</h3>
                <p className="mt-2 text-gray-600">{event.description}</p>
                <p className="mt-2 text-gray-500">Date: {event.date}</p>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Get Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      <Link href="/page">Go to Layout</Link> {/* Corrected Link */}
     

      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2025 Evently. All rights reserved.</p>
      </footer>
    </div>
  );
}
