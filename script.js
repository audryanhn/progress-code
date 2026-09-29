// ===== The Grand Hotel =====

const rooms = [
  {
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

function createRoomCard() {
  const roomCard = document.createElement("div");
  roomCard.className = "room-list-card";

  roomCard.innerHTML = `
          <div class="room-list-img">
            <img
              src="assets/Deluxe.jpeg"
              height="100%"
              width="100%"
              alt="Deluxe"
            />
            <div
              class="room-list-img-inner"
              style="
                background: linear-gradient(135deg, #1c2b3a 0%, #2a3a4a 100%);
                position: relative;
              "
            >
              <div
                class="room-pattern"
                style="position: absolute; inset: 0; opacity: 0.12"
              ></div>
              <div
                class="room-num"
                style="
                  position: absolute;
                  bottom: 10px;
                  right: 16px;
                  font-family: &quot;Cormorant Garamond&quot;, serif;
                  font-size: 5rem;
                  font-weight: 600;
                  color: rgba(255, 255, 255, 0.12);
                "
              >
                01
              </div>
              <div class="room-badge">Deluxe</div>
            </div>
          </div>
          <div class="room-list-body">
            <div>
              <h3>Deluxe City View Room</h3>
              <p>
                Our entry into luxury — the Deluxe Room offers 52 sqm of
                thoughtfully designed space with floor-to-ceiling windows
                framing the Jakarta skyline. Appointed with hand-stitched
                linens, marble bathrooms, and custom-blend toiletries.
              </p>
              <div class="room-specs">
                <div class="spec-item">
                  <div class="spec-val">52</div>
                  <div class="spec-label">sqm</div>
                </div>
                <div class="spec-item">
                  <div class="spec-val">2</div>
                  <div class="spec-label">Guests</div>
                </div>
                <div class="spec-item">
                  <div class="spec-val">32F</div>
                  <div class="spec-label">Floor</div>
                </div>
              </div>
            </div>
            <div class="room-list-footer">
              <div class="room-price">
                <span class="from">From</span
                ><span class="amount">Rp 1.8 Jt</span
                ><span class="night"> / night</span>
              </div>
              <button
                class="btn-gold"
                onclick="location.href = 'contact.html'"
                style="font-size: 0.75rem; padding: 12px 24px"
              >
                Reserve
              </button>
            </div>
          </div>`;
}
