import { useState } from "react";

export default function Home() {
  const [showObituary, setShowObituary] = useState(false);

  const obituaries = [
    { id: 1, name: "Carmen V. Sack", date: "July 16, 1930 – February 13, 2023" },
    { id: 2, name: "John Doe", date: "March 5, 1945 – January 20, 2024" },
    { id: 3, name: "Jane Smith", date: "May 12, 1950 – December 10, 2023" }
  ];

  if (showObituary) {
    return (
      <div className="p-5 items-center text-center">
        <button onClick={() => setShowObituary(false)} className="mb-4 px-4 py-2 bg-gray-500 text-white rounded-md">
          Back to Obituaries
        </button>

        <h2 className="text-lg font-semibold">OBITUARY</h2>
        <h1 className="text-4xl font-bold my-4">Carmen V. Sack</h1>
        <h3 className="text-md font-medium">July 16, 1930 – February 13, 2023</h3>

        <img src="/abuela.jpg" alt="Carmen V. Sack" className="rounded-lg mx-auto w-64 h-auto" />

        <p className="my-4">
        Carmen was a true family pioneer. She was the first of the Vargas family to emigrate to the United States. Born in Puebla, Mexico, she traveled extensively before making her home in Kansas City. She was fluent in several languages, including English, French, German, Russian and the indigenous dialect of her native region. As a young, independent Mexican woman of modest background, her propensity for languages paved the way to travel and adventures in Cuba, France, Spain, Germany, Denmark, Russia, L.A., San Francisco and New York. This was extraordinary for a woman of her generation. She met her husband Klaus in Kansas City, and together they created a loving and welcoming home. They were partners in love and business, including a hotel in Germany and a family restaurant in KCK. At midlife, she reinvented herself, obtained a college degree and taught Spanish. She treated everyone with kindness, whether they be a dignitary or a humble campesino. She helped midwife babies and also cared for the sick and elderly, for whom she was a beloved caretaker and companion.
        </p>

        <p className="my-4">
        Carmen was preceded in death by her husband Klaus, a son, Klaus, numerous brothers and sisters, and her beloved parents, all of blessed memory. Carmen leaves behind her daughter Christina, son-in-law Mike, adoring grandsons Jacob and Wolfgang, numerous nieces and nephews, her brother Gilberto, and a “grand-dog”, Maya. Carmen was a devoted and caring mother, wife, sister, “tia” and “abuela”.
        </p>

        <p className="my-4">
        We will miss her sweetness, her gentle demeanor, her humor, endless optimism and “joie de vivre”. We are reassured that her faith has been rewarded. She always said “yes” to life and never lost sight of God. We will cherish her memory for years to come. 
        </p>

        <p className="my-4 font-bold">May God’s light shine upon your countenance, beloved Carmen, and rest assured that your memory will be a blessing for future generations.</p>

        <p className="my-4">
        A rosary for Carmen will be held Thursday, February 16, 2023 at 7:30 PM at the Chapel Hill-Butler Funeral Home, 701 North 94th Street, Kansas City, Kansas 66112. A visitation will occur Thursday, February 16, 2023 from 6:00 PM to 7:30 PM, 701 North 94th Street, Kansas City, Kansas 66112. A Mass of Christian Burial will occur Friday, February 17, 2023 at 10:00 AM at St. Patrick's Catholic Church, 1066 North 94th Street, Kansas City, Kansas 66112. 
        </p>
      </div>
    );
  }

  return (
    <div className="p-5 text-center">
      <h1 className="text-3xl font-bold my-4">Obituaries</h1>
      <div className="grid gap-4">
        {obituaries.map((person) => (
          <div key={person.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{person.name}</h2>
            <p className="text-md text-gray-600">{person.date}</p>
            {person.id === 1 && (
              <button
                onClick={() => setShowObituary(true)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                View Obituary
              </button>
            )}
            {person.id === 2 && (
              <button
                onClick={() => setShowObituary(false)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                View Obituary
              </button>
            )}
            {person.id === 3 && (
              <button
                onClick={() => setShowObituary(false)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                View Obituary
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
