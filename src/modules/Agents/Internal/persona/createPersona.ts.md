```tsx

//path: src\modules\Agents\Internal\persona\createPersona.ts

import { RandomElement as RE } from "@modules/Utils";

export const CreatePersona = (): Persona => {
    const description = `a ${RE(weights)} ${RE(ethnicities)} ${RE(
        occupations,
    )} ${RE(genders)} in their ${RE(ages)}`;
    const expression = RE(expressions);
    const name = "John Doe";
    return { description, expression, name };
};

const weights = ["slim", "plump", "slightly overweight", "fat"];
const genders = [
    "man",
    "woman",
    "guy",
    "chick",
    "dude",
    "lady",
    "catperson",
    "robot",
];
const expressions = [
    "friendly and approachable",
    "neutral",
    "frowning",
    "surprised",
    "sad",
    "angry",
    "smiling",
    "laughing",
];
const ages = [
    "early 20s",
    "mid 20s",
    "late 20s",
    "early 30s",
    "mid 30s",
    "late 30s",
    "early 40s",
    "mid 40s",
    "late 40s",
    "early 50s",
    "mid 50s",
    "late 50s",
    "early 60s",
    "late 60s",
    "70s",
    "80s",
    "90s",
];
const ethnicities = [
    "american",
    "african",
    "afro-caribbean",
    "afro-latino",
    "afro-american",
    "asian",
    "caucasian",
    "hispanic",
    "southeast asian",
    "east asian",
    "siberian",
    "central asian",
    "south asian",
    "north african",
    "south african",
    "latino",
    "indian",
    "arab",
    "persian",
    "european",
];
const occupations = [
    "accountant",
    "actor",
    "architect",
    "artist",
    "astronaut",
    "athlete",
    "author",
    "baker",
    "banker",
    "barber",
    "bartender",
    "biologist",
    "blacksmith",
    "botanist",
    "butcher",
    "carpenter",
    "cashier",
    "chef",
    "chemist",
    "clerk",
    "coach",
    "comedian",
    "composer",
    "conductor",
    "construction worker",
    "consultant",
    "cook",
    "cosmetologist",
    "counselor",
    "craftsman",
    "curator",
    "dancer",
    "dentist",
    "designer",
    "detective",
    "developer",
    "dietician",
    "director",
    "doctor",
    "driver",
    "economist",
    "editor",
    "electrician",
    "engineer",
    "entrepreneur",
    "farmer",
    "firefighter",
    "fisherman",
    "florist",
    "gardener",
    "geologist",
    "hairdresser",
    "historian",
    "housekeeper",
    "illustrator",
    "instructor",
    "inventor",
    "janitor",
    "journalist",
    "judge",
    "lawyer",
    "librarian",
    "lifeguard",
    "locksmith",
    "magician",
    "manager",
    "mechanic",
    "messenger",
    "miner",
    "model",
    "musician",
    "nurse",
    "nutritionist",
    "optician",
    "painter",
    "paramedic",
    "pharmacist",
    "photographer",
    "physician",
    "physicist",
    "pilot",
    "plumber",
    "poet",
    "police officer",
    "politician",
    "professor",
    "programmer",
    "psychologist",
    "publisher",
    "receptionist",
    "referee",
    "reporter",
    "researcher",
    "salesperson",
    "scientist",
    "singer",
    "soldier",
    "statistician",
    "student",
    "surgeon",
    "tailor",
    "teacher",
    "technician",
    "therapist",
    "translator",
    "travel agent",
    "veterinarian",
    "waiter",
    "waitress",
    "writer",
];
```
