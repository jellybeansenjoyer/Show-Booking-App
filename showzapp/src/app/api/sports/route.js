// pages/api/events.js

export async function GET(req, res) {
    // Sample event data
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const events = [
        {
           "id":1,
           "poster":"https://m.media-amazon.com/images/I/81QXLj4Y0hL.jpg",
          "name": "Coldplay Live in Mumbai",
          "description": "Experience the magic of Coldplay live in concert with mesmerizing lights and unforgettable music.",
          "image": "https://ipfs.io/ipfs/QmColdplayImage",
          "event": {
            "event_id": "EVT001",
            "event_name": "Coldplay Mumbai Concert",
            "event_date": "2024-12-15T19:00:00Z",
            "event_location": "Mumbai",
            "event_venue": "DY Patil Stadium",
            "event_category": "Music Concert",
            "event_description": "Coldplay returns to India with their mesmerizing music and dazzling stage performance."
          },
          "ticket": {
            "ticket_id": "TCKT001",
            "seat_number": "A12",
            "row": "A",
            "section": "VIP",
            "price_paid": 300,
            "resale_price_cap": 500,
            "owner": "0xABC123...",
            "is_resold": false,
            "resale_history": [],
            "ticket_type": "NFT",
            "ticket_status": "active",
            "emergency_resale_allowed": true,
            "expiry_date": "2024-12-16T00:00:00Z"
          },
          "attributes": [
            { "trait_type": "Seat", "value": "A12" },
            { "trait_type": "VIP Access", "value": "Yes" },
            { "trait_type": "Resale Price Cap", "value": "500 MATIC" }
          ],
          "creator": {
            "name": "Coldplay",
            "address": "0xORGANIZER001..."
          },
          "smart_contract": {
            "contract_address": "0xSMARTCONTRACT001...",
            "token_id": "1"
          }
        },
        {
          "id":2,
          "poster":"https://i.pinimg.com/736x/e8/ae/9f/e8ae9f023c16dcb38f46b5db4ebdbe9f.jpg",
          "name": "Diljit Dosanjh Live",
          "description": "Join us for a night of Punjabi beats and incredible vibes with Diljit Dosanjh!",
          "image": "https://ipfs.io/ipfs/QmDiljitImage",
          "event": {
            "event_id": "EVT002",
            "event_name": "Diljit Live",
            "event_date": "2024-12-20T18:30:00Z",
            "event_location": "Delhi",
            "event_venue": "Jawaharlal Nehru Stadium",
            "event_category": "Music Concert",
            "event_description": "Diljit Dosanjh live in Delhi with a performance that promises energy and entertainment."
          },
          "ticket": {
            "ticket_id": "TCKT002",
            "seat_number": "B24",
            "row": "B",
            "section": "Ground",
            "price_paid": 250,
            "resale_price_cap": 400,
            "owner": "0xDEF456...",
            "is_resold": false,
            "resale_history": [],
            "ticket_type": "NFT",
            "ticket_status": "active",
            "emergency_resale_allowed": true,
            "expiry_date": "2024-12-21T00:00:00Z"
          },
          "attributes": [
            { "trait_type": "Seat", "value": "B24" },
            { "trait_type": "VIP Access", "value": "No" },
            { "trait_type": "Resale Price Cap", "value": "400 MATIC" }
          ],
          "creator": {
            "name": "Diljit Dosanjh",
            "address": "0xORGANIZER002..."
          },
          "smart_contract": {
            "contract_address": "0xSMARTCONTRACT002...",
            "token_id": "2"
          }
        },
        {
          "id":3,
          "poster":"https://qitchain.net/wp-content/uploads/2022/06/Web3-Transforming-Business.png",
          "name": "Web3 Workshop",
          "description": "Learn to build dApps and master blockchain at this hands-on Web3 workshop.",
          "image": "https://ipfs.io/ipfs/QmWeb3WorkshopImage",
          "event": {
            "event_id": "EVT003",
            "event_name": "Web3 Builders Bootcamp",
            "event_date": "2024-12-10T09:00:00Z",
            "event_location": "Bangalore",
            "event_venue": "Whitefield Tech Park",
            "event_category": "Workshop",
            "event_description": "A comprehensive workshop covering blockchain, smart contracts, and dApp development."
          },
          "ticket": {
            "ticket_id": "TCKT003",
            "seat_number": "W10",
            "row": "W",
            "section": "General",
            "price_paid": 50,
            "resale_price_cap": 80,
            "owner": "0xGHI789...",
            "is_resold": false,
            "resale_history": [],
            "ticket_type": "NFT",
            "ticket_status": "active",
            "emergency_resale_allowed": true,
            "expiry_date": "2024-12-10T18:00:00Z"
          },
          "attributes": [
            { "trait_type": "Skill Level", "value": "Beginner" },
            { "trait_type": "Resale Price Cap", "value": "80 MATIC" }
          ],
          "creator": {
            "name": "Web3 Academy",
            "address": "0xORGANIZER003..."
          },
          "smart_contract": {
            "contract_address": "0xSMARTCONTRACT003...",
            "token_id": "3"
          }
        },{
            "id":4,
            "poster":"https://www.singingaudition.in/wp-content/uploads/2021/10/5286228878851754134-1024x1024.jpg",
            "name": "The Ultimate Singing Contest",
            "description": "Showcase your talent and compete with the best singers for a grand prize!",
            "image": "https://ipfs.io/ipfs/QmSingingContestImage",
            "event": {
              "event_id": "EVT004",
              "event_name": "Sing & Shine",
              "event_date": "2024-12-18T14:00:00Z",
              "event_location": "Chennai",
              "event_venue": "Music Academy Hall",
              "event_category": "Talent Show",
              "event_description": "A singing contest to find the next big star. Compete for the top spot and win exciting prizes."
            },
            "ticket": {
              "ticket_id": "TCKT004",
              "seat_number": "C15",
              "row": "C",
              "section": "General",
              "price_paid": 30,
              "resale_price_cap": 50,
              "owner": "0xJKL123...",
              "is_resold": false,
              "resale_history": [],
              "ticket_type": "NFT",
              "ticket_status": "active",
              "emergency_resale_allowed": true,
              "expiry_date": "2024-12-18T20:00:00Z"
            },
            "attributes": [
              { "trait_type": "Seat", "value": "C15" },
              { "trait_type": "Contestant Pass", "value": "No" },
              { "trait_type": "Resale Price Cap", "value": "50 MATIC" }
            ],
            "creator": {
              "name": "Star Talent Group",
              "address": "0xORGANIZER004..."
            },
            "smart_contract": {
              "contract_address": "0xSMARTCONTRACT004...",
              "token_id": "4"
            }
          },
          {
            "id":5,
            "poster":"https://dcassetcdn.com/design_img/2126175/47602/47602_11341037_2126175_94b1f2c8_image.jpg",
            "name": "Art and Creativity Festival",
            "description": "Immerse yourself in a world of colors, creativity, and art workshops.",
            "image": "https://ipfs.io/ipfs/QmArtFestivalImage",
            "event": {
              "event_id": "EVT005",
              "event_name": "Canvas Carnival",
              "event_date": "2024-12-22T10:00:00Z",
              "event_location": "Kolkata",
              "event_venue": "Victoria Memorial Grounds",
              "event_category": "Art Festival",
              "event_description": "A day-long festival featuring art exhibits, live painting, and hands-on workshops for enthusiasts."
            },
            "ticket": {
              "ticket_id": "TCKT005",
              "seat_number": "Free Roaming",
              "row": "NA",
              "section": "Festival Grounds",
              "price_paid": 20,
              "resale_price_cap": 35,
              "owner": "0xMNO456...",
              "is_resold": false,
              "resale_history": [],
              "ticket_type": "NFT",
              "ticket_status": "active",
              "emergency_resale_allowed": false,
              "expiry_date": "2024-12-22T18:00:00Z"
            },
            "attributes": [
              { "trait_type": "Access", "value": "All Exhibits" },
              { "trait_type": "Workshop Entry", "value": "Yes" },
              { "trait_type": "Resale Price Cap", "value": "35 MATIC" }
            ],
            "creator": {
              "name": "Creative Minds",
              "address": "0xORGANIZER005..."
            },
            "smart_contract": {
              "contract_address": "0xSMARTCONTRACT005...",
              "token_id": "5"
            }
          },
          {
            "id":6,
            "poster":"https://pbs.twimg.com/media/GbcZzFsbsAAwSap.jpg",
            "name": "Crypto Hackathon 2024",
            "description": "Join the biggest crypto hackathon and collaborate with blockchain enthusiasts worldwide.",
            "image": "https://ipfs.io/ipfs/QmCryptoHackathonImage",
            "event": {
              "event_id": "EVT006",
              "event_name": "Crypto Build-A-Thon",
              "event_date": "2024-12-15T08:00:00Z",
              "event_location": "Hyderabad",
              "event_venue": "T-Hub Auditorium",
              "event_category": "Hackathon",
              "event_description": "A competitive event for blockchain developers and crypto enthusiasts. Build, pitch, and win rewards."
            },
            "ticket": {
              "ticket_id": "TCKT006",
              "seat_number": "Participant",
              "row": "NA",
              "section": "Participant Zone",
              "price_paid": 75,
              "resale_price_cap": 100,
              "owner": "0xPQR789...",
              "is_resold": false,
              "resale_history": [],
              "ticket_type": "NFT",
              "ticket_status": "active",
              "emergency_resale_allowed": true,
              "expiry_date": "2024-12-16T20:00:00Z"
            },
            "attributes": [
              { "trait_type": "Participation", "value": "Yes" },
              { "trait_type": "Resale Price Cap", "value": "100 MATIC" }
            ],
            "creator": {
              "name": "Crypto Builders Club",
              "address": "0xORGANIZER006..."
            },
            "smart_contract": {
              "contract_address": "0xSMARTCONTRACT006...",
              "token_id": "6"
            }
          },
          {
            "id":7,
            "poster":"https://m.media-amazon.com/images/I/61+OceCddhL._AC_UF1000,1000_QL80_.jpg",
            "name": "New Year Bash 2025",
            "description": "Countdown to the new year with an electrifying party and live performances.",
            "image": "https://ipfs.io/ipfs/QmNewYearBashImage",
            "event": {
              "event_id": "EVT007",
              "event_name": "NYE Party 2025",
              "event_date": "2024-12-31T21:00:00Z",
              "event_location": "Goa",
              "event_venue": "Beachside Club",
              "event_category": "Party",
              "event_description": "Ring in the new year with live DJ performances, fireworks, and an unforgettable vibe."
            },
            "ticket": {
              "ticket_id": "TCKT007",
              "seat_number": "Standing",
              "row": "NA",
              "section": "Dance Floor",
              "price_paid": 150,
              "resale_price_cap": 250,
              "owner": "0xSTU012...",
              "is_resold": false,
              "resale_history": [],
              "ticket_type": "NFT",
              "ticket_status": "active",
              "emergency_resale_allowed": false,
              "expiry_date": "2025-01-01T02:00:00Z"
            },
            "attributes": [
              { "trait_type": "Access", "value": "Dance Floor" },
              { "trait_type": "Resale Price Cap", "value": "250 MATIC" }
            ],
            "creator": {
              "name": "Party Makers",
              "address": "0xORGANIZER007..."
            },
            "smart_contract": {
              "contract_address": "0xSMARTCONTRACT007...",
              "token_id": "7"
            }
          },
          {
            "id":8,
            "poster":"https://content.wepik.com/statics/112216287/preview-page0.jpg",
            "name": "Wellness Yoga Retreat",
            "description": "Reconnect with yourself through a relaxing yoga retreat amidst nature.",
            "image": "https://ipfs.io/ipfs/QmYogaRetreatImage",
            "event": {
              "event_id": "EVT008",
              "event_name": "Yoga Retreat",
              "event_date": "2024-12-28T06:00:00Z",
              "event_location": "Rishikesh",
              "event_venue": "Ganga Resort",
              "event_category": "Health and Wellness",
              "event_description": "A rejuvenating experience combining yoga, meditation, and nature's tranquility."
            },
            "ticket": {
              "ticket_id": "TCKT008",
              "seat_number": "Lodge Room 5",
              "row": "NA",
              "section": "Lodge",
              "price_paid": 200,
              "resale_price_cap": 300,
              "owner": "0xVWX345...",
              "is_resold": false,
              "resale_history": [],
              "ticket_type": "NFT",
              "ticket_status": "active",
              "emergency_resale_allowed": true,
              "expiry_date": "2024-12-30T20:00:00Z"
            },
            "attributes": [
              { "trait_type": "Lodging", "value": "Private Room" },
              { "trait_type": "Resale Price Cap", "value": "300 MATIC" }
            ],
            "creator": {
              "name": "Tranquil Retreats",
              "address": "0xORGANIZER008..."
            },
            "smart_contract": {
              "contract_address": "0xSMARTCONTRACT008...",
              "token_id": "8"
            }
          }
    ];
  
    // Return the events as a JSON response
    return new Response(JSON.stringify({ events }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
  }
  