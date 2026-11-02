"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Award, 
  ShieldCheck, 
  UserCheck, 
  HardHat, 
  HeartPulse, 
  Activity, 
  Leaf, 
  FlaskConical, 
  Anchor, 
  Calculator, 
  UserPlus, 
  TrendingUp, 
  GitBranch, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Info, 
  Building2,
  Stethoscope,
  X,
  FileCheck
} from "lucide-react";

interface NodeData {
  id: string;
  title: string;
  subtitle?: string;
  division: "governance" | "executive" | "projects" | "corporate";
  badge?: string;
  isDotted?: boolean;
  desc: string;
  responsibilities: string[];
  standards?: string[];
  subNodes?: NodeData[];
}

const organogramData = {
  board: {
    id: "board",
    title: "Board of Directors",
    subtitle: "Fiduciary & Governance Oversight",
    division: "governance",
    badge: "Supreme Governance",
    desc: "Provides ultimate fiduciary stewardship, long-term corporate governance, and ethical compliance for Masterview Consults.",
    responsibilities: [
      "Strategic corporate direction & capital approval",
      "Corporate compliance, CAMA & statutory alignment",
      "Fiduciary oversight of company financial health",
      "Appointment and review of the Managing Director",
    ],
    standards: ["CAMA 2020", "Corporate Governance Code"],
  },
  md: {
    id: "md",
    title: "Managing Director",
    subtitle: "Engr. Jonathan, David J. (MD/CEO)",
    division: "executive",
    badge: "Executive Leadership",
    desc: "Steers executive day-to-day operations, strategic contract delivery, multi-disciplinary engineering governance, and stakeholder relationships.",
    responsibilities: [
      "Overall operational leadership & corporate growth",
      "Client liaison with IOCs, national authorities & private clients",
      "High-level engineering quality and risk sign-off",
      "Executive management of technical & corporate divisions",
    ],
    standards: ["COREN: R.79,476", "NSE: 66878", "CAC Active"],
  },
  projectsDivision: {
    id: "head-projects",
    title: "Head, Projects",
    subtitle: "Engineering, Turnkey EPC & Field Operations",
    division: "projects",
    badge: "Operations Wing",
    desc: "Oversees technical project management, EPC site execution, multidisciplinary engineering works, and HSE field integration.",
    responsibilities: [
      "Turnkey civil construction & infrastructure execution",
      "Mechanical and electrical installation commissioning",
      "ASME structural fabrication & welding supervision",
      "Field project timeline, budgetary, and QA/QC control",
    ],
    standards: ["API Specs", "ASME Sec. IX", "OSHA 1926"],
    children: [
      {
        id: "head-ohs",
        title: "Head, OH&S/Medic",
        subtitle: "Occupational Health & Safety Lead",
        division: "projects",
        isDotted: true,
        badge: "Health & Safety",
        desc: "Coordinates field health surveillance, site medical response, hazard identification, and safety protocol compliance.",
        responsibilities: [
          "Zero Lost-Time Injury (LTI) enforcement across sites",
          "Management of field emergency sickbays & trauma triage",
          "Job Safety Analysis (JSA) & Permit-to-Work (PTW) audits",
          "Occupational hygiene and health screenings",
        ],
        standards: ["ISO 45001", "OSHA Standard", "BOSIET Certified"],
        subNodes: [
          {
            id: "medical-team",
            title: "Medical Team / Sickbay Staff / Lab. Tech.",
            subtitle: "Clinical Care & Diagnostics",
            division: "projects",
            desc: "Certified medical practitioners, registered nurses, and clinical lab technicians maintaining round-the-clock emergency sickbay and on-site occupational screening.",
            responsibilities: [
              "Emergency trauma stabilization & first response",
              "Routine vital signs & fit-to-work examinations",
              "Clinical laboratory tests & diagnostic screening",
              "Medical evacuation (MEDEVAC) coordination",
            ],
            standards: ["MDCAN Guidelines", "Clinical Protocols"],
          },
          {
            id: "ohs-project-team",
            title: "OH&S Project Team",
            subtitle: "Field Safety Officers & Inspectors",
            division: "projects",
            desc: "Site HSE officers conducting continuous hazard surveillance, safety toolbox talks, incident prevention, and compliance audits.",
            responsibilities: [
              "Daily site safety inspections & toolbox meetings",
              "Personal Protective Equipment (PPE) compliance",
              "Emergency evacuation drills & firefighting readiness",
              "Near-miss investigation & root-cause reporting",
            ],
            standards: ["ISPON Certified", "HSE Level 3"],
          },
        ],
      },
      {
        id: "head-environment",
        title: "Head, Environment",
        subtitle: "Environmental Management & Industrial Hygiene",
        division: "projects",
        badge: "Environmental & IH",
        desc: "Directs environmental compliance, baseline impact assessments, pollution mitigation, and industrial hygiene protocols.",
        responsibilities: [
          "Environmental Impact Assessments (EIA) & audits",
          "Industrial hygiene monitoring (noise, radiation, vapors)",
          "Effluent, chemical containment & waste management",
          "Regulatory liaison with NESREA and NUPRC",
        ],
        standards: ["ISO 14001", "NESREA Act", "NUPRC Guidelines"],
        subNodes: [
          {
            id: "environment-team",
            title: "Environment Team",
            subtitle: "Field Ecological & Compliance Officers",
            division: "projects",
            desc: "Field environmental specialists managing site soil containment, water quality testing, emissions tracking, and ecological restoration.",
            responsibilities: [
              "Site waste segregation & manifest tracking",
              "Spill containment & chemical bund inspections",
              "Groundwater & ambient air quality testing",
            ],
            standards: ["ISO 14001 Compliance"],
          },
          {
            id: "ih-consultants",
            title: "IH Technical Consultants",
            subtitle: "Industrial Hygiene Specialists",
            division: "projects",
            desc: "Certified occupational hygienists conducting specialized workplace exposure assessments, ergonomics, and chemical hazard controls.",
            responsibilities: [
              "Indoor air quality (IAQ) & volatile organic audits",
              "Workplace occupational noise dosimetry mapping",
              "Ventilation efficiency & respiratory protection audits",
            ],
            standards: ["ACGIH Benchmarks", "BOHS Standards"],
          },
          {
            id: "ih-partnership",
            title: "IH Lab Partnership: Institute of Medicine (IOM) UK",
            subtitle: "International Metrology & Toxicology Partner",
            division: "projects",
            badge: "International Partner",
            desc: "Global research and diagnostic partnership with the renowned Institute of Medicine (IOM) UK for certified occupational toxicology, fibrous dust analysis, and metrology verification.",
            responsibilities: [
              "Independent laboratory sample verification & toxicology",
              "Fibrous dust (asbestos, silica) electron microscopy",
              "Specialized chemical biological monitoring assays",
              "UK-accredited analytical QA/QC reports",
            ],
            standards: ["UKAS Accredited", "IOM Edinburgh UK"],
          },
        ],
      },
      {
        id: "marine-consultants",
        title: "Marine Consultants, Inspections and Audits",
        subtitle: "Maritime & Quayside Specialist Operations",
        division: "projects",
        badge: "Marine Services",
        desc: "Marine surveyors and technical inspectors overseeing quayside cargo operations, vessel charter audits, and swamp-terrain logistics.",
        responsibilities: [
          "Quayside terminal inspections & vessel suitability audits",
          "Offshore barge, tugboat & crew boat condition surveys",
          "Marine mooring, bunkering & ballast safety verifications",
        ],
        standards: ["IMO Protocols", "NIMASA Regulations"],
        subNodes: [
          {
            id: "environmental-studies",
            title: "Environmental Studies Consultants",
            subtitle: "Ecological & Marine Environmental Studies",
            division: "projects",
            desc: "Specialized consultants conducting marine seabed surveys, swamp ecology analysis, and environmental baseline data gathering.",
            responsibilities: [
              "Benthic fauna & marine ecological surveys",
              "Bathymetric and seabed sediment sampling",
              "Post-dredging environmental impact reviews",
            ],
            standards: ["EIA Guidelines", "Marine Conservation Act"],
          },
        ],
      },
    ],
  },
  corporateDivision: {
    id: "head-hr",
    title: "Head, HR/Business Processes",
    subtitle: "Corporate Services & Governance",
    division: "corporate",
    badge: "Corporate Wing",
    desc: "Leads human resources development, statutory compliance, corporate business processes, financial governance, and commercial strategy.",
    responsibilities: [
      "Talent acquisition & local content (NOGICD Act) compliance",
      "Process optimization & operational ERP administration",
      "Financial risk management & corporate budget control",
      "Commercial strategy and business development oversight",
    ],
    standards: ["CIPM Standards", "NOGICD Local Content", "IFRS"],
    children: [
      {
        id: "bus-dev-support",
        title: "Bus Dev Support",
        subtitle: "Business Development & Tenders",
        division: "corporate",
        isDotted: true,
        badge: "Growth Desk",
        desc: "Drives prospective client engagement, tender document compilation, technical bid proposals, and NipeX portal vendor prequalification.",
        responsibilities: [
          "Tender tracking & technical bid preparation",
          "NipeX / NJQS portal prequalification compliance",
          "Client relationship management & contract negotiation",
        ],
        standards: ["NipeX Registered", "Public Procurement Act"],
      },
      {
        id: "account-admin-lead",
        title: "Account/Admin Lead",
        subtitle: "Finance & Office Administration",
        division: "corporate",
        badge: "Finance Desk",
        desc: "Directs company fiscal operations, management accounting, tax compliance, payroll administration, and facilities management.",
        responsibilities: [
          "Financial accounting, audit trails & FIRS tax compliance",
          "Cash-flow planning & project budget variance audits",
          "Vendor invoice reconciliation and billing control",
        ],
        standards: ["ICAN / ANAN Certified", "FIRS Tax Compliant"],
        subNodes: [
          {
            id: "account-admin-support",
            title: "Accounts/ Admin Support",
            subtitle: "Bookkeeping & General Services",
            division: "corporate",
            desc: "Operational administration team handling daily invoicing, statutory filings, site logistics expenses, and office inventory.",
            responsibilities: [
              "Daily voucher preparation & invoice tracking",
              "Headquarters facilities maintenance & logistics",
              "Employee travel protocol & document archiving",
            ],
            standards: ["Internal SOPs"],
          },
        ],
      },
      {
        id: "hr-officer",
        title: "HR Officer",
        subtitle: "Personnel & Training Administration",
        division: "corporate",
        badge: "Human Capital",
        desc: "Coordinates employee relations, training programs, performance management, and Nigerian local workforce capacity development.",
        responsibilities: [
          "Workforce recruitment & background verification",
          "Staff training schedules & mandatory safety inductions",
          "Employee welfare, HMO administration, and pension remittance",
        ],
        standards: ["Labour Act Compliance", "PenCom Verified"],
      },
    ],
  },
};

