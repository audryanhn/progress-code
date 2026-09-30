// ===== The Grand Hotel =====

const rooms = [
  {
    id: 0,
    name: "Deluxe City View",
    type: "Deluxe",
    description:
      "A spacious retreat with panoramic city vistas and refined contemporary interiors.",
    price: 1800000,
    priceLabel: "Rp 1.8 Jt",
    size: 52,
    guests: 2,
    floor: "32F",
    image: "assets/Deluxe.jpeg",
  },
  {
    id: 1,
    name: "Executive Suite",
    type: "Executive",
    description:
      "A spacious suite with a separate living area, private bar, and exclusive lounge access.",
    price: 3500000,
    priceLabel: "Rp 3.5 Jt",
    size: 90,
    guests: 2,
    floor: "38F",
    image: "assets/Executive.jpeg",
  },
  {
    id: 2,
    name: "Presidential Suite",
    type: "Presidential",
    description:
      "A luxurious suite with private entertainment spaces and premium hotel services.",
    price: 8000000,
    priceLabel: "Rp 8 Jt",
    size: 240,
    guests: 4,
    floor: "42F",
    image: "assets/Presidential.jpeg",
  },
];

// Practice penerapan object pada console
function showRoomInfo(name, price, size, guests) {
  console.log("Room: " + name);
  console.log("Price: " + price + " per night");
  console.log("Size: " + size + " sqm");
  console.log("Guests: " + guests);
}

function calculateStay(price, nights) {
  return price * nights;
}

rooms.forEach((room) => {
  showRoomInfo(room.name, room.priceLabel, room.size, room.guests);
  console.log("");
});
