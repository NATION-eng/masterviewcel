"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { RfqModal } from "@/components/RfqModal";
import { MobileActionBar } from "@/components/MobileActionBar";
import { 
  Building, 
  Camera, 
  MapPin, 
  X,
  ArrowRight,
  CheckCircle2,
  Layers,
  Filter,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const armyGallery = [
  {
    src: "/images/army/army-finished-1-pitch.jpg",
    title: "Completed 40m × 20m Synthetic Turf Pitch",
    desc: "FIFA-specification two-tone green all-weather synthetic grass with regulation line markings and relaxation clubhouse in the background."
  },
  {
    src: "/images/army/army-finished-2-pavilion.jpg",
    title: "Sheltered Spectator Grandstand Pavilion",
    desc: "Reinforced concrete terracing with overhead weather-shield cantilever canopy and red & blue stadium bucket seats."
  },
  {
    src: "/images/army/army-finished-3-seats.jpg",
    title: "Terraced Seating & Stadium Bucket Seats",
    desc: "Close-up perspective of stepped concrete grandstand seating tiers fitted with durable UV-resistant polymer bucket seats."
  },
  {
    src: "/images/army/army-finished-4-grandstand-front.jpg",
    title: "Frontal View of Completed Pavilion",
    desc: "Full front elevation view of the spectator grandstand with 60-person capacity seen through the security chain-link netting."
  },
  {
    src: "/images/army/army-finished-5-clubhouse.jpg",
    title: "Recreation Clubhouse & Lounge Building",
    desc: "Turnkey multi-purpose clubhouse featuring green stone-coated roofing tiles, covered veranda bar lounge, and elevated water storage tower."
  },
  {
    src: "/images/army/army-finished-6-walkway.jpg",
    title: "Interlocking Paved Perimeter Walkway",
    desc: "Heavy-duty stone interlocking pavers forming an all-weather access walkway along the high security chain-link enclosure."
  },
  {
    src: "/images/army/army-finished-7-paved-perimeter.jpg",
    title: "Paved Facility Grounds & Landscaping",
    desc: "Expansive finished paved surroundings, foundation curbs, and drainage infrastructure enclosing the 16 Brigade sports complex."
  },
];

const nlngGallery = [
  {
    src: "/images/nlng/nlng-5-seam-alignment.jpg",
    title: "Setting the Leveling & Cleaning Top Surface",
    desc: "Preliminary deck leveling and meticulous surface cleaning across the 30m × 6.3m concrete roof substrate, using straight-edge leveling tools and surface scrapers to guarantee perfect substrate adhesion.",
    phase: "Leveling & Cleaning"
  },
  {
    src: "/images/nlng/nlng-1-deck-prep.jpg",
    title: "Preparing of the Sandcrete Screed",
    desc: "On-site batching, aggregate grading, and mechanical mixing of high-strength sandcrete screed to establish precise fall gradients towards drainage outlets across the NLNG RA Finima facility deck.",
    phase: "Preparing Sandcrete"
  },
  {
    src: "/images/nlng/nlng-2-screed-inspection.jpg",
    title: "Inspection of Finished Sandcrete Screed",
    desc: "Joint engineering verification by Masterview Consults and Intesat engineers inspecting the cured, smooth sandcrete screed laid to falls prior to thermal insulation and membrane application.",
    phase: "Finished Sandcrete Inspection"
  },
  {
    src: "/images/nlng/nlng-8-finished-deck.jpg",
    title: "Layout of 500mm × 500mm Foam Glass",
    desc: "Precision layout of 500mm × 500mm cellular foam glass thermal insulation blocks providing zero-permeability moisture resistance, high compressive strength, and thermal protection across the roof expanse.",
    phase: "500×500mm Foam Glass Layout"
  },
  {
    src: "/images/nlng/nlng-7-tile-installation.jpg",
    title: "Bituminous Mastic & Foam Glass Bonding",
    desc: "Specialist applicator applying high-temperature bituminous bonding mastic and laying 500mm × 500mm foam glass panels, establishing a monolithic, weather-tight thermal barrier.",
    phase: "Mastic Application"
  },
  {
    src: "/images/nlng/nlng-3-bituflame-rolls.jpg",
    title: "10mm Thick Felt Waterproofing Material",
    desc: "Staging of certified 10mm thick heavy-duty elastomeric bitumen felt membrane rolls along the parapet wall, prepared for torch-on re-felting over the insulated substrate.",
    phase: "10mm Felt Material"
  },
  {
    src: "/images/nlng/nlng-6-membrane-complete.jpg",
    title: "Completed 500mm × 500mm Foam Glass Envelope",
    desc: "Full-span overview of the 30m × 6.3m roof deck with completed 500mm × 500mm foam glass layout and multi-ply weatherproofing executed under strict NLNG QA/QC protocols.",
    phase: "Completed Envelope"
  },
  {
    src: "/images/nlng/nlng-9-engineering-crew.jpg",
    title: "Joint Masterview & Intesat Delivery Team",
    desc: "Masterview Consults and Intesat Services certified technical crew in full mandatory offshore/island PPE on site at NLNG Bonny Island.",
    phase: "Certified Workforce"
  },
  {
    src: "/images/nlng/nlng-10-toolbox-meeting.jpg",
    title: "On-Site HSE Supervision & Toolbox Meeting",
    desc: "Supervisory crew under the weather awning conducting mandatory daily safety risk assessments and Permit-to-Work (PTW) briefings.",
    phase: "HSE Compliance"
  },
];

const horandezGallery = [
  {
    src: "/images/horandez/horandez-1-steel-erection.jpg",
    title: "Structural Steel Frame & Rafter Erection",
    desc: "Mobile crane hoisting and rigger positioning of heavy universal beam (UB) roof rafters and knee-braced portal frames across the 40m clear span.",
    phase: "Steel Erection"
  },
  {
    src: "/images/horandez/horandez-2-portal-frame.jpg",
    title: "Full 40m × 40m Structural Skeleton",
    desc: "Complete 1,600 sqm clear-span structural steel skeleton framework, featuring fabricated I-beam stanchions, cold-formed roof purlins, and wall girts.",
    phase: "Portal Framework"
  },
  {
    src: "/images/horandez/horandez-3-anchor-bolts.jpg",
    title: "Anchor Bolt Setting & Base Plate Alignment",
    desc: "Precision spirit-level calibration and lock-nut leveling of heavy M24 foundation holding-down anchor bolt assemblies prior to column base plate grouting.",
    phase: "Anchor Bolt Setting"
  },
  {
    src: "/images/horandez/horandez-4-column-pedestal.jpg",
    title: "Reinforced Concrete Column Pedestal",
    desc: "Cast reinforced concrete stub column pedestal with protruding high-yield starter bars and formwork bracing tied into the deep pad foundation.",
    phase: "Column Pedestal"
  },
  {
    src: "/images/horandez/horandez-5-beam-joint-assembly.jpg",
    title: "Heavy Beam Knee Joint Bolting",
    desc: "Steel fabricators torquing grade 8.8 structural bolts on thick end-plate moment connections with stiffener gusset plates.",
    phase: "Bolted Connections"
  },
  {
    src: "/images/horandez/horandez-6-foundation-trenches.jpg",
    title: "Continuous Foundation Trenches & Cages",
    desc: "Excavated perimeter strip foundation trenches lined with reinforced rebar column cages, timber shuttering, and hollow block retaining walls.",
    phase: "Substructure Trenching"
  },
  {
    src: "/images/horandez/horandez-7-mcel-engineer-rebar.jpg",
    title: "Masterview Engineer Rebar Inspection",
    desc: "Masterview Consults project engineer in branded safety PPE inspecting rebar spacing, cover blocks, and blinding layer inside the foundation pit.",
    phase: "QA/QC Inspection"
  },
  {
    src: "/images/horandez/horandez-8-side-cladding.jpg",
    title: "Industrial Blue Profiled Wall Cladding",
    desc: "Installation of weather-sealed blue corrugated industrial steel cladding sheets with translucent daylight eaves along the 40m warehouse facade.",
    phase: "Wall Cladding"
  },
  {
    src: "/images/horandez/horandez-9-gable-roof-cladding.jpg",
    title: "Gable Elevation & Roof Sheeting",
    desc: "External scaffolding access and installation of apex gable wall cladding and roof panels on the 40m × 40m warehouse facility.",
    phase: "Roof & Gable Envelope"
  },
];

interface ContractProject {
  id: string;
  client: string;
  clientLogo: string;
  partner?: {
    name: string;
    logo: string;
  };
  role: string;
  title: string;
  location: string;
  scope: string;
  category: "Oil & Gas" | "Civil & Structural" | "Industrial Plants" | "Procurement & Sourcing";
  tags: string[];
  jumpLink?: string;
  jumpText?: string;
}

const corporateContracts: ContractProject[] = [
  {
    id: "totalenergies-ccr",
    client: "TotalEnergies EP Nigeria Limited (TEPNG)",
    clientLogo: "/images/logos/totalenergies.png",
    role: "Technical Lead",
    title: "Central Control Room (CCR) & Production Building Modernization",
    location: "OML 58 District • Obite Gas Plant & Obagi Field Flowstation",
    scope: "Field diagnostic survey, architectural overhaul, curved operator console pods, 5-panel Sony video walls, anti-static raised steel flooring, acoustic ceilings, and biometric security systems under proposals M-CEL 25/01/TP001 & TP002.",
    category: "Oil & Gas",
    tags: ["OML 58 District", "CCR Modernization", "SCADA Architecture", "Raised Steel Floors", "Ergonomics"],
    jumpLink: "#totalenergies-ccr-section",
    jumpText: "View Interactive Before/After & 3D Renders"
  },
  {
    id: "nigerian-army",
    client: "Nigerian Army — 16 Brigade Headquarters",
    clientLogo: "/images/logos/nigerian-army.png",
    role: "Project Engineer",
    title: "Military Recreation & Sports Complex Turnkey Construction",
    location: "Camp Buratai, Yenagoa, Bayelsa State",
    scope: "Turnkey design and civil execution of a 40m × 20m FIFA-spec synthetic turf football pitch, 60-capacity sheltered spectator grandstand pavilion, clubhouse lounge building, perimeter security fencing, and heavy-duty interlocking paved surroundings.",
    category: "Civil & Structural",
    tags: ["Synthetic Turf Pitch", "Cantilever Grandstand", "Clubhouse Construction", "Perimeter Fencing", "Civil Delivery"],
    jumpLink: "#army-complex-section",
    jumpText: "View 7 Finished Complex Field Photos"
  },
  {
    id: "nlng-felting",
    client: "Nigeria LNG Limited (NLNG)",
    clientLogo: "/images/logos/nlng.png",
    partner: {
      name: "Intesat Services Limited",
      logo: "/images/logos/intesat.png"
    },
    role: "Project Engineer",
    title: "30m × 6.3m Roof Waterproofing, Sandcrete Screed & 500mm Foam Glass",
    location: "NLNG Residential Area (RA Finima), Bonny Island, Rivers State",
    scope: "Substrate leveling and cleaning, batching of sandcrete screed laid to fall, installation of 500mm × 500mm cellular foam glass thermal insulation, and torch-on multi-ply 10mm elastomeric bitumen felt re-felting under strict NLNG island PTW protocols.",
    category: "Civil & Structural",
    tags: ["Roof Waterproofing", "500×500 Foam Glass", "10mm Felt Material", "Sandcrete Screed", "Bonny Island PTW"],
    jumpLink: "#nlng-bonny",
    jumpText: "View 9 Field Progression Photos"
  },
  {
    id: "horandez-warehouse",
    client: "Horandez & Detroit Company Ltd",
    clientLogo: "/images/logos/horandez-detroit.png",
    role: "Project Engineer",
    title: "40m × 40m Heavy Structural Steel Warehouse & Engineering Offices",
    location: "KM 21 East-West Road, Iriebe, Rivers State",
    scope: "Turnkey civil engineering design, deep pad foundations, M24 holding-down anchor bolt setting, 1,600 sqm clear-span structural steel portal frame erection with crane runway beams, adjoining multi-storey offices, and industrial blue wall/roof cladding.",
    category: "Civil & Structural",
    tags: ["1,600 sqm Warehouse", "Structural Steel", "Pad Foundations", "Anchor Bolt Setting", "Overhead Crane Beams"],
    jumpLink: "#horandez-warehouse-section",
    jumpText: "View 9 Construction Field Photos"
  },
  {
    id: "spdc-waos-spm",
    client: "Shell Petroleum Development Company (SPDC)",
    clientLogo: "/images/logos/shell.png",
    partner: {
      name: "West Africa Oilfield Services (WAOS)",
      logo: "/images/logos/waos.png"
    },
    role: "Draftsman AutoCAD",
    title: "SPM BUOY 12481 Refurbishment & Piping Isometric Drafting",
    location: "SPDC Offshore Loading Terminal Operations, Rivers State",
    scope: "Certified AutoCAD drafting for Single-Point Mooring (SPM) Buoy 12481 structural refurbishment, product swivel assembly overhauls, piping isometrics, hawser connection details, and ballast compartment arrangements conforming to Shell DEP offshore standards.",
    category: "Oil & Gas",
    tags: ["AutoCAD 2D/3D", "SPM Buoy 12481", "Piping Isometrics", "Shell DEP Standards", "Offshore Marine"]
  },
  {
    id: "totalenergies-intesat-loop",
    client: "TotalEnergies EP Nigeria Limited (TEPNG)",
    clientLogo: "/images/logos/totalenergies.png",
    partner: {
      name: "Intesat Services Limited",
      logo: "/images/logos/intesat.png"
    },
    role: "Project Engineer",
    title: "JV Sites Instrument Loop Drawings Standardization",
    location: "OML 99 Offshore & Onshore Platforms (AMD, AMD1, AMD2, AMD3, AMP1, AMP2, AMQ, IKD, OFN)",
    scope: "Engineering standardization, signal tracing, and redrafting of instrumentation loop drawings across 9 key TotalEnergies JV asset platforms. Standardized junction box terminal allocations, marshalling cabinets, and loop data sheets using automated Excel VBA batching tools.",
    category: "Oil & Gas",
    tags: ["Instrumentation", "Loop Drawings", "OML 99 JV Assets", "Excel Automation", "ISA-5.1 Standards"]
  },
  {
    id: "totalenergies-winorac-nopl",
    client: "TotalEnergies EP Nigeria Limited (TEPNG)",
    clientLogo: "/images/logos/totalenergies.png",
    partner: {
      name: "Winorac Engineering & Technical Services Ltd",
      logo: "/images/logos/winorac.png"
    },
    role: "Intervention Engineer",
    title: "NOPL Owaza Gas Detectors & Instrumentation Earthing Intervention",
    location: "Northern Option Pipeline (NOPL) Gas Facility, Owaza, Abia / Rivers Corridor",
    scope: "Field diagnostic testing, calibration, and commissioning of combustible and toxic gas detection heads (LEL, H2S) across the gas manifold. Executed earthing continuity testing, earth pit resistance remediation, and lightning surge protection under live gas plant PTW.",
    category: "Oil & Gas",
    tags: ["Gas Detection", "Intervention Engineering", "Earthing & Grounding", "NOPL Gas Pipeline", "ATEX Safety"]
  },
  {
    id: "ictsi-onne",
    client: "ICTSI Onne Multipurpose Terminal",
    clientLogo: "/images/logos/ictsi.png",
    role: "Design Engineer",
    title: "Trexm Chemicals Industrial Mud Plant Layout & Pipe Routing",
    location: "Onne Port Free Zone Terminal, Rivers State",
    scope: "Turnkey 3D engineering layout modeling and pipe routing for Trexm Chemicals liquid mud plant facility. Designed bulk chemical silos, centrifugal mixing pumps, agitation tanks, manifold valve skids, tanker offloading bays, and secondary environmental containment bunds.",
    category: "Industrial Plants",
    tags: ["3D Plant Modeling", "Drilling Mud Plant", "P&ID / Isometrics", "Port Free Zone", "Containment Bunds"]
  },
  {
    id: "goddie-chemical",
    client: "Goddie Chemical International Limited",
    clientLogo: "/images/logos/goddie-chemical.png",
    role: "Design Engineer",
    title: "Industrial Mud Plant Facility Layout & Process Flow Design",
    location: "Trans-Amadi Industrial Layout, Port Harcourt, Rivers State",
    scope: "Mechanical, civil, and piping engineering design for an industrial drilling mud blending plant. Developed general arrangement (GA) drawings, storage tank foundation structural checks, additive hoppers, transfer piping schematics, and logistics truck turnaround modeling.",
    category: "Industrial Plants",
    tags: ["Chemical Plant Design", "Process Flow", "General Arrangement", "Storage Tanks", "Industrial Layout"]
  },
  {
    id: "librod-energy",
    client: "Librod Energy Services Limited",
    clientLogo: "/images/logos/librod.png",
    role: "Design Engineer",
    title: "3D Facility Plant Design & Business Miniature Scale Prototyping",
    location: "Trans-Amadi Industrial Area, Port Harcourt, Rivers State",
    scope: "High-precision 3D digital CAD plant modeling and physical precision scale architectural model prototyping of Librod Energy's corporate industrial campus, including chemical blending bays, warehouse loading docks, quality testing laboratories, and corporate offices.",
    category: "Industrial Plants",
    tags: ["3D CAD Modeling", "Miniature Scale Prototyping", "Architectural Engineering", "Industrial Campus", "BIM 3D"]
  },
  {
    id: "high-grade",
    client: "High Grade Technical Services Limited",
    clientLogo: "/images/logos/high-grade.png",
    role: "Procurement Bid Officer / Buyer",
    title: "Multi-Storey Residential Blocks of Flats — Strategic Procurement",
    location: "Port Harcourt Urban District, Rivers State",
    scope: "Strategic procurement management, bill of quantities (BOQ) review, supplier bid analysis, and supply chain logistics for structural reinforcement rebar, certified ready-mix concrete, modular formwork systems, and MEP building services packages for multi-storey residential blocks.",
    category: "Procurement & Sourcing",
    tags: ["Procurement & Bidding", "Supply Chain Logistics", "BOQ Preparation", "Structural Steel & Concrete", "Material QA/QC"]
  },
  {
    id: "neeqoro-ventures",
    client: "Neeqoro Ultimate Ventures",
    clientLogo: "/images/client-neeqoro.png",
    role: "Technical Procurement Consultant",
    title: "Industrial Equipment Sourcing, Heavy Spares & Maintenance Support",
    location: "Port Harcourt & Niger Delta Operational Corridors",
    scope: "Specialized equipment procurement sourcing, industrial spare parts supply, hydraulic components, heavy construction machinery spares, and technical facility support services for civil and energy infrastructure projects across Rivers State.",
    category: "Procurement & Sourcing",
    tags: ["Technical Procurement", "Industrial Sourcing", "Heavy Machinery Spares", "Site Maintenance", "Vendor Management"]
  }
];

export default function ProjectsPage() {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxData, setLightboxData] = useState<{ 
    src: string; 
    title: string; 
    desc: string; 
    index?: number; 
    total?: number;
    galleryType?: "army" | "nlng" | "horandez";
  } | null>(null);

  const categories = ["All", "Oil & Gas", "Civil & Structural", "Industrial Plants", "Procurement & Sourcing"];

  const filteredContracts = selectedCategory === "All"
    ? corporateContracts
    : corporateContracts.filter(c => c.category === selectedCategory);

  const handleLightboxNav = (direction: "prev" | "next") => {
    if (!lightboxData || !lightboxData.galleryType || !lightboxData.index) return;
    
    let gallery = armyGallery;
    if (lightboxData.galleryType === "nlng") gallery = nlngGallery;
    if (lightboxData.galleryType === "horandez") gallery = horandezGallery;

    const currentIdx = lightboxData.index - 1;
    let newIdx = direction === "next" ? currentIdx + 1 : currentIdx - 1;

    if (newIdx < 0) newIdx = gallery.length - 1;
    if (newIdx >= gallery.length) newIdx = 0;

    const nextItem = gallery[newIdx];
    setLightboxData({
      src: nextItem.src,
      title: nextItem.title,
      desc: nextItem.desc,
      index: newIdx + 1,
      total: gallery.length,
      galleryType: lightboxData.galleryType
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <TopBar onOpenRfq={() => setRfqOpen(true)} />
      <Navbar onOpenRfq={() => setRfqOpen(true)} />

      <main className="flex-grow pb-12 md:pb-0">
        
        {/* PROJECTS HERO */}
        <section className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
                <Building className="w-4 h-4" />
                <span>Track Record & Verified Field Execution</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight mb-4">
                Delivered Engineering Contracts & Case Studies
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                Explore our portfolio of verified projects for multinational energy operators, defense institutions, port terminals, and industrial plants across the Niger Delta.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1: TOTALENERGIES OML 58 (CCR & Facility Upgrade) */}
        <section id="totalenergies-ccr-section" className="py-12 sm:py-16 bg-slate-950 border-b border-slate-800 scroll-mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* TotalEnergies Client Header Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-slate-900/90 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-12 sm:w-20 sm:h-14 bg-white rounded-xl p-2 shrink-0 shadow-md">
                  <Image
                    src="/images/logos/totalenergies.png"
                    alt="TotalEnergies Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-amber-400 font-bold block">
                    Multinational Energy Operator Client
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-white font-heading">
                    TotalEnergies EP Nigeria Limited (TEPNG)
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>OML 58 Onshore District • Obite Gas Processing Plant & Obagi Field Flowstation</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono">
                  Proposals: M-CEL 25/01/TP001 & TP002
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                  Role: Technical Lead / Design
                </span>
              </div>
            </div>

            <BeforeAfterSlider />

            {/* Additional TotalEnergies 3D Render Gallery */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              
              <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-800">
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-3.5">
                  <Image
                    src="/images/totalenergies/conference-room-proposed.png"
                    alt="Proposed Executive Conference Hall"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base font-heading">
                  Executive Conference Hall
                </h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Video conferencing suite with 75” & 86” smart interactive boards and TotalEnergies corporate branding.
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-800">
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-3.5">
                  <Image
                    src="/images/totalenergies/opm-office-proposed.png"
                    alt="Proposed OPM Managerial Office"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base font-heading">
                  Production Manager (OPM) Office
                </h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Ergonomic executive administrative layout, sound-dampened acoustic ceiling, and smart access tag integration.
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-800">
                <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-3.5">
                  <Image
                    src="/images/totalenergies/ccr-proposed-angle.png"
                    alt="CCR Multi-screen Angle"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base font-heading">
                  Head of Production (HoP) Suite
                </h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Integrated supervisory workstation with live SCADA feed display and ergonomic task lighting.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: NIGERIAN ARMY 16 BRIGADE (Military Sports Complex) */}
        <section id="army-complex-section" className="py-14 sm:py-20 bg-white border-b border-slate-100 scroll-mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Nigerian Army Client Header Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-12 sm:w-20 sm:h-14 bg-white rounded-xl p-1.5 shrink-0 shadow-sm border border-slate-200">
                  <Image
                    src="/images/logos/nigerian-army.png"
                    alt="Nigerian Army Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold block">
                    Public Defense Institution Client
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 font-heading">
                    Nigerian Army — 16 Brigade Headquarters
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Camp Buratai, Yenagoa, Bayelsa State</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
                <span className="px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200 text-xs font-medium">
                  Turnkey Civil & Structural Delivery
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  Role: Project Engineer
                </span>
              </div>
            </div>

            <div className="max-w-3xl mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold tracking-wider uppercase mb-2.5">
                <Camera className="w-3.5 h-3.5" /> Case Study: Nigerian Army 16 Brigade • 7 Completed Photos
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
                Military Recreation & Sports Complex, Yenagoa
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Turnkey civil engineering and construction delivered for the Nigerian Army at 16 Brigade Headquarters, Yenagoa, Bayelsa State. Turnkey execution of a 40m × 20m synthetic turf football pitch, 60-capacity spectator grandstand pavilion, clubhouse lounge building, and perimeter security fencing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {armyGallery.map((item, idx) => (
                <div
                  key={item.src}
                  onClick={() => setLightboxData({ 
                    src: item.src, 
                    title: item.title, 
                    desc: item.desc, 
                    index: idx + 1, 
                    total: armyGallery.length,
                    galleryType: "army"
                  })}
                  className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-mcel-purple transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                >
                  <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-slate-900">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <span className="absolute bottom-3 left-3 text-white text-[11px] font-mono bg-slate-900/80 px-2 py-0.5 rounded">
                      Field Photo 0{idx + 1}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h4 className="font-bold text-slate-900 font-heading text-sm sm:text-base mb-1 group-hover:text-mcel-purple transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: NIGERIA LNG LIMITED (NLNG RA FINIMA, BONNY ISLAND) */}
        <section id="nlng-bonny" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800 scroll-mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/30">
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  <span>Verified Field Case Study • 9 Technical Progression Photos</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
                  Nigeria LNG Limited (NLNG) — Roof Waterproofing & Re-Felting
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Turnkey multi-ply elastomeric bitumen re-felting, screed base leveling to falls, and protective promenade ballast paving executed on the 30m × 6.3m roof deck at the NLNG Residential Area (RA Finima), Bonny Island, Rivers State. Delivered in technical partnership with Intesat Services Ltd.
                </p>
              </div>

              {/* Technical Specifications Card with NLNG Logo */}
              <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-700 max-w-md shrink-0 shadow-lg">
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-10 bg-white rounded-lg p-1 shrink-0 shadow">
                      <Image src="/images/logos/nlng.png" alt="NLNG Logo" fill className="object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Nigeria LNG Limited</h4>
                      <p className="text-[11px] text-emerald-400">NLNG RA Finima • Bonny Island</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900/70 px-2.5 py-1 rounded-lg border border-slate-700 text-[10px] text-slate-300">
                    <span>Partner:</span>
                    <div className="relative w-5 h-4 shrink-0"><Image src="/images/logos/intesat.png" alt="Intesat" fill className="object-contain" /></div>
                    <span className="font-bold text-white">Intesat</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px]">Expanse</span>
                    <strong className="text-white font-bold">30m × 6.3m (189 sqm)</strong>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px]">Thermal Layer</span>
                    <strong className="text-white font-bold">500 × 500mm Foam Glass</strong>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px]">Waterproofing</span>
                    <strong className="text-white font-bold">10mm Thick Felt Material</strong>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-700/50">
                    <span className="text-slate-400 block text-[10px]">Substructure</span>
                    <strong className="text-white font-bold">Sandcrete Screed to Falls</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Photos Grid in Sequence: 4 -> 6 -> 5 -> 8 -> 7 -> remaining */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
              {nlngGallery.map((item, idx) => (
                <div
                  key={item.src}
                  onClick={() => setLightboxData({ 
                    src: item.src, 
                    title: item.title, 
                    desc: item.desc, 
                    index: idx + 1, 
                    total: nlngGallery.length,
                    galleryType: "nlng"
                  })}
                  className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-400 transition-all duration-300 shadow-md hover:shadow-2xl cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-950">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      {item.phase}
                    </span>
                    <span className="absolute bottom-2 right-2 text-white/90 text-[10px] font-mono bg-slate-900/80 px-1.5 py-0.5 rounded border border-white/10">
                      0{idx + 1}/0{nlngGallery.length}
                    </span>
                  </div>
                  <div className="p-3 sm:p-3.5 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-white text-xs mb-1 group-hover:text-amber-400 transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                    <span className="text-[10px] font-semibold text-amber-400 group-hover:underline mt-2 inline-flex items-center gap-1">
                      <span>View Fullscreen</span> &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 4: HORANDEZ & DETROIT COMPANY LTD (40m × 40m Heavy Steel Warehouse) */}
        <section id="horandez-warehouse-section" className="py-14 sm:py-20 bg-slate-100 border-b border-slate-200 scroll-mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Horandez & Detroit Client Header Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-12 sm:w-20 sm:h-14 bg-white rounded-xl p-1.5 shrink-0 shadow-sm border border-slate-200">
                  <Image
                    src="/images/logos/horandez-detroit.png"
                    alt="Horandez & Detroit Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-amber-600 font-bold block">
                    Industrial & Logistics Client
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 font-heading">
                    Horandez & Detroit Company Ltd
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>KM 21 East-West Road, Iriebe, Rivers State</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium">
                  Heavy Structural Steel & Substructure
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  Role: Project Engineer
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold tracking-wider uppercase mb-3">
                  <Camera className="w-3.5 h-3.5" /> Case Study: Horandez & Detroit • 9 Field Construction Photos
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
                  40m × 40m Heavy Steel Warehouse & Offices, Iriebe
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Turnkey civil engineering design, foundation slab construction, M24 anchor cage setting, and 1,600 sqm clear-span structural steel warehouse erection with an adjoining multi-storey engineering office facility accommodating overhead bridge cranes.
                </p>
              </div>

              {/* Technical Specifications Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 max-w-md shrink-0 shadow-sm">
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">Footprint</span>
                    <strong className="text-slate-900 font-bold">40m × 40m (1,600 sqm)</strong>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">Frame</span>
                    <strong className="text-slate-900 font-bold">Clear-Span UB Portal</strong>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">Anchorage</span>
                    <strong className="text-slate-900 font-bold">M24 High-Strength Cages</strong>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">Envelope</span>
                    <strong className="text-slate-900 font-bold">Blue Profiled Cladding</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
              {horandezGallery.map((item, idx) => (
                <div
                  key={item.src}
                  onClick={() => setLightboxData({ 
                    src: item.src, 
                    title: item.title, 
                    desc: item.desc, 
                    index: idx + 1, 
                    total: horandezGallery.length,
                    galleryType: "horandez"
                  })}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-mcel-purple transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity" />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-mcel-purple text-white text-[9px] font-bold uppercase tracking-wider shadow">
                      {item.phase}
                    </span>
                    <span className="absolute bottom-2 right-2 text-white/90 text-[10px] font-mono bg-slate-900/80 px-1.5 py-0.5 rounded border border-white/10">
                      0{idx + 1}/0{horandezGallery.length}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1 group-hover:text-mcel-purple transition-colors line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                    <span className="text-[10px] font-semibold text-mcel-purple group-hover:underline mt-2 inline-flex items-center gap-1">
                      <span>View Fullscreen</span> &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 5: COMPREHENSIVE CORPORATE & FREELANCING CONTRACTS PORTFOLIO */}
        <section id="corporate-contracts-portfolio" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-mcel-purple text-xs font-extrabold tracking-wider uppercase mb-2.5">
                <Layers className="w-3.5 h-3.5" /> Complete Engineering & Freelancing Record
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-heading">
                Delivered Engineering Contracts & Technical Portfolio
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Comprehensive record of technical lead, engineering design, drafting, intervention, and procurement contracts executed for multinational energy operators, port authorities, and industrial plants across Nigeria. Every project features its verified client organization mark.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Filter Sector:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-mcel-purple text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {cat === "All" ? `All Contracts (${corporateContracts.length})` : cat}
                </button>
              ))}
            </div>

            {/* Contracts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredContracts.map((contract) => (
                <div
                  key={contract.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-mcel-purple"
                >
                  <div>
                    {/* Card Header: Client Logo + Role Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="relative w-16 h-12 bg-white rounded-xl p-1.5 shrink-0 border border-slate-200 shadow-sm flex items-center justify-center">
                        <Image
                          src={contract.clientLogo}
                          alt={contract.client}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-mcel-purple border border-purple-200/60">
                          {contract.role}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {contract.category}
                        </span>
                      </div>
                    </div>

                    {/* Client Name */}
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                      {contract.client}
                    </span>

                    {/* Partner Badge if applicable */}
                    {contract.partner && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 mb-2 max-w-full">
                        <span className="text-[10px] text-slate-400 shrink-0">Partner:</span>
                        <div className="relative w-5 h-3.5 shrink-0">
                          <Image
                            src={contract.partner.logo}
                            alt={contract.partner.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-[11px] font-semibold text-slate-700 truncate">
                          {contract.partner.name}
                        </span>
                      </div>
                    )}

                    {/* Project Title */}
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-2 group-hover:text-mcel-purple transition-colors leading-snug">
                      {contract.title}
                    </h4>

                    {/* Location */}
                    <p className="text-xs text-slate-500 mb-3 flex items-start gap-1 leading-relaxed">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{contract.location}</span>
                    </p>

                    {/* Scope Narrative */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {contract.scope}
                    </p>
                  </div>

                  {/* Card Footer: Tags + Jump Link */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {contract.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {contract.jumpLink && (
                      <a
                        href={contract.jumpLink}
                        className="text-xs font-bold text-mcel-purple hover:text-amber-600 uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>{contract.jumpText || "Explore Case Study"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* FULLSCREEN LIGHTBOX MODAL WITH NAVIGATION */}
      {lightboxData && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
          <button
            onClick={() => setLightboxData(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 z-50 cursor-pointer active:scale-95 transition-all"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous / Next buttons */}
          {lightboxData.galleryType && (
            <>
              <button
                onClick={() => handleLightboxNav("prev")}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 z-50 cursor-pointer transition-all active:scale-95"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => handleLightboxNav("next")}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 z-50 cursor-pointer transition-all active:scale-95"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          
          <div className="relative max-w-5xl w-full h-[65vh] sm:h-[75vh] flex items-center justify-center">
            <Image
              src={lightboxData.src}
              alt={lightboxData.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 sm:bottom-6 inset-x-0 text-center text-white px-4">
            <h4 className="font-bold text-amber-300 text-xs sm:text-sm max-w-lg mx-auto">
              {lightboxData.title}
            </h4>
            <p className="text-slate-300 text-[11px] sm:text-xs max-w-xl mx-auto mt-1 leading-relaxed">
              {lightboxData.desc}
            </p>
            {lightboxData.index && lightboxData.total && (
              <p className="text-slate-400 text-[10px] font-mono mt-1">
                Photo {lightboxData.index} of {lightboxData.total}
              </p>
            )}
          </div>
        </div>
      )}

      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileActionBar onOpenRfq={() => setRfqOpen(true)} />

      <RfqModal
        isOpen={rfqOpen}
        onClose={() => setRfqOpen(false)}
        defaultService="General Contracting"
      />
    </div>
  );
}