export const OrganogramSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "projects" | "corporate">("all");
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    "head-projects": true,
    "head-hr": true,
    "head-ohs": true,
    "head-environment": true,
    "marine-consultants": true,
    "account-admin-lead": true,
  });

  // Auto-expand if user navigates to #organogram
  React.useEffect(() => {
    const checkHash = () => {
      if (typeof window !== "undefined" && window.location.hash === "#organogram") {
        setIsExpanded(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="organogram" className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* COMPACT ENTERPRISE GOVERNANCE CARD (Always visible & commercial) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10 relative">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-mcel-purple text-xs font-extrabold tracking-wider uppercase">
                <GitBranch className="w-3.5 h-3.5 text-amber-500" />
                <span>Institutional Governance & Structure</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading">
                Corporate Governance & Organizational Structure
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Masterview Consults operates under an audited, structured corporate organogram ensuring transparency and zero operational compromise—delineating fiduciary oversight from the Board of Directors & Managing Director down to independent OH&S/Medic, Environmental (UK IOM Partner), Marine, and Corporate Business divisions.
              </p>

              {/* Hierarchy Badges */}
              <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-slate-700">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-500" /> Board of Directors
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1 font-bold">
                  <UserCheck className="w-3.5 h-3.5 text-cyan-600" /> Managing Director (CEO)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1">
                  <HardHat className="w-3.5 h-3.5 text-amber-500" /> Head, Projects
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1">
                  <HeartPulse className="w-3.5 h-3.5 text-rose-500" /> Head, OH&S/Medic
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1">
                  <FlaskConical className="w-3.5 h-3.5 text-purple-600" /> IH Lab Partner (IOM UK)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-blue-600" /> Head, HR / Business Processes
                </span>
              </div>
            </div>

            {/* Toggle Button Area */}
            <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-mcel-purple hover:bg-mcel-purpleLight text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <GitBranch className="w-4 h-4 text-amber-400" />
                <span>{isExpanded ? "Collapse Organogram" : "Explore Interactive Organogram"}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-amber-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-amber-400" />
                )}
              </button>

              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[11px] text-slate-500 font-mono text-center">
                <span>CAC BN: 3684306</span>
                <span>•</span>
                <span>Audit & Tender Ready</span>
              </div>
            </div>

          </div>

          {/* EXPANDABLE FULL ORGANOGRAM TREE (Unfolds smoothly when requested) */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="pt-8 sm:pt-12 border-t border-slate-200 mt-8"
              >
                
                {/* Organogram Sub-Header & Controls */}
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading">
                    Full Reporting Hierarchy & Departmental Breakdown
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Click any node or department box below to inspect its operational scope, key deliverables, and safety standards.
                  </p>

                  {/* Division Filter Pills */}
                  <div className="mt-4 inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200 max-w-full overflow-x-auto">
                    <button
                      onClick={() => setActiveTab("all")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        activeTab === "all"
                          ? "bg-mcel-purple text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Complete Organogram
                    </button>
                    <button
                      onClick={() => setActiveTab("projects")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        activeTab === "projects"
                          ? "bg-mcel-purple text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Projects, OH&S & Marine
                    </button>
                    <button
                      onClick={() => setActiveTab("corporate")}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        activeTab === "corporate"
                          ? "bg-mcel-purple text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      HR, Finance & Bus Dev
                    </button>
                  </div>
                </div>

                {/* ORGANOGRAM DESKTOP HIERARCHICAL CHART (Visible on lg and above) */}
                <div className="hidden lg:block">
          
          {/* TIER 1: Board of Directors */}
          <div className="flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedNode(organogramData.board as NodeData)}
              className="w-80 p-4 rounded-2xl bg-white border-2 border-red-500 shadow-md hover:shadow-xl transition-all cursor-pointer text-center relative group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-full inline-block mb-1 border border-red-200">
                Governance Oversight
              </span>
              <h3 className="text-base font-extrabold text-slate-900 font-heading">
                Board of Directors
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Strategic & Fiduciary Oversight</p>
              <span className="absolute top-2 right-2 text-slate-400 group-hover:text-red-600 transition-colors">
                <Info className="w-4 h-4" />
              </span>
            </motion.div>

            {/* Vertical connector to Managing Director */}
            <div className="w-0.5 h-8 bg-slate-400 my-0" />

            {/* TIER 2: Managing Director */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedNode(organogramData.md as NodeData)}
              className="w-96 p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-2xl transition-all cursor-pointer text-center relative group border-2 border-cyan-400"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <UserCheck className="w-4 h-4 text-amber-300" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-100">
                  Chief Executive Officer
                </span>
              </div>
              <h3 className="text-lg font-black font-heading tracking-wide">
                Managing Director
              </h3>
              <p className="text-xs text-cyan-100 mt-0.5 font-medium">
                Engr. Jonathan, David J. • COREN R.79,476
              </p>
              <span className="absolute top-2 right-2 text-cyan-200 group-hover:text-white transition-colors">
                <Info className="w-4 h-4" />
              </span>
            </motion.div>

            {/* Vertical connector down to horizontal distribution bar */}
            <div className="w-0.5 h-8 bg-slate-400 my-0" />
          </div>

          {/* MAIN HORIZONTAL DISTRIBUTION BUS (Connecting Projects Wing & Corporate Wing) */}
          <div className="relative mb-8">
            {/* Horizontal connecting line across the two wings */}
            <div className="h-0.5 bg-slate-400 mx-auto max-w-5xl" />

            {/* Grid of Two Main Divisions */}
            <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto pt-6">
              
              {/* LEFT WING: HEAD, PROJECTS (Col 1-7 or full if tabbed) */}
              {(activeTab === "all" || activeTab === "projects") && (
                <div className={`${activeTab === "projects" ? "col-span-12" : "col-span-7"} space-y-6 relative`}>
                  
                  {/* Vertical connector from top horizontal bus */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-400" />

                  {/* Head, Projects Card */}
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedNode(organogramData.projectsDivision as NodeData)}
                      className="w-80 p-4 rounded-2xl bg-white border-2 border-red-500 shadow-md hover:shadow-xl transition-all cursor-pointer text-center relative group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-full inline-block mb-1 border border-red-200">
                        Technical Leadership
                      </span>
                      <h4 className="text-base font-extrabold text-slate-900 font-heading">
                        Head, Projects
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Engineering & Field Execution</p>
                      <span className="absolute top-2 right-2 text-slate-400 group-hover:text-red-600 transition-colors">
                        <Info className="w-4 h-4" />
                      </span>
                    </motion.div>
                  </div>

                  {/* Vertical stem down to projects branches */}
                  <div className="w-0.5 h-6 bg-slate-400 mx-auto" />
                  
                  {/* Projects horizontal bus */}
                  <div className="h-0.5 bg-slate-400 mx-4" />

                  {/* 3 Sub-Branches of Projects Division */}
                  <div className="grid grid-cols-3 gap-3.5 pt-4">
                    
                    {/* Branch 1: Head, OH&S/Medic (Dotted line in original diagram) */}
                    <div className="space-y-3">
                      <div className="w-0.5 h-4 border-l-2 border-dashed border-red-400 mx-auto" />
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedNode(organogramData.projectsDivision.children[0] as NodeData)}
                        className="p-3 rounded-xl bg-white border-2 border-red-400 border-dashed shadow-xs hover:shadow-md cursor-pointer text-center relative group"
                      >
                        <HeartPulse className="w-4 h-4 text-rose-500 mx-auto mb-1" />
                        <h5 className="text-xs font-bold text-slate-900">Head, OH&S/Medic</h5>
                        <p className="text-[10px] text-slate-500">Health & Safety Lead</p>
                      </motion.div>

                      {/* Sub-teams under OH&S */}
                      <div className="space-y-2 pt-1 pl-1">
                        <div
                          onClick={() => setSelectedNode(organogramData.projectsDivision.children[0].subNodes[0] as NodeData)}
                          className="p-2.5 rounded-lg bg-red-50/70 border border-red-300 text-[10px] text-slate-800 hover:bg-red-100 transition-colors cursor-pointer"
                        >
                          <p className="font-bold">Medical Team</p>
                          <p className="text-slate-600 text-[9px]">Sickbay Staff & Lab Tech</p>
                        </div>
                        <div
                          onClick={() => setSelectedNode(organogramData.projectsDivision.children[0].subNodes[1] as NodeData)}
                          className="p-2.5 rounded-lg bg-red-50/70 border border-red-300 text-[10px] text-slate-800 hover:bg-red-100 transition-colors cursor-pointer"
                        >
                          <p className="font-bold">OH&S Project Team</p>
                          <p className="text-slate-600 text-[9px]">Site Safety Officers</p>
                        </div>
                      </div>
                    </div>

                    {/* Branch 2: Head, Environment */}
                    <div className="space-y-3">
                      <div className="w-0.5 h-4 bg-slate-400 mx-auto" />
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedNode(organogramData.projectsDivision.children[1] as NodeData)}
                        className="p-3 rounded-xl bg-white border-2 border-red-500 shadow-xs hover:shadow-md cursor-pointer text-center relative group"
                      >
                        <Leaf className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                        <h5 className="text-xs font-bold text-slate-900">Head, Environment</h5>
                        <p className="text-[10px] text-slate-500">Environmental & IH Lead</p>
                      </motion.div>

                      {/* Sub-teams under Environment */}
                      <div className="space-y-2 pt-1">
                        <div
                          onClick={() => setSelectedNode(organogramData.projectsDivision.children[1].subNodes[0] as NodeData)}
                          className="p-2.5 rounded-lg bg-red-50/70 border border-red-300 text-[10px] text-slate-800 hover:bg-red-100 transition-colors cursor-pointer"
                        >
                          <p className="font-bold">Environment Team</p>
                          <p className="text-slate-600 text-[9px]">Field Ecology & Compliance</p>
                        </div>
                        <div
                          onClick={() => setSelectedNode(organogramData.projectsDivision.children[1].subNodes[1] as NodeData)}
                          className="p-2.5 rounded-lg bg-red-50/70 border border-red-300 text-[10px] text-slate-800 hover:bg-red-100 transition-colors cursor-pointer"
                        >
                          <p className="font-bold">IH Technical Consultants</p>
                          <p className="text-slate-600 text-[9px]">Industrial Hygiene Specialists</p>
                        </div>
                        <div
                          onClick={() => setSelectedNode(organogramData.projectsDivision.children[1].subNodes[2] as NodeData)}
                          className="p-2.5 rounded-lg bg-purple-50 border-2 border-mcel-purple text-[10px] text-mcel-purple hover:bg-purple-100 transition-colors cursor-pointer shadow-xs"
                        >
                          <div className="flex items-center gap-1">
                            <FlaskConical className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <p className="font-bold leading-tight">IH Lab Partner: IOM UK</p>
                          </div>
                          <p className="text-slate-600 text-[9px] mt-0.5">Institute of Medicine UK</p>
                        </div>
                      </div>
                    </div>

                    {/* Branch 3: Marine Consultants, Inspections & Audits */}
                    <div className="space-y-3">
                      <div className="w-0.5 h-4 bg-slate-400 mx-auto" />
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedNode(organogramData.projectsDivision.children[2] as NodeData)}
                        className="p-3 rounded-xl bg-white border-2 border-red-500 shadow-xs hover:shadow-md cursor-pointer text-center relative group"
                      >
                        <Anchor className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                        <h5 className="text-xs font-bold text-slate-900">Marine Consultants</h5>
                        <p className="text-[10px] text-slate-500">Inspections & Audits</p>
                      </motion.div>

                      {/* Sub-team */}
                      <div className="space-y-2 pt-1">
                        <div
                          onClick={() => setSelectedNode(organogramData.projectsDivision.children[2].subNodes[0] as NodeData)}
                          className="p-2.5 rounded-lg bg-red-50/70 border border-red-300 text-[10px] text-slate-800 hover:bg-red-100 transition-colors cursor-pointer"
                        >
                          <p className="font-bold leading-tight">Environmental Studies</p>
                          <p className="text-slate-600 text-[9px]">Marine & Ecological Consultants</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              )}

              {/* RIGHT WING: HEAD, HR/BUSINESS PROCESSES (Col 8-12 or full if tabbed) */}
              {(activeTab === "all" || activeTab === "corporate") && (
                <div className={`${activeTab === "corporate" ? "col-span-12" : "col-span-5"} space-y-6 relative`}>
                  
                  {/* Vertical connector from top horizontal bus */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-400" />

                  {/* Head, HR/Business Processes Card */}
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedNode(organogramData.corporateDivision as NodeData)}
                      className="w-80 p-4 rounded-2xl bg-white border-2 border-red-500 shadow-md hover:shadow-xl transition-all cursor-pointer text-center relative group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-full inline-block mb-1 border border-red-200">
                        Corporate Governance
                      </span>
                      <h4 className="text-base font-extrabold text-slate-900 font-heading">
                        Head, HR/Business Processes
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Corporate & Financial Services</p>
                      <span className="absolute top-2 right-2 text-slate-400 group-hover:text-red-600 transition-colors">
                        <Info className="w-4 h-4" />
                      </span>
                    </motion.div>
                  </div>

                  {/* Vertical stem down to corporate branches */}
                  <div className="w-0.5 h-6 bg-slate-400 mx-auto" />
                  
                  {/* Corporate horizontal bus */}
                  <div className="h-0.5 bg-slate-400 mx-4" />

                  {/* 3 Sub-Branches of Corporate Division */}
                  <div className="grid grid-cols-3 gap-3.5 pt-4">
                    
                    {/* Branch 1: Bus Dev Support (Dotted line in original diagram) */}
                    <div className="space-y-3">
                      <div className="w-0.5 h-4 border-l-2 border-dashed border-red-400 mx-auto" />
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedNode(organogramData.corporateDivision.children[0] as NodeData)}
                        className="p-3 rounded-xl bg-white border-2 border-red-400 border-dashed shadow-xs hover:shadow-md cursor-pointer text-center relative group"
                      >
                        <TrendingUp className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                        <h5 className="text-xs font-bold text-slate-900">Bus Dev Support</h5>
                        <p className="text-[10px] text-slate-500">Commercial Strategy</p>
                      </motion.div>
                    </div>

                    {/* Branch 2: Account/Admin Lead */}
                    <div className="space-y-3">
                      <div className="w-0.5 h-4 bg-slate-400 mx-auto" />
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedNode(organogramData.corporateDivision.children[1] as NodeData)}
                        className="p-3 rounded-xl bg-white border-2 border-red-500 shadow-xs hover:shadow-md cursor-pointer text-center relative group"
                      >
                        <Calculator className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                        <h5 className="text-xs font-bold text-slate-900">Account/Admin Lead</h5>
                        <p className="text-[10px] text-slate-500">Fiscal Governance</p>
                      </motion.div>

                      {/* Sub-team: Accounts/Admin Support */}
                      <div className="space-y-2 pt-1">
                        <div
                          onClick={() => setSelectedNode(organogramData.corporateDivision.children[1].subNodes[0] as NodeData)}
                          className="p-2.5 rounded-lg bg-red-50/70 border border-red-300 text-[10px] text-slate-800 hover:bg-red-100 transition-colors cursor-pointer"
                        >
                          <p className="font-bold leading-tight">Accounts/ Admin Support</p>
                          <p className="text-slate-600 text-[9px]">Financial Documentation</p>
                        </div>
                      </div>
                    </div>

                    {/* Branch 3: HR Officer */}
                    <div className="space-y-3">
                      <div className="w-0.5 h-4 bg-slate-400 mx-auto" />
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedNode(organogramData.corporateDivision.children[2] as NodeData)}
                        className="p-3 rounded-xl bg-white border-2 border-red-500 shadow-xs hover:shadow-md cursor-pointer text-center relative group"
                      >
                        <UserPlus className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                        <h5 className="text-xs font-bold text-slate-900">HR Officer</h5>
                        <p className="text-[10px] text-slate-500">Human Capital Lead</p>
                      </motion.div>
                    </div>

                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

        {/* MOBILE & TABLET ACCORDION / TREE VIEW (Flawless, readable, no horizontal clipping) */}
        <div className="lg:hidden space-y-4 max-w-xl mx-auto">
          
          {/* Mobile Board */}
          <div
            onClick={() => setSelectedNode(organogramData.board as NodeData)}
            className="p-4 rounded-2xl bg-white border-2 border-red-500 shadow-sm flex items-center justify-between cursor-pointer"
          >
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded">
                Tier 1
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">Board of Directors</h4>
              <p className="text-xs text-slate-500">Corporate Governance & Oversight</p>
            </div>
            <Info className="w-4 h-4 text-slate-400 shrink-0" />
          </div>

          {/* Mobile Managing Director */}
          <div
            onClick={() => setSelectedNode(organogramData.md as NodeData)}
            className="p-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-md flex items-center justify-between cursor-pointer border-2 border-cyan-400"
          >
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-2 py-0.5 rounded">
                Executive Leadership
              </span>
              <h4 className="text-sm font-extrabold mt-1">Managing Director</h4>
              <p className="text-xs text-cyan-100">Engr. Jonathan, David J. • COREN R.79,476</p>
            </div>
            <Info className="w-4 h-4 text-cyan-200 shrink-0" />
          </div>

          {/* Mobile Division 1: Head, Projects */}
          <div className="rounded-2xl border-2 border-red-500 bg-white overflow-hidden shadow-sm">
            <div
              onClick={() => toggleExpand("head-projects")}
              className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between cursor-pointer"
            >
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-red-600 bg-red-100/70 px-2 py-0.5 rounded">
                  Operational Division
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">Head, Projects</h4>
                <p className="text-xs text-slate-500">Engineering, OH&S, Environment & Marine</p>
              </div>
              {expandedNodes["head-projects"] ? (
                <ChevronUp className="w-5 h-5 text-slate-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-600" />
              )}
            </div>

            {expandedNodes["head-projects"] && (
              <div className="p-4 space-y-3 bg-white text-xs">
                
                {/* OH&S Wing */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div
                    onClick={() => setSelectedNode(organogramData.projectsDivision.children[0] as NodeData)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <HeartPulse className="w-4 h-4 text-rose-500" /> Head, OH&S/Medic
                    </span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="pl-4 space-y-1.5 border-l-2 border-rose-300 text-[11px] text-slate-600">
                    <p>• Medical Team, Sickbay Staff & Lab Tech</p>
                    <p>• OH&S Project Team (Field Safety Officers)</p>
                  </div>
                </div>

                {/* Environment Wing */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div
                    onClick={() => setSelectedNode(organogramData.projectsDivision.children[1] as NodeData)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Leaf className="w-4 h-4 text-emerald-600" /> Head, Environment
                    </span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="pl-4 space-y-1.5 border-l-2 border-emerald-300 text-[11px] text-slate-600">
                    <p>• Environment Team (Field Ecological Specialists)</p>
                    <p>• IH Technical Consultants (Workplace Hygiene)</p>
                    <p className="font-semibold text-mcel-purple flex items-center gap-1">
                      <FlaskConical className="w-3 h-3 text-amber-500" /> IH Lab Partner: Institute of Medicine (IOM) UK
                    </p>
                  </div>
                </div>

                {/* Marine Wing */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div
                    onClick={() => setSelectedNode(organogramData.projectsDivision.children[2] as NodeData)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Anchor className="w-4 h-4 text-blue-600" /> Marine Consultants
                    </span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="pl-4 space-y-1.5 border-l-2 border-blue-300 text-[11px] text-slate-600">
                    <p>• Inspections & Vessel Surveys</p>
                    <p>• Environmental Studies Consultants</p>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* Mobile Division 2: Head, HR/Business Processes */}
          <div className="rounded-2xl border-2 border-red-500 bg-white overflow-hidden shadow-sm">
            <div
              onClick={() => toggleExpand("head-hr")}
              className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between cursor-pointer"
            >
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-red-600 bg-red-100/70 px-2 py-0.5 rounded">
                  Corporate Division
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">Head, HR/Business Processes</h4>
                <p className="text-xs text-slate-500">Corporate Governance, Finance & Strategy</p>
              </div>
              {expandedNodes["head-hr"] ? (
                <ChevronUp className="w-5 h-5 text-slate-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-600" />
              )}
            </div>

            {expandedNodes["head-hr"] && (
              <div className="p-4 space-y-3 bg-white text-xs">
                
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-amber-600" /> Bus Dev Support
                  </span>
                  <span className="text-[10px] text-slate-500">Tenders & Strategy</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div
                    onClick={() => setSelectedNode(organogramData.corporateDivision.children[1] as NodeData)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Calculator className="w-4 h-4 text-emerald-600" /> Account/Admin Lead
                    </span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <div className="pl-4 space-y-1.5 border-l-2 border-emerald-300 text-[11px] text-slate-600">
                    <p>• Accounts & Admin Support</p>
                    <p>• Fiscal Reporting & Tax Compliance</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <UserPlus className="w-4 h-4 text-purple-600" /> HR Officer
                  </span>
                  <span className="text-[10px] text-slate-500">Talent & Local Content</span>
                </div>

              </div>
            )}
          </div>

        </div>

          {/* Bottom Collapse Button */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <button
              onClick={() => setIsExpanded(false)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              <ChevronUp className="w-4 h-4 text-mcel-purple" />
              <span>Collapse Organogram</span>
            </button>
          </div>

        </motion.div>
      )}
    </AnimatePresence>

  </div>

        {/* ORGANOGRAM TRUST STRIP FOOTNOTE */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-slate-100 border border-slate-300/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Structured for unyielding accountability, client audit readiness, and zero-loss operations.</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span>CAC BN: 3684306</span>
            <span>•</span>
            <span>COREN: R.79,476</span>
          </div>
        </div>

      </div>

      {/* DETAIL MODAL FOR ANY SELECTED ORGANOGRAM NODE */}
      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-slate-950 text-white flex items-start justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-purple-950 text-[10px] font-bold uppercase tracking-wider inline-block mb-1.5">
                    {selectedNode.badge || "Department Profile"}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                    {selectedNode.title}
                  </h3>
                  {selectedNode.subtitle && (
                    <p className="text-xs text-slate-300 mt-0.5">{selectedNode.subtitle}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-slate-500 mb-1">
                    Operational Scope & Mandate
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedNode.desc}
                  </p>
                </div>

                {selectedNode.responsibilities && selectedNode.responsibilities.length > 0 && (
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] text-slate-500 mb-2">
                      Key Responsibilities & Deliverables
                    </h4>
                    <ul className="space-y-1.5">
                      {selectedNode.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedNode.standards && selectedNode.standards.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase mr-1">Compliance:</span>
                    {selectedNode.standards.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px] border border-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-3">
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-mcel-purple transition-colors cursor-pointer"
                  >
                    Close Department Profile
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
