/**
 * Complete Ontario cities and regions database
 * Supporting 30 locations with equal SEO treatment
 */

export interface LocationData {
  name: string;           // "Toronto" | "Golden Horseshoe"
  slug: string;           // "toronto" | "golden-horseshoe"
  type: 'city' | 'region';
  province: string;       // "Ontario"
  population?: string;    // For cities
  region: string;         // "Greater Toronto Area"
  description: string;    // Location-specific description
  nearbyAreas: string[];  // Related cities/areas
  metaTitle: string;      // SEO title
  metaDescription: string; // SEO description
}

export const ONTARIO_LOCATIONS: LocationData[] = [
  // Greater Toronto Area (5 cities)
  {
    name: "Toronto",
    slug: "toronto",
    type: "city",
    province: "Ontario",
    population: "2.7 million",
    region: "Greater Toronto Area",
    description: "Canada's largest city and financial center, serving the entire GTA region.",
    nearbyAreas: ["Scarborough", "North York", "Etobicoke", "Downtown Toronto", "Mississauga"],
    metaTitle: "Sell Your House Fast for Cash in Toronto | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Toronto home in 24 hours. We buy houses as-is in all Toronto neighborhoods. No fees, no repairs needed. Call (647) 936-5467."
  },
  {
    name: "Mississauga",
    slug: "mississauga",
    type: "city",
    province: "Ontario",
    population: "717,000",
    region: "Greater Toronto Area",
    description: "Major suburban city in the GTA, known for its diverse communities and proximity to Toronto.",
    nearbyAreas: ["Port Credit", "Streetsville", "Square One", "Cooksville", "Brampton"],
    metaTitle: "Sell Your House Fast for Cash in Mississauga | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Mississauga home in 24 hours. We buy houses as-is in Port Credit, Streetsville, and all Mississauga areas. No fees, no repairs needed."
  },
  {
    name: "Brampton",
    slug: "brampton",
    type: "city",
    province: "Ontario",
    population: "656,000",
    region: "Greater Toronto Area",
    description: "Growing suburban city in the GTA, known for its multicultural communities and new developments.",
    nearbyAreas: ["Bramalea", "Georgetown", "Heart Lake", "Sandalwood", "Queen Street"],
    metaTitle: "Sell Your House Fast for Cash in Brampton | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Brampton home in 24 hours. We buy houses as-is in Bramalea, Heart Lake, and all Brampton neighborhoods. No fees, no repairs needed."
  },
  {
    name: "Vaughan",
    slug: "vaughan",
    type: "city",
    province: "Ontario",
    population: "323,000",
    region: "Greater Toronto Area",
    description: "Rapidly growing city north of Toronto, featuring both established and new communities.",
    nearbyAreas: ["Woodbridge", "Thornhill", "Maple", "Concord", "Kleinburg"],
    metaTitle: "Sell Your House Fast for Cash in Vaughan | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Vaughan home in 24 hours. We buy houses as-is in Woodbridge, Thornhill, Maple, and all Vaughan areas. No fees, no repairs needed."
  },
  {
    name: "Markham",
    slug: "markham",
    type: "city",
    province: "Ontario",
    population: "338,000",
    region: "Greater Toronto Area",
    description: "Diverse suburban city known for its tech industry and multicultural communities.",
    nearbyAreas: ["Richmond Hill", "Unionville", "Milliken", "Buttonville", "Cornell"],
    metaTitle: "Sell Your House Fast for Cash in Markham | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Markham home in 24 hours. We buy houses as-is in Unionville, Milliken, and all Markham neighborhoods. No fees, no repairs needed."
  },

  // Major Ontario Cities (5 cities)
  {
    name: "Hamilton",
    slug: "hamilton",
    type: "city",
    province: "Ontario",
    population: "537,000",
    region: "Golden Horseshoe",
    description: "Steel city and major industrial center, known for its waterfalls and revitalized downtown.",
    nearbyAreas: ["Stoney Creek", "Dundas", "Ancaster", "Flamborough", "Burlington"],
    metaTitle: "Sell Your House Fast for Cash in Hamilton | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Hamilton home in 24 hours. We buy houses as-is in Stoney Creek, Dundas, Ancaster, and all Hamilton areas. No fees, no repairs needed."
  },
  {
    name: "London",
    slug: "london",
    type: "city",
    province: "Ontario",
    population: "423,000",
    region: "Southwestern Ontario",
    description: "University city and regional center of Southwestern Ontario, known for education and healthcare.",
    nearbyAreas: ["Western University", "Fanshawe", "Byron", "Masonville", "Old South"],
    metaTitle: "Sell Your House Fast for Cash in London | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your London home in 24 hours. We buy houses as-is near Western University, Masonville, and all London neighborhoods. No fees, no repairs needed."
  },
  {
    name: "Windsor",
    slug: "windsor",
    type: "city",
    province: "Ontario",
    population: "230,000",
    region: "Southwestern Ontario",
    description: "Border city across from Detroit, known for automotive industry and international connections.",
    nearbyAreas: ["Walkerville", "Sandwich", "Ford City", "Riverside", "Tecumseh"],
    metaTitle: "Sell Your House Fast for Cash in Windsor | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Windsor home in 24 hours. We buy houses as-is in Walkerville, Riverside, and all Windsor areas. No fees, no repairs needed."
  },
  {
    name: "Kingston",
    slug: "kingston",
    type: "city",
    province: "Ontario",
    population: "132,000",
    region: "Central & Eastern Ontario",
    description: "Historic limestone city home to Queen's University and Canadian military college.",
    nearbyAreas: ["Queen's University", "Downtown Kingston", "Cataraqui", "Portsmouth", "Sydenham"],
    metaTitle: "Sell Your House Fast for Cash in Kingston | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Kingston home in 24 hours. We buy houses as-is near Queen's University and all Kingston areas. No fees, no repairs needed."
  },
  {
    name: "St. Catharines",
    slug: "st-catharines",
    type: "city",
    province: "Ontario",
    population: "140,000",
    region: "Niagara Region",
    description: "Garden city in the heart of Niagara Region, known for wineries and the Welland Canal.",
    nearbyAreas: ["Thorold", "Niagara Falls", "Welland", "Port Dalhousie", "Merritton"],
    metaTitle: "Sell Your House Fast for Cash in St. Catharines | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your St. Catharines home in 24 hours. We buy houses as-is in Port Dalhousie, Merritton, and all St. Catharines areas. No fees, no repairs needed."
  },

  // Golden Horseshoe (4 cities)
  {
    name: "Burlington",
    slug: "burlington",
    type: "city",
    province: "Ontario",
    population: "186,000",
    region: "Golden Horseshoe",
    description: "Affluent city between Toronto and Hamilton, known for its waterfront and family communities.",
    nearbyAreas: ["Aldershot", "Millcroft", "Orchard", "Brant Hills", "Oakville"],
    metaTitle: "Sell Your House Fast for Cash in Burlington | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Burlington home in 24 hours. We buy houses as-is in Aldershot, Millcroft, and all Burlington neighborhoods. No fees, no repairs needed."
  },
  {
    name: "Oakville",
    slug: "oakville",
    type: "city",
    province: "Ontario",
    population: "213,000",
    region: "Golden Horseshoe",
    description: "Upscale lakefront community known for its excellent schools and proximity to Toronto.",
    nearbyAreas: ["Old Oakville", "Bronte", "Glen Abbey", "River Oaks", "Iroquois Ridge"],
    metaTitle: "Sell Your House Fast for Cash in Oakville | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Oakville home in 24 hours. We buy houses as-is in Glen Abbey, Bronte, and all Oakville areas. No fees, no repairs needed."
  },
  {
    name: "Milton",
    slug: "milton",
    type: "city",
    province: "Ontario",
    population: "132,000",
    region: "Golden Horseshoe",
    description: "Fast-growing suburban city known for new developments and young families.",
    nearbyAreas: ["Derry Road", "Main Street", "Thompson Road", "Britannia", "Escarpment"],
    metaTitle: "Sell Your House Fast for Cash in Milton | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Milton home in 24 hours. We buy houses as-is in new developments and all Milton neighborhoods. No fees, no repairs needed."
  },
  {
    name: "Barrie",
    slug: "barrie",
    type: "city",
    province: "Ontario",
    population: "154,000",
    region: "Golden Horseshoe",  
    description: "Lakefront city on Lake Simcoe, popular for recreation and commuting to the GTA.",
    nearbyAreas: ["Downtown Barrie", "Cundles", "Painswick", "Holly", "Big Bay Point"],
    metaTitle: "Sell Your House Fast for Cash in Barrie | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Barrie home in 24 hours. We buy houses as-is near Lake Simcoe and all Barrie areas. No fees, no repairs needed."
  },

  // Niagara Region (4 cities)
  {
    name: "Niagara Falls",
    slug: "niagara-falls",
    type: "city",
    province: "Ontario",
    population: "89,000",
    region: "Niagara Region",
    description: "World-famous tourist destination home to the iconic Niagara Falls.",
    nearbyAreas: ["Chippawa", "Stamford", "Tourist District", "Marineland", "Queen Street"],
    metaTitle: "Sell Your House Fast for Cash in Niagara Falls | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Niagara Falls home in 24 hours. We buy houses as-is in Chippawa, Tourist District, and all Niagara Falls areas. No fees, no repairs needed."
  },
  {
    name: "Welland",
    slug: "welland",
    type: "city",
    province: "Ontario",
    population: "53,000",
    region: "Niagara Region",
    description: "Canal city at the heart of the Niagara Region, known for the Welland Canal.",
    nearbyAreas: ["Crowland", "Fonthill", "Pelham", "Rose City", "East Main"],
    metaTitle: "Sell Your House Fast for Cash in Welland | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Welland home in 24 hours. We buy houses as-is in Crowland, Rose City, and all Welland areas. No fees, no repairs needed."
  },
  {
    name: "Thorold",
    slug: "thorold",
    type: "city",
    province: "Ontario",
    population: "19,000",
    region: "Niagara Region",
    description: "Small city known for its historic downtown and proximity to the Welland Canal.",
    nearbyAreas: ["Allanburg", "Port Robinson", "Beaverdams", "Turner's Corners", "St. Catharines"],
    metaTitle: "Sell Your House Fast for Cash in Thorold | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Thorold home in 24 hours. We buy houses as-is in Allanburg, Port Robinson, and all Thorold areas. No fees, no repairs needed."
  },
  {
    name: "Fort Erie",
    slug: "fort-erie",
    type: "city",
    province: "Ontario",
    population: "32,000",
    region: "Niagara Region",
    description: "Border town across from Buffalo, known for its beaches and Peace Bridge.",
    nearbyAreas: ["Crystal Beach", "Ridgeway", "Stevensville", "Bridgeburg", "Point Abino"],
    metaTitle: "Sell Your House Fast for Cash in Fort Erie | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Fort Erie home in 24 hours. We buy houses as-is in Crystal Beach, Ridgeway, and all Fort Erie areas. No fees, no repairs needed."
  },

  // Southwestern Ontario (4 cities)
  {
    name: "Kitchener",
    slug: "kitchener",
    type: "city",
    province: "Ontario",
    population: "256,000",
    region: "Southwestern Ontario",
    description: "Tech hub and university city, part of the Kitchener-Waterloo metropolitan area.",
    nearbyAreas: ["University of Waterloo", "Wilfrid Laurier", "Victoria Park", "Fairway", "Pioneer Tower"],
    metaTitle: "Sell Your House Fast for Cash in Kitchener | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Kitchener home in 24 hours. We buy houses as-is near universities and all Kitchener neighborhoods. No fees, no repairs needed."
  },
  {
    name: "Waterloo",
    slug: "waterloo",
    type: "city",
    province: "Ontario",
    population: "121,000",
    region: "Southwestern Ontario",
    description: "University and technology city, known for innovation and startup ecosystem.",
    nearbyAreas: ["University of Waterloo", "Wilfrid Laurier", "Uptown Waterloo", "Beechwood", "Lakeshore"],
    metaTitle: "Sell Your House Fast for Cash in Waterloo | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Waterloo home in 24 hours. We buy houses as-is near universities and all Waterloo areas. No fees, no repairs needed."
  },
  {
    name: "Chatham",
    slug: "chatham",
    type: "city",
    province: "Ontario",
    population: "45,000",
    region: "Southwestern Ontario",
    description: "Agricultural center in southwestern Ontario, known for its rich farmland and history.",
    nearbyAreas: ["Kent Bridge", "Thamesville", "Dresden", "Blenheim", "Thames River"],
    metaTitle: "Sell Your House Fast for Cash in Chatham | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Chatham home in 24 hours. We buy houses as-is in rural and urban Chatham areas. No fees, no repairs needed."
  },
  {
    name: "Sarnia",
    slug: "sarnia",
    type: "city",
    province: "Ontario",
    population: "73,000",
    region: "Southwestern Ontario",
    description: "Industrial border city known for petrochemicals and the Blue Water Bridge to Michigan.",
    nearbyAreas: ["Point Edward", "Corunna", "Bright's Grove", "Camlachie", "Blue Water Bridge"],
    metaTitle: "Sell Your House Fast for Cash in Sarnia | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Sarnia home in 24 hours. We buy houses as-is in Point Edward, Bright's Grove, and all Sarnia areas. No fees, no repairs needed."
  },

  // Central & Eastern (4 cities)
  {
    name: "Peterborough",
    slug: "peterborough",
    type: "city",
    province: "Ontario",
    population: "83,000",
    region: "Central & Eastern Ontario",
    description: "University city known for its historic downtown and proximity to cottage country.",
    nearbyAreas: ["Trent University", "Downtown Peterborough", "East City", "Monaghan", "Kawartha Lakes"],
    metaTitle: "Sell Your House Fast for Cash in Peterborough | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Peterborough home in 24 hours. We buy houses as-is near Trent University and all Peterborough areas. No fees, no repairs needed."
  },
  {
    name: "Belleville",
    slug: "belleville",
    type: "city",
    province: "Ontario",
    population: "55,000",
    region: "Central & Eastern Ontario",
    description: "Historic city on the Bay of Quinte, known for its downtown and military base.",
    nearbyAreas: ["CFB Trenton", "Quinte West", "Sidney", "Foxboro", "Bay of Quinte"],
    metaTitle: "Sell Your House Fast for Cash in Belleville | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Belleville home in 24 hours. We buy houses as-is near CFB Trenton and all Belleville areas. No fees, no repairs needed."
  },
  {
    name: "Oshawa",
    slug: "oshawa",
    type: "city",
    province: "Ontario",
    population: "175,000",
    region: "Central & Eastern Ontario",
    description: "Automotive city and part of the Greater Toronto Area, known for General Motors and UOIT.",
    nearbyAreas: ["University of Ontario Institute of Technology", "Whitby", "Courtice", "Bowmanville", "Ajax"],
    metaTitle: "Sell Your House Fast for Cash in Oshawa | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Oshawa home in 24 hours. We buy houses as-is near UOIT and all Oshawa neighborhoods. No fees, no repairs needed."
  },
  {
    name: "Cobourg",
    slug: "cobourg",
    type: "city",
    province: "Ontario",
    population: "19,000",
    region: "Central & Eastern Ontario",
    description: "Historic lakefront town known for its beautiful beach and Victorian architecture.",
    nearbyAreas: ["Port Hope", "Grafton", "Baltimore", "Camborne", "Lake Ontario"],
    metaTitle: "Sell Your House Fast for Cash in Cobourg | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your Cobourg home in 24 hours. We buy houses as-is near the lakefront and all Cobourg areas. No fees, no repairs needed."
  },

  // Regional Landing Pages (4 regions)
  {
    name: "Golden Horseshoe",
    slug: "golden-horseshoe",
    type: "region",
    province: "Ontario",
    region: "Golden Horseshoe",
    description: "Most densely populated region in Canada, stretching from Toronto to Niagara Falls.",
    nearbyAreas: ["Toronto", "Hamilton", "Burlington", "Oakville", "St. Catharines", "Niagara Falls"],
    metaTitle: "Sell Your House Fast for Cash in Golden Horseshoe | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your home anywhere in the Golden Horseshoe region. We buy houses as-is from Toronto to Niagara Falls. No fees, no repairs needed."
  },
  {
    name: "Niagara Region",
    slug: "niagara-region",
    type: "region",
    province: "Ontario",
    region: "Niagara Region",
    description: "Wine country and tourist destination featuring Niagara Falls and the Welland Canal.",
    nearbyAreas: ["Niagara Falls", "St. Catharines", "Welland", "Thorold", "Fort Erie", "Grimsby"],
    metaTitle: "Sell Your House Fast for Cash in Niagara Region | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your home anywhere in Niagara Region. We buy houses as-is in all Niagara communities. No fees, no repairs needed."
  },
  {
    name: "Southwestern Ontario",
    slug: "southwestern-ontario",
    type: "region",
    province: "Ontario",
    region: "Southwestern Ontario",
    description: "Agricultural and industrial heartland featuring major cities and university centers.",
    nearbyAreas: ["London", "Windsor", "Kitchener", "Waterloo", "Chatham", "Sarnia"],
    metaTitle: "Sell Your House Fast for Cash in Southwestern Ontario | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your home anywhere in Southwestern Ontario. We buy houses as-is from London to Windsor. No fees, no repairs needed."
  },
  {
    name: "Central & Eastern Ontario",
    slug: "central-eastern-ontario",
    type: "region",
    province: "Ontario",
    region: "Central & Eastern Ontario",
    description: "Diverse region featuring cottage country, university cities, and historic communities.",
    nearbyAreas: ["Kingston", "Peterborough", "Belleville", "Oshawa", "Cobourg", "Kawartha Lakes"],
    metaTitle: "Sell Your House Fast for Cash in Central & Eastern Ontario | CanadaCashHomes",
    metaDescription: "Get a fair cash offer for your home anywhere in Central & Eastern Ontario. We buy houses as-is from Oshawa to Kingston. No fees, no repairs needed."
  }
];

/**
 * Get location data by slug
 */
export function getLocationBySlug(slug: string): LocationData | null {
  return ONTARIO_LOCATIONS.find(location => location.slug === slug) || null;
}

/**
 * Get all location slugs for static generation
 */
export function getAllLocationSlugs(): string[] {
  return ONTARIO_LOCATIONS.map(location => location.slug);
}

/**
 * Get locations by type (city or region)
 */
export function getLocationsByType(type: 'city' | 'region'): LocationData[] {
  return ONTARIO_LOCATIONS.filter(location => location.type === type);
}

/**
 * Get locations by region
 */
export function getLocationsByRegion(regionName: string): LocationData[] {
  return ONTARIO_LOCATIONS.filter(location => location.region === regionName);
}