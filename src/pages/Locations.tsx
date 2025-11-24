import { useState } from "react";




  interface Location {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
  }

  const locations: Location[] = [
    {
      id: "1",
      name: "CLMI IKOTUN BRANCH",
      address: "13 & 15 Ewenla Street, Pab Bus Stop, Ikotun-Idimu Road",
      city: "Lagos",
      state: "Lagos State",
    },
    {
      id: "2",
      name: "CLMI IKORODU BRANCH",
      address:
        "Golden Event Center, Shitetu, Last Bus Stop, Igbogbo Area, Ikorodu",
      city: "Lagos",
      state: "Lagos State",
    },
    {
      id: "3",
      name: "CLMI ILOGBO BRANCH",
      address: "Ilogbo Elegba Community Hall, Ilogbo",
      city: "Lagos",
      state: "Lagos State",
    },
    {
      id: "4",
      name: "CLMI BADAGRY BRANCH",
      address:
        "Rosemba Event Center, Behind Access Filling Station, Off Mosere Bus Stop, Badagry",
      city: "Lagos",
      state: "Lagos State",
    },
    {
      id: "5",
      name: "CLMI AJAH BRANCH",
      address:
        "Mr 34 Pa, Skipu Adewale Street, Barrow Pit Area, Dee Shopping Mal, Opposite Shoprite Sangotedo, Ajah",
      city: "Lagos",
      state: "Lagos State",
    },
    {
      id: "6",
      name: "CLMI OSOGBO BRANCH",
      address: "Behind Neco Office, Ajeala Estate, Osogbo, Osun State",
      city: "Osogbo",
      state: "Osun State",
    },
    {
      id: "7",
      name: "CLMI IKIRUN BRANCH",
      address:
        "Okolofe Hall, beside Ajuwonyin Snail Farm, Olotuntun, Osogbo, Ikirun",
      city: "Ikirun",
      state: "Osun State",
    },
    {
      id: "8",
      name: "CLMI IWO BRANCH",
      address: "Off Ecu, Iwo Town",
      city: "Iwo",
      state: "Osun State",
    },
    {
      id: "9",
      name: "CLMI ILESHA BRANCH",
      address:
        "Opposite AP Filling Station, Irelepo Junction, Imope Area, Ilesa",
      city: "Ilesa",
      state: "Osun State",
    },
    {
      id: "10",
      name: "CLMI ISARA BRANCH",
      address: "Isiara Town Hall, Atosin Omole, Behind King Palace, Ishara",
      city: "Ishara",
      state: "Ogun State",
    },
    {
      id: "11",
      name: "CLMI ABEOKUTA BRANCH",
      address:
        "Rota Allegria Street, Olomoore Ezibo High School, Beside Tiger Paint, Mowire Junction, Abeokuta",
      city: "Abeokuta",
      state: "Ogun State",
    },
    {
      id: "12",
      name: "CLMI ERUWA BRANCH",
      address: "Ekowo Town Hall, Eruwa-Lanlate",
      city: "Eruwa",
      state: "Oyo State",
    },
    {
      id: "13",
      name: "CLMI IGBO-ORA BRANCH",
      address: "No Tininitare, Abeokuta Road, Igbo-Ora",
      city: "Igbo-Ora",
      state: "Oyo State",
    },
    {
      id: "14",
      name: "CLMI OGBOMOSO BRANCH",
      address:
        "Iroko General Hospital, Behind Salawu Filling Station, Ogbomoso",
      city: "Ogbomoso",
      state: "Oyo State",
    },
    {
      id: "15",
      name: "CLMI ILORIN BRANCH",
      address: "KM 1, Behind Flowkin Estate, Ajase Road, Amoyo",
      city: "Ilorin",
      state: "Kwara State",
    },
    {
      id: "16",
      name: "CLMI APETE BRANCH",
      address: "In Duia Shopping Mall, Iyana Papa",
      city: "Apete",
      state: "Ibadan",
    },
    {
      id: "17",
      name: "CLMI ILE-IFE BRANCH",
      address: "Okua Road, Moro, Owala Road, Ife-Ife",
      city: "Ile-Ife",
      state: "Osun State",
    },
    {
      id: "18",
      name: "CLMI JESUS CITY BRANCH",
      address: "Along Olekpo Road, Opposite Before Ibogi Junction",
      city: "Ogun",
      state: "Ogun State",
    },
    {
      id: "19",
      name: "CLMI APATA BRANCH",
      address: "Nadi Hall, Beside Talkony Oil & Gas",
      city: "Apata",
      state: "Ibadan",
    },
    {
      id: "20",
      name: "CLMI AMULOKO BRANCH",
      address:
        "Somalemi Event Centre, Beside Providence Patrol Station, Amuloko",
      city: "Ibadan",
      state: "Ibadan",
    },
    {
      id: "21",
      name: "CLMI SANGO-OTTA BRANCH",
      address: "Lomte Event Centre, Harmony Junction, Egun Road",
      city: "Sango Otta",
      state: "Ogun State",
    },
  ];
  const Locations = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredLocations = locations.filter(
      (location) =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-primary text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Find the nearest Location to you
            </h1>
            <p className="text-blue-100 leading-relaxed">
              Discover a place of prayer, purpose, and power in your city
            </p>
          </div>
        </div>

        {/* Search and Locations */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-lg mx-auto">
              {/* <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
              <input
                type="text"
                placeholder="search by city or state"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {location.name}
                </h3>

                <div className="flex items-start gap-2">
                  {/* <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" /> */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {location.address}, {location.city}, {location.state}.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No locations found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

export default Locations