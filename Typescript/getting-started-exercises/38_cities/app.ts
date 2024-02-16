type describe_city_params =
  | {
      country?: "Pakistan" | string;
      city?: string;
    }
  | {
      city: string;
      country: string;
    };

function describe_city({
  city,
  country = "Pakistan",
}: describe_city_params = {}) {
  if (country === "Pakistan") return console.log(`Karachi is in ${country}`);
  console.log(`${city} is in ${country}`);
}

describe_city();
describe_city({ city: "Mumbai", country: "India" });
describe_city({ country: "Japan", city: "Tokyo" });
