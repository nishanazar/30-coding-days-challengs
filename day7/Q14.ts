//-----------------Question: 14-----------------------------------
interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: number;
}
interface Person {
  name: string;
  age: number;
  email: string;
  phone: string;
  address: Address[];
}
function findPersonInCity(
  people: Person[],
  city: string
): { name: string; email: string } | undefined {
  for (const person of people) {
    for (const address of person.address) {
      if (address.city === city) {
        return { name: person.name, email: person.email };
      }
    }
    return undefined;
  }
}
const people: Person[] = [
  {
    name: "haseeb",
    age: 20,
    email: "@haseeb.gmail.com",
    phone: "021-364-987",
    address: [
      {
        street: "123 Main St",
        city: "karachi",
        state: "NY",
        zipcode: 10001,
      },
    ],
  },
  {
    name: "Aiza khan",
    age: 25,
    email: "@aiza.gmail.com",
    phone: "020-777-987",
    address: [
      {
        street: "D street",
        city: "lahore",
        state: "CY",
        zipcode: 10020,
      },
    ],
  },
];
let result = findPersonInCity(people, "karachi");
if (result) {
  console.log(`Name: ${result.name}, Email: ${result.email}`);
} else {
  console.log("No person found in the specified city.");
}
