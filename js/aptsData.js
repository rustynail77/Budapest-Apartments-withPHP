import aptInfo from "./aptInfo.js";

// Raday 45A %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const rd45agal = [
    "./images/rd45a/01.jpg",
    "./images/rd45a/02.jpg",
    "./images/rd45a/03.jpg",
    "./images/rd45a/04.jpg",
    "./images/rd45a/05.jpg",
    ];

    const rd45aCaps = [
        "Spacious & Equipped Kitchen",
        "Bedroom with Sitting Area",
        "Comfi Sofa",
        "Large Bathroom with Washing-Machine",
        "Double Bed and a Wardrobe Cabinet"        
    ];

    const RD45A = new aptInfo(
    "rd45a",
    "Raday street Spacious Beauty",
    "Raday",
    "utca",
    "45",
    0,
    "1A",
    "./images/rd45a.jpg",
    rd45agal,
    "1 Bedroom, Separate full kitchen",
    rd45aCaps,
);


// Raday 45B %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const rd45bgal = [
    "./images/rd45b/01.jpg",
    "./images/rd45b/02.jpg",
    "./images/rd45b/03.jpg",
    "./images/rd45b/04.jpg",
    "./images/rd45b/05.jpg",
    ];

const rd45bCaps = [
        "Kitchenette and Working Desk",
        "Hidden Bed and Dining Area",
        "Bathroom with Washing-Machine (Separate WC)",
        "Fully Equipped Kitchenette",
        "Reclining Sofa"        
    ];

const RD45B = new aptInfo(
    "rd45b",
    "Raday Studio next to Corvin Dorms",
    "Raday",
    "utca",
    "45",
    0,
    "1B",
    "./images/rd45b.jpg",
    rd45bgal,
    "Studio apartment",
    rd45bCaps,
);


// Raday 31c %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const rd31cgal = [
    "./images/rd31c/01.jpg",
    "./images/rd31c/02.jpg",
    "./images/rd31c/03.jpg",
    "./images/rd31c/04.jpg",
    "./images/rd31c/05.jpg",
    ];

    const rd31cCaps = [
        "2 Large Rooms + 1 Small Bedroom",
        "Living-Room/Dining Area with Balcony Exit",
        "Equipped Kitchen",
        "Separate WC",
        "Separate Bathroom"        
    ];

const RD31c = new aptInfo(
    "rd31c",
    "Raday's Quiet Spot with Balcony",
    "Raday",
    "utca",
    "31/c",
    3,
    "9",
    "./images/rd31c.jpg",
    rd31cgal,
    "2.5 Rooms, 1 Bath",
    rd31cCaps,
);


// Kalman Imre %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const ki16gal = [
    "./images/ki16/01.jpg",
    "./images/ki16/02.jpg",
    "./images/ki16/03.jpg",
    "./images/ki16/04.jpg",
    "./images/ki16/05.jpg",
    ];
    
    const ki16Caps = [
        "Fully Equipped Kitchen",
        "Bathroom with Massage Jets Cabin",
        "Dining Desk with inner courtyard view",
        "Cool Kitchen with Capsule Coffee Machine",
        "Foldable Wall Mounted Double Bed"        
    ];

const KI16 = new aptInfo(
    "ki16",
    "Capsule Apartment close to the Parliament",
    "Kalman Imre",
    "utca",
    "16",
    0.5,
    "2",
    "./images/ki16.jpg",
    ki16gal,
    "Capsule apartment, 11sqm.<br>In the Absolute Heart of Budapest, in the 5th district, within eyesight of the State Parliament lies the true pearl of accommodation.",
    ki16Caps,
);


// Liszt Ferenc ter %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const lft4gal = [
    "./images/lft4/01.jpg",
    "./images/lft4/02.jpg",
    "./images/lft4/03.jpg",
    "./images/lft4/04.jpg",
    "./images/lft4/05.jpg",
    "./images/lft4/06.jpg",
    ];

const lft4Caps = [
        "Fully Equipped Kitchenette",
        "3 Bedrooms (incl. 1 Ensuite)",
        "Spacious Living Room and Dining Area",
        "A Bedroom with Desk",
        "A Wardrobe in Every Bedroom",
        "2 Bathrooms (1 Ensuite, 1 Shared)"
    ];

const LFT4 = new aptInfo(
    "lft4",
    "3BR Vacation Rental for Familieis",
    "Liszt Ferenc",
    "ter",
    "4",
    3,
    "2",
    "./images/lft4.jpg",
    lft4gal,
    "3 Bedrooms, 2 Baths, Amazing Location",
    lft4Caps,
    "https://www.airbnb.co.uk/rooms/15381784?guests=1&adults=1&s=67&unique_share_id=f6030f11-c3d8-4f6f-87c2-332e64c39d98",
);


// Hunyadi ter %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const ht09gal = [
    "./images/ht09/01.jpg",
    "./images/ht09/02.jpg",
    "./images/ht09/03.jpg",
    "./images/ht09/04.jpg",
    "./images/ht09/05.jpg",
    ];

const ht09Caps = [
        "Bathroom w/ Washing Machine, 2 WCs",
        "Double Bed in Gallery Floor",
        "Dining Area",
        "Fully Equipped Kitchen",
        "Convertible Sofa and Large Wardrobe"        
    ];

const HT09 = new aptInfo(
    "ht09",
    "The Crib in the Park",
    "Hunyadi",
    "ter",
    "9",
    0,
    "1",
    "./images/ht09.jpg",
    ht09gal,
    "Gallery Bedroom, Living-room, 45sqm, 2 WC",
    ht09Caps,
    "https://www.airbnb.co.uk/rooms/39907940?guests=1&adults=1&s=39&unique_share_id=cd361a04-cd3f-4f58-9d0a-ec5b2bfd812f",
);

const allApts = [RD45A,RD45B,RD31c,KI16,LFT4,HT09];

export default allApts;