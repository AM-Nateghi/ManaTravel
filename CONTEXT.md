# Mana Travel Context

Cultural and halal travel experience platform connecting the global Muslim community to the living heritage of Hui Muslims in Yunnan and across China, hosted by Ma & Viona.

## Language

### Core Entities

**Tour Package**:
A curated travel itinerary featuring cultural immersion, verified halal cuisine, and prayer facilities.
_Avoid_: Trip, product, route, deal

**Departure Batch**:
A scheduled, fixed-date group departure for a Tour Package with defined participant caps and availability status.
_Avoid_: Event, slot, schedule, open trip date

**Tour Type**:
The operational format of the tour, strictly split into Scheduled Group Tour and Private Custom Tour.
_Avoid_: Trip kind, category

**Scheduled Group Tour**:
A fixed-date, multi-day group journey where solo travelers, couples, or small parties travel together as an international community.
_Avoid_: Open trip, public tour, group batch

**Private Custom Tour**:
A tailored travel itinerary organized for a specific family or private group with flexible pacing and custom logistics.
_Avoid_: Custom trip, private trip, VIP tour

**Ground Tour**:
A tour package covering inland transportation, accommodations, meals, tickets, and guiding, excluding international airfare to China.
_Avoid_: Land package, local tour

### Trust & Cultural Verification

**Halal Assurance**:
The strict verification that all provided meals are 100% certified halal and itineraries accommodate prayer times and historic mosque visits.
_Avoid_: Muslim-friendly food, halal-friendly

**Host**:
The authentic local cultural guides and storytellers (specifically Ma/Yusuf and Viona/Ayesha) who lead journeys and represent the brand.
_Avoid_: Admin, agency, tour operator

**Traveler**:
A prospective or past guest participating in a tour.
_Avoid_: User, customer, client, buyer

**Inquiry Handshake**:
A dynamic, contextual handoff from the website to WhatsApp or direct chat containing pre-filled itinerary, party size, and dates.
_Avoid_: Contact us, booking click, checkout

**Micro-Intake Modal**:
A lightweight, 3-step qualification dialog capturing traveler count, preferred batch, and origin before dispatching to WhatsApp.
_Avoid_: Booking form, registration form, lead magnet

**Handshake Payload**:
The structured data string (selected tour, departure batch, party size, origin country, flight acknowledgment) compiled into the WhatsApp message.
_Avoid_: Query params, contact message

**Trip Essentials Box**:
A prominent specification badge prominently displayed on every tour package clarifying Ground Tour status (flights self-arranged), Halal Assurance, and seat availability.
_Avoid_: Specs table, details widget

**Halal Integrity Bar**:
A high-visibility trust banner outlining four fundamental operational guarantees: 100% certified halal dining, prayer time accommodation with masjid stops, English-speaking local Muslim hosts, and zero forced shopping.
_Avoid_: Features list, perks section

**Tour Switcher**:
A segmented control allowing travelers to toggle between Scheduled Group Tours (fixed dates) and Private Custom Tours (tailored family itineraries).
_Avoid_: Category tabs, filter buttons

**Flight & Transit Advisory**:
A structured guidance card explaining that international flights are self-arranged to Kunming (KMG) or destination hubs, with typical transit routes to reduce traveler anxiety.
_Avoid_: FAQ item, flight policy

**Bento Travel Scrapbook**:
An asymmetric multi-cell proof mosaic combining candid expedition photography, authentic halal dining verifications, traveler reflections, and passport cancellation stamps.
_Avoid_: Reviews carousel, testimonials slider, feedback cards

**Editorial Travelogue**:
A magazine-style storytelling layout pairing unretouched landmark imagery with first-person traveler pull quotes, route identifiers, and origin city tags.
_Avoid_: User review, customer rating

**Contextual Floating Action Dock**:
A lightweight mobile-only capsule appearing strictly on Tour Package detail pages after scrolling past the Trip Essentials Box, displaying live batch availability and triggering the Inquiry Handshake.
_Avoid_: Bottom navigation bar, sticky footer tab, app dock
