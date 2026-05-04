"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Brain } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

// Knowledge domain data structure with brain regions

const knowledgeDomains = {
  dataAnalysis: {
    id: "dataAnalysis",
    name: "Data Analysis",
    icon: "📊",
    color: "#22c55e",
    region: "frontal-left",
    description: "Extracting insights from raw data using analytical techniques",
    nodes: [
      { id: "data-cleaning", name: "Data Cleaning", description: "Handling missing values and preparing datasets" },
      { id: "eda", name: "EDA", description: "Exploratory data analysis to identify patterns and trends" },
      { id: "data-transformation", name: "Data Transformation", description: "Structuring and formatting data for analysis" },
      { id: "problem-solving", name: "Problem Solving", description: "Breaking down real-world data problems logically" },
      { id: "pattern-recognition", name: "Pattern Recognition", description: "Identifying insights and anomalies" },
      { id: "data-interpretation", name: "Data Interpretation", description: "Converting data into meaningful conclusions" },
    ],
  },

  sql: {
    id: "sql",
    name: "SQL & Databases",
    icon: "🗄️",
    color: "#16a34a",
    region: "frontal-right",
    description: "Working with structured data using SQL",
    nodes: [
      { id: "queries", name: "SQL Queries", description: "Writing SELECT, WHERE, GROUP BY queries" },
      { id: "joins", name: "Joins", description: "Combining multiple tables effectively" },
      { id: "aggregation", name: "Aggregation", description: "Using COUNT, SUM, AVG for insights" },
      { id: "optimization", name: "Query Optimization", description: "Improving performance of queries" },
      { id: "schema", name: "Schema Design", description: "Understanding database structures" },
      { id: "real-world", name: "Real-world Data", description: "Handling practical datasets" },
    ],
  },

  visualization: {
    id: "visualization",
    name: "Data Visualization",
    icon: "📈",
    color: "#15803d",
    region: "parietal-right",
    description: "Presenting insights through dashboards and visuals",
    nodes: [
      { id: "powerbi", name: "Power BI", description: "Building interactive dashboards" },
      { id: "charts", name: "Charts", description: "Bar, line, pie and advanced visuals" },
      { id: "kpi", name: "KPIs", description: "Tracking key business metrics" },
      { id: "storytelling", name: "Data Storytelling", description: "Communicating insights clearly" },
      { id: "dashboard-design", name: "Dashboard Design", description: "Clean and minimal layouts" },
      { id: "insights", name: "Insights", description: "Turning visuals into decisions" },
    ],
  },

  tools: {
    id: "tools",
    name: "Tools & Technologies",
    icon: "💻",
    color: "#14532d",
    region: "temporal-right",
    description: "Tools used for data analysis and reporting",
    nodes: [
      { id: "excel", name: "Excel", description: "Data cleaning, pivot tables, formulas" },
      { id: "powerbi-tool", name: "Power BI", description: "Visualization and reporting tool" },
      { id: "sql-tool", name: "SQL Server", description: "Database querying and management" },
      { id: "python", name: "Python (Basic)", description: "Basic data manipulation and scripting" },
      { id: "data-handling", name: "Data Handling", description: "Managing large datasets efficiently" },
      { id: "workflow", name: "Workflow", description: "Structured approach to analysis" },
    ],
  },

  creativity: {
    id: "creativity",
    name: "Creative Thinking",
    icon: "🎨",
    color: "#10b981",
    region: "parietal-left",
    description: "Combining creativity with analytical thinking",
    nodes: [
      { id: "aesthetic", name: "Aesthetic Sense", description: "Clean and minimal design approach" },
      { id: "craft", name: "Crafting", description: "Hands-on creative projects and designs" },
      { id: "pinterest", name: "Pinterest Aesthetic", description: "Inspired visual creativity" },
      { id: "layout", name: "Layout Design", description: "Structuring visuals clearly" },
      { id: "attention", name: "Attention to Detail", description: "Precision in design and data" },
      { id: "balance", name: "Balance", description: "Blending creativity with logic" },
    ],
  },

  mindset: {
    id: "mindset",
    name: "Analytical Mindset",
    icon: "🧠",
    color: "#059669",
    region: "temporal-left",
    description: "Approach towards solving problems using logic and clarity",
    nodes: [
      { id: "logic", name: "Logical Thinking", description: "Breaking problems step-by-step" },
      { id: "clarity", name: "Clarity", description: "Keeping solutions simple and clean" },
      { id: "consistency", name: "Consistency", description: "Regular practice and improvement" },
      { id: "learning", name: "Continuous Learning", description: "Always improving skills" },
      { id: "focus", name: "Focus", description: "Deep work and attention" },
      { id: "decision", name: "Decision Making", description: "Using data to make decisions" },
    ],
  },
}
// More realistic brain regions with detailed paths
const brainRegions = {
  "frontal-left": {
    path: "M200 180 Q220 140 260 130 Q300 125 340 135 Q370 145 380 170 Q385 190 375 210 Q365 230 340 240 Q310 245 280 240 Q250 235 220 220 Q200 200 200 180 Z",
    center: { x: 290, y: 185 },
    nodePositions: [
      { x: 270, y: 160 },
      { x: 310, y: 155 },
      { x: 340, y: 175 },
      { x: 320, y: 200 },
      { x: 280, y: 210 },
      { x: 250, y: 190 },
    ],
  },
  "frontal-right": {
    path: "M420 170 Q430 145 460 135 Q500 125 540 130 Q580 140 600 180 Q600 200 590 220 Q580 235 550 240 Q520 245 490 240 Q460 230 440 210 Q425 190 420 170 Z",
    center: { x: 510, y: 185 },
    nodePositions: [
      { x: 480, y: 155 },
      { x: 520, y: 160 },
      { x: 550, y: 175 },
      { x: 530, y: 200 },
      { x: 490, y: 210 },
      { x: 460, y: 190 },
    ],
  },
  "parietal-left": {
    path: "M220 220 Q200 240 205 270 Q215 300 240 320 Q270 335 300 330 Q330 325 350 310 Q365 290 360 270 Q355 250 340 240 Q310 245 280 240 Q250 235 220 220 Z",
    center: { x: 285, y: 285 },
    nodePositions: [
      { x: 250, y: 260 },
      { x: 290, y: 255 },
      { x: 320, y: 270 },
      { x: 315, y: 300 },
      { x: 275, y: 310 },
      { x: 240, y: 295 },
    ],
  },
  "parietal-right": {
    path: "M440 240 Q455 250 460 270 Q465 290 480 310 Q505 325 535 330 Q565 335 595 320 Q615 300 610 270 Q605 240 590 220 Q580 235 550 240 Q520 245 490 240 Q465 230 440 240 Z",
    center: { x: 525, y: 285 },
    nodePositions: [
      { x: 480, y: 260 },
      { x: 520, y: 255 },
      { x: 560, y: 270 },
      { x: 555, y: 300 },
      { x: 515, y: 310 },
      { x: 480, y: 295 },
    ],
  },
  "temporal-left": {
    path: "M240 320 Q215 340 220 370 Q230 400 255 420 Q285 435 315 430 Q340 425 355 405 Q365 385 360 365 Q355 345 340 335 Q315 340 290 345 Q265 340 240 320 Z",
    center: { x: 300, y: 375 },
    nodePositions: [
      { x: 270, y: 350 },
      { x: 310, y: 345 },
      { x: 335, y: 365 },
      { x: 325, y: 395 },
      { x: 285, y: 405 },
      { x: 255, y: 385 },
    ],
  },
  "temporal-right": {
    path: "M480 335 Q505 345 520 365 Q535 385 545 405 Q560 425 585 430 Q615 435 645 420 Q670 400 675 370 Q680 340 655 320 Q630 340 605 345 Q580 340 555 335 Q530 340 505 345 Q480 340 480 335 Z",
    center: { x: 575, y: 375 },
    nodePositions: [
      { x: 520, y: 360 },
      { x: 560, y: 355 },
      { x: 600, y: 365 },
      { x: 610, y: 395 },
      { x: 570, y: 405 },
      { x: 530, y: 385 },
    ],
  },
  // "occipital": {
  //   path: "M355 405 Q365 385 380 375 Q400 370 420 375 Q440 385 445 405 Q450 425 440 445 Q425 460 405 465 Q385 460 370 445 Q360 425 355 405 Z",
  //   center: { x: 400, y: 420 },
  //   nodePositions: [
  //     { x: 380, y: 395 },
  //     { x: 420, y: 395 },
  //     { x: 425, y: 420 },
  //     { x: 410, y: 445 },
  //     { x: 390, y: 445 },
  //     { x: 375, y: 420 },
  //   ],
  // },
}

// Node connections within each domain
const nodeConnections = {
  dataAnalysis: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [0, 3],
    [1, 4],
    [2, 5],
  ],
  sql: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [0, 2],
    [1, 3],
    [2, 4],
  ],
  visualization: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [0, 3],
    [1, 4],
    [2, 5],
  ],
  tools: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [0, 2],
    [1, 3],
    [2, 4],
  ],
  creativity: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [0, 3],
    [1, 4],
    [2, 5],
  ], 
   mindset: [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [0, 3],
    [1, 4],
    [2, 5],
  ],
}

interface Node {
  id: string
  name: string
  description: string
}

interface Domain {
  id: string
  name: string
  icon: string
  color: string
  region: string
  description: string
  nodes: Node[]
}

export function KnowledgeBrain() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const handleDomainClick = (domainId: string) => {
    setSelectedDomain(selectedDomain === domainId ? null : domainId)
    setSelectedNode(null)
  }

  const handleNodeClick = (node: Node) => {
    setSelectedNode(selectedNode?.id === node.id ? null : node)
  }

  return (
    <div className="space-y-16">
      <SectionHeading title="My Data Thinking Framework" subtitle="A visual map of my analytical skills, tools, and creative problem-solving approach" />

      {/* Brain Visualization */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-sm border border-zinc-700/50 p-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 rounded-2xl blur opacity-50"></div>

          <div className="relative">
            {/* Brain SVG Container */}
            <div className="w-full h-[600px] relative">
              <svg
                ref={svgRef}
                viewBox="0 0 800 600"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 0 20px rgba(18, 53, 36, 0.3))" }}
              >
                <defs>
                  {/* Gradients for each brain region */}
                  {Object.values(knowledgeDomains).map((domain) => (
                    <radialGradient
                      key={`gradient-${domain.id}`}
                      id={`gradient-${domain.id}`}
                      cx="50%"
                      cy="50%"
                      r="50%"
                    >
                      <stop offset="0%" stopColor={`${domain.color}60`} />
                      <stop offset="100%" stopColor={`${domain.color}20`} />
                    </radialGradient>
                  ))}

                  {/* Glow filters */}
                  {Object.values(knowledgeDomains).map((domain) => (
                    <filter
                      key={`glow-${domain.id}`}
                      id={`glow-${domain.id}`}
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  ))}
                </defs>

                {/* Detailed brain outline with folds and curves */}
                <path
                  d="M180 200 Q190 150 230 130 Q280 110 340 115 Q400 110 460 115 Q520 110 570 130 Q610 150 620 200 Q625 230 615 260 Q605 290 585 320 Q565 350 535 375 Q505 400 470 415 Q435 425 400 425 Q365 425 330 415 Q295 400 265 375 Q235 350 215 320 Q195 290 185 260 Q175 230 180 200 Z"
                  fill="none"
                  stroke="rgba(34, 197, 94, 0.6)"
                  strokeWidth="3"
                  className="animate-pulse"
                />

                {/* Brain folds and details */}
                <path
                  d="M250 160 Q300 150 350 155 Q400 150 450 155 Q500 150 550 160"
                  stroke="rgba(34, 197, 94, 0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M230 220 Q280 210 330 215 Q380 210 430 215 Q480 210 530 220"
                  stroke="rgba(34, 197, 94, 0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M240 280 Q290 270 340 275 Q390 270 440 275 Q490 270 540 280"
                  stroke="rgba(34, 197, 94, 0.3)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Central division line (corpus callosum) */}
                <path
                  d="M400 130 Q400 200 400 270 Q400 340 400 410"
                  stroke="rgba(34, 197, 94, 0.4)"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                  className="animate-pulse"
                />

                {/* Brain regions */}
                {Object.values(knowledgeDomains).map((domain) => {
                  const region = brainRegions[domain.region as keyof typeof brainRegions]
                  const isHovered = hoveredDomain === domain.id
                  const isSelected = selectedDomain === domain.id

                  return (
                    <g key={domain.id}>
                      {/* Brain region */}
                      <motion.path
                        d={region.path}
                        fill={`url(#gradient-${domain.id})`}
                        stroke={domain.color}
                        strokeWidth={isSelected ? "3" : "2"}
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => handleDomainClick(domain.id)}
                        onMouseEnter={() => setHoveredDomain(domain.id)}
                        onMouseLeave={() => setHoveredDomain(null)}
                        style={{
                          filter: isHovered || isSelected ? `url(#glow-${domain.id})` : "none",
                          opacity: isHovered || isSelected ? 0.9 : 0.6,
                        }}
                        animate={{
                          strokeWidth: isSelected ? 3 : 2,
                        }}
                      />

                      {/* Region label */}
                      <text
                        x={region.center.x}
                        y={region.center.y - 50}
                        textAnchor="middle"
                        fill="white"
                        fontSize="11"
                        fontWeight="bold"
                        className="pointer-events-none"
                      >
                        {domain.icon} {domain.name}
                      </text>

                      {/* Nodes and connections within the region */}
                      {isSelected && (
                        <g>
                          {/* Node connections */}
                          {nodeConnections[domain.id as keyof typeof nodeConnections].map(([from, to], connIndex) => (
                            <motion.line
                              key={`${domain.id}-conn-${connIndex}`}
                              x1={region.nodePositions[from].x}
                              y1={region.nodePositions[from].y}
                              x2={region.nodePositions[to].x}
                              y2={region.nodePositions[to].y}
                              stroke={domain.color}
                              strokeWidth="2"
                              opacity="0.6"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5, delay: connIndex * 0.1 }}
                            />
                          ))}

                          {/* Nodes */}
                          {domain.nodes.map((node, nodeIndex) => {
                            const nodePos = region.nodePositions[nodeIndex]
                            return (
                              <motion.circle
                                key={node.id}
                                cx={nodePos.x}
                                cy={nodePos.y}
                                r="8"
                                fill={domain.color}
                                stroke="white"
                                strokeWidth="2"
                                className="cursor-pointer"
                                onClick={() => handleNodeClick(node)}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, delay: nodeIndex * 0.1 }}
                                whileHover={{ scale: 1.3 }}
                                style={{
                                  filter:
                                    selectedNode?.id === node.id ? `drop-shadow(0 0 10px ${domain.color})` : "none",
                                }}
                              />
                            )
                          })}
                        </g>
                      )}
                    </g>
                  )
                })}

                {/* Neural activity particles */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.circle
                    key={`neural-${i}`}
                    r="2"
                    fill="rgba(34, 197, 94, 0.8)"
                    initial={{
                      cx: 200 + ((i * 50) % 400),
                      cy: 180 + ((i * 30) % 250),
                      opacity: 0,
                    }}
                    animate={{
                      cx: 200 + ((i * 50 + 100) % 400),
                      cy: 180 + ((i * 30 + 50) % 250),
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </svg>

              {/* Interaction hints */}
              <div className="absolute bottom-4 left-4 text-sm text-zinc-400">
                <p>🧠 Click on brain regions to explore neural networks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Domain Legend */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {Object.values(knowledgeDomains).map((domain) => (
            <motion.div
              key={domain.id}
              className={`relative overflow-hidden rounded-lg bg-zinc-800/50 backdrop-blur-sm border p-4 cursor-pointer transition-all duration-300 ${
                selectedDomain === domain.id
                  ? "border-phthalo-500/50 bg-zinc-700/50"
                  : "border-zinc-700/50 hover:border-zinc-600/50"
              }`}
              onClick={() => handleDomainClick(domain.id)}
              onMouseEnter={() => setHoveredDomain(domain.id)}
              onMouseLeave={() => setHoveredDomain(null)}
              whileHover={{ y: -2 }}
              style={{
                borderColor: selectedDomain === domain.id ? domain.color : undefined,
                boxShadow: hoveredDomain === domain.id ? `0 0 20px ${domain.color}40` : "none",
              }}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{domain.icon}</div>
                <div className="text-sm font-medium text-white">{domain.name}</div>
                <div className="text-xs text-zinc-400 mt-1">{domain.nodes.length} topics</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Node Details */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedNode(null)}
          >
            <motion.div
              className="relative max-w-md w-full bg-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 rounded-xl blur opacity-50"></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{selectedNode.name}</h3>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-zinc-300 leading-relaxed">{selectedNode.description}</p>

                <div className="mt-6 flex items-center gap-2 text-sm text-phthalo-400">
                  <Brain className="h-4 w-4" />
                  <span>Part of my neural knowledge network</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
