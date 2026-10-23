import type { Library } from "./catalog-types.ts";

// Canonical editorial catalog. Normal builds never overwrite these entries.
export const libraries: Library[] = [
  {
    "id": "hello-pangea-dnd",
    "name": "@hello-pangea/dnd",
    "category": "drag-and-drop",
    "description": "React drag-and-drop components focused on lists.",
    "goodFor": "Reordering items within or between lists using familiar interactions.",
    "monogram": "he",
    "kind": "Library / tool",
    "official": "https://dnd.hellopangea.com/?path=/story/examples-single-vertical-list--basic",
    "keywords": [],
    "sourceIds": [
      332
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "internationalized-date",
    "name": "@internationalized/date",
    "category": "dates",
    "description": "Date and time objects for calendars, timezones, and internationalized interfaces.",
    "goodFor": "Building date controls that need explicit calendar and timezone behavior.",
    "monogram": "in",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/@internationalized/date",
    "keywords": [],
    "sourceIds": [
      69
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "msw-playwright",
    "name": "@msw/playwright",
    "category": "testing",
    "description": "Bindings that connect Mock Service Worker to Playwright.",
    "goodFor": "Controlling network responses during browser-level application tests.",
    "monogram": "ms",
    "kind": "Testing tool",
    "official": "https://www.npmjs.com/package/@msw/playwright",
    "keywords": [],
    "sourceIds": [
      561
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mswjs-data",
    "name": "@mswjs/data",
    "category": "testing",
    "description": "Tools for modeling and querying data in tests.",
    "goodFor": "Building a stateful mocked backend for application test scenarios.",
    "monogram": "ms",
    "kind": "Testing tool",
    "official": "https://www.npmjs.com/package/@mswjs/data",
    "keywords": [],
    "sourceIds": [
      256
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "vercel-ncc",
    "name": "@vercel/ncc",
    "category": "build-tools",
    "description": "A compiler that bundles a Node.js project into a distributable output.",
    "goodFor": "Packaging server code and its dependencies for deployment.",
    "monogram": "ve",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/@vercel/ncc",
    "keywords": [],
    "sourceIds": [
      159
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "21st-dev",
    "name": "21st.dev",
    "category": "ui-kits",
    "description": "A collection of reusable React and Tailwind components.",
    "goodFor": "Discovering prepared interface elements and page sections.",
    "monogram": "21",
    "kind": "UI toolkit",
    "official": "https://21st.dev/",
    "keywords": [],
    "sourceIds": [
      527
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "adonisjs",
    "name": "AdonisJS",
    "category": "server",
    "description": "A full-featured server framework for TypeScript applications.",
    "goodFor": "Building a backend with established conventions and integrated tooling.",
    "monogram": "Ad",
    "kind": "Library / tool",
    "official": "https://docs.adonisjs.com/guides/introduction",
    "keywords": [],
    "sourceIds": [
      278
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "advanced-typescript-guide",
    "name": "Advanced TypeScript Guide",
    "category": "learning",
    "description": "A guide connecting advanced TypeScript features with practical examples.",
    "goodFor": "Deepening understanding of types beyond introductory syntax.",
    "monogram": "Ad",
    "kind": "Learning resource",
    "official": "https://fettblog.eu/advanced-typescript-guide/",
    "keywords": [],
    "sourceIds": [
      154
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ag-grid",
    "name": "AG Grid",
    "category": "data-tables",
    "description": "A ready-made grid for interactive data-heavy applications.",
    "goodFor": "Rich table interactions with an integrated grid UI.",
    "monogram": "AG",
    "kind": "Data grid",
    "caveat": "Some advanced features require an Enterprise license.",
    "implementation": "Configure columns, data, and the grid theme, then connect the row model and events to your app. Check the Community and Enterprise feature boundaries for the interactions you need.",
    "official": "https://www.ag-grid.com/react-data-grid/getting-started/",
    "keywords": [
      "search sort filter",
      "large dataset",
      "data grid",
      "spreadsheet",
      "editing"
    ],
    "sourceIds": [
      376
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ai-sdk",
    "name": "AI SDK",
    "category": "ai",
    "description": "TypeScript tools for working with AI models and streaming interfaces.",
    "goodFor": "Building chat, text generation, and tool-using AI features.",
    "monogram": "AI",
    "kind": "Library / tool",
    "official": "https://sdk.vercel.ai/docs",
    "keywords": [],
    "sourceIds": [
      181
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "algolia-autocomplete",
    "name": "Algolia Autocomplete",
    "category": "search",
    "description": "A library for building rich autocomplete interfaces.",
    "goodFor": "Combining suggestions and search results in a custom search box.",
    "monogram": "Al",
    "kind": "Library / tool",
    "official": "https://github.com/algolia/autocomplete#readme",
    "keywords": [],
    "sourceIds": [
      441
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "algorithm-visualizer",
    "name": "Algorithm Visualizer",
    "category": "learning",
    "description": "An interactive project for visualizing algorithms.",
    "goodFor": "Learning how algorithms change data step by step.",
    "monogram": "Al",
    "kind": "Learning resource",
    "official": "https://github.com/algorithm-visualizer/algorithm-visualizer",
    "keywords": [],
    "sourceIds": [
      135
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "allan-lasser-s-website",
    "name": "Allan Lasser's Website",
    "category": "open-source-apps",
    "description": "The source repository for a personal website.",
    "goodFor": "Studying a real content website's application structure and implementation.",
    "monogram": "Al",
    "kind": "Reference app",
    "official": "https://github.com/allanlasser/allanlasser.com",
    "keywords": [],
    "sourceIds": [
      412
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "amazon-web-services",
    "name": "Amazon Web Services",
    "category": "hosting",
    "description": "Cloud infrastructure and managed services for deploying and operating applications.",
    "goodFor": "Teams that need configurable compute, storage, networking, and managed backends.",
    "monogram": "Am",
    "kind": "Infrastructure",
    "official": "https://aws.amazon.com/",
    "keywords": [],
    "sourceIds": [
      26
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ansis",
    "name": "Ansis",
    "category": "cli",
    "description": "ANSI color and styling helpers for terminal text.",
    "goodFor": "Formatting command-line output with composable styles.",
    "monogram": "An",
    "kind": "CLI toolkit",
    "official": "https://github.com/webdiscus/ansis",
    "keywords": [],
    "sourceIds": [
      228
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "answer-overflow",
    "name": "Answer Overflow",
    "category": "community",
    "description": "Tools that make Discord support conversations discoverable on the web.",
    "goodFor": "Turning community support discussions into searchable answers.",
    "monogram": "An",
    "kind": "Community",
    "official": "https://github.com/AnswerOverflow/AnswerOverflow",
    "keywords": [],
    "sourceIds": [
      37,
      196
    ],
    "references": [
      "https://www.answeroverflow.com/"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "ant-design",
    "name": "Ant Design",
    "category": "ui-kits",
    "description": "A React component library and design system for enterprise interfaces.",
    "goodFor": "Building data-heavy business applications with established component patterns.",
    "monogram": "An",
    "kind": "UI toolkit",
    "official": "https://ant.design/",
    "keywords": [],
    "sourceIds": [
      550
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "api-extractor",
    "name": "API Extractor",
    "category": "packages",
    "description": "A TypeScript analysis tool for API reports and declaration output.",
    "goodFor": "Reviewing public API changes in a published TypeScript library.",
    "monogram": "AP",
    "kind": "Library / tool",
    "official": "https://api-extractor.com/pages/overview/intro/",
    "keywords": [],
    "sourceIds": [
      157
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "apicurio",
    "name": "Apicurio",
    "category": "api-tools",
    "description": "Open-source tools for designing APIs and managing schemas in a registry.",
    "goodFor": "Teams that need shared API definitions and schema governance.",
    "monogram": "Ap",
    "kind": "API tool",
    "official": "https://www.apicur.io/",
    "keywords": [],
    "sourceIds": [
      5
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "apidog",
    "name": "Apidog",
    "category": "api-tools",
    "description": "An integrated workspace for API design, debugging, mocking, and documentation.",
    "goodFor": "Keeping API contracts and test workflows in one application.",
    "monogram": "Ap",
    "kind": "API tool",
    "official": "https://apidog.com/",
    "keywords": [],
    "sourceIds": [
      4
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "apisauce",
    "name": "apisauce",
    "category": "data-fetching",
    "description": "An HTTP client wrapper that standardizes responses and request handling.",
    "goodFor": "API clients that benefit from consistent success and error results.",
    "monogram": "ap",
    "kind": "Library / tool",
    "official": "https://github.com/infinitered/apisauce",
    "keywords": [],
    "sourceIds": [
      61
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "appwrite",
    "name": "Appwrite",
    "category": "backend",
    "description": "A backend platform providing authentication, databases, storage, and functions.",
    "goodFor": "Building application features from managed or self-hosted backend services.",
    "monogram": "Ap",
    "kind": "Library / tool",
    "official": "https://appwrite.io/",
    "keywords": [],
    "sourceIds": [
      19
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "argos",
    "name": "Argos",
    "category": "testing",
    "description": "An open-source visual testing platform.",
    "goodFor": "Detecting interface changes by comparing screenshots in development workflows.",
    "monogram": "Ar",
    "kind": "Testing tool",
    "official": "https://github.com/argos-ci/argos",
    "keywords": [],
    "sourceIds": [
      186
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ariakit",
    "name": "Ariakit",
    "category": "ui-kits",
    "description": "Low-level accessible components for React.",
    "goodFor": "Creating a custom design system while reusing interaction and accessibility behavior.",
    "monogram": "Ar",
    "kind": "UI toolkit",
    "official": "https://ariakit.org/",
    "keywords": [],
    "sourceIds": [
      542
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ark-ui",
    "name": "Ark UI",
    "category": "ui-kits",
    "description": "A headless component library for several JavaScript frameworks.",
    "goodFor": "Reusing accessible interaction patterns while controlling component styling.",
    "monogram": "Ar",
    "kind": "UI toolkit",
    "official": "https://ark-ui.com/",
    "keywords": [],
    "sourceIds": [
      521
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "arktype",
    "name": "ArkType",
    "category": "validation",
    "description": "A runtime validator with TypeScript-like schema syntax.",
    "goodFor": "Validating external data while keeping schema definitions close to static types.",
    "monogram": "Ar",
    "kind": "Library / tool",
    "official": "https://arktype.io/",
    "keywords": [],
    "sourceIds": [
      123
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "astro",
    "name": "Astro",
    "category": "frameworks",
    "description": "A web framework for content sites and applications with selective interactivity.",
    "goodFor": "Building content-heavy websites with components from supported UI frameworks.",
    "monogram": "As",
    "kind": "Framework / starter",
    "official": "https://astro.build/",
    "keywords": [],
    "sourceIds": [
      361
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "astryx-design-system",
    "name": "Astryx Design System",
    "category": "ui-kits",
    "description": "An open-source design system with customizable components.",
    "goodFor": "Building a coordinated interface from shared design foundations.",
    "monogram": "As",
    "kind": "UI toolkit",
    "official": "https://astryx.atmeta.com/",
    "keywords": [],
    "sourceIds": [
      539
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "asyncapi",
    "name": "AsyncAPI",
    "category": "api-tools",
    "description": "A specification and tool ecosystem for event-driven APIs.",
    "goodFor": "Documenting message channels, payloads, and asynchronous integrations.",
    "monogram": "As",
    "kind": "API tool",
    "official": "https://www.asyncapi.com/",
    "keywords": [],
    "sourceIds": [
      6
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "atlassian-design-system",
    "name": "Atlassian Design System",
    "category": "ui-kits",
    "description": "UI components, foundations, and guidance from Atlassian.",
    "goodFor": "Building product interfaces around a coordinated enterprise design system.",
    "monogram": "At",
    "kind": "UI toolkit",
    "official": "https://atlassian.design/",
    "keywords": [],
    "sourceIds": [
      551
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "auth-js",
    "name": "Auth.js",
    "category": "auth",
    "description": "Authentication tooling with integrations for frameworks including Next.js.",
    "goodFor": "Adding provider-based sign-in and session handling to a web application.",
    "monogram": "Au",
    "kind": "Library / tool",
    "official": "https://next-auth.js.org/",
    "keywords": [],
    "sourceIds": [
      167,
      297
    ],
    "references": [
      "https://authjs.dev/"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "auth0",
    "name": "Auth0",
    "category": "auth",
    "description": "A managed identity platform for authentication and authorization.",
    "goodFor": "Supporting multiple sign-in providers across web and mobile applications.",
    "monogram": "Au",
    "kind": "Library / tool",
    "official": "https://auth0.com/",
    "keywords": [],
    "sourceIds": [
      12
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "awesome-shadcn-ui",
    "name": "Awesome shadcn/ui",
    "category": "learning",
    "description": "A curated collection of projects in the shadcn/ui ecosystem.",
    "goodFor": "Discovering related components, tools, and example applications.",
    "monogram": "Aw",
    "kind": "Learning resource",
    "official": "https://github.com/birobirobiro/awesome-shadcn-ui",
    "keywords": [],
    "sourceIds": [
      530
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "axios",
    "name": "Axios",
    "category": "data-fetching",
    "description": "A promise-based HTTP client for browsers and Node.js.",
    "goodFor": "Configuring API requests, interceptors, and shared request behavior.",
    "monogram": "Ax",
    "kind": "Library / tool",
    "official": "https://axios-http.com/docs/intro",
    "keywords": [],
    "sourceIds": [
      63
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "axios-hooks",
    "name": "axios-hooks",
    "category": "data-fetching",
    "description": "React hooks for managing Axios requests.",
    "goodFor": "Connecting request status and responses to React component state.",
    "monogram": "ax",
    "kind": "Library / tool",
    "official": "https://github.com/simoneb/axios-hooks",
    "keywords": [],
    "sourceIds": [
      318
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "bcrypt-for-node-js",
    "name": "bcrypt for Node.js",
    "category": "security",
    "description": "A Node.js binding for hashing and checking passwords with bcrypt.",
    "goodFor": "Implementing password storage in a server-side authentication system.",
    "monogram": "bc",
    "kind": "Library / tool",
    "official": "https://github.com/kelektiv/node.bcrypt.js",
    "keywords": [],
    "sourceIds": [
      269
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "beautiful-react-hooks",
    "name": "beautiful-react-hooks",
    "category": "utilities",
    "description": "A collection of reusable hooks for common React behaviors.",
    "goodFor": "Avoiding repeated browser-event and component-state plumbing.",
    "monogram": "be",
    "kind": "Library / tool",
    "official": "https://github.com/antonioru/beautiful-react-hooks?tab=readme-ov-file",
    "keywords": [],
    "sourceIds": [
      379
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "better-auth",
    "name": "Better Auth",
    "category": "auth",
    "description": "Authentication tooling for TypeScript applications.",
    "goodFor": "Implementing accounts and sessions with an extensible application-owned auth layer.",
    "monogram": "Be",
    "kind": "Library / tool",
    "official": "https://www.better-auth.com/",
    "keywords": [],
    "sourceIds": [
      294
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "better-fetch",
    "name": "Better Fetch",
    "category": "data-fetching",
    "description": "A fetch wrapper with TypeScript-focused request and response tooling.",
    "goodFor": "Building typed API clients around the standard Fetch API.",
    "monogram": "Be",
    "kind": "Library / tool",
    "official": "https://better-fetch.vercel.app/",
    "keywords": [],
    "sourceIds": [
      65
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "better-upload",
    "name": "Better Upload",
    "category": "files",
    "description": "File-upload tooling for React and S3-compatible storage.",
    "goodFor": "Connecting an upload interface directly to object storage.",
    "monogram": "Be",
    "kind": "Library / tool",
    "official": "https://better-upload.com/",
    "keywords": [],
    "sourceIds": [
      346
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "better-t-stack",
    "name": "Better-T-Stack",
    "category": "frameworks",
    "description": "A configurable starter generator for type-safe TypeScript application stacks.",
    "goodFor": "Choosing compatible frontend, backend, and tooling options when starting a project.",
    "monogram": "Be",
    "kind": "Framework / starter",
    "official": "https://www.better-t-stack.dev/new",
    "keywords": [],
    "sourceIds": [
      43,
      205
    ],
    "references": [
      "https://better-t-stack.dev/"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "biome",
    "name": "Biome",
    "category": "developer-tools",
    "description": "A formatter and linter for web-project source code.",
    "goodFor": "Applying consistent formatting and automated code checks.",
    "monogram": "Bi",
    "kind": "Developer tool",
    "official": "https://biomejs.dev/",
    "keywords": [],
    "sourceIds": [
      245
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "bippy",
    "name": "Bippy",
    "category": "developer-tools",
    "description": "Utilities for inspecting React's internal component structures.",
    "goodFor": "Building specialized React debugging and inspection tools.",
    "monogram": "Bi",
    "kind": "Developer tool",
    "official": "https://www.bippy.dev/",
    "keywords": [],
    "sourceIds": [
      326
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "blitz",
    "name": "Blitz",
    "category": "frameworks",
    "description": "A toolkit and conventions for full-stack application development.",
    "goodFor": "Building applications with integrated server data access and authentication patterns.",
    "monogram": "Bl",
    "kind": "Framework / starter",
    "official": "https://blitzjs.com/",
    "keywords": [],
    "sourceIds": [
      358
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "blocknote",
    "name": "BlockNote",
    "category": "editors",
    "description": "A block-based rich-text editor for React.",
    "goodFor": "Adding document-style editing with structured content blocks.",
    "monogram": "Bl",
    "kind": "Library / tool",
    "official": "https://www.blocknotejs.org/",
    "keywords": [],
    "sourceIds": [
      339
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "bulletproof-react",
    "name": "Bulletproof React",
    "category": "learning",
    "description": "A reference application demonstrating React architecture and project organization.",
    "goodFor": "Studying a complete example of maintainable application structure.",
    "monogram": "Bu",
    "kind": "Learning resource",
    "official": "https://github.com/alan2207/bulletproof-react",
    "keywords": [],
    "sourceIds": [
      411
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "bunyan",
    "name": "Bunyan",
    "category": "logging",
    "description": "A JSON logging library for Node.js.",
    "goodFor": "Producing structured application logs that external tools can process.",
    "monogram": "Bu",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/bunyan",
    "keywords": [],
    "sourceIds": [
      247
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "bytebytego",
    "name": "ByteByteGo",
    "category": "learning",
    "description": "Articles explaining system design and software architecture.",
    "goodFor": "Building intuition about distributed systems and application infrastructure.",
    "monogram": "By",
    "kind": "Learning resource",
    "official": "https://blog.bytebytego.com/",
    "keywords": [],
    "sourceIds": [
      142
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cac",
    "name": "CAC",
    "category": "cli",
    "description": "A framework for defining command-line commands and options.",
    "goodFor": "Building a small CLI with argument parsing and generated help.",
    "monogram": "CA",
    "kind": "CLI toolkit",
    "official": "https://www.npmjs.com/package/cac",
    "keywords": [],
    "sourceIds": [
      232
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cal-heatmap",
    "name": "Cal-Heatmap",
    "category": "charts",
    "description": "A charting library for time-series calendar heatmaps.",
    "goodFor": "Visualizing activity or measurements over days and months.",
    "monogram": "Ca",
    "kind": "Library / tool",
    "official": "https://cal-heatmap.com/",
    "keywords": [],
    "sourceIds": [
      88
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cally",
    "name": "Cally",
    "category": "calendars",
    "description": "Framework-independent calendar components for choosing dates and ranges.",
    "goodFor": "Adding an accessible date-selection interface with custom styling.",
    "monogram": "Ca",
    "kind": "Library / tool",
    "official": "https://wicky.nillia.ms/cally/",
    "keywords": [],
    "sourceIds": [
      49
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "canvas-ui",
    "name": "Canvas UI",
    "category": "graphics",
    "description": "Canvas, WebGL, and WebGPU effects that work with live HTML content.",
    "goodFor": "Adding creative graphics to interfaces across supported web frameworks.",
    "monogram": "Ca",
    "kind": "Library / tool",
    "official": "https://canvasui.dev/",
    "keywords": [],
    "sourceIds": [
      558
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "canvas-confetti",
    "name": "canvas-confetti",
    "category": "animation",
    "description": "A canvas-based confetti animation library.",
    "goodFor": "Adding a celebratory visual effect to successful actions.",
    "monogram": "ca",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/canvas-confetti",
    "keywords": [],
    "sourceIds": [
      129
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "canvasjs",
    "name": "CanvasJS",
    "category": "charts",
    "description": "A charting library for displaying interactive data visualizations.",
    "goodFor": "Adding a ready-made chart UI with configurable series and axes.",
    "monogram": "Ca",
    "kind": "Library / tool",
    "official": "https://canvasjs.com/",
    "keywords": [],
    "sourceIds": [
      52
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "canvasjs-react-charts",
    "name": "CanvasJS React Charts",
    "category": "charts",
    "description": "React components for the CanvasJS charting library.",
    "goodFor": "Integrating configurable interactive charts into a React application.",
    "monogram": "Ca",
    "kind": "Library / tool",
    "official": "https://canvasjs.com/react-charts/",
    "keywords": [],
    "sourceIds": [
      309
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cap",
    "name": "Cap",
    "category": "open-source-apps",
    "description": "An open-source screen-recording and sharing application.",
    "goodFor": "Studying or self-hosting a video-oriented productivity tool.",
    "monogram": "Ca",
    "kind": "Reference app",
    "official": "https://github.com/CapSoftware/cap",
    "keywords": [],
    "sourceIds": [
      199
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "catalyst",
    "name": "Catalyst",
    "category": "ui-kits",
    "description": "A React application UI kit from the creators of Tailwind CSS.",
    "goodFor": "Starting a product interface from a coordinated set of components.",
    "monogram": "Ca",
    "kind": "UI toolkit",
    "official": "https://catalyst.tailwindui.com/",
    "keywords": [],
    "sourceIds": [
      472
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "chakra-ui",
    "name": "Chakra UI",
    "category": "ui-kits",
    "description": "A React component library with composable styling and theme support.",
    "goodFor": "Building consistent application screens from configurable components.",
    "monogram": "Ch",
    "kind": "UI toolkit",
    "official": "https://chakra-ui.com/",
    "keywords": [],
    "sourceIds": [
      545
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "chart-js",
    "name": "Chart.js",
    "category": "charts",
    "description": "A canvas-based JavaScript charting library.",
    "goodFor": "Adding common chart types to dashboards and reporting pages.",
    "monogram": "Ch",
    "kind": "Library / tool",
    "official": "https://www.chartjs.org/",
    "keywords": [],
    "sourceIds": [
      308
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "chroma-js",
    "name": "chroma.js",
    "category": "styling",
    "description": "A library for color conversions, scales, and manipulation.",
    "goodFor": "Generating palettes and color scales for interfaces or charts.",
    "monogram": "ch",
    "kind": "Library / tool",
    "official": "https://www.vis4.net/chromajs/",
    "keywords": [],
    "sourceIds": [
      215
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "chrono",
    "name": "Chrono",
    "category": "dates",
    "description": "A parser that recognizes dates expressed in natural language.",
    "goodFor": "Turning phrases such as next Friday into structured date information.",
    "monogram": "Ch",
    "kind": "Library / tool",
    "official": "https://github.com/wanasit/chrono",
    "keywords": [],
    "sourceIds": [
      77
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "clack",
    "name": "Clack",
    "category": "cli",
    "description": "Components for building interactive command-line experiences.",
    "goodFor": "Creating guided setup flows with prompts and progress messages.",
    "monogram": "Cl",
    "kind": "CLI toolkit",
    "official": "https://www.clack.cc/",
    "keywords": [],
    "sourceIds": [
      233
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "class-variance-authority",
    "name": "Class Variance Authority",
    "category": "styling",
    "description": "Utilities for defining component variants as sets of CSS classes.",
    "goodFor": "Managing size, color, and state variants in a component system.",
    "monogram": "Cl",
    "kind": "Library / tool",
    "official": "https://cva.style/docs",
    "keywords": [],
    "sourceIds": [
      119
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "clerk",
    "name": "Clerk",
    "category": "auth",
    "description": "Hosted authentication with user-management components and SDKs.",
    "goodFor": "Adding account screens and session handling to a React application.",
    "monogram": "Cl",
    "kind": "Library / tool",
    "official": "https://clerk.com/",
    "keywords": [],
    "sourceIds": [
      13
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "clerk-billing",
    "name": "Clerk Billing",
    "category": "commerce",
    "description": "Billing features integrated with Clerk's account infrastructure.",
    "goodFor": "Connecting subscriptions and entitlements to application users and organizations.",
    "monogram": "Cl",
    "kind": "Library / tool",
    "official": "https://clerk.com/billing",
    "keywords": [],
    "sourceIds": [
      419
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cli-cursor",
    "name": "cli-cursor",
    "category": "cli",
    "description": "A utility for showing and hiding the terminal cursor.",
    "goodFor": "Keeping animated terminal interfaces visually tidy.",
    "monogram": "cl",
    "kind": "CLI toolkit",
    "official": "https://www.npmjs.com/package/cli-cursor",
    "keywords": [],
    "sourceIds": [
      217
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cli-spinners",
    "name": "cli-spinners",
    "category": "cli",
    "description": "A collection of animation frames for terminal spinners.",
    "goodFor": "Building a custom command-line progress indicator.",
    "monogram": "cl",
    "kind": "CLI toolkit",
    "official": "https://www.npmjs.com/package/cli-spinners",
    "keywords": [],
    "sourceIds": [
      222
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "clipboardy",
    "name": "clipboardy",
    "category": "cli",
    "description": "A utility for reading and writing the system clipboard.",
    "goodFor": "Adding copy and paste behavior to Node.js developer tools.",
    "monogram": "cl",
    "kind": "CLI toolkit",
    "official": "https://github.com/sindresorhus/clipboardy",
    "keywords": [],
    "sourceIds": [
      221
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cloudflare-developers",
    "name": "Cloudflare Developers",
    "category": "hosting",
    "description": "Documentation for Cloudflare's developer platform and edge services.",
    "goodFor": "Building edge-hosted applications with networking, storage, and compute services.",
    "monogram": "Cl",
    "kind": "Infrastructure",
    "official": "https://developers.cloudflare.com/",
    "keywords": [],
    "sourceIds": [
      32
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "clsx",
    "name": "clsx",
    "category": "styling",
    "description": "A small utility for composing conditional CSS class names.",
    "goodFor": "Building className values from component states and optional styles.",
    "monogram": "cl",
    "kind": "Library / tool",
    "official": "https://github.com/lukeed/clsx",
    "keywords": [],
    "sourceIds": [
      58
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cmdk",
    "name": "cmdk",
    "category": "keyboard",
    "description": "Composable React components for command menus.",
    "goodFor": "Building a keyboard-friendly command palette with custom commands and styling.",
    "monogram": "cm",
    "kind": "Library / tool",
    "official": "https://github.com/pacocoursey/cmdk",
    "keywords": [],
    "sourceIds": [
      392,
      406
    ],
    "references": [
      "https://cmdk.paco.me/"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "code-hike",
    "name": "Code Hike",
    "category": "code-highlighting",
    "description": "Tools for combining code and explanatory content.",
    "goodFor": "Building interactive code walkthroughs and technical storytelling pages.",
    "monogram": "Co",
    "kind": "Library / tool",
    "official": "https://codehike.org/",
    "keywords": [],
    "sourceIds": [
      486
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "code-inspector",
    "name": "Code Inspector",
    "category": "developer-tools",
    "description": "A development tool that connects rendered page elements to their source code.",
    "goodFor": "Opening the corresponding component in an editor directly from the browser.",
    "monogram": "Co",
    "kind": "Developer tool",
    "official": "https://www.npmjs.com/package/code-inspector-plugin",
    "keywords": [],
    "sourceIds": [
      325,
      328
    ],
    "references": [
      "https://github.com/zh-lx/code-inspector"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "codejar",
    "name": "CodeJar",
    "category": "editors",
    "description": "A lightweight browser code editor.",
    "goodFor": "Adding an editable code snippet with your choice of syntax highlighting.",
    "monogram": "Co",
    "kind": "Library / tool",
    "official": "https://github.com/antonmedv/codejar",
    "keywords": [],
    "sourceIds": [
      313
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "compute-scroll-into-view",
    "name": "compute-scroll-into-view",
    "category": "scrolling",
    "description": "Utilities for calculating how to bring an element into view.",
    "goodFor": "Implementing controlled scrolling and alignment in nested containers.",
    "monogram": "co",
    "kind": "Library / tool",
    "official": "https://scroll-into-view.dev/#scroll-alignment",
    "keywords": [],
    "sourceIds": [
      433
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "concurrently",
    "name": "concurrently",
    "category": "build-tools",
    "description": "A tool for running multiple commands together.",
    "goodFor": "Starting a frontend, backend, and supporting processes in one workflow.",
    "monogram": "co",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/concurrently",
    "keywords": [],
    "sourceIds": [
      241
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "conform",
    "name": "Conform",
    "category": "forms",
    "description": "Form utilities centered on HTML forms and progressive enhancement.",
    "goodFor": "Combining server validation with accessible form behavior.",
    "monogram": "Co",
    "kind": "Library / tool",
    "official": "https://conform.guide/",
    "keywords": [],
    "sourceIds": [
      355
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "content-disposition-header",
    "name": "content-disposition-header",
    "category": "files",
    "description": "Utilities for working with HTTP Content-Disposition headers.",
    "goodFor": "Controlling filenames and attachment behavior in file-download responses.",
    "monogram": "co",
    "kind": "Library / tool",
    "official": "https://github.com/Methuselah96/content-disposition-header",
    "keywords": [],
    "sourceIds": [
      76
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "coss-ui",
    "name": "coss ui",
    "category": "ui-kits",
    "description": "A React component library built on Base UI.",
    "goodFor": "Building application interfaces with customizable accessible primitives and components.",
    "monogram": "co",
    "kind": "UI toolkit",
    "official": "https://coss.com/ui",
    "keywords": [],
    "sourceIds": [
      536,
      537
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "crawlee",
    "name": "Crawlee",
    "category": "server",
    "description": "A framework for building web crawlers and scrapers.",
    "goodFor": "Collecting webpage data with request management and browser integration.",
    "monogram": "Cr",
    "kind": "Library / tool",
    "official": "https://crawlee.dev/",
    "keywords": [],
    "sourceIds": [
      231
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "create-t3-app",
    "name": "Create T3 App",
    "category": "frameworks",
    "description": "A starter generator for type-safe full-stack applications.",
    "goodFor": "Bootstrapping a Next.js project with an integrated TypeScript-oriented stack.",
    "monogram": "Cr",
    "kind": "Framework / starter",
    "official": "https://create.t3.gg/",
    "keywords": [],
    "sourceIds": [
      204
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "croner",
    "name": "Croner",
    "category": "background-jobs",
    "description": "A scheduler that runs JavaScript tasks using cron expressions.",
    "goodFor": "Scheduling recurring jobs within a JavaScript or TypeScript process.",
    "monogram": "Cr",
    "kind": "Library / tool",
    "official": "https://croner.56k.guru/",
    "keywords": [],
    "sourceIds": [
      56
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cronicle",
    "name": "Cronicle",
    "category": "background-jobs",
    "description": "A distributed task scheduler and runner with a web interface.",
    "goodFor": "Operating recurring jobs across multiple machines.",
    "monogram": "Cr",
    "kind": "Library / tool",
    "official": "https://cronicle.net/",
    "keywords": [],
    "sourceIds": [
      236
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "css-modules",
    "name": "CSS Modules",
    "category": "styling",
    "description": "A convention and tooling approach for locally scoped CSS classes.",
    "goodFor": "Writing stylesheets without exposing every class name globally.",
    "monogram": "CS",
    "kind": "Library / tool",
    "official": "https://github.com/css-modules/css-modules",
    "keywords": [],
    "sourceIds": [
      460
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cuber",
    "name": "Cuber",
    "category": "hosting",
    "description": "An automation tool for building and deploying applications on Kubernetes.",
    "goodFor": "Teams that want an application deployment workflow on their own cluster.",
    "monogram": "Cu",
    "kind": "Infrastructure",
    "official": "https://cuber.cloud/",
    "keywords": [],
    "sourceIds": [
      33
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "cult-ui",
    "name": "Cult UI",
    "category": "ui-kits",
    "description": "Copyable React interface components.",
    "goodFor": "Adding customizable components and visual patterns to an application.",
    "monogram": "Cu",
    "kind": "UI toolkit",
    "official": "https://www.cult-ui.com/docs",
    "keywords": [],
    "sourceIds": [
      546
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "daily-dev",
    "name": "daily.dev",
    "category": "community",
    "description": "A developer community and feed for discovering technical articles.",
    "goodFor": "Keeping up with development topics and sharing useful reading.",
    "monogram": "da",
    "kind": "Community",
    "official": "https://daily.dev/",
    "keywords": [],
    "sourceIds": [
      38
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "daisyui",
    "name": "daisyUI",
    "category": "ui-kits",
    "description": "Semantic component classes built for Tailwind CSS.",
    "goodFor": "Building coordinated interfaces without styling every element from utilities alone.",
    "monogram": "da",
    "kind": "UI toolkit",
    "official": "https://daisyui.com/",
    "keywords": [],
    "sourceIds": [
      467
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "date-fns",
    "name": "date-fns",
    "category": "dates",
    "description": "Functions for formatting, parsing, and manipulating JavaScript dates.",
    "goodFor": "Picking individual functions for the date operations you need.",
    "monogram": "df",
    "kind": "Date utilities",
    "caveat": "Date calculations and formatting, rather than a date picker UI.",
    "implementation": "Call the date functions from your application code. Choose formatting patterns and locale behavior explicitly; build or add a separate calendar UI when users need to select a date.",
    "official": "https://date-fns.org/",
    "keywords": [
      "format a date",
      "parse a timestamp",
      "date arithmetic",
      "functional"
    ],
    "sourceIds": [
      70
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "dayjs",
    "name": "Day.js",
    "category": "dates",
    "description": "A compact date library with a chainable API.",
    "goodFor": "Working with dates through a familiar, chainable API.",
    "monogram": "D",
    "kind": "Date utilities",
    "caveat": "Add plugins for capabilities beyond the core.",
    "implementation": "Use Day.js objects for parsing, manipulation, and display. Enable the plugins and locales your application needs, and check their behavior against your date formats.",
    "official": "https://day.js.org/",
    "keywords": [
      "format a date",
      "parse a timestamp",
      "chainable",
      "moment"
    ],
    "sourceIds": [
      67
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "deep-equal-json",
    "name": "deep-equal-json",
    "category": "utilities",
    "description": "A helper for comparing JSON-compatible values deeply.",
    "goodFor": "Checking whether nested serialized data has changed.",
    "monogram": "de",
    "kind": "Library / tool",
    "official": "https://github.com/inspect-js/deep-equal-json",
    "keywords": [],
    "sourceIds": [
      121
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "deepwiki-open",
    "name": "DeepWiki Open",
    "category": "open-source-apps",
    "description": "An AI-assisted documentation generator for source-code repositories.",
    "goodFor": "Generating navigable explanations of a repository's structure and behavior.",
    "monogram": "De",
    "kind": "Reference app",
    "official": "https://github.com/AsyncFuncAI/deepwiki-open",
    "keywords": [],
    "sourceIds": [
      188
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "dependency-cruiser",
    "name": "dependency-cruiser",
    "category": "developer-tools",
    "description": "A dependency analysis tool with configurable architecture rules.",
    "goodFor": "Detecting forbidden imports, cycles, and structural drift in a codebase.",
    "monogram": "de",
    "kind": "Developer tool",
    "official": "https://github.com/sverweij/dependency-cruiser",
    "keywords": [],
    "sourceIds": [
      227
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "dev-community",
    "name": "DEV Community",
    "category": "community",
    "description": "A publishing and discussion community for software developers.",
    "goodFor": "Reading practical development articles and sharing implementation experiences.",
    "monogram": "DE",
    "kind": "Community",
    "official": "https://dev.to/",
    "keywords": [],
    "sourceIds": [
      39
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "devalue",
    "name": "devalue",
    "category": "serialization",
    "description": "A serializer for JavaScript values that go beyond ordinary JSON.",
    "goodFor": "Transferring structured application state across server and client boundaries.",
    "monogram": "de",
    "kind": "Library / tool",
    "official": "https://github.com/sveltejs/devalue",
    "keywords": [],
    "sourceIds": [
      93
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "digitalocean",
    "name": "DigitalOcean",
    "category": "hosting",
    "description": "Cloud infrastructure and managed services for application development.",
    "goodFor": "Small teams that need servers, databases, and application hosting.",
    "monogram": "Di",
    "kind": "Infrastructure",
    "official": "https://www.digitalocean.com/",
    "keywords": [],
    "sourceIds": [
      31
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "dinero-js",
    "name": "Dinero.js",
    "category": "utilities",
    "description": "Utilities for representing monetary amounts and performing money calculations.",
    "goodFor": "Handling currencies and arithmetic without treating money as an unstructured number.",
    "monogram": "Di",
    "kind": "Library / tool",
    "official": "https://v2.dinerojs.com/docs/getting-started/quick-start",
    "keywords": [],
    "sourceIds": [
      57
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "directus",
    "name": "Directus",
    "category": "backend",
    "description": "A data platform that adds APIs and an administration interface to SQL databases.",
    "goodFor": "Managing structured content while retaining an existing SQL data model.",
    "monogram": "Di",
    "kind": "Library / tool",
    "official": "https://directus.io/",
    "keywords": [],
    "sourceIds": [
      25
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "dnd-kit",
    "name": "dnd kit",
    "category": "drag-and-drop",
    "description": "Composable building blocks for dragging, dropping, sorting, and reordering.",
    "goodFor": "Custom sortable lists and drag-and-drop interfaces in React.",
    "monogram": "dk",
    "kind": "Interaction toolkit",
    "caveat": "You still design the interface, interaction rules, and feedback.",
    "implementation": "Connect draggable and droppable elements to your application state. Choose sensors, sorting behavior, and visual feedback; test pointer and keyboard interactions in your actual layout.",
    "official": "https://dndkit.com/",
    "keywords": [
      "reorder list",
      "sortable",
      "kanban board",
      "drag cards",
      "sensors"
    ],
    "sourceIds": [
      334
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "doctoc",
    "name": "doctoc",
    "category": "documentation",
    "description": "A generator for Markdown tables of contents.",
    "goodFor": "Keeping navigation inside repository documentation aligned with its headings.",
    "monogram": "do",
    "kind": "Publishing tool",
    "official": "https://www.npmjs.com/package/doctoc",
    "keywords": [],
    "sourceIds": [
      329
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "docusaurus",
    "name": "Docusaurus",
    "category": "documentation",
    "description": "A React-based site generator for documentation and content.",
    "goodFor": "Publishing a structured documentation website with reusable content features.",
    "monogram": "Do",
    "kind": "Publishing tool",
    "official": "https://docusaurus.io/",
    "keywords": [],
    "sourceIds": [
      564
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "dompurify",
    "name": "DOMPurify",
    "category": "security",
    "description": "An HTML sanitizer that removes unsafe markup from untrusted content.",
    "goodFor": "Rendering user-supplied HTML after applying an appropriate sanitization policy.",
    "monogram": "DO",
    "kind": "Library / tool",
    "official": "https://cure53.de/purify",
    "keywords": [],
    "sourceIds": [
      110
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "downloadjs",
    "name": "downloadjs",
    "category": "files",
    "description": "A browser helper for downloading strings, blobs, and data URLs.",
    "goodFor": "Saving data that an application generates on the client.",
    "monogram": "do",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/downloadjs",
    "keywords": [],
    "sourceIds": [
      85
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "downshift",
    "name": "Downshift",
    "category": "inputs",
    "description": "React primitives for accessible selection and autocomplete interfaces.",
    "goodFor": "Building custom comboboxes and menus while retaining interaction control.",
    "monogram": "Do",
    "kind": "Library / tool",
    "official": "https://www.downshift-js.com/",
    "keywords": [],
    "sourceIds": [
      440
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "draft-ui",
    "name": "Draft UI",
    "category": "ui-kits",
    "description": "Copyable React components focused on accessible interface patterns.",
    "goodFor": "Starting from simple component implementations that you can own and customize.",
    "monogram": "Dr",
    "kind": "UI toolkit",
    "official": "https://draft-ui.com/",
    "keywords": [],
    "sourceIds": [
      479
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "drift",
    "name": "Drift",
    "category": "commerce",
    "description": "A customer-conversation platform for sales and support experiences.",
    "goodFor": "Adding business-oriented chat and customer-engagement workflows.",
    "monogram": "Dr",
    "kind": "Library / tool",
    "official": "https://www.drift.com/",
    "keywords": [],
    "sourceIds": [
      316
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "driver-js",
    "name": "Driver.js",
    "category": "onboarding",
    "description": "A library for highlighting page elements and creating guided tours.",
    "goodFor": "Introducing features through focused step-by-step interface walkthroughs.",
    "monogram": "Dr",
    "kind": "Library / tool",
    "official": "https://driverjs.com/",
    "keywords": [],
    "sourceIds": [
      117
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "drizzle-orm",
    "name": "Drizzle ORM",
    "category": "databases",
    "description": "A TypeScript ORM with SQL-oriented query APIs.",
    "goodFor": "Keeping database access close to SQL while benefiting from static types.",
    "monogram": "Dr",
    "kind": "Data tool",
    "official": "https://orm.drizzle.team/",
    "keywords": [],
    "sourceIds": [
      261
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "dub",
    "name": "Dub",
    "category": "open-source-apps",
    "description": "An open-source link-management application.",
    "goodFor": "Studying a production-style application for short links and link analytics.",
    "monogram": "Du",
    "kind": "Reference app",
    "official": "https://github.com/dubinc/dub",
    "keywords": [],
    "sourceIds": [
      185
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "effect",
    "name": "Effect",
    "category": "typescript",
    "description": "A TypeScript library for composing computations and managing application effects.",
    "goodFor": "Structuring asynchronous work, errors, dependencies, and resource lifecycles.",
    "monogram": "Ef",
    "kind": "Library / tool",
    "official": "https://effect.website/",
    "keywords": [],
    "sourceIds": [
      568
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "elevenlabs-ui",
    "name": "ElevenLabs UI",
    "category": "ai",
    "description": "Components for audio and AI-agent interfaces.",
    "goodFor": "Building voice-oriented application screens with reusable interaction elements.",
    "monogram": "El",
    "kind": "Library / tool",
    "official": "https://ui.elevenlabs.io/",
    "keywords": [],
    "sourceIds": [
      533
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "embla-carousel",
    "name": "Embla Carousel",
    "category": "media",
    "description": "A carousel engine with React integration.",
    "goodFor": "Building a custom swipeable carousel while controlling its visual design.",
    "monogram": "Em",
    "kind": "Library / tool",
    "official": "https://www.embla-carousel.com/",
    "keywords": [],
    "sourceIds": [
      306
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "emoji-mart",
    "name": "Emoji Mart",
    "category": "inputs",
    "description": "An emoji picker and associated emoji data utilities.",
    "goodFor": "Adding searchable emoji selection to messaging or editing interfaces.",
    "monogram": "Em",
    "kind": "Library / tool",
    "official": "https://missiveapp.com/open/emoji-mart",
    "keywords": [],
    "sourceIds": [
      73
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "emoji-picker-element",
    "name": "emoji-picker-element",
    "category": "inputs",
    "description": "An emoji picker delivered as a browser custom element.",
    "goodFor": "Adding emoji selection without depending on a particular UI framework.",
    "monogram": "em",
    "kind": "Library / tool",
    "official": "https://nolanlawson.github.io/emoji-picker-element/",
    "keywords": [],
    "sourceIds": [
      72
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "emotion",
    "name": "Emotion",
    "category": "styling",
    "description": "A library for composing styles with JavaScript.",
    "goodFor": "Building component-level styles with a flexible CSS-in-JS API.",
    "monogram": "Em",
    "kind": "Library / tool",
    "official": "https://emotion.sh/docs/introduction",
    "keywords": [],
    "sourceIds": [
      476
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "enforce-unique",
    "name": "enforce-unique",
    "category": "testing",
    "description": "A helper for ensuring generated values remain unique.",
    "goodFor": "Avoiding duplicate fixture values while creating test data.",
    "monogram": "en",
    "kind": "Testing tool",
    "official": "https://www.npmjs.com/package/enforce-unique",
    "keywords": [],
    "sourceIds": [
      251
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "envinfo",
    "name": "envinfo",
    "category": "developer-tools",
    "description": "A utility that reports development environment information.",
    "goodFor": "Collecting reproducible environment details for debugging and issue reports.",
    "monogram": "en",
    "kind": "Developer tool",
    "official": "https://www.npmjs.com/package/envinfo",
    "keywords": [],
    "sourceIds": [
      208
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "epic-stack",
    "name": "Epic Stack",
    "category": "frameworks",
    "description": "An opinionated starter for full-stack web applications.",
    "goodFor": "Starting with an integrated set of application and deployment conventions.",
    "monogram": "Ep",
    "kind": "Framework / starter",
    "official": "https://www.epicweb.dev/epic-stack",
    "keywords": [],
    "sourceIds": [
      360
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "epic-stack-user-impersonation-example",
    "name": "Epic Stack User Impersonation Example",
    "category": "learning",
    "description": "A saved discussion linking to an Epic Stack user-impersonation example.",
    "goodFor": "Studying an administrative workflow that lets support staff act as another user.",
    "monogram": "Ep",
    "kind": "Learning resource",
    "official": "https://twitter.com/kentcdodds/status/1677313114147270656",
    "keywords": [],
    "sourceIds": [
      153
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "es-toolkit",
    "name": "es-toolkit",
    "category": "utilities",
    "description": "A typed collection of common JavaScript utility functions.",
    "goodFor": "Handling everyday collection and data transformations with individual helpers.",
    "monogram": "es",
    "kind": "Library / tool",
    "official": "https://es-toolkit.dev/",
    "keywords": [],
    "sourceIds": [
      81
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "excalidraw",
    "name": "Excalidraw",
    "category": "graphics",
    "description": "An open-source drawing application with a hand-drawn visual style.",
    "goodFor": "Creating or embedding collaborative sketching and diagramming experiences.",
    "monogram": "Ex",
    "kind": "Library / tool",
    "official": "https://github.com/excalidraw/excalidraw",
    "keywords": [],
    "sourceIds": [
      408
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "execa",
    "name": "Execa",
    "category": "cli",
    "description": "A process-execution library for Node.js.",
    "goodFor": "Running external programs with structured input, output, and error handling.",
    "monogram": "Ex",
    "kind": "CLI toolkit",
    "official": "https://github.com/sindresorhus/execa#readme",
    "keywords": [],
    "sourceIds": [
      234
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "expressive-code",
    "name": "Expressive Code",
    "category": "code-highlighting",
    "description": "A framework for richly rendered code blocks.",
    "goodFor": "Publishing code examples with highlighting, annotations, and presentation features.",
    "monogram": "Ex",
    "kind": "Library / tool",
    "official": "https://github.com/expressive-code/expressive-code",
    "keywords": [],
    "sourceIds": [
      485
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "faker",
    "name": "Faker",
    "category": "testing",
    "description": "A library that generates realistic-looking fake data.",
    "goodFor": "Creating sample users, records, and large development datasets.",
    "monogram": "Fa",
    "kind": "Testing tool",
    "official": "https://fakerjs.dev/",
    "keywords": [],
    "sourceIds": [
      253
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "falso",
    "name": "Falso",
    "category": "testing",
    "description": "A library for generating fake application data.",
    "goodFor": "Creating typed fixtures such as names, addresses, and product details.",
    "monogram": "Fa",
    "kind": "Testing tool",
    "official": "https://www.npmjs.com/package/@ngneat/falso",
    "keywords": [],
    "sourceIds": [
      252
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "fancy-ansi",
    "name": "Fancy ANSI",
    "category": "styling",
    "description": "A utility for rendering ANSI-formatted terminal text on the web.",
    "goodFor": "Showing colored command output inside browser-based interfaces.",
    "monogram": "Fa",
    "kind": "Library / tool",
    "official": "https://kubetail-org.github.io/fancy-ansi/",
    "keywords": [],
    "sourceIds": [
      55
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "fast-json-stringify",
    "name": "fast-json-stringify",
    "category": "serialization",
    "description": "A schema-driven JSON serializer.",
    "goodFor": "Serializing known response shapes in performance-sensitive server code.",
    "monogram": "fa",
    "kind": "Library / tool",
    "official": "https://github.com/fastify/fast-json-stringify",
    "keywords": [],
    "sourceIds": [
      122
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "filesaver-js",
    "name": "FileSaver.js",
    "category": "files",
    "description": "A browser utility for saving generated data as a file.",
    "goodFor": "Offering downloads of client-generated documents and exports.",
    "monogram": "Fi",
    "kind": "Library / tool",
    "official": "https://github.com/eligrey/FileSaver.js",
    "keywords": [],
    "sourceIds": [
      75
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "filterql",
    "name": "FilterQL",
    "category": "utilities",
    "description": "A query language for filtering structured JavaScript data.",
    "goodFor": "Expressing reusable filtering conditions over collections.",
    "monogram": "Fi",
    "kind": "Library / tool",
    "official": "https://github.com/adamhl8/filterql",
    "keywords": [],
    "sourceIds": [
      91
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "flagsmith",
    "name": "Flagsmith",
    "category": "open-source-apps",
    "description": "An open-source feature-flag and remote-configuration platform.",
    "goodFor": "Studying or deploying a system for controlling feature rollout.",
    "monogram": "Fl",
    "kind": "Reference app",
    "official": "https://github.com/Flagsmith/flagsmith",
    "keywords": [],
    "sourceIds": [
      413
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "flatbush",
    "name": "Flatbush",
    "category": "utilities",
    "description": "A spatial index for quickly searching rectangles and points.",
    "goodFor": "Finding nearby or overlapping objects in a large static dataset.",
    "monogram": "Fl",
    "kind": "Library / tool",
    "official": "https://github.com/mourner/flatbush",
    "keywords": [],
    "sourceIds": [
      323
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "flickity",
    "name": "Flickity",
    "category": "media",
    "description": "A touch-friendly carousel library.",
    "goodFor": "Displaying swipeable image galleries and horizontally browsable content.",
    "monogram": "Fl",
    "kind": "Library / tool",
    "official": "https://flickity.metafizzy.co/",
    "keywords": [],
    "sourceIds": [
      112
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "floating-ui",
    "name": "Floating UI",
    "category": "overlays",
    "description": "Positioning and interaction primitives for floating elements.",
    "goodFor": "Building tooltips, popovers, and menus anchored to other elements.",
    "monogram": "Fl",
    "kind": "Library / tool",
    "official": "https://floating-ui.com/",
    "keywords": [],
    "sourceIds": [
      506
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "flowbite-react",
    "name": "Flowbite React",
    "category": "ui-kits",
    "description": "React components built around Tailwind CSS and the Flowbite design system.",
    "goodFor": "Adding styled application components to a Tailwind-based project.",
    "monogram": "Fl",
    "kind": "UI toolkit",
    "official": "https://www.flowbite-react.com/",
    "keywords": [],
    "sourceIds": [
      495
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "fluent-ui-react",
    "name": "Fluent UI React",
    "category": "ui-kits",
    "description": "Microsoft's React components for Fluent-style interfaces.",
    "goodFor": "Building applications that follow Fluent design conventions.",
    "monogram": "Fl",
    "kind": "UI toolkit",
    "official": "https://react.fluentui.dev/",
    "keywords": [],
    "sourceIds": [
      524
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "fly-io",
    "name": "Fly.io",
    "category": "hosting",
    "description": "A platform for deploying applications on distributed virtual machines.",
    "goodFor": "Running server applications near users across multiple regions.",
    "monogram": "Fl",
    "kind": "Infrastructure",
    "official": "https://fly.io/",
    "keywords": [],
    "sourceIds": [
      34
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "flyonui",
    "name": "FlyonUI",
    "category": "ui-kits",
    "description": "A Tailwind CSS component library with semantic class names.",
    "goodFor": "Assembling styled interface elements with a class-based component workflow.",
    "monogram": "Fl",
    "kind": "UI toolkit",
    "official": "https://flyonui.com/",
    "keywords": [],
    "sourceIds": [
      494
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "formidable",
    "name": "Formidable",
    "category": "files",
    "description": "A parser for multipart form submissions and uploaded files in Node.js.",
    "goodFor": "Handling file-upload requests on a server.",
    "monogram": "Fo",
    "kind": "Library / tool",
    "official": "https://github.com/node-formidable/formidable",
    "keywords": [],
    "sourceIds": [
      239
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "formik",
    "name": "Formik",
    "category": "forms",
    "description": "React helpers for form state, validation, and submission.",
    "goodFor": "Managing a conventional React form with explicit field state.",
    "monogram": "Fo",
    "kind": "Library / tool",
    "official": "https://formik.org/",
    "keywords": [],
    "sourceIds": [
      351
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "found",
    "name": "Found",
    "category": "routing",
    "description": "Routing tools for React applications.",
    "goodFor": "Defining route trees with asynchronous data and rendering behavior.",
    "monogram": "Fo",
    "kind": "Library / tool",
    "official": "https://4catalyzer.github.io/found/",
    "keywords": [],
    "sourceIds": [
      428
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "freecodecamp",
    "name": "freeCodeCamp",
    "category": "learning",
    "description": "Programming lessons, projects, and technical articles.",
    "goodFor": "Learning web development through structured practice.",
    "monogram": "fr",
    "kind": "Learning resource",
    "official": "https://www.freecodecamp.org/",
    "keywords": [],
    "sourceIds": [
      143
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "fresnel",
    "name": "Fresnel",
    "category": "layout",
    "description": "Responsive React layout utilities designed to work with server rendering.",
    "goodFor": "Rendering breakpoint-specific layouts with coordinated CSS media queries.",
    "monogram": "Fr",
    "kind": "Library / tool",
    "official": "https://github.com/artsy/fresnel",
    "keywords": [],
    "sourceIds": [
      461
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "fullcalendar-react",
    "name": "FullCalendar React",
    "category": "calendars",
    "description": "A React integration for the FullCalendar event-calendar library.",
    "goodFor": "Displaying schedules with configurable calendar views and interactions.",
    "monogram": "Fu",
    "kind": "Library / tool",
    "official": "https://fullcalendar.io/docs/react",
    "keywords": [],
    "sourceIds": [
      303
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "fusionauth",
    "name": "FusionAuth",
    "category": "auth",
    "description": "An identity platform with APIs for login and user management.",
    "goodFor": "Applications that need control over identity deployment and configuration.",
    "monogram": "Fu",
    "kind": "Library / tool",
    "official": "https://fusionauth.io/",
    "keywords": [],
    "sourceIds": [
      14
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "fzf",
    "name": "fzf",
    "category": "search",
    "description": "A JavaScript implementation of fuzzy matching inspired by fzf.",
    "goodFor": "Ranking short labels and commands from approximate text input.",
    "monogram": "fz",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/fzf",
    "keywords": [],
    "sourceIds": [
      106
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "g9",
    "name": "g9",
    "category": "graphics",
    "description": "A library for creating automatically interactive graphics.",
    "goodFor": "Exploring diagrams whose parameters can be manipulated directly.",
    "monogram": "g9",
    "kind": "Library / tool",
    "official": "https://omrelli.ug/g9/gallery/",
    "keywords": [],
    "sourceIds": [
      374
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "gatsby",
    "name": "Gatsby",
    "category": "frameworks",
    "description": "A React framework for building content-driven websites.",
    "goodFor": "Building sites that connect structured content to reusable React pages.",
    "monogram": "Ga",
    "kind": "Framework / starter",
    "official": "https://www.gatsbyjs.com/",
    "keywords": [],
    "sourceIds": [
      566
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "gitbook",
    "name": "GitBook",
    "category": "documentation",
    "description": "A platform for creating and publishing product documentation.",
    "goodFor": "Maintaining a hosted documentation site with a collaborative editing workflow.",
    "monogram": "Gi",
    "kind": "Publishing tool",
    "official": "https://www.gitbook.com/",
    "keywords": [],
    "sourceIds": [
      190,
      202
    ],
    "references": [
      "https://github.com/GitbookIO/gitbook"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "github-hotkey",
    "name": "GitHub Hotkey",
    "category": "keyboard",
    "description": "A utility that associates keyboard shortcuts with page elements.",
    "goodFor": "Adding declarative shortcuts to browser interfaces.",
    "monogram": "Gi",
    "kind": "Library / tool",
    "official": "https://github.github.com/hotkey/",
    "keywords": [],
    "sourceIds": [
      94
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "glide-data-grid",
    "name": "Glide Data Grid",
    "category": "data-tables",
    "description": "A React data grid designed for large, interactive datasets.",
    "goodFor": "Building spreadsheet-like interfaces with custom cell rendering.",
    "monogram": "Gl",
    "kind": "Library / tool",
    "official": "https://grid.glideapps.com/",
    "keywords": [],
    "sourceIds": [
      377
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "glob",
    "name": "glob",
    "category": "files",
    "description": "File matching using shell-style glob patterns.",
    "goodFor": "Finding files that match a configured path pattern.",
    "monogram": "gl",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/glob",
    "keywords": [],
    "sourceIds": [
      242
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "globby",
    "name": "Globby",
    "category": "files",
    "description": "Convenience helpers for matching files with glob patterns.",
    "goodFor": "Selecting project files for build scripts and code-processing tasks.",
    "monogram": "Gl",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/globby",
    "keywords": [],
    "sourceIds": [
      240
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "google-cloud",
    "name": "Google Cloud",
    "category": "hosting",
    "description": "Cloud services for application hosting, data processing, and infrastructure.",
    "goodFor": "Deploying applications alongside managed data and computing services.",
    "monogram": "Go",
    "kind": "Infrastructure",
    "official": "https://cloud.google.com/",
    "keywords": [],
    "sourceIds": [
      27
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "grafbase",
    "name": "Grafbase",
    "category": "backend",
    "description": "Tools for building a GraphQL API layer across services and data sources.",
    "goodFor": "Presenting multiple backend capabilities through a unified GraphQL interface.",
    "monogram": "Gr",
    "kind": "Library / tool",
    "official": "https://grafbase.com/",
    "keywords": [],
    "sourceIds": [
      21
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "h3",
    "name": "H3",
    "category": "server",
    "description": "A server framework built around web-standard HTTP primitives.",
    "goodFor": "Writing composable request handlers across supported JavaScript runtimes.",
    "monogram": "H3",
    "kind": "Library / tool",
    "official": "https://h3.dev/",
    "keywords": [],
    "sourceIds": [
      277
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "hackernoon",
    "name": "HackerNoon",
    "category": "community",
    "description": "A publishing platform for technology stories and technical articles.",
    "goodFor": "Discovering broader industry perspectives and developer-written content.",
    "monogram": "Ha",
    "kind": "Community",
    "official": "https://hackernoon.com/",
    "keywords": [],
    "sourceIds": [
      40
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "hashnode",
    "name": "Hashnode",
    "category": "community",
    "description": "A blogging platform and community for developers.",
    "goodFor": "Publishing a technical blog and finding developer-written articles.",
    "monogram": "Ha",
    "kind": "Community",
    "official": "https://hashnode.com/",
    "keywords": [],
    "sourceIds": [
      41
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "hasura",
    "name": "Hasura",
    "category": "backend",
    "description": "A platform for exposing data through APIs, including GraphQL.",
    "goodFor": "Connecting applications to existing data sources with an API layer.",
    "monogram": "Ha",
    "kind": "Library / tool",
    "official": "https://hasura.io/",
    "keywords": [],
    "sourceIds": [
      16
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "headless-ui",
    "name": "Headless UI",
    "category": "ui-kits",
    "description": "Unstyled interactive components for web interfaces.",
    "goodFor": "Designing custom UI while reusing established interaction behavior.",
    "monogram": "He",
    "kind": "UI toolkit",
    "official": "https://headlessui.com/",
    "keywords": [],
    "sourceIds": [
      500
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "heat-js",
    "name": "Heat.js",
    "category": "charts",
    "description": "A configurable JavaScript heatmap component.",
    "goodFor": "Presenting activity patterns with a customizable heatmap interface.",
    "monogram": "He",
    "kind": "Library / tool",
    "official": "https://www.william-troup.com/heat-js/",
    "keywords": [],
    "sourceIds": [
      90
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "hellocsv",
    "name": "HelloCSV",
    "category": "files",
    "description": "A CSV import interface for bringing tabular data into an application.",
    "goodFor": "Guiding users through uploading and mapping spreadsheet-style data.",
    "monogram": "He",
    "kind": "Library / tool",
    "official": "https://hellocsv.github.io/HelloCSV/",
    "keywords": [],
    "sourceIds": [
      47
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "heroicons",
    "name": "Heroicons",
    "category": "icons",
    "description": "A collection of interface icons with React-friendly usage.",
    "goodFor": "Adding consistent icons to Tailwind-oriented and other web interfaces.",
    "monogram": "He",
    "kind": "Library / tool",
    "official": "https://heroicons.com/",
    "keywords": [],
    "sourceIds": [
      389
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "heroku",
    "name": "Heroku",
    "category": "hosting",
    "description": "A managed application platform with deployment workflows and add-on services.",
    "goodFor": "Deploying a server application without managing its underlying machines directly.",
    "monogram": "He",
    "kind": "Infrastructure",
    "official": "https://www.heroku.com/platform",
    "keywords": [],
    "sourceIds": [
      29
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "heroui",
    "name": "HeroUI",
    "category": "ui-kits",
    "description": "A React component library built around accessible interface patterns.",
    "goodFor": "Building a coordinated application UI with customizable components.",
    "monogram": "He",
    "kind": "UI toolkit",
    "official": "https://www.heroui.com/",
    "keywords": [],
    "sourceIds": [
      493
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "hono",
    "name": "Hono",
    "category": "server",
    "description": "A web framework for JavaScript runtimes and edge environments.",
    "goodFor": "Implementing compact APIs with web-standard request and response objects.",
    "monogram": "Ho",
    "kind": "Library / tool",
    "official": "https://hono.dev/",
    "keywords": [],
    "sourceIds": [
      279
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "hookdeck",
    "name": "Hookdeck",
    "category": "background-jobs",
    "description": "Infrastructure and tooling for webhook and event delivery.",
    "goodFor": "Managing retries, observability, and reliability for incoming events.",
    "monogram": "Ho",
    "kind": "Library / tool",
    "official": "https://hookdeck.com/",
    "keywords": [],
    "sourceIds": [
      281
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "html-dom-by-phuoc-nguyen",
    "name": "HTML DOM by Phuoc Nguyen",
    "category": "learning",
    "description": "Examples of DOM manipulation using browser APIs.",
    "goodFor": "Learning to implement browser interactions with vanilla JavaScript.",
    "monogram": "HT",
    "kind": "Learning resource",
    "official": "https://phuoc.ng/collection/html-dom/",
    "keywords": [],
    "sourceIds": [
      139
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "html-to-image",
    "name": "html-to-image",
    "category": "media",
    "description": "A utility for rendering a DOM node as an image.",
    "goodFor": "Exporting interface fragments, cards, or diagrams as downloadable graphics.",
    "monogram": "ht",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/html-to-image",
    "keywords": [],
    "sourceIds": [
      391
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "hydrogen-react",
    "name": "Hydrogen React",
    "category": "commerce",
    "description": "React utilities and components for Shopify storefronts.",
    "goodFor": "Building a custom storefront connected to Shopify commerce data.",
    "monogram": "Hy",
    "kind": "Library / tool",
    "official": "https://shopify.dev/docs/api/hydrogen-react",
    "keywords": [],
    "sourceIds": [
      337
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "hygen",
    "name": "Hygen",
    "category": "developer-tools",
    "description": "A code generator that uses templates kept inside a project.",
    "goodFor": "Creating consistent components and files from local conventions.",
    "monogram": "Hy",
    "kind": "Developer tool",
    "official": "https://www.hygen.io/",
    "keywords": [],
    "sourceIds": [
      271
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "iconify",
    "name": "Iconify",
    "category": "icons",
    "description": "An icon ecosystem that exposes many icon collections through shared tooling.",
    "goodFor": "Choosing icons from multiple sets without changing the integration approach.",
    "monogram": "Ic",
    "kind": "Library / tool",
    "official": "https://iconify.design/",
    "keywords": [],
    "sourceIds": [
      386
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "iconify-react",
    "name": "Iconify React",
    "category": "icons",
    "description": "React components for rendering icons from the Iconify ecosystem.",
    "goodFor": "Using icon collections through a shared React component API.",
    "monogram": "Ic",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/@iconify/react",
    "keywords": [],
    "sourceIds": [
      436
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "img-ly-background-removal",
    "name": "IMG.LY Background Removal",
    "category": "media",
    "description": "Browser tooling for removing image backgrounds.",
    "goodFor": "Creating subject cutouts without sending every image to an application server.",
    "monogram": "IM",
    "kind": "Library / tool",
    "official": "https://img.ly/showcases/cesdk/background-removal/web",
    "keywords": [],
    "sourceIds": [
      390
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "immutable-js",
    "name": "Immutable.js",
    "category": "state",
    "description": "Persistent immutable data structures for JavaScript.",
    "goodFor": "Managing complex collections while retaining previous versions of state.",
    "monogram": "Im",
    "kind": "Library / tool",
    "official": "https://immutable-js.com/",
    "keywords": [],
    "sourceIds": [
      79
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "infinitegrid",
    "name": "InfiniteGrid",
    "category": "layout",
    "description": "A layout engine for arranging items in large or growing grids.",
    "goodFor": "Building masonry-style feeds and dynamically loaded card layouts.",
    "monogram": "In",
    "kind": "Library / tool",
    "official": "https://naver.github.io/egjs-infinitegrid/",
    "keywords": [],
    "sourceIds": [
      375
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "input-otp",
    "name": "Input OTP",
    "category": "inputs",
    "description": "An unstyled React input for one-time passwords.",
    "goodFor": "Building accessible verification-code entry with custom visual styling.",
    "monogram": "In",
    "kind": "Library / tool",
    "official": "https://input-otp.rodz.dev/",
    "keywords": [],
    "sourceIds": [
      443
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "insomnia",
    "name": "Insomnia",
    "category": "api-tools",
    "description": "An API client for composing requests and organizing development workflows.",
    "goodFor": "Exploring HTTP APIs and testing requests during development.",
    "monogram": "In",
    "kind": "API tool",
    "official": "https://insomnia.rest/",
    "keywords": [],
    "sourceIds": [
      7
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "integrationos-authkit",
    "name": "IntegrationOS AuthKit",
    "category": "auth",
    "description": "A React integration interface for connecting external accounts.",
    "goodFor": "Building an account-connection flow for third-party services.",
    "monogram": "In",
    "kind": "Library / tool",
    "official": "https://authkit-demo.integrationos.com/",
    "keywords": [],
    "sourceIds": [
      299
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "international-telephone-input",
    "name": "International Telephone Input",
    "category": "inputs",
    "description": "A telephone input with country selection and number-formatting support.",
    "goodFor": "Collecting phone numbers from users in different regions.",
    "monogram": "In",
    "kind": "Library / tool",
    "official": "https://intl-tel-input.com/",
    "keywords": [],
    "sourceIds": [
      353
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "intl-t",
    "name": "intl-t",
    "category": "i18n",
    "description": "Internationalization utilities for application text.",
    "goodFor": "Organizing translated messages in a JavaScript or TypeScript application.",
    "monogram": "in",
    "kind": "Library / tool",
    "official": "https://github.com/nivandres/intl-t",
    "keywords": [],
    "sourceIds": [
      556
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "io-ts",
    "name": "io-ts",
    "category": "validation",
    "description": "A runtime type system for decoding and encoding data.",
    "goodFor": "Validating data at application boundaries in functional TypeScript code.",
    "monogram": "io",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/io-ts",
    "keywords": [],
    "sourceIds": [
      126
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "is-interactive",
    "name": "is-interactive",
    "category": "cli",
    "description": "A detector for interactive terminal output.",
    "goodFor": "Choosing between interactive prompts and plain output in scripts.",
    "monogram": "is",
    "kind": "CLI toolkit",
    "official": "https://www.npmjs.com/package/is-interactive",
    "keywords": [],
    "sourceIds": [
      225
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "is-reference",
    "name": "is-reference",
    "category": "developer-tools",
    "description": "A helper that identifies references in JavaScript syntax trees.",
    "goodFor": "Writing code-analysis tools that distinguish references from other syntax nodes.",
    "monogram": "is",
    "kind": "Developer tool",
    "official": "https://www.npmjs.com/package/is-reference",
    "keywords": [],
    "sourceIds": [
      209
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "is-unicode-supported",
    "name": "is-unicode-supported",
    "category": "cli",
    "description": "A detector for terminal Unicode support.",
    "goodFor": "Choosing compatible symbols when rendering command-line output.",
    "monogram": "is",
    "kind": "CLI toolkit",
    "official": "https://www.npmjs.com/package/is-unicode-supported",
    "keywords": [],
    "sourceIds": [
      220
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "isomorphic-dompurify",
    "name": "isomorphic-dompurify",
    "category": "security",
    "description": "A wrapper for using DOMPurify across browser and server environments.",
    "goodFor": "Sharing HTML sanitization behavior between application layers.",
    "monogram": "is",
    "kind": "Library / tool",
    "official": "https://github.com/kkomelin/isomorphic-dompurify",
    "keywords": [],
    "sourceIds": [
      109
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "its-fine",
    "name": "its-fine",
    "category": "developer-tools",
    "description": "Escape-hatch utilities for specialized React integrations.",
    "goodFor": "Handling unusual React integration requirements beyond ordinary component APIs.",
    "monogram": "it",
    "kind": "Developer tool",
    "official": "https://www.npmjs.com/package/its-fine",
    "keywords": [],
    "sourceIds": [
      383
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "javascript-today",
    "name": "JavaScript Today",
    "category": "learning",
    "description": "Articles about JavaScript, web development, and related programming topics.",
    "goodFor": "Finding introductory explanations and practical web-development reading.",
    "monogram": "Ja",
    "kind": "Learning resource",
    "official": "https://blog.javascripttoday.com/",
    "keywords": [],
    "sourceIds": [
      134
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "joi",
    "name": "Joi",
    "category": "validation",
    "description": "A schema-based validation library for JavaScript.",
    "goodFor": "Checking structured request payloads and configuration objects.",
    "monogram": "Jo",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/joi",
    "keywords": [],
    "sourceIds": [
      127
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "jollyui",
    "name": "JollyUI",
    "category": "ui-kits",
    "description": "Copyable components built with React Aria and shadcn-style conventions.",
    "goodFor": "Owning accessible component source in a Tailwind-oriented application.",
    "monogram": "Jo",
    "kind": "UI toolkit",
    "official": "https://www.jollyui.dev/",
    "keywords": [],
    "sourceIds": [
      499
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "jotai",
    "name": "Jotai",
    "category": "state",
    "description": "Atomic state management for React.",
    "goodFor": "Composing shared state from small independently managed atoms.",
    "monogram": "Jo",
    "kind": "Library / tool",
    "official": "https://jotai.org/",
    "keywords": [],
    "sourceIds": [
      452
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "journey-js",
    "name": "Journey.js",
    "category": "onboarding",
    "description": "A JavaScript library for guided user journeys.",
    "goodFor": "Walking users through controls and key application features.",
    "monogram": "Jo",
    "kind": "Library / tool",
    "official": "https://www.william-troup.com/journey-js/examples/index.html",
    "keywords": [],
    "sourceIds": [
      118
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "jposta",
    "name": "jposta",
    "category": "maps",
    "description": "A library for converting Japanese postal codes into addresses.",
    "goodFor": "Helping users fill Japanese address forms from a postal code.",
    "monogram": "jp",
    "kind": "Library / tool",
    "official": "https://github.com/nickichi/jposta",
    "keywords": [],
    "sourceIds": [
      366
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "jquery",
    "name": "jQuery",
    "category": "utilities",
    "description": "A browser library for DOM manipulation, events, and Ajax requests.",
    "goodFor": "Maintaining existing jQuery interfaces and integrating older browser widgets.",
    "monogram": "jQ",
    "kind": "Library / tool",
    "official": "https://jquery.com/",
    "keywords": [],
    "sourceIds": [
      59
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "js-search",
    "name": "js-search",
    "category": "search",
    "description": "A JavaScript library for searching indexed object collections.",
    "goodFor": "Adding client-side text search to an existing in-memory dataset.",
    "monogram": "js",
    "kind": "Library / tool",
    "official": "https://github.com/bvaughn/js-search",
    "keywords": [],
    "sourceIds": [
      108,
      439
    ],
    "references": [
      "https://bvaughn.github.io/js-search/"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "jsbarcode",
    "name": "JsBarcode",
    "category": "graphics",
    "description": "A JavaScript barcode generator.",
    "goodFor": "Creating barcode graphics for labels and inventory interfaces.",
    "monogram": "Js",
    "kind": "Library / tool",
    "official": "https://github.com/lindell/JsBarcode",
    "keywords": [],
    "sourceIds": [
      98
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "jsdiff",
    "name": "jsdiff",
    "category": "utilities",
    "description": "Algorithms for finding differences between strings and structured text.",
    "goodFor": "Showing text changes, patches, and comparison views.",
    "monogram": "js",
    "kind": "Library / tool",
    "official": "https://github.com/kpdecker/jsdiff",
    "keywords": [],
    "sourceIds": [
      71
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "json-editor",
    "name": "JSON Editor",
    "category": "editors",
    "description": "A browser editor for viewing and modifying JSON.",
    "goodFor": "Building configuration screens and structured-data inspection tools.",
    "monogram": "JS",
    "kind": "Library / tool",
    "official": "https://github.com/josdejong/jsoneditor",
    "keywords": [],
    "sourceIds": [
      101
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "json-server",
    "name": "JSON Server",
    "category": "testing",
    "description": "A tool that exposes a JSON file through a mock REST API.",
    "goodFor": "Prototyping a frontend before its real backend is available.",
    "monogram": "JS",
    "kind": "Testing tool",
    "official": "https://www.npmjs.com/package/json-server",
    "keywords": [],
    "sourceIds": [
      257
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "json-to-csv-export",
    "name": "json-to-csv-export",
    "category": "files",
    "description": "A utility for converting JSON data into a downloadable CSV file.",
    "goodFor": "Adding an export button for reports and tabular data.",
    "monogram": "js",
    "kind": "Library / tool",
    "official": "https://json-to-csv-export.vercel.app/",
    "keywords": [],
    "sourceIds": [
      48
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "kleur",
    "name": "kleur",
    "category": "cli",
    "description": "Functions for formatting terminal text with ANSI styles.",
    "goodFor": "Styling logs and status messages in Node.js commands.",
    "monogram": "kl",
    "kind": "CLI toolkit",
    "official": "https://github.com/lukeed/kleur",
    "keywords": [],
    "sourceIds": [
      230
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "knip",
    "name": "Knip",
    "category": "developer-tools",
    "description": "A tool for finding unused files, exports, and dependencies.",
    "goodFor": "Cleaning up a JavaScript or TypeScript project's unused code.",
    "monogram": "Kn",
    "kind": "Developer tool",
    "official": "https://knip.dev/",
    "keywords": [],
    "sourceIds": [
      210
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "konva",
    "name": "Konva",
    "category": "graphics",
    "description": "A canvas framework for interactive two-dimensional graphics.",
    "goodFor": "Building diagrams and editors with draggable canvas objects.",
    "monogram": "Ko",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/konva",
    "keywords": [],
    "sourceIds": [
      50
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "kuma-ui",
    "name": "Kuma UI",
    "category": "ui-kits",
    "description": "A component and styling library with build-time style generation.",
    "goodFor": "Building typed interfaces while limiting runtime styling work.",
    "monogram": "Ku",
    "kind": "UI toolkit",
    "official": "https://www.kuma-ui.com/",
    "keywords": [],
    "sourceIds": [
      463
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ky",
    "name": "Ky",
    "category": "data-fetching",
    "description": "A Fetch API wrapper with conveniences for HTTP requests.",
    "goodFor": "Writing concise browser API clients with configurable retry and response handling.",
    "monogram": "Ky",
    "kind": "Library / tool",
    "official": "https://github.com/sindresorhus/ky",
    "keywords": [],
    "sourceIds": [
      64
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "kysely",
    "name": "Kysely",
    "category": "databases",
    "description": "A type-safe SQL query builder for TypeScript.",
    "goodFor": "Writing composable SQL queries without adopting a full ORM model layer.",
    "monogram": "Ky",
    "kind": "Data tool",
    "official": "https://kysely.dev/",
    "keywords": [],
    "sourceIds": [
      262
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "leetcode",
    "name": "LeetCode",
    "category": "learning",
    "description": "A platform for practicing programming problems.",
    "goodFor": "Preparing for coding interviews and improving algorithmic problem solving.",
    "monogram": "Le",
    "kind": "Learning resource",
    "official": "https://leetcode.com/",
    "keywords": [],
    "sourceIds": [
      137
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "lexical",
    "name": "Lexical",
    "category": "editors",
    "description": "An extensible framework for building text editors.",
    "goodFor": "Creating a custom editing experience with explicit document behavior.",
    "monogram": "Le",
    "kind": "Library / tool",
    "official": "https://lexical.dev/",
    "keywords": [],
    "sourceIds": [
      338
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "lightbox2",
    "name": "Lightbox2",
    "category": "media",
    "description": "A script that opens images in an overlay.",
    "goodFor": "Adding a straightforward enlarged-image viewer to a webpage.",
    "monogram": "Li",
    "kind": "Library / tool",
    "official": "https://lokeshdhakar.com/projects/lightbox2/",
    "keywords": [],
    "sourceIds": [
      95
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "lightgallery-react",
    "name": "lightGallery React",
    "category": "media",
    "description": "A React integration for image and video galleries.",
    "goodFor": "Presenting media in an interactive gallery with overlay viewing.",
    "monogram": "li",
    "kind": "Library / tool",
    "official": "https://www.lightgalleryjs.com/docs/react/",
    "keywords": [],
    "sourceIds": [
      395
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "lina",
    "name": "Lina",
    "category": "scrolling",
    "description": "A ScrollArea replacement with native touch behavior and adaptive visual masks.",
    "goodFor": "Refining scroll-container interactions in a shadcn-style interface.",
    "monogram": "Li",
    "kind": "Library / tool",
    "official": "https://github.com/SameerJS6/lina",
    "keywords": [],
    "sourceIds": [
      535
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "linaria",
    "name": "Linaria",
    "category": "styling",
    "description": "A CSS-in-JS library that extracts styles at build time.",
    "goodFor": "Keeping styles near components while producing static CSS.",
    "monogram": "Li",
    "kind": "Library / tool",
    "official": "https://linaria.dev/",
    "keywords": [],
    "sourceIds": [
      477
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "linkify",
    "name": "Linkify",
    "category": "rich-content",
    "description": "Utilities for detecting links in text and turning them into markup.",
    "goodFor": "Making URLs, mentions, and similar text patterns clickable.",
    "monogram": "Li",
    "kind": "Library / tool",
    "official": "https://linkify.js.org/",
    "keywords": [],
    "sourceIds": [
      115
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "litegraph-js",
    "name": "LiteGraph.js",
    "category": "graphics",
    "description": "A graph editor and execution framework for node-based workflows.",
    "goodFor": "Creating visual programming interfaces and connected processing nodes.",
    "monogram": "Li",
    "kind": "Library / tool",
    "official": "https://github.com/jagenjo/litegraph.js",
    "keywords": [],
    "sourceIds": [
      51
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "livekit",
    "name": "LiveKit",
    "category": "media",
    "description": "Infrastructure and SDKs for realtime audio and video.",
    "goodFor": "Building interactive calls, rooms, and live media experiences.",
    "monogram": "Li",
    "kind": "Library / tool",
    "official": "https://livekit.io/",
    "keywords": [],
    "sourceIds": [
      552
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "llm-stats",
    "name": "LLM Stats",
    "category": "ai",
    "description": "A website comparing language models through published metrics and benchmarks.",
    "goodFor": "Researching model options before testing them on your own workload.",
    "monogram": "LL",
    "kind": "Library / tool",
    "official": "https://llm-stats.com/",
    "keywords": [],
    "sourceIds": [
      191
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "loadable-components",
    "name": "Loadable Components",
    "category": "performance",
    "description": "Tools for code splitting and lazy loading React components.",
    "goodFor": "Deferring component bundles until a route or feature needs them.",
    "monogram": "Lo",
    "kind": "Library / tool",
    "official": "https://loadable-components.com/",
    "keywords": [],
    "sourceIds": [
      394
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "lodash",
    "name": "Lodash",
    "category": "utilities",
    "description": "Utilities for working with arrays, objects, strings, and functions.",
    "goodFor": "Maintaining familiar data-transformation helpers across a JavaScript codebase.",
    "monogram": "Lo",
    "kind": "Library / tool",
    "official": "https://lodash.com/",
    "keywords": [],
    "sourceIds": [
      84
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "log-symbols",
    "name": "log-symbols",
    "category": "cli",
    "description": "Colored symbols for common log levels.",
    "goodFor": "Making terminal success, warning, and error messages easy to scan.",
    "monogram": "lo",
    "kind": "CLI toolkit",
    "official": "https://www.npmjs.com/package/log-symbols",
    "keywords": [],
    "sourceIds": [
      224
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "logrocket",
    "name": "LogRocket",
    "category": "logging",
    "description": "A monitoring platform combining session replay and application diagnostics.",
    "goodFor": "Investigating frontend problems in the context of a user's session.",
    "monogram": "Lo",
    "kind": "Library / tool",
    "official": "https://logrocket.com/",
    "keywords": [],
    "sourceIds": [
      343
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "logsnag",
    "name": "LogSnag",
    "category": "logging",
    "description": "A service for recording and monitoring application events.",
    "goodFor": "Following important product events through a shared event feed.",
    "monogram": "Lo",
    "kind": "Library / tool",
    "official": "https://docs.logsnag.com/",
    "keywords": [],
    "sourceIds": [
      344
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "logtape",
    "name": "LogTape",
    "category": "logging",
    "description": "A structured logging library for JavaScript runtimes.",
    "goodFor": "Sharing logging conventions across server, browser, and edge code.",
    "monogram": "Lo",
    "kind": "Library / tool",
    "official": "https://logtape.org/",
    "keywords": [],
    "sourceIds": [
      248
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "logto",
    "name": "Logto",
    "category": "auth",
    "description": "An identity platform for application authentication and organization management.",
    "goodFor": "Supporting login and identity features in a SaaS application.",
    "monogram": "Lo",
    "kind": "Library / tool",
    "official": "https://logto.io/",
    "keywords": [],
    "sourceIds": [
      301
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "lowlight",
    "name": "Lowlight",
    "category": "code-highlighting",
    "description": "Syntax highlighting that produces a virtual syntax tree.",
    "goodFor": "Rendering highlighted code through a custom virtual-DOM integration.",
    "monogram": "Lo",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/lowlight",
    "keywords": [],
    "sourceIds": [
      487
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "lucia",
    "name": "Lucia",
    "category": "auth",
    "description": "Educational material about implementing authentication and sessions.",
    "goodFor": "Learning the underlying mechanics of an application-owned authentication system.",
    "monogram": "Lu",
    "kind": "Library / tool",
    "caveat": "The Lucia library was deprecated in March 2025. Its current site teaches authentication and session implementation.",
    "official": "https://lucia-auth.com/",
    "keywords": [],
    "sourceIds": [
      295
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "lucide-react",
    "name": "Lucide React",
    "category": "icons",
    "description": "React components for a consistent set of line icons.",
    "goodFor": "Building interfaces with a coordinated, customizable icon style.",
    "monogram": "Lu",
    "kind": "Library / tool",
    "official": "https://lucide.dev/guide/packages/lucide-react",
    "keywords": [],
    "sourceIds": [
      388
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "luxe",
    "name": "Luxe",
    "category": "ui-kits",
    "description": "A collection of copyable interface components.",
    "goodFor": "Adding distinctive visual components that you can customize in your codebase.",
    "monogram": "Lu",
    "kind": "UI toolkit",
    "official": "https://luxe.guhrodrigues.com/",
    "keywords": [],
    "sourceIds": [
      496
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "madge",
    "name": "Madge",
    "category": "developer-tools",
    "description": "A dependency-graph tool for JavaScript projects.",
    "goodFor": "Finding circular dependencies and understanding module relationships.",
    "monogram": "Ma",
    "kind": "Developer tool",
    "official": "https://github.com/pahen/madge",
    "keywords": [],
    "sourceIds": [
      211
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "magic-ui",
    "name": "Magic UI",
    "category": "animation",
    "description": "A collection of animated components and presentation patterns.",
    "goodFor": "Building expressive landing pages and marketing interfaces.",
    "monogram": "Ma",
    "kind": "Library / tool",
    "official": "https://magicui.design/",
    "keywords": [],
    "sourceIds": [
      528
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "magnitude-browser-agent",
    "name": "Magnitude Browser Agent",
    "category": "testing",
    "description": "A vision-based browser automation framework using natural-language instructions.",
    "goodFor": "Automating and testing browser workflows through an AI-controlled agent.",
    "monogram": "Ma",
    "kind": "Testing tool",
    "caveat": "This entry covers the original browser agent. The Magnitude domain now describes a different inference product.",
    "official": "https://github.com/magnitudedev/browser-agent",
    "keywords": [],
    "sourceIds": [
      560
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mantine",
    "name": "Mantine",
    "category": "ui-kits",
    "description": "A React library of components and utility hooks.",
    "goodFor": "Building feature-rich application screens with coordinated UI controls.",
    "monogram": "Ma",
    "kind": "UI toolkit",
    "official": "https://mantine.dev/",
    "keywords": [],
    "sourceIds": [
      547
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "material-tailwind",
    "name": "Material Tailwind",
    "category": "ui-kits",
    "description": "Tailwind-based components following Material Design patterns.",
    "goodFor": "Building a styled interface with Material-inspired visual conventions.",
    "monogram": "Ma",
    "kind": "UI toolkit",
    "official": "https://www.material-tailwind.com/",
    "keywords": [],
    "sourceIds": [
      497
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mdn-http-guide",
    "name": "MDN HTTP Guide",
    "category": "learning",
    "description": "Reference material explaining HTTP messages, headers, and behavior.",
    "goodFor": "Understanding the protocol behind browser and API requests.",
    "monogram": "MD",
    "kind": "Learning resource",
    "official": "https://developer.mozilla.org/en-US/docs/Web/HTTP",
    "keywords": [],
    "sourceIds": [
      146
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mdn-web-docs",
    "name": "MDN Web Docs",
    "category": "learning",
    "description": "Reference documentation for web standards and browser APIs.",
    "goodFor": "Checking how HTML, CSS, JavaScript, and browser features work.",
    "monogram": "MD",
    "kind": "Learning resource",
    "official": "https://developer.mozilla.org/",
    "keywords": [],
    "sourceIds": [
      145
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mdxlint",
    "name": "mdxlint",
    "category": "developer-tools",
    "description": "A command-line linter for MDX documents.",
    "goodFor": "Checking documentation that combines Markdown and JSX.",
    "monogram": "md",
    "kind": "Developer tool",
    "official": "https://github.com/remcohaszing/mdxlint",
    "keywords": [],
    "sourceIds": [
      244
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "meow",
    "name": "meow",
    "category": "cli",
    "description": "A helper for creating command-line applications.",
    "goodFor": "Parsing CLI flags and presenting concise command help.",
    "monogram": "me",
    "kind": "CLI toolkit",
    "official": "https://github.com/sindresorhus/meow",
    "keywords": [],
    "sourceIds": [
      214
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "merge-refs",
    "name": "merge-refs",
    "category": "utilities",
    "description": "A helper for assigning several React refs through one callback.",
    "goodFor": "Combining internal and forwarded refs in reusable components.",
    "monogram": "me",
    "kind": "Library / tool",
    "official": "https://github.com/wojtekmaj/merge-refs",
    "keywords": [],
    "sourceIds": [
      364
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "microlink-sdk",
    "name": "Microlink SDK",
    "category": "social-previews",
    "description": "Components and APIs for rendering rich link previews.",
    "goodFor": "Embedding external content as consistent preview cards.",
    "monogram": "Mi",
    "kind": "Library / tool",
    "official": "https://microlink.io/sdk",
    "keywords": [],
    "sourceIds": [
      403
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "microsoft-azure",
    "name": "Microsoft Azure",
    "category": "hosting",
    "description": "A cloud platform offering compute, storage, identity, and managed application services.",
    "goodFor": "Applications integrated with Microsoft's cloud and enterprise ecosystem.",
    "monogram": "Mi",
    "kind": "Infrastructure",
    "official": "https://azure.microsoft.com/",
    "keywords": [],
    "sourceIds": [
      28
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "microsoft-clarity",
    "name": "Microsoft Clarity",
    "category": "analytics",
    "description": "A user-behavior analytics service with session replay and heatmaps.",
    "goodFor": "Investigating how people interact with a website.",
    "monogram": "Mi",
    "kind": "Analytics tool",
    "official": "https://clarity.microsoft.com/",
    "keywords": [],
    "sourceIds": [
      287
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "midscene-js",
    "name": "Midscene.js",
    "category": "ai",
    "description": "AI-driven automation that interprets interfaces from natural-language instructions.",
    "goodFor": "Automating browser and application workflows using visual understanding.",
    "monogram": "Mi",
    "kind": "Library / tool",
    "official": "https://github.com/web-infra-dev/midscene",
    "keywords": [],
    "sourceIds": [
      1
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mikroorm",
    "name": "MikroORM",
    "category": "databases",
    "description": "A TypeScript ORM based on data-mapper and unit-of-work patterns.",
    "goodFor": "Applications that need managed entities and explicit persistence boundaries.",
    "monogram": "Mi",
    "kind": "Data tool",
    "official": "https://mikro-orm.io/",
    "keywords": [],
    "sourceIds": [
      264
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "minimatch",
    "name": "minimatch",
    "category": "files",
    "description": "A matcher for shell-style glob patterns.",
    "goodFor": "Checking file paths against include and exclude patterns.",
    "monogram": "mi",
    "kind": "Library / tool",
    "official": "https://github.com/isaacs/minimatch",
    "keywords": [],
    "sourceIds": [
      131,
      243
    ],
    "references": [
      "https://www.npmjs.com/package/minimatch"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "minisearch",
    "name": "MiniSearch",
    "category": "search",
    "description": "An in-memory full-text search engine for JavaScript.",
    "goodFor": "Searching small to medium datasets directly in the browser or Node.js.",
    "monogram": "Mi",
    "kind": "Library / tool",
    "official": "https://lucaong.github.io/minisearch/",
    "keywords": [],
    "sourceIds": [
      107
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mistcss",
    "name": "MistCSS",
    "category": "styling",
    "description": "A tool for defining atomic React components through CSS.",
    "goodFor": "Generating component styling and variants from stylesheet definitions.",
    "monogram": "Mi",
    "kind": "Library / tool",
    "official": "https://typicode.github.io/mistcss/",
    "keywords": [],
    "sourceIds": [
      470
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mobx",
    "name": "MobX",
    "category": "state",
    "description": "Observable state management with automatic dependency tracking.",
    "goodFor": "Deriving reactive UI updates from mutable application models.",
    "monogram": "Mo",
    "kind": "Library / tool",
    "official": "https://mobx.js.org/README.html",
    "keywords": [],
    "sourceIds": [
      456
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mobx-router",
    "name": "mobx-router",
    "category": "routing",
    "description": "A router integrated with MobX state.",
    "goodFor": "Managing navigation in an application already organized around MobX.",
    "monogram": "mo",
    "kind": "Library / tool",
    "official": "https://github.com/kitze/mobx-router",
    "keywords": [],
    "sourceIds": [
      424
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mobx-state-tree",
    "name": "MobX-State-Tree",
    "category": "state",
    "description": "A state container combining typed models with observable state.",
    "goodFor": "Structuring application state around models, actions, and snapshots.",
    "monogram": "Mo",
    "kind": "Library / tool",
    "official": "https://mobx-state-tree.js.org/intro/welcome",
    "keywords": [],
    "sourceIds": [
      451
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mongoose",
    "name": "Mongoose",
    "category": "databases",
    "description": "A schema and modeling library for MongoDB.",
    "goodFor": "Applying structured validation and model behavior to MongoDB documents.",
    "monogram": "Mo",
    "kind": "Data tool",
    "official": "https://mongoosejs.com/",
    "keywords": [],
    "sourceIds": [
      260
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "morgan",
    "name": "Morgan",
    "category": "logging",
    "description": "HTTP request-logging middleware for Node.js servers.",
    "goodFor": "Recording incoming requests in an Express-style application.",
    "monogram": "Mo",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/morgan",
    "keywords": [],
    "sourceIds": [
      246
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "morphic",
    "name": "Morphic",
    "category": "open-source-apps",
    "description": "An open-source AI search interface.",
    "goodFor": "Studying a search experience that combines retrieval with generated answers.",
    "monogram": "Mo",
    "kind": "Reference app",
    "official": "https://github.com/miurla/morphic",
    "keywords": [],
    "sourceIds": [
      192
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "motion",
    "name": "Motion",
    "category": "animation",
    "description": "An animation library for React and other web interfaces.",
    "goodFor": "Building transitions, gestures, and coordinated layout animation.",
    "monogram": "Mo",
    "kind": "Library / tool",
    "official": "https://motion.dev/",
    "keywords": [],
    "sourceIds": [
      290,
      293
    ],
    "references": [
      "https://www.framer.com/motion/"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "msw-auto-mock",
    "name": "msw-auto-mock",
    "category": "testing",
    "description": "A generator for Mock Service Worker handlers from API descriptions.",
    "goodFor": "Bootstrapping mocked API responses for frontend development.",
    "monogram": "ms",
    "kind": "Testing tool",
    "official": "https://github.com/zoubingwu/msw-auto-mock",
    "keywords": [],
    "sourceIds": [
      255
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mui",
    "name": "MUI",
    "category": "ui-kits",
    "description": "A React component ecosystem including Material UI.",
    "goodFor": "Building an application with a broad, coordinated component library.",
    "monogram": "MU",
    "kind": "UI toolkit",
    "official": "https://mui.com/",
    "keywords": [],
    "sourceIds": [
      543
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "mui-data-grid",
    "name": "MUI X Data Grid",
    "monogram": "M",
    "category": "data-tables",
    "kind": "Data grid",
    "description": "A feature-rich data grid in the MUI component ecosystem.",
    "goodFor": "Data tables in an application already using Material UI.",
    "caveat": "Feature availability differs between Community, Pro, and Premium.",
    "implementation": "Define rows and columns, configure grid features, and apply your MUI theme. Confirm the required plan for advanced interactions before settling on the component.",
    "official": "https://mui.com/x/react-data-grid/",
    "keywords": [
      "search sort filter",
      "large dataset",
      "material ui",
      "data grid",
      "editing"
    ],
    "sourceIds": [],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "nano-id",
    "name": "Nano ID",
    "category": "utilities",
    "description": "A generator for compact, URL-friendly random identifiers.",
    "goodFor": "Creating short unique IDs for application records and shareable links.",
    "monogram": "Na",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/nanoid",
    "keywords": [],
    "sourceIds": [
      275
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "nano-id-collision-calculator",
    "name": "Nano ID Collision Calculator",
    "category": "developer-tools",
    "description": "A calculator for estimating collisions in randomly generated Nano IDs.",
    "goodFor": "Choosing an ID length based on an application's expected volume.",
    "monogram": "Na",
    "kind": "Developer tool",
    "official": "https://zelark.github.io/nano-id-cc/",
    "keywords": [],
    "sourceIds": [
      83
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "nano-stores",
    "name": "Nano Stores",
    "category": "state",
    "description": "Small reactive stores that work across several UI frameworks.",
    "goodFor": "Sharing focused pieces of state without a large state-management setup.",
    "monogram": "Na",
    "kind": "Library / tool",
    "official": "https://github.com/nanostores/nanostores",
    "keywords": [],
    "sourceIds": [
      455
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "navigation-router",
    "name": "Navigation Router",
    "category": "routing",
    "description": "A routing library for coordinating application navigation.",
    "goodFor": "Modeling navigation state across supported React application targets.",
    "monogram": "Na",
    "kind": "Library / tool",
    "official": "https://grahammendick.github.io/navigation/",
    "keywords": [],
    "sourceIds": [
      429
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "neutralinojs",
    "name": "Neutralinojs",
    "category": "mobile",
    "description": "A framework for desktop applications built with web technologies.",
    "goodFor": "Packaging HTML, CSS, and JavaScript as a lightweight desktop application.",
    "monogram": "Ne",
    "kind": "Library / tool",
    "official": "https://neutralino.js.org/",
    "keywords": [],
    "sourceIds": [
      315
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "nexar",
    "name": "Nexar",
    "category": "learning",
    "description": "An application-architecture reference for Next.js App Router projects.",
    "goodFor": "Studying a structured approach to organizing a Next.js application.",
    "monogram": "Ne",
    "kind": "Learning resource",
    "caveat": "The original Nexar domain now points elsewhere. This entry links to the author's original reference repository.",
    "official": "https://github.com/flsilva/nexar.flsilva.com/",
    "keywords": [],
    "sourceIds": [
      180
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "nexfaster",
    "name": "Nexfaster",
    "category": "frameworks",
    "description": "A template demonstrating React Router inside a Next.js application.",
    "goodFor": "Exploring a hybrid routing setup through a minimal working example.",
    "monogram": "Ne",
    "kind": "Framework / starter",
    "official": "https://nexfaster.rdsx.dev/",
    "keywords": [],
    "sourceIds": [
      172
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-docs",
    "name": "Next Docs",
    "category": "documentation",
    "description": "A Next.js-based documentation-site project from the original collection.",
    "goodFor": "Exploring a documentation layout and publishing approach built with Next.js.",
    "monogram": "Ne",
    "kind": "Publishing tool",
    "official": "https://next-docs-zeta.vercel.app/",
    "keywords": [],
    "sourceIds": [
      565
    ],
    "references": [],
    "sourceStatus": "unavailable",
    "caveat": "The saved project link returned 404 during the October 24, 2026 review. This historical entry is retained for reference; its current availability is unconfirmed."
  },
  {
    "id": "next-cache-toolbar",
    "name": "next-cache-toolbar",
    "category": "developer-tools",
    "description": "A development toolbar for inspecting Next.js caching behavior.",
    "goodFor": "Debugging cache interactions while building a Next.js application.",
    "monogram": "ne",
    "kind": "Developer tool",
    "official": "https://github.com/KajSzy/next-cache-toolbar/",
    "keywords": [],
    "sourceIds": [
      182
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-export-i18n",
    "name": "next-export-i18n",
    "category": "i18n",
    "description": "Internationalization helpers for statically exported Next.js applications.",
    "goodFor": "Serving translated client interfaces from a static export.",
    "monogram": "ne",
    "kind": "Library / tool",
    "official": "https://github.com/martinkr/next-export-i18n",
    "keywords": [],
    "sourceIds": [
      184
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-image-export-optimizer",
    "name": "next-image-export-optimizer",
    "category": "media",
    "description": "Image optimization tooling for statically exported Next.js sites.",
    "goodFor": "Preparing optimized images when no Next.js image server runs in production.",
    "monogram": "ne",
    "kind": "Library / tool",
    "official": "https://github.com/Niels-IO/next-image-export-optimizer",
    "keywords": [],
    "sourceIds": [
      176
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-image-s3-imgproxy-loader",
    "name": "next-image-s3-imgproxy-loader",
    "category": "media",
    "description": "A Next.js image loader for S3 and imgproxy-based image delivery.",
    "goodFor": "Connecting image optimization to an existing storage and proxy setup.",
    "monogram": "ne",
    "kind": "Library / tool",
    "official": "https://github.com/BitPatty/next-image-s3-imgproxy-loader",
    "keywords": [],
    "sourceIds": [
      175
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-international",
    "name": "next-international",
    "category": "i18n",
    "description": "Type-safe internationalization utilities for Next.js.",
    "goodFor": "Organizing translated messages and localized routes in a Next.js application.",
    "monogram": "ne",
    "kind": "Library / tool",
    "official": "https://next-international.vercel.app/",
    "keywords": [],
    "sourceIds": [
      177
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-lazy-hydration-on-scroll",
    "name": "next-lazy-hydration-on-scroll",
    "category": "performance",
    "description": "A helper for delaying hydration until content approaches the viewport.",
    "goodFor": "Reducing initial client work for below-the-fold Next.js content.",
    "monogram": "ne",
    "kind": "Library / tool",
    "official": "https://github.com/woywro/next-lazy-hydration-on-scroll",
    "keywords": [],
    "sourceIds": [
      171
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-logger",
    "name": "next-logger",
    "category": "logging",
    "description": "A patcher that adds structured logging to Next.js output.",
    "goodFor": "Collecting machine-readable logs from a Next.js server.",
    "monogram": "ne",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/next-logger",
    "keywords": [],
    "sourceIds": [
      178
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-safe-action",
    "name": "next-safe-action",
    "category": "data-fetching",
    "description": "Utilities for type-safe Next.js Server Actions with input validation.",
    "goodFor": "Connecting form or UI actions to validated server operations.",
    "monogram": "ne",
    "kind": "Library / tool",
    "official": "https://next-safe-action.dev/",
    "keywords": [],
    "sourceIds": [
      183
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-themes",
    "name": "next-themes",
    "category": "styling",
    "description": "Theme management for Next.js and React applications.",
    "goodFor": "Adding persisted light, dark, and system theme selection.",
    "monogram": "ne",
    "kind": "Library / tool",
    "official": "https://github.com/pacocoursey/next-themes",
    "keywords": [],
    "sourceIds": [
      173
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-video",
    "name": "next-video",
    "category": "media",
    "description": "A video component and workflow for Next.js applications.",
    "goodFor": "Embedding video with storage, streaming, and player integration.",
    "monogram": "ne",
    "kind": "Library / tool",
    "official": "https://next-video.dev/",
    "keywords": [],
    "sourceIds": [
      179
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-js",
    "name": "Next.js",
    "category": "frameworks",
    "description": "A React framework for routing, rendering, and server-side application features.",
    "goodFor": "Building a full-stack web application with integrated React conventions.",
    "monogram": "Ne",
    "kind": "Framework / starter",
    "official": "https://nextjs.org/",
    "keywords": [],
    "sourceIds": [
      356
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "next-js-app-router-training",
    "name": "Next.js App Router Training",
    "category": "learning",
    "description": "A collection of examples demonstrating Next.js App Router patterns.",
    "goodFor": "Learning routing and rendering concepts through simplified application code.",
    "monogram": "Ne",
    "kind": "Learning resource",
    "official": "https://nextjs-app-router-training.vercel.app/",
    "keywords": [],
    "sourceIds": [
      166
    ],
    "references": [],
    "sourceStatus": "unavailable",
    "caveat": "The saved project link returned 404 during the October 24, 2026 review. This historical entry is retained for reference; its current availability is unconfirmed."
  },
  {
    "id": "nextra",
    "name": "Nextra",
    "category": "documentation",
    "description": "A documentation and content framework based on Next.js and MDX.",
    "goodFor": "Publishing technical documentation with React-enhanced Markdown content.",
    "monogram": "Ne",
    "kind": "Publishing tool",
    "official": "https://nextra.site/",
    "keywords": [],
    "sourceIds": [
      567
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ni",
    "name": "ni",
    "category": "packages",
    "description": "A command wrapper that chooses the project's package manager.",
    "goodFor": "Running familiar install and script commands across different repositories.",
    "monogram": "ni",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/@antfu/ni",
    "keywords": [],
    "sourceIds": [
      266
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "nlux",
    "name": "nlux",
    "category": "ai",
    "description": "UI components for conversational AI interfaces in JavaScript and React.",
    "goodFor": "Adding an AI chat experience connected to a model backend.",
    "monogram": "nl",
    "kind": "Library / tool",
    "official": "https://nlux.dev/",
    "keywords": [],
    "sourceIds": [
      284
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "nmea-js",
    "name": "nmea.js",
    "category": "maps",
    "description": "A parser for NMEA messages from navigation devices.",
    "goodFor": "Interpreting GPS and other navigation-device data in JavaScript.",
    "monogram": "nm",
    "kind": "Library / tool",
    "official": "https://github.com/BMSVieira/nmea.js",
    "keywords": [],
    "sourceIds": [
      370
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "node-notifier",
    "name": "node-notifier",
    "category": "notifications",
    "description": "A Node.js wrapper for native desktop notifications.",
    "goodFor": "Notifying developers when a local task completes or fails.",
    "monogram": "no",
    "kind": "Library / tool",
    "official": "https://github.com/mikaelbr/node-notifier",
    "keywords": [],
    "sourceIds": [
      237
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "node-js-cli-apps-best-practices",
    "name": "Node.js CLI Apps Best Practices",
    "category": "learning",
    "description": "A collection of recommendations for building command-line applications.",
    "goodFor": "Reviewing CLI usability, reliability, and packaging decisions.",
    "monogram": "No",
    "kind": "Learning resource",
    "official": "https://github.com/lirantal/nodejs-cli-apps-best-practices",
    "keywords": [],
    "sourceIds": [
      149
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "node-js-website",
    "name": "Node.js Website",
    "category": "open-source-apps",
    "description": "The source repository for the Node.js project website.",
    "goodFor": "Studying an established documentation and community website implementation.",
    "monogram": "No",
    "kind": "Reference app",
    "official": "https://github.com/nodejs/nodejs.org",
    "keywords": [],
    "sourceIds": [
      197
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "noodle",
    "name": "Noodle",
    "category": "open-source-apps",
    "description": "An open-source productivity application for notes and task management.",
    "goodFor": "Studying a workspace interface that combines several productivity tools.",
    "monogram": "No",
    "kind": "Reference app",
    "official": "https://github.com/noodle-run/noodle",
    "keywords": [],
    "sourceIds": [
      201,
      414
    ],
    "references": [
      "https://noodle.run/"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "npm-check-updates",
    "name": "npm-check-updates",
    "category": "packages",
    "description": "A tool that finds dependency versions beyond current package ranges.",
    "goodFor": "Reviewing and updating package.json dependency constraints.",
    "monogram": "np",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/npm-check-updates",
    "keywords": [],
    "sourceIds": [
      267
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "npm-run-all",
    "name": "npm-run-all",
    "category": "build-tools",
    "description": "A runner for executing npm scripts sequentially or in parallel.",
    "goodFor": "Organizing a development or build workflow across multiple package scripts.",
    "monogram": "np",
    "kind": "Library / tool",
    "official": "https://github.com/mysticatea/npm-run-all",
    "keywords": [],
    "sourceIds": [
      270
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "npm-run-path",
    "name": "npm-run-path",
    "category": "cli",
    "description": "A helper that resolves executable paths similarly to package scripts.",
    "goodFor": "Running locally installed command-line tools from Node.js code.",
    "monogram": "np",
    "kind": "CLI toolkit",
    "official": "https://github.com/sindresorhus/npm-run-path",
    "keywords": [],
    "sourceIds": [
      238
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "npmgraph",
    "name": "npmgraph",
    "category": "packages",
    "description": "A visual explorer for npm dependency graphs.",
    "goodFor": "Understanding the packages pulled into a dependency tree.",
    "monogram": "np",
    "kind": "Library / tool",
    "official": "https://npmgraph.js.org/",
    "keywords": [],
    "sourceIds": [
      156
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "nprogress",
    "name": "NProgress",
    "category": "notifications",
    "description": "A slim progress bar for page-loading activity.",
    "goodFor": "Indicating navigation or request progress at the top of a page.",
    "monogram": "NP",
    "kind": "Library / tool",
    "official": "https://rstacruz.github.io/nprogress/",
    "keywords": [],
    "sourceIds": [
      423
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "nsfwjs",
    "name": "NSFWJS",
    "category": "media",
    "description": "A browser-oriented image classifier for potentially sensitive visual content.",
    "goodFor": "Adding a client-side classification signal to an image moderation workflow.",
    "monogram": "NS",
    "kind": "Library / tool",
    "official": "https://nsfwjs.com/",
    "keywords": [],
    "sourceIds": [
      92
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "nuqs",
    "name": "nuqs",
    "category": "state",
    "description": "Type-safe state management stored in URL search parameters.",
    "goodFor": "Keeping filters, pagination, and shareable view state in the address bar.",
    "monogram": "nu",
    "kind": "Library / tool",
    "official": "https://nuqs.47ng.com/",
    "keywords": [],
    "sourceIds": [
      169
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "onboarding-lib",
    "name": "Onboarding Lib",
    "category": "onboarding",
    "description": "Headless tooling for multi-step onboarding with validation and persistence.",
    "goodFor": "Building a custom onboarding flow while reusing its state-management behavior.",
    "monogram": "On",
    "kind": "Library / tool",
    "official": "https://onboarding-lib.vercel.app/",
    "keywords": [],
    "sourceIds": [
      510
    ],
    "references": [],
    "sourceStatus": "unavailable",
    "caveat": "The saved project link returned 404 during the October 24, 2026 review. This historical entry is retained for reference; its current availability is unconfirmed."
  },
  {
    "id": "opengraph-react",
    "name": "opengraph-react",
    "category": "social-previews",
    "description": "React components for OpenGraph.io link metadata.",
    "goodFor": "Showing URL previews backed by a metadata service.",
    "monogram": "op",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/opengraph-react",
    "keywords": [],
    "sourceIds": [
      404
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "opennext",
    "name": "OpenNext",
    "category": "hosting",
    "description": "Adapters for deploying Next.js applications outside a single hosting platform.",
    "goodFor": "Packaging a Next.js application for supported serverless infrastructure.",
    "monogram": "Op",
    "kind": "Infrastructure",
    "official": "https://open-next.js.org/",
    "keywords": [],
    "sourceIds": [
      168
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "opensauced",
    "name": "OpenSauced",
    "category": "open-source-apps",
    "description": "An application for exploring open-source contribution and repository insights.",
    "goodFor": "Studying a dashboard built around software-community data.",
    "monogram": "Op",
    "kind": "Reference app",
    "official": "https://github.com/open-sauced/app",
    "keywords": [],
    "sourceIds": [
      409
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ora",
    "name": "ora",
    "category": "cli",
    "description": "A terminal spinner for asynchronous command-line work.",
    "goodFor": "Showing progress while a CLI waits for a task to finish.",
    "monogram": "or",
    "kind": "CLI toolkit",
    "official": "https://github.com/sindresorhus/ora",
    "keywords": [],
    "sourceIds": [
      216
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "orange-orm",
    "name": "Orange ORM",
    "category": "databases",
    "description": "An ORM for working with relational data from Node.js and TypeScript.",
    "goodFor": "Querying related records through a higher-level data-access API.",
    "monogram": "Or",
    "kind": "Data tool",
    "official": "https://orange-orm.io/",
    "keywords": [],
    "sourceIds": [
      258
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "origin-ui",
    "name": "Origin UI",
    "category": "ui-kits",
    "description": "Copyable React and Tailwind interface components.",
    "goodFor": "Starting from editable application UI examples and layouts.",
    "monogram": "Or",
    "kind": "UI toolkit",
    "caveat": "Origin UI is preserved as a legacy collection with limited maintenance. New development continues in coss ui.",
    "official": "https://coss.com/origin",
    "keywords": [],
    "sourceIds": [
      526
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "orval",
    "name": "Orval",
    "category": "api-tools",
    "description": "A generator that turns OpenAPI descriptions into typed clients and related tooling.",
    "goodFor": "Keeping frontend API calls aligned with an API specification.",
    "monogram": "Or",
    "kind": "API tool",
    "official": "https://orval.dev/",
    "keywords": [],
    "sourceIds": [
      265
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "overlayscrollbars",
    "name": "OverlayScrollbars",
    "category": "scrolling",
    "description": "Customizable overlay scrollbars that preserve native scrolling behavior.",
    "goodFor": "Styling scrolling containers while retaining familiar browser interaction.",
    "monogram": "Ov",
    "kind": "Library / tool",
    "official": "https://kingsora.github.io/OverlayScrollbars/",
    "keywords": [],
    "sourceIds": [
      104
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "panda-css",
    "name": "Panda CSS",
    "category": "styling",
    "description": "Build-time styling tools with typed tokens and recipes.",
    "goodFor": "Building a design system with type-safe styling conventions.",
    "monogram": "Pa",
    "kind": "Library / tool",
    "official": "https://panda-css.com/",
    "keywords": [],
    "sourceIds": [
      478
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "park-ui",
    "name": "Park UI",
    "category": "ui-kits",
    "description": "A collection of styled components built on reusable UI primitives.",
    "goodFor": "Starting a design system from coordinated component recipes.",
    "monogram": "Pa",
    "kind": "UI toolkit",
    "official": "https://park-ui.com/",
    "keywords": [],
    "sourceIds": [
      520
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "partytown",
    "name": "Partytown",
    "category": "performance",
    "description": "A tool for running compatible third-party scripts in a web worker.",
    "goodFor": "Reducing main-thread work caused by external website scripts.",
    "monogram": "Pa",
    "kind": "Library / tool",
    "official": "https://partytown.qwik.dev/",
    "keywords": [],
    "sourceIds": [
      555
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "pendo",
    "name": "Pendo",
    "category": "analytics",
    "description": "A product-analytics and digital-adoption platform.",
    "goodFor": "Combining usage insights with in-app guidance for users.",
    "monogram": "Pe",
    "kind": "Analytics tool",
    "official": "https://www.pendo.io/",
    "keywords": [],
    "sourceIds": [
      509
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "picocolors",
    "name": "picocolors",
    "category": "cli",
    "description": "A small terminal color-formatting utility.",
    "goodFor": "Adding colored output to lightweight developer tools.",
    "monogram": "pi",
    "kind": "CLI toolkit",
    "official": "https://github.com/alexeyraspopov/picocolors",
    "keywords": [],
    "sourceIds": [
      229
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "pigment-css",
    "name": "Pigment CSS",
    "category": "styling",
    "description": "A build-time CSS-in-JS styling solution.",
    "goodFor": "Writing component styles that are extracted before the application runs.",
    "monogram": "Pi",
    "kind": "Library / tool",
    "official": "https://github.com/mui/pigment-css",
    "keywords": [],
    "sourceIds": [
      466
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "pino",
    "name": "Pino",
    "category": "logging",
    "description": "A structured JSON logger for Node.js.",
    "goodFor": "Collecting application logs in latency-sensitive server workloads.",
    "monogram": "Pi",
    "kind": "Library / tool",
    "official": "https://getpino.io/#/",
    "keywords": [],
    "sourceIds": [
      249
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "pkgroll",
    "name": "pkgroll",
    "category": "packages",
    "description": "A package bundler that derives outputs from package metadata.",
    "goodFor": "Building distributable JavaScript and TypeScript libraries.",
    "monogram": "pk",
    "kind": "Library / tool",
    "official": "https://github.com/privatenumber/pkgroll",
    "keywords": [],
    "sourceIds": [
      163
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "pki-js",
    "name": "PKI.js",
    "category": "security",
    "description": "JavaScript tools for working with public-key infrastructure formats.",
    "goodFor": "Processing certificates and cryptographic structures with Web Crypto integration.",
    "monogram": "PK",
    "kind": "Library / tool",
    "official": "https://github.com/PeculiarVentures/PKI.js",
    "keywords": [],
    "sourceIds": [
      74
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "plane",
    "name": "Plane",
    "category": "open-source-apps",
    "description": "An open-source application for managing projects and work items.",
    "goodFor": "Studying or self-hosting a collaborative project-management interface.",
    "monogram": "Pl",
    "kind": "Reference app",
    "official": "https://github.com/makeplane/plane",
    "keywords": [],
    "sourceIds": [
      189
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "planetscale",
    "name": "PlanetScale",
    "category": "databases",
    "description": "A managed database platform for application workloads.",
    "goodFor": "Teams that want database operations handled by a hosted service.",
    "monogram": "Pl",
    "kind": "Data tool",
    "official": "https://planetscale.com/",
    "keywords": [],
    "sourceIds": [
      22
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "plate",
    "name": "Plate",
    "category": "editors",
    "description": "A React rich-text editor framework with composable plugins.",
    "goodFor": "Building an editor with selectable formatting and document features.",
    "monogram": "Pl",
    "kind": "Library / tool",
    "official": "https://platejs.org/",
    "keywords": [],
    "sourceIds": [
      340
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "playwright",
    "name": "Playwright",
    "category": "testing",
    "description": "A framework for automating and testing web browsers.",
    "goodFor": "Verifying real user workflows across supported browser engines.",
    "monogram": "Pl",
    "kind": "Testing tool",
    "official": "https://playwright.dev/",
    "keywords": [],
    "sourceIds": [
      562
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "playwright-persona",
    "name": "playwright-persona",
    "category": "testing",
    "description": "Authentication helpers for organizing Playwright tests around personas.",
    "goodFor": "Testing workflows as users with different accounts and permissions.",
    "monogram": "pl",
    "kind": "Testing tool",
    "official": "https://github.com/kettanaito/playwright-persona",
    "keywords": [],
    "sourceIds": [
      563
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "plok-sh",
    "name": "plok.sh",
    "category": "documentation",
    "description": "A tool for turning a GitHub repository into a blog.",
    "goodFor": "Publishing repository-based content through a dedicated reading interface.",
    "monogram": "pl",
    "kind": "Publishing tool",
    "official": "https://plok.sh/",
    "keywords": [],
    "sourceIds": [
      174
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "plotly-js",
    "name": "Plotly.js",
    "category": "charts",
    "description": "An interactive charting library with many scientific and statistical chart types.",
    "goodFor": "Building analytical dashboards and explorable data visualizations.",
    "monogram": "Pl",
    "kind": "Library / tool",
    "official": "https://plotly.com/javascript/",
    "keywords": [],
    "sourceIds": [
      54
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "plotteus",
    "name": "Plotteus",
    "category": "charts",
    "description": "A JavaScript visualization library oriented toward data storytelling.",
    "goodFor": "Presenting data through explanatory visual narratives.",
    "monogram": "Pl",
    "kind": "Library / tool",
    "official": "https://www.plotteus.dev/",
    "keywords": [],
    "sourceIds": [
      53
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "pmndrs-timeline",
    "name": "pmndrs Timeline",
    "category": "graphics",
    "description": "Tools for describing composable behavior in three-dimensional scenes.",
    "goodFor": "Coordinating animated 3D interactions through reusable sequences.",
    "monogram": "pm",
    "kind": "Library / tool",
    "official": "https://pmndrs.github.io/timeline/getting-started/0-introduction",
    "keywords": [],
    "sourceIds": [
      283
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "pocketbase",
    "name": "PocketBase",
    "category": "backend",
    "description": "A compact backend combining a database, authentication, storage, and an admin UI.",
    "goodFor": "Small applications that benefit from a self-contained backend.",
    "monogram": "Po",
    "kind": "Library / tool",
    "official": "https://pocketbase.io/",
    "keywords": [],
    "sourceIds": [
      18
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "polished",
    "name": "Polished",
    "category": "styling",
    "description": "Style utilities for JavaScript-based styling systems.",
    "goodFor": "Calculating colors, layout values, and reusable CSS fragments.",
    "monogram": "Po",
    "kind": "Library / tool",
    "official": "https://polished.js.org/",
    "keywords": [],
    "sourceIds": [
      481
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "postman",
    "name": "Postman",
    "category": "api-tools",
    "description": "A workspace for sending requests, testing APIs, and sharing API collections.",
    "goodFor": "Collaborating on request examples and repeatable API checks.",
    "monogram": "Po",
    "kind": "API tool",
    "official": "https://www.postman.com/",
    "keywords": [],
    "sourceIds": [
      3
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "pragmatic-drag-and-drop",
    "name": "Pragmatic drag and drop",
    "category": "drag-and-drop",
    "description": "Atlassian's drag-and-drop building blocks based on the browser's native capabilities.",
    "goodFor": "Fine-grained control over drop targets and custom interactions.",
    "monogram": "pd",
    "kind": "Low-level toolkit",
    "caveat": "A toolkit to assemble; accessible controls and UI need deliberate design.",
    "implementation": "Wire adapters and drop-target behavior into your existing UI. Add appropriate visual feedback and accessible alternatives for actions that would otherwise require dragging.",
    "official": "https://atlassian.design/components/pragmatic-drag-and-drop/",
    "keywords": [
      "native drag and drop",
      "drop target",
      "kanban",
      "reorder list"
    ],
    "sourceIds": [
      335,
      336
    ],
    "references": [
      "https://atlassian.design/components/pragmatic-drag-and-drop/about"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "preconstruct",
    "name": "Preconstruct",
    "category": "packages",
    "description": "Build tooling for developing and packaging JavaScript libraries in monorepos.",
    "goodFor": "Maintaining multiple packages with a shared development and release workflow.",
    "monogram": "Pr",
    "kind": "Library / tool",
    "official": "https://preconstruct.tools/",
    "keywords": [],
    "sourceIds": [
      161
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "pretty-ms",
    "name": "pretty-ms",
    "category": "dates",
    "description": "A formatter that converts milliseconds into readable durations.",
    "goodFor": "Showing elapsed time and task durations in interfaces or logs.",
    "monogram": "pr",
    "kind": "Library / tool",
    "official": "https://github.com/sindresorhus/pretty-ms",
    "keywords": [],
    "sourceIds": [
      272
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "primer-react",
    "name": "Primer React",
    "category": "ui-kits",
    "description": "React components and guidance from GitHub's Primer design system.",
    "goodFor": "Building interfaces that follow Primer's product design conventions.",
    "monogram": "Pr",
    "kind": "UI toolkit",
    "official": "https://primer.style/",
    "keywords": [],
    "sourceIds": [
      541
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "prisma",
    "name": "Prisma",
    "category": "databases",
    "description": "Database tooling with a schema language and generated typed client.",
    "goodFor": "Working with application data through generated query APIs and migrations.",
    "monogram": "Pr",
    "kind": "Data tool",
    "official": "https://www.prisma.io/",
    "keywords": [],
    "sourceIds": [
      263
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "prismic",
    "name": "Prismic",
    "category": "backend",
    "description": "A headless content platform and visual page-building workflow.",
    "goodFor": "Letting content editors compose pages while developers own frontend components.",
    "monogram": "Pr",
    "kind": "Library / tool",
    "official": "https://prismic.io/",
    "keywords": [],
    "sourceIds": [
      397
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "progress-estimator",
    "name": "progress-estimator",
    "category": "cli",
    "description": "A helper for estimating and displaying task progress.",
    "goodFor": "Giving command-line users an indication of ongoing asynchronous work.",
    "monogram": "pr",
    "kind": "CLI toolkit",
    "official": "https://github.com/bvaughn/progress-estimator",
    "keywords": [],
    "sourceIds": [
      219
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "prompts",
    "name": "prompts",
    "category": "cli",
    "description": "A library for interactive command-line questions.",
    "goodFor": "Collecting configuration and choices during a CLI workflow.",
    "monogram": "pr",
    "kind": "CLI toolkit",
    "official": "https://www.npmjs.com/package/prompts",
    "keywords": [],
    "sourceIds": [
      226
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "prop-for-that",
    "name": "Prop for That",
    "category": "styling",
    "description": "A library that exposes JavaScript runtime values as live CSS custom properties.",
    "goodFor": "Making CSS respond to pointer position, element state, and other browser information.",
    "monogram": "Pr",
    "kind": "Library / tool",
    "official": "https://github.com/argyleink/prop-for-that",
    "keywords": [],
    "sourceIds": [
      46
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "propelauth",
    "name": "PropelAuth",
    "category": "auth",
    "description": "Authentication and organization management designed for business applications.",
    "goodFor": "Adding team accounts, organizations, and business sign-in flows.",
    "monogram": "Pr",
    "kind": "Library / tool",
    "official": "https://www.propelauth.com/",
    "keywords": [],
    "sourceIds": [
      11
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "publint",
    "name": "publint",
    "category": "packages",
    "description": "A linter for published package structure and compatibility.",
    "goodFor": "Checking exports and packaging before releasing an npm library.",
    "monogram": "pu",
    "kind": "Library / tool",
    "official": "https://publint.dev/",
    "keywords": [],
    "sourceIds": [
      160
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "pure-ui",
    "name": "Pure UI",
    "category": "ui-kits",
    "description": "A design system built with Base UI primitives.",
    "goodFor": "Starting a React interface from a coordinated Base UI component set.",
    "monogram": "Pu",
    "kind": "UI toolkit",
    "official": "https://github.com/MusKRI/pure-ui",
    "keywords": [],
    "sourceIds": [
      534
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "quill",
    "name": "Quill",
    "category": "editors",
    "description": "An extensible rich-text editor for the browser.",
    "goodFor": "Adding formatted text editing with a configurable toolbar and document model.",
    "monogram": "Qu",
    "kind": "Library / tool",
    "official": "https://quilljs.com/",
    "keywords": [],
    "sourceIds": [
      103
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "radash",
    "name": "Radash",
    "category": "utilities",
    "description": "A collection of utility functions for JavaScript and TypeScript.",
    "goodFor": "Reducing repeated application-level data manipulation code.",
    "monogram": "Ra",
    "kind": "Library / tool",
    "official": "https://radash-docs.vercel.app/docs/getting-started",
    "keywords": [],
    "sourceIds": [
      82
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "radix-ui",
    "name": "Radix UI",
    "category": "ui-kits",
    "description": "Accessible React primitives and associated interface tooling.",
    "goodFor": "Building custom-styled controls from reusable interaction components.",
    "monogram": "Ra",
    "kind": "UI toolkit",
    "official": "https://www.radix-ui.com/",
    "keywords": [],
    "sourceIds": [
      544
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "rag-web-ui",
    "name": "RAG Web UI",
    "category": "open-source-apps",
    "description": "An open-source conversational application built around retrieval-augmented generation.",
    "goodFor": "Exploring document-backed question answering through a complete application.",
    "monogram": "RA",
    "kind": "Reference app",
    "official": "https://github.com/rag-web-ui/rag-web-ui",
    "keywords": [],
    "sourceIds": [
      187
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ray-so",
    "name": "ray.so",
    "category": "open-source-apps",
    "description": "The source for Raycast's web-based developer utilities.",
    "goodFor": "Exploring polished developer-tool interfaces and their implementation.",
    "monogram": "ra",
    "kind": "Reference app",
    "official": "https://github.com/raycast/ray-so",
    "keywords": [],
    "sourceIds": [
      198
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "raycast-preset-explorer",
    "name": "Raycast Preset Explorer",
    "category": "open-source-apps",
    "description": "An application for browsing and sharing Raycast AI presets.",
    "goodFor": "Exploring a searchable catalog implementation and reusable AI workflows.",
    "monogram": "Ra",
    "kind": "Reference app",
    "official": "https://github.com/raycast/preset-explorer",
    "keywords": [],
    "sourceIds": [
      194
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "rc-notification",
    "name": "rc-notification",
    "category": "notifications",
    "description": "A notification component for React.",
    "goodFor": "Displaying configurable temporary messages in an application interface.",
    "monogram": "rc",
    "kind": "Library / tool",
    "official": "https://notification-react-component.vercel.app/",
    "keywords": [],
    "sourceIds": [
      503
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "rc-slider",
    "name": "rc-slider",
    "category": "inputs",
    "description": "A configurable slider component for React.",
    "goodFor": "Adding single-value and range selection to an interface.",
    "monogram": "rc",
    "kind": "Library / tool",
    "official": "https://slider-react-component.vercel.app/",
    "keywords": [],
    "sourceIds": [
      447
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "re2js",
    "name": "RE2JS",
    "category": "utilities",
    "description": "A JavaScript implementation of RE2-style regular-expression matching.",
    "goodFor": "Using predictable regex execution for supported pattern syntax.",
    "monogram": "RE",
    "kind": "Library / tool",
    "official": "https://re2js.leopard.in.ua/",
    "keywords": [],
    "sourceIds": [
      99
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "reachat",
    "name": "Reachat",
    "category": "ai",
    "description": "React building blocks for chat and language-model interfaces.",
    "goodFor": "Assembling a customized conversational UI from reusable components.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://reachat.dev/",
    "keywords": [],
    "sourceIds": [
      285
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-aria",
    "name": "React Aria",
    "category": "ui-kits",
    "description": "Accessible interaction primitives and components for React.",
    "goodFor": "Building a custom design system with established accessibility behavior.",
    "monogram": "Re",
    "kind": "UI toolkit",
    "official": "https://react-spectrum.adobe.com/react-aria/index.html",
    "keywords": [],
    "sourceIds": [
      468
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-autosuggest",
    "name": "React Autosuggest",
    "category": "inputs",
    "description": "A React component for text inputs with suggestions.",
    "goodFor": "Offering completions while users type a query or field value.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-autosuggest.js.org/",
    "keywords": [],
    "sourceIds": [
      438
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-big-calendar",
    "name": "React Big Calendar",
    "category": "calendars",
    "description": "A React calendar for displaying and interacting with events.",
    "goodFor": "Building an application schedule or appointment interface.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/jquense/react-big-calendar",
    "keywords": [],
    "sourceIds": [
      304
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-bits",
    "name": "React Bits",
    "category": "animation",
    "description": "A collection of animated and interactive React components.",
    "goodFor": "Adding expressive visual sections and effects to a website.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://www.reactbits.dev/",
    "keywords": [],
    "sourceIds": [
      288
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-calendar-heatmap",
    "name": "React Calendar Heatmap",
    "category": "charts",
    "description": "A React component for calendar-style activity heatmaps.",
    "goodFor": "Showing contribution history or daily activity in a compact grid.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/kevinsqi/react-calendar-heatmap",
    "keywords": [],
    "sourceIds": [
      89
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-chrono",
    "name": "React Chrono",
    "category": "charts",
    "description": "A React component for displaying chronological timelines.",
    "goodFor": "Presenting events, milestones, or historical information in sequence.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-chrono.prabhumurthy.com/",
    "keywords": [],
    "sourceIds": [
      501
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-codejar",
    "name": "React CodeJar",
    "category": "editors",
    "description": "A React wrapper around the CodeJar code editor.",
    "goodFor": "Embedding a small editable code surface in a React interface.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/guilhermelimak/react-codejar",
    "keywords": [],
    "sourceIds": [
      312
    ],
    "references": [],
    "sourceStatus": "unavailable",
    "caveat": "The saved project link returned 404 during the October 24, 2026 review. This historical entry is retained for reference; its current availability is unconfirmed."
  },
  {
    "id": "react-component",
    "name": "React Component",
    "category": "ui-kits",
    "description": "A collection of React packages underlying Ant Design.",
    "goodFor": "Using individual interface components without adopting a complete design system.",
    "monogram": "Re",
    "kind": "UI toolkit",
    "official": "https://react-component.github.io/badgeboard/",
    "keywords": [],
    "sourceIds": [
      548
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-data-grid",
    "name": "React Data Grid",
    "category": "data-tables",
    "description": "An editable and customizable data-grid component for React.",
    "goodFor": "Displaying structured records with keyboard interaction and cell editing.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/adazzle/react-data-grid",
    "keywords": [],
    "sourceIds": [
      378
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-datepicker",
    "name": "React Datepicker",
    "category": "calendars",
    "description": "A React component for choosing dates and times.",
    "goodFor": "Adding a ready-made date input to an application form.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://reactdatepicker.com/",
    "keywords": [],
    "sourceIds": [
      324
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-dnd",
    "name": "React DnD",
    "category": "drag-and-drop",
    "description": "React abstractions for draggable items and drop targets.",
    "goodFor": "Building custom drag-and-drop interactions with explicit application behavior.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-dnd.github.io/react-dnd/about",
    "keywords": [],
    "sourceIds": [
      330
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-documentation",
    "name": "React Documentation",
    "category": "learning",
    "description": "The official learning and reference documentation for React.",
    "goodFor": "Learning React concepts and checking supported component patterns.",
    "monogram": "Re",
    "kind": "Learning resource",
    "official": "https://react.dev/",
    "keywords": [],
    "sourceIds": [
      150
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-email",
    "name": "React Email",
    "category": "email",
    "description": "React components and tooling for composing email templates.",
    "goodFor": "Building reusable HTML emails from familiar component code.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react.email/",
    "keywords": [],
    "sourceIds": [
      342
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-filepond",
    "name": "React FilePond",
    "category": "files",
    "description": "A React adapter for the FilePond upload interface.",
    "goodFor": "Adding file previews and a configurable upload experience.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/pqina/react-filepond",
    "keywords": [],
    "sourceIds": [
      348
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-geiger",
    "name": "React Geiger",
    "category": "performance",
    "description": "A tool that makes React rendering performance audible.",
    "goodFor": "Noticing costly renders while interacting with an application.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/kristiandupont/react-geiger",
    "keywords": [],
    "sourceIds": [
      421
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-google-maps",
    "name": "React Google Maps",
    "category": "maps",
    "description": "React components for the Google Maps JavaScript API.",
    "goodFor": "Integrating Google maps, markers, and location interactions into React.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://visgl.github.io/react-google-maps/",
    "keywords": [],
    "sourceIds": [
      368
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-handbook",
    "name": "React Handbook",
    "category": "learning",
    "description": "A guide to application architecture and feature development in React.",
    "goodFor": "Exploring approaches to organizing production React code.",
    "monogram": "Re",
    "kind": "Learning resource",
    "official": "https://reacthandbook.dev/",
    "keywords": [],
    "sourceIds": [
      152
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-highlight-words",
    "name": "React Highlight Words",
    "category": "rich-content",
    "description": "A React component for highlighting matching words in text.",
    "goodFor": "Emphasizing search terms within result excerpts or document content.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://bvaughn.github.io/react-highlight-words/",
    "keywords": [],
    "sourceIds": [
      518
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-hook-form",
    "name": "React Hook Form",
    "category": "forms",
    "description": "React hooks for managing forms and validation.",
    "goodFor": "Building forms that integrate existing input components with limited rerendering.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-hook-form.com/",
    "keywords": [],
    "sourceIds": [
      352
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-hot-toast",
    "name": "React Hot Toast",
    "category": "notifications",
    "description": "A React library for toast notifications.",
    "goodFor": "Showing success, error, and asynchronous-operation feedback.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-hot-toast.com/",
    "keywords": [],
    "sourceIds": [
      504
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-icons",
    "name": "React Icons",
    "category": "icons",
    "description": "React components for many popular icon packs.",
    "goodFor": "Importing individual icons into a React application.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-icons.github.io/react-icons/",
    "keywords": [],
    "sourceIds": [
      387
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-json-schema-form",
    "name": "React JSON Schema Form",
    "category": "forms",
    "description": "A React form renderer driven by JSON Schema.",
    "goodFor": "Generating configurable forms from a shared data schema.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/rjsf-team/react-jsonschema-form",
    "keywords": [],
    "sourceIds": [
      354
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-just",
    "name": "React Just",
    "category": "frameworks",
    "description": "Tooling for React Server Components with a Vite-based workflow.",
    "goodFor": "Exploring server-component application development outside a larger framework.",
    "monogram": "Re",
    "kind": "Framework / starter",
    "official": "https://reactjust.dev/",
    "keywords": [],
    "sourceIds": [
      445
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-leaflet",
    "name": "React Leaflet",
    "category": "maps",
    "description": "React components for the Leaflet mapping library.",
    "goodFor": "Building interactive maps with Leaflet layers and plugins.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-leaflet.js.org/",
    "keywords": [],
    "sourceIds": [
      369
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-link-preview",
    "name": "React Link Preview",
    "category": "social-previews",
    "description": "A React component for displaying previews of URLs.",
    "goodFor": "Turning pasted links into descriptive preview cards.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/@dhaiwat10/react-link-preview",
    "keywords": [],
    "sourceIds": [
      402
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-md-editor",
    "name": "React MD Editor",
    "category": "editors",
    "description": "A Markdown editor with a preview for React.",
    "goodFor": "Letting users edit Markdown and inspect the rendered result.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://uiwjs.github.io/react-md-editor/",
    "keywords": [],
    "sourceIds": [
      341
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-modal",
    "name": "React Modal",
    "category": "overlays",
    "description": "An accessible modal-dialog component for React.",
    "goodFor": "Showing focused content above the page with managed dialog behavior.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://reactcommunity.org/react-modal/",
    "keywords": [],
    "sourceIds": [
      400
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-native-reanimated",
    "name": "React Native Reanimated",
    "category": "mobile",
    "description": "An animation library for React Native.",
    "goodFor": "Building responsive mobile animations and gesture-driven interactions.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/software-mansion/react-native-reanimated",
    "keywords": [],
    "sourceIds": [
      576
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-oauth-for-google",
    "name": "React OAuth for Google",
    "category": "auth",
    "description": "React components and hooks for Google Identity Services.",
    "goodFor": "Adding Google sign-in to a React application.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/MomenSherif/react-oauth",
    "keywords": [],
    "sourceIds": [
      300
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-resizable-panels",
    "name": "React Resizable Panels",
    "category": "layout",
    "description": "React components for resizable panel groups.",
    "goodFor": "Building interfaces with persistent, adjustable workspace layouts.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-resizable-panels.vercel.app/",
    "keywords": [],
    "sourceIds": [
      417
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-router",
    "name": "React Router",
    "category": "routing",
    "description": "Routing tools and framework features for React applications.",
    "goodFor": "Connecting URL navigation with rendering, loading, and form actions.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://reactrouter.com/",
    "keywords": [],
    "sourceIds": [
      430
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-scan",
    "name": "React Scan",
    "category": "performance",
    "description": "A tool that detects and highlights React rendering activity.",
    "goodFor": "Investigating unnecessary renders and interface performance problems.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-scan.com/",
    "keywords": [],
    "sourceIds": [
      327
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-select",
    "name": "React Select",
    "category": "inputs",
    "description": "A customizable select component for React.",
    "goodFor": "Supporting searchable, asynchronous, or multi-value selection.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-select.com/home",
    "keywords": [],
    "sourceIds": [
      444
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-simple-animate",
    "name": "React Simple Animate",
    "category": "animation",
    "description": "A React library for declarative component animations.",
    "goodFor": "Adding straightforward animation sequences without a large animation setup.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-simple-animate.vercel.app/",
    "keywords": [],
    "sourceIds": [
      291
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "react-spectrum",
    "name": "React Spectrum",
    "category": "ui-kits",
    "description": "Adobe's React implementation of its Spectrum design system.",
    "goodFor": "Building interfaces with coordinated adaptive components and accessibility patterns.",
    "monogram": "Re",
    "kind": "UI toolkit",
    "official": "https://react-spectrum.adobe.com/react-spectrum/index.html",
    "keywords": [],
    "sourceIds": [
      540
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-spinners",
    "name": "React Spinners",
    "category": "notifications",
    "description": "A collection of loading-spinner components for React.",
    "goodFor": "Adding a recognizable loading indicator with configurable appearance.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://www.davidhu.io/react-spinners/",
    "keywords": [],
    "sourceIds": [
      450
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-split-pane",
    "name": "React Split Pane",
    "category": "layout",
    "description": "A React component for resizable split layouts.",
    "goodFor": "Building editors and dashboards with adjustable side-by-side panes.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://tomkp.github.io/react-split-pane/",
    "keywords": [],
    "sourceIds": [
      416
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-stripe-js",
    "name": "React Stripe.js",
    "category": "commerce",
    "description": "React components for Stripe Elements and payment integrations.",
    "goodFor": "Building a payment interface connected to Stripe's client-side APIs.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://stripe.com/docs/stripe-js/react",
    "keywords": [],
    "sourceIds": [
      420
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-tags",
    "name": "React Tags",
    "category": "inputs",
    "description": "A React input for selecting and creating tags.",
    "goodFor": "Editing labels, keywords, or token-like values in a form.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/react-tags/react-tags",
    "keywords": [],
    "sourceIds": [
      311
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-tech-radar",
    "name": "React Tech Radar",
    "category": "charts",
    "description": "A React visualization for technology-radar charts.",
    "goodFor": "Showing technology adoption or assessment across rings and quadrants.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/omerg/react-tech-radar",
    "keywords": [],
    "sourceIds": [
      307
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-toastify",
    "name": "React Toastify",
    "category": "notifications",
    "description": "A configurable toast-notification library for React.",
    "goodFor": "Managing transient alerts with configurable positioning and behavior.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://fkhadra.github.io/react-toastify/introduction/",
    "keywords": [],
    "sourceIds": [
      505
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-twc",
    "name": "React TWC",
    "category": "styling",
    "description": "Utilities for creating React components from Tailwind CSS classes.",
    "goodFor": "Packaging repeated utility-class combinations as reusable components.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-twc.vercel.app/",
    "keywords": [],
    "sourceIds": [
      469
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-tweet",
    "name": "React Tweet",
    "category": "rich-content",
    "description": "React components for embedding posts from X, formerly Twitter.",
    "goodFor": "Showing linked social posts inside a React content page.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/vercel/react-tweet",
    "keywords": [],
    "sourceIds": [
      511,
      512
    ],
    "references": [
      "https://react-tweet.vercel.app/"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "react-widgets",
    "name": "React Widgets",
    "category": "inputs",
    "description": "A collection of form inputs such as selects and date controls.",
    "goodFor": "Adding coordinated, configurable input components to a React form.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://jquense.github.io/react-widgets/",
    "keywords": [],
    "sourceIds": [
      442
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-wrap-balancer",
    "name": "React Wrap Balancer",
    "category": "rich-content",
    "description": "A React component that balances text wrapping.",
    "goodFor": "Making short headings and titles wrap more evenly.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://react-wrap-balancer.vercel.app/",
    "keywords": [],
    "sourceIds": [
      519
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-daisyui",
    "name": "react-daisyUI",
    "category": "ui-kits",
    "description": "React components for daisyUI's Tailwind-based styles.",
    "goodFor": "Using daisyUI patterns through component props and composition.",
    "monogram": "re",
    "kind": "UI toolkit",
    "official": "https://react.daisyui.com/?path=/docs/welcome--docs",
    "keywords": [],
    "sourceIds": [
      498
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-device-detect",
    "name": "react-device-detect",
    "category": "utilities",
    "description": "React helpers for detecting browser and device information.",
    "goodFor": "Adapting behavior when a feature check alone does not cover device differences.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://github.com/duskload/react-device-detect",
    "keywords": [],
    "sourceIds": [
      132
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-drag-drop-files",
    "name": "react-drag-drop-files",
    "category": "files",
    "description": "A React component for selecting files through drag and drop.",
    "goodFor": "Adding a straightforward file-drop area to an upload form.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/react-drag-drop-files",
    "keywords": [],
    "sourceIds": [
      331
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-dropzone",
    "name": "react-dropzone",
    "category": "files",
    "description": "React hooks for building file-selection and dropzone interfaces.",
    "goodFor": "Accepting dropped files while keeping control over the upload UI.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://react-dropzone.js.org/",
    "keywords": [],
    "sourceIds": [
      333
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-fast-memo",
    "name": "react-fast-memo",
    "category": "performance",
    "description": "An alternative memoization utility for React components.",
    "goodFor": "Exploring component memoization in measured performance-sensitive cases.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://github.com/romgrk/react-fast-memo",
    "keywords": [],
    "sourceIds": [
      422
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-file-icon",
    "name": "react-file-icon",
    "category": "icons",
    "description": "A React component for rendering file-type icons.",
    "goodFor": "Showing recognizable file badges in upload and document lists.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/react-file-icon",
    "keywords": [],
    "sourceIds": [
      385
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-glow",
    "name": "react-glow",
    "category": "animation",
    "description": "React components for glow effects around interface elements.",
    "goodFor": "Adding pointer-responsive highlights to cards and other UI surfaces.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://github.com/codaworks/react-glow",
    "keywords": [],
    "sourceIds": [
      289
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-magic-motion",
    "name": "react-magic-motion",
    "category": "animation",
    "description": "A React library for animating interface changes.",
    "goodFor": "Adding automatic transitions as components and layouts change.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://www.react-magic-motion.com/",
    "keywords": [],
    "sourceIds": [
      292
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-map-gl",
    "name": "react-map-gl",
    "category": "maps",
    "description": "React components for GL-based map rendering.",
    "goodFor": "Building interactive map interfaces with controlled React state.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://visgl.github.io/react-map-gl/",
    "keywords": [],
    "sourceIds": [
      371
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-multistep-wizard",
    "name": "react-multistep-wizard",
    "category": "forms",
    "description": "React utilities for organizing a multi-step flow.",
    "goodFor": "Building forms or onboarding sequences that span several steps.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://github.com/alan2207/react-multistep-wizard",
    "keywords": [],
    "sourceIds": [
      401
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-openlayers",
    "name": "react-openlayers",
    "category": "maps",
    "description": "React bindings for the OpenLayers mapping library.",
    "goodFor": "Adding interactive maps backed by OpenLayers capabilities.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/react-openlayers",
    "keywords": [],
    "sourceIds": [
      367
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-remove-scroll-bar",
    "name": "react-remove-scroll-bar",
    "category": "scrolling",
    "description": "A React utility for hiding the page scrollbar without shifting content.",
    "goodFor": "Opening overlays while keeping the underlying layout stable.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://github.com/theKashey/react-remove-scroll-bar",
    "keywords": [],
    "sourceIds": [
      435
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-slider",
    "name": "react-slider",
    "category": "inputs",
    "description": "An accessible React slider input.",
    "goodFor": "Selecting numeric values or ranges with custom styling.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/react-slider",
    "keywords": [],
    "sourceIds": [
      446
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-sounds",
    "name": "react-sounds",
    "category": "media",
    "description": "React utilities for adding sound effects to interfaces.",
    "goodFor": "Providing audio feedback for application interactions.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://www.reactsounds.com/",
    "keywords": [],
    "sourceIds": [
      448
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-tiny-link",
    "name": "react-tiny-link",
    "category": "social-previews",
    "description": "A React component that displays link previews.",
    "goodFor": "Adding compact cards for external URLs in content feeds.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/react-tiny-link",
    "keywords": [],
    "sourceIds": [
      405
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-tour-onboarding",
    "name": "react-tour-onboarding",
    "category": "onboarding",
    "description": "React components for guided interface tours.",
    "goodFor": "Introducing application controls through a sequence of highlighted steps.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/react-tour-onboarding?activeTab=readme",
    "keywords": [],
    "sourceIds": [
      507
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "react-use",
    "name": "react-use",
    "category": "utilities",
    "description": "A broad collection of React utility hooks.",
    "goodFor": "Reusing common state, lifecycle, and browser-integration behaviors.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://github.com/streamich/react-use",
    "keywords": [],
    "sourceIds": [
      381
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "reactiflux",
    "name": "Reactiflux",
    "category": "community",
    "description": "A Discord community centered on React and related development topics.",
    "goodFor": "Discussing React questions and learning from other developers.",
    "monogram": "Re",
    "kind": "Community",
    "official": "https://discord.com/invite/reactiflux",
    "keywords": [],
    "sourceIds": [
      36
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "reactour",
    "name": "Reactour",
    "category": "onboarding",
    "description": "A tour library for guiding users around a React interface.",
    "goodFor": "Highlighting features and explaining workflows inside the application.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/reactour",
    "keywords": [],
    "sourceIds": [
      508
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "recharts",
    "name": "Recharts",
    "category": "charts",
    "description": "Composable chart components for React.",
    "goodFor": "Building charts from React components with custom presentation.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://recharts.github.io/",
    "keywords": [],
    "sourceIds": [
      310
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "recoil",
    "name": "Recoil",
    "category": "state",
    "description": "An atom-and-selector state-management library originally developed for React.",
    "goodFor": "Understanding or maintaining applications that already use Recoil.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://recoiljs.org/",
    "keywords": [],
    "sourceIds": [
      459
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "redaxios",
    "name": "redaxios",
    "category": "data-fetching",
    "description": "An Axios-style HTTP client implemented around the Fetch API.",
    "goodFor": "Using familiar request syntax with a fetch-based implementation.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://github.com/developit/redaxios",
    "keywords": [],
    "sourceIds": [
      62
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "redocly",
    "name": "Redocly",
    "category": "api-tools",
    "description": "Tools for validating API descriptions and publishing API documentation.",
    "goodFor": "Turning OpenAPI files into a navigable developer reference.",
    "monogram": "Re",
    "kind": "API tool",
    "official": "https://redocly.com/",
    "keywords": [],
    "sourceIds": [
      10
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "redux-toolkit",
    "name": "Redux Toolkit",
    "category": "state",
    "description": "The recommended tooling for writing Redux state logic.",
    "goodFor": "Managing shared state with predictable actions, reducers, and debugging support.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://redux-toolkit.js.org/",
    "keywords": [],
    "sourceIds": [
      457
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "redwoodjs-redwoodsdk",
    "name": "RedwoodJS / RedwoodSDK",
    "category": "frameworks",
    "description": "A React framework lineage spanning full-stack applications and server-first development.",
    "goodFor": "Exploring the Redwood ecosystem while checking which framework generation fits your project.",
    "monogram": "Re",
    "kind": "Framework / starter",
    "caveat": "RedwoodJS and RedwoodSDK have different architecture and deployment assumptions. Follow the documentation for the generation you intend to use.",
    "official": "https://redwoodjs.com/",
    "keywords": [],
    "sourceIds": [
      363
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "refine",
    "name": "Refine",
    "category": "frameworks",
    "description": "A React framework for data-intensive business applications.",
    "goodFor": "Building admin interfaces with data providers and reusable CRUD behavior.",
    "monogram": "Re",
    "kind": "Framework / starter",
    "official": "https://github.com/refinedev/refine",
    "keywords": [],
    "sourceIds": [
      359
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "regex",
    "name": "Regex",
    "category": "utilities",
    "description": "Utilities for composing more expressive JavaScript regular expressions.",
    "goodFor": "Writing and maintaining complex patterns with clearer structure.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://github.com/slevithan/regex",
    "keywords": [],
    "sourceIds": [
      100
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "release-it",
    "name": "release-it",
    "category": "packages",
    "description": "A command-line tool for automating software releases.",
    "goodFor": "Coordinating version bumps, tags, and publishing steps.",
    "monogram": "re",
    "kind": "Library / tool",
    "official": "https://github.com/release-it/release-it",
    "keywords": [],
    "sourceIds": [
      165
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "remend",
    "name": "Remend",
    "category": "editors",
    "description": "A utility that repairs incomplete Markdown while content is streaming.",
    "goodFor": "Rendering progressively generated Markdown from AI responses.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://vercel.com/changelog/new-npm-package-for-automatic-recovery-of-broken-streaming-markdown",
    "keywords": [],
    "sourceIds": [
      97
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "remix",
    "name": "Remix",
    "category": "frameworks",
    "description": "A web framework built around routing and web-standard data flows.",
    "goodFor": "Building applications with integrated loading, actions, and navigation behavior.",
    "monogram": "Re",
    "kind": "Framework / starter",
    "official": "https://remix.run/",
    "keywords": [],
    "sourceIds": [
      362
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "remotion",
    "name": "Remotion",
    "category": "media",
    "description": "A framework for creating videos with React.",
    "goodFor": "Generating parameterized video compositions from reusable components.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://www.remotion.dev/",
    "keywords": [],
    "sourceIds": [
      553
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "render",
    "name": "Render",
    "category": "hosting",
    "description": "A cloud platform for deploying websites, services, and background workers.",
    "goodFor": "Git-based deployment of a frontend and its supporting services.",
    "monogram": "Re",
    "kind": "Infrastructure",
    "official": "https://render.com/",
    "keywords": [],
    "sourceIds": [
      30
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "replay",
    "name": "Replay",
    "category": "developer-tools",
    "description": "A tool for recording and replaying application execution.",
    "goodFor": "Investigating bugs by revisiting a recorded browser session.",
    "monogram": "Re",
    "kind": "Developer tool",
    "official": "https://www.replay.io/",
    "keywords": [],
    "sourceIds": [
      410
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "replay-devtools",
    "name": "Replay DevTools",
    "category": "open-source-apps",
    "description": "The source repository for Replay's debugging interface.",
    "goodFor": "Studying developer tooling built around recorded application sessions.",
    "monogram": "Re",
    "kind": "Reference app",
    "official": "https://github.com/replayio/devtools",
    "keywords": [],
    "sourceIds": [
      415
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "reshadow",
    "name": "Reshadow",
    "category": "styling",
    "description": "A styling library for scoped component styles.",
    "goodFor": "Exploring an alternative CSS-in-JS approach with component-oriented selectors.",
    "monogram": "Re",
    "kind": "Library / tool",
    "official": "https://reshadow.dev/",
    "keywords": [],
    "sourceIds": [
      471
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "reshaped",
    "name": "Reshaped",
    "category": "ui-kits",
    "description": "A React and Figma component system.",
    "goodFor": "Keeping product design and implementation aligned through shared components.",
    "monogram": "Re",
    "kind": "UI toolkit",
    "official": "https://reshaped.so/",
    "keywords": [],
    "sourceIds": [
      523
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "retroui",
    "name": "RetroUI",
    "category": "ui-kits",
    "description": "React and Tailwind components with a retro-inspired style.",
    "goodFor": "Giving an application a deliberately distinctive visual identity.",
    "monogram": "Re",
    "kind": "UI toolkit",
    "official": "https://retroui.dev/",
    "keywords": [],
    "sourceIds": [
      525
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "rewind-ui",
    "name": "Rewind UI",
    "category": "ui-kits",
    "description": "A React component library for application interfaces.",
    "goodFor": "Assembling common screens from a coordinated component set.",
    "monogram": "Re",
    "kind": "UI toolkit",
    "official": "https://rewind-ui.dev/",
    "keywords": [],
    "sourceIds": [
      522
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "rimraf",
    "name": "rimraf",
    "category": "files",
    "description": "A cross-platform utility for removing directory trees.",
    "goodFor": "Cleaning generated files and build directories in development scripts.",
    "monogram": "ri",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/rimraf",
    "keywords": [],
    "sourceIds": [
      223
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "rolldown",
    "name": "Rolldown",
    "category": "build-tools",
    "description": "A Rust-based JavaScript bundler with a Rollup-oriented API.",
    "goodFor": "Building bundles with tooling designed around Rollup-style integration.",
    "monogram": "Ro",
    "kind": "Library / tool",
    "official": "https://rolldown.rs/",
    "keywords": [],
    "sourceIds": [
      213
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "roosterjs",
    "name": "RoosterJS",
    "category": "editors",
    "description": "A framework-independent rich-text editor toolkit.",
    "goodFor": "Embedding a customizable HTML editing experience in a web application.",
    "monogram": "Ro",
    "kind": "Library / tool",
    "official": "https://github.com/Microsoft/roosterjs?tab=readme-ov-file",
    "keywords": [],
    "sourceIds": [
      102
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "router5",
    "name": "Router5",
    "category": "routing",
    "description": "A framework-independent router with state-oriented navigation.",
    "goodFor": "Sharing routing logic independently from a particular view library.",
    "monogram": "Ro",
    "kind": "Library / tool",
    "official": "https://router5.js.org/",
    "keywords": [],
    "sourceIds": [
      425
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "rsdoctor",
    "name": "Rsdoctor",
    "category": "build-tools",
    "description": "A build-analysis tool for Rspack and webpack.",
    "goodFor": "Investigating build behavior, module composition, and bundling problems.",
    "monogram": "Rs",
    "kind": "Library / tool",
    "official": "https://rsdoctor.dev/",
    "keywords": [],
    "sourceIds": [
      212
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "rtk-query",
    "name": "RTK Query",
    "category": "data-fetching",
    "description": "Data fetching and caching tools included with Redux Toolkit.",
    "goodFor": "Managing server data in an application that uses Redux.",
    "monogram": "RT",
    "kind": "Library / tool",
    "official": "https://redux-toolkit.js.org/rtk-query/overview",
    "keywords": [],
    "sourceIds": [
      319
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "saas-ui",
    "name": "Saas UI",
    "category": "ui-kits",
    "description": "Components and starter tooling for SaaS interfaces.",
    "goodFor": "Building business applications, internal tools, and account-management screens.",
    "monogram": "Sa",
    "kind": "UI toolkit",
    "official": "https://saas-ui.dev/",
    "keywords": [],
    "sourceIds": [
      549
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "schedule-x",
    "name": "Schedule-X",
    "category": "calendars",
    "description": "Calendar and date-selection components for web applications.",
    "goodFor": "Adding a styled scheduling interface with configurable event views.",
    "monogram": "Sc",
    "kind": "Library / tool",
    "official": "https://schedule-x.dev/",
    "keywords": [],
    "sourceIds": [
      305
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "scrollx-ui",
    "name": "ScrollX UI",
    "category": "animation",
    "description": "A collection of animated and interactive React components.",
    "goodFor": "Adding scroll-oriented visual effects and presentation sections.",
    "monogram": "Sc",
    "kind": "Library / tool",
    "official": "https://scrollxui.dev/",
    "keywords": [],
    "sourceIds": [
      434
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "select-dom",
    "name": "select-dom",
    "category": "utilities",
    "description": "Convenience helpers for selecting DOM elements.",
    "goodFor": "Small browser scripts that need concise DOM queries.",
    "monogram": "se",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/select-dom",
    "keywords": [],
    "sourceIds": [
      60
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "sentry",
    "name": "Sentry",
    "category": "logging",
    "description": "Error tracking and performance monitoring for applications.",
    "goodFor": "Finding production failures with stack traces and diagnostic context.",
    "monogram": "Se",
    "kind": "Library / tool",
    "official": "https://sentry.io/welcome/",
    "keywords": [],
    "sourceIds": [
      345
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "sequelize",
    "name": "Sequelize",
    "category": "databases",
    "description": "An ORM for relational databases in Node.js.",
    "goodFor": "Managing database models, relationships, and transactions.",
    "monogram": "Se",
    "kind": "Data tool",
    "official": "https://sequelize.org/",
    "keywords": [],
    "sourceIds": [
      259
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "shadcn-admin-kit",
    "name": "shadcn Admin Kit",
    "category": "ui-kits",
    "description": "Components and blocks for administrative React applications.",
    "goodFor": "Building internal tools and data-management dashboards with shadcn-style UI.",
    "monogram": "sh",
    "kind": "UI toolkit",
    "official": "https://marmelab.com/shadcn-admin-kit/",
    "keywords": [],
    "sourceIds": [
      531
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "shadcn-ui",
    "name": "shadcn/ui",
    "category": "ui-kits",
    "description": "A collection of component source code and distribution tooling.",
    "goodFor": "Owning and customizing accessible React components inside your project.",
    "monogram": "sh",
    "kind": "UI toolkit",
    "official": "https://ui.shadcn.com/",
    "keywords": [],
    "sourceIds": [
      483
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "shiki",
    "name": "Shiki",
    "category": "code-highlighting",
    "description": "A syntax highlighter using TextMate grammars and editor-style themes.",
    "goodFor": "Rendering code samples with coloring similar to a code editor.",
    "monogram": "Sh",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/shiki",
    "keywords": [],
    "sourceIds": [
      488
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "shiki-magic-move",
    "name": "Shiki Magic Move",
    "category": "code-highlighting",
    "description": "Tools for animating changes between highlighted code blocks.",
    "goodFor": "Showing how code evolves during a tutorial or presentation.",
    "monogram": "Sh",
    "kind": "Library / tool",
    "official": "https://shiki-magic-move.netlify.app/",
    "keywords": [],
    "sourceIds": [
      489
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "shortest",
    "name": "Shortest",
    "category": "testing",
    "description": "A testing tool focused on application and CI workflows.",
    "goodFor": "Exploring automated checks for user-facing application behavior.",
    "monogram": "Sh",
    "kind": "Testing tool",
    "official": "https://shortest.com/",
    "keywords": [],
    "sourceIds": [
      559
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "shovel",
    "name": "Shovel",
    "category": "server",
    "description": "A server framework using Service Worker APIs across JavaScript runtimes.",
    "goodFor": "Writing portable request handlers for Node.js, Bun, and Cloudflare Workers.",
    "monogram": "Sh",
    "kind": "Library / tool",
    "official": "https://github.com/bikeshaving/shovel",
    "keywords": [],
    "sourceIds": [
      111
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "showwcase",
    "name": "Showwcase",
    "category": "community",
    "description": "A professional community platform for developers.",
    "goodFor": "Sharing projects and connecting with other software builders.",
    "monogram": "Sh",
    "kind": "Community",
    "official": "https://www.showwcase.com/",
    "keywords": [],
    "sourceIds": [
      42
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "sidequest-js",
    "name": "Sidequest.js",
    "category": "background-jobs",
    "description": "A background-job library for running queued work.",
    "goodFor": "Moving asynchronous tasks out of request handling into worker processes.",
    "monogram": "Si",
    "kind": "Library / tool",
    "official": "https://sidequestjs.com/",
    "keywords": [],
    "sourceIds": [
      282
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "simplebar-react",
    "name": "SimpleBar React",
    "category": "scrolling",
    "description": "A React integration for custom scrollbars with native scrolling.",
    "goodFor": "Styling a scrolling container without replacing its basic scroll behavior.",
    "monogram": "Si",
    "kind": "Library / tool",
    "official": "https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-react",
    "keywords": [],
    "sourceIds": [
      437
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "simpleparallax",
    "name": "simpleParallax",
    "category": "animation",
    "description": "A library for parallax effects on images.",
    "goodFor": "Adding scroll-linked image movement to content pages.",
    "monogram": "si",
    "kind": "Library / tool",
    "official": "https://simpleparallax.com/",
    "keywords": [],
    "sourceIds": [
      418
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "size-limit",
    "name": "Size Limit",
    "category": "packages",
    "description": "A tool for checking JavaScript package size against configured budgets.",
    "goodFor": "Catching bundle-size regressions in continuous integration.",
    "monogram": "Si",
    "kind": "Library / tool",
    "official": "https://github.com/ai/size-limit",
    "keywords": [],
    "sourceIds": [
      158
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "sly",
    "name": "Sly",
    "category": "cli",
    "description": "A command-line tool for adding reusable components and utilities to a project.",
    "goodFor": "Copying selected building blocks into an application codebase.",
    "monogram": "Sl",
    "kind": "CLI toolkit",
    "official": "https://sly-cli.fly.dev/",
    "keywords": [],
    "sourceIds": [
      235
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "snaplet-generate",
    "name": "Snaplet Generate",
    "category": "testing",
    "description": "Tools for generating realistic data from database schemas.",
    "goodFor": "Populating development and test databases with representative fixtures.",
    "monogram": "Sn",
    "kind": "Testing tool",
    "official": "https://docs.snaplet.dev/core-concepts/generate",
    "keywords": [],
    "sourceIds": [
      250
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "solito",
    "name": "Solito",
    "category": "mobile",
    "description": "Navigation tooling for sharing React code across web and native applications.",
    "goodFor": "Coordinating navigation in a shared Next.js and React Native codebase.",
    "monogram": "So",
    "kind": "Library / tool",
    "official": "https://solito.dev/v5",
    "keywords": [],
    "sourceIds": [
      577
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "sonner",
    "name": "Sonner",
    "category": "notifications",
    "description": "A toast-notification component for React.",
    "goodFor": "Adding concise transient feedback for application actions.",
    "monogram": "So",
    "kind": "Library / tool",
    "official": "https://sonner.emilkowal.ski/",
    "keywords": [],
    "sourceIds": [
      502
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "spacetime",
    "name": "Spacetime",
    "category": "dates",
    "description": "Date and time utilities with timezone-aware manipulation.",
    "goodFor": "Working with dates across timezones using a chainable interface.",
    "monogram": "Sp",
    "kind": "Library / tool",
    "official": "https://github.com/spencermountain/spacetime",
    "keywords": [],
    "sourceIds": [
      68
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "spark-ui",
    "name": "Spark UI",
    "category": "ui-kits",
    "description": "A component collection presented through an interactive Storybook.",
    "goodFor": "Exploring reusable UI elements and their available variations.",
    "monogram": "Sp",
    "kind": "UI toolkit",
    "official": "https://sparkui.vercel.app/?path=/docs/getting-started--docs",
    "keywords": [],
    "sourceIds": [
      538
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "speed-highlight",
    "name": "Speed Highlight",
    "category": "code-highlighting",
    "description": "A syntax-highlighting library for code snippets.",
    "goodFor": "Adding highlighted code samples to webpages and documentation.",
    "monogram": "Sp",
    "kind": "Library / tool",
    "official": "https://github.com/speed-highlight/core",
    "keywords": [],
    "sourceIds": [
      116
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "spin-delay",
    "name": "spin-delay",
    "category": "notifications",
    "description": "A React helper for controlling the timing of loading indicators.",
    "goodFor": "Avoiding flickering spinners during very short asynchronous operations.",
    "monogram": "sp",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/spin-delay",
    "keywords": [],
    "sourceIds": [
      449
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "stoplight",
    "name": "Stoplight",
    "category": "api-tools",
    "description": "Tools for designing and documenting APIs around shared specifications.",
    "goodFor": "Reviewing API contracts before implementing endpoints.",
    "monogram": "St",
    "kind": "API tool",
    "official": "https://stoplight.io/solutions",
    "keywords": [],
    "sourceIds": [
      8
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "styled-components",
    "name": "styled-components",
    "category": "styling",
    "description": "A component-oriented CSS-in-JS library.",
    "goodFor": "Defining styles alongside React components with dynamic styling behavior.",
    "monogram": "st",
    "kind": "Library / tool",
    "official": "https://styled-components.com/",
    "keywords": [],
    "sourceIds": [
      464
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "stylex",
    "name": "StyleX",
    "category": "styling",
    "description": "A styling system that compiles JavaScript style definitions into CSS.",
    "goodFor": "Managing typed, composable styles across a large component codebase.",
    "monogram": "St",
    "kind": "Library / tool",
    "official": "https://stylexjs.com/",
    "keywords": [],
    "sourceIds": [
      480
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "sugar",
    "name": "Sugar",
    "category": "utilities",
    "description": "Utilities that extend common operations on JavaScript values.",
    "goodFor": "Working with dates, strings, and collections through a unified helper library.",
    "monogram": "Su",
    "kind": "Library / tool",
    "official": "https://github.com/andrewplummer/Sugar",
    "keywords": [],
    "sourceIds": [
      86
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "supabase",
    "name": "Supabase",
    "category": "backend",
    "description": "A Postgres-based backend platform with authentication, storage, APIs, and realtime features.",
    "goodFor": "Applications that want SQL data and common backend services together.",
    "monogram": "Su",
    "kind": "Library / tool",
    "official": "https://supabase.com/",
    "keywords": [],
    "sourceIds": [
      24
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "supabase-ui-library",
    "name": "Supabase UI Library",
    "category": "ui-kits",
    "description": "UI components for applications built with Supabase.",
    "goodFor": "Adding frontend patterns connected to Supabase-backed features.",
    "monogram": "Su",
    "kind": "UI toolkit",
    "official": "https://supabase.com/ui",
    "keywords": [],
    "sourceIds": [
      557
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "superjson",
    "name": "SuperJSON",
    "category": "serialization",
    "description": "A serializer that preserves JavaScript values beyond plain JSON types.",
    "goodFor": "Moving dates and other richer values between application layers.",
    "monogram": "Su",
    "kind": "Library / tool",
    "official": "https://github.com/flightcontrolhq/superjson",
    "keywords": [],
    "sourceIds": [
      78
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "superstruct",
    "name": "Superstruct",
    "category": "validation",
    "description": "Composable validators for JavaScript and TypeScript values.",
    "goodFor": "Checking application input with small reusable data structures.",
    "monogram": "Su",
    "kind": "Library / tool",
    "official": "https://docs.superstructjs.org/",
    "keywords": [],
    "sourceIds": [
      124
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "supertokens",
    "name": "SuperTokens",
    "category": "auth",
    "description": "Authentication tooling with open-source and hosted deployment options.",
    "goodFor": "Adding login and session features with control over the backend deployment.",
    "monogram": "Su",
    "kind": "Library / tool",
    "official": "https://supertokens.com/",
    "keywords": [],
    "sourceIds": [
      298
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "suspensive",
    "name": "Suspensive",
    "category": "data-fetching",
    "description": "Utilities and components for React Suspense workflows.",
    "goodFor": "Organizing loading, error, and asynchronous rendering boundaries.",
    "monogram": "Su",
    "kind": "Library / tool",
    "official": "https://suspensive.org/en",
    "keywords": [],
    "sourceIds": [
      320
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "swagger",
    "name": "Swagger",
    "category": "api-tools",
    "description": "Tools for editing, documenting, and exploring OpenAPI-described APIs.",
    "goodFor": "Publishing interactive API documentation and maintaining API definitions.",
    "monogram": "Sw",
    "kind": "API tool",
    "official": "https://swagger.io/",
    "keywords": [],
    "sourceIds": [
      9
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "sweetalert2-react-content",
    "name": "SweetAlert2 React Content",
    "category": "overlays",
    "description": "A React integration for SweetAlert2 dialogs.",
    "goodFor": "Rendering React content inside alert and confirmation dialogs.",
    "monogram": "Sw",
    "kind": "Library / tool",
    "official": "https://github.com/sweetalert2/sweetalert2-react-content",
    "keywords": [],
    "sourceIds": [
      399
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "swiper",
    "name": "Swiper",
    "category": "media",
    "description": "A touch-oriented slider and carousel library.",
    "goodFor": "Building swipeable content with configurable navigation and transitions.",
    "monogram": "Sw",
    "kind": "Library / tool",
    "official": "https://swiperjs.com/",
    "keywords": [],
    "sourceIds": [
      484
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "swr",
    "name": "SWR",
    "category": "data-fetching",
    "description": "React hooks for fetching, caching, and revalidating server data.",
    "goodFor": "Keeping remote data responsive while refreshing it in the background.",
    "monogram": "SW",
    "kind": "Library / tool",
    "official": "https://swr.vercel.app/",
    "keywords": [],
    "sourceIds": [
      321
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "t3-env",
    "name": "T3 Env",
    "category": "validation",
    "description": "Utilities for validating environment variables with typed schemas.",
    "goodFor": "Failing early when server or client configuration is missing or invalid.",
    "monogram": "T3",
    "kind": "Library / tool",
    "official": "https://github.com/t3-oss/t3-env",
    "keywords": [],
    "sourceIds": [
      170
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tailark",
    "name": "Tailark",
    "category": "ui-kits",
    "description": "Prebuilt UI blocks for marketing websites.",
    "goodFor": "Composing responsive page sections from reusable layouts.",
    "monogram": "Ta",
    "kind": "UI toolkit",
    "official": "https://tailark.com/",
    "keywords": [],
    "sourceIds": [
      529
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tailwind-css",
    "name": "Tailwind CSS",
    "category": "styling",
    "description": "A utility-first CSS framework.",
    "goodFor": "Building interface styles directly from composable utility classes.",
    "monogram": "Ta",
    "kind": "Library / tool",
    "official": "https://tailwindcss.com/",
    "keywords": [],
    "sourceIds": [
      482
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tailwind-plus",
    "name": "Tailwind Plus",
    "category": "ui-kits",
    "description": "A collection of Tailwind-based interface components and templates.",
    "goodFor": "Accelerating application and marketing-page design with prepared layouts.",
    "monogram": "Ta",
    "kind": "UI toolkit",
    "official": "https://tailwindui.com/",
    "keywords": [],
    "sourceIds": [
      473
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tailwind-variants",
    "name": "Tailwind Variants",
    "category": "styling",
    "description": "A variant API for composing Tailwind CSS classes.",
    "goodFor": "Building components with typed style variants and multiple slots.",
    "monogram": "Ta",
    "kind": "Library / tool",
    "official": "https://www.tailwind-variants.org/",
    "keywords": [],
    "sourceIds": [
      120
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tailwind-merge",
    "name": "tailwind-merge",
    "category": "styling",
    "description": "A utility for resolving conflicting Tailwind CSS classes.",
    "goodFor": "Combining default and caller-provided component classes predictably.",
    "monogram": "ta",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/tailwind-merge",
    "keywords": [],
    "sourceIds": [
      465
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tanstack-form",
    "name": "TanStack Form",
    "category": "forms",
    "description": "Headless, type-safe form-state management.",
    "goodFor": "Building custom forms while retaining control over field components and validation.",
    "monogram": "Ta",
    "kind": "Library / tool",
    "official": "https://tanstack.com/form/latest",
    "keywords": [],
    "sourceIds": [
      350
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tanstack-pacer",
    "name": "TanStack Pacer",
    "category": "performance",
    "description": "Utilities for debouncing, throttling, queuing, and batching work.",
    "goodFor": "Controlling how frequently application tasks and updates execute.",
    "monogram": "Ta",
    "kind": "Library / tool",
    "official": "https://tanstack.com/pacer/latest",
    "keywords": [],
    "sourceIds": [
      365
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tanstack-query",
    "name": "TanStack Query",
    "category": "data-fetching",
    "description": "Tools for managing asynchronous server state and cached requests.",
    "goodFor": "Coordinating loading, mutations, retries, and cache updates in an application.",
    "monogram": "Ta",
    "kind": "Library / tool",
    "official": "https://tanstack.com/query/latest",
    "keywords": [],
    "sourceIds": [
      322
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tanstack-router",
    "name": "TanStack Router",
    "category": "routing",
    "description": "A type-safe router with integrated search-parameter APIs.",
    "goodFor": "Building typed routes and URL-driven state in a web application.",
    "monogram": "Ta",
    "kind": "Library / tool",
    "official": "https://tanstack.com/router/v1",
    "keywords": [],
    "sourceIds": [
      426
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tanstack-table",
    "name": "TanStack Table",
    "category": "data-tables",
    "description": "Table logic for sorting, filtering, and pagination, with complete control over your UI.",
    "goodFor": "A custom table that fits your existing design system.",
    "monogram": "T",
    "kind": "Headless table",
    "caveat": "You build the markup and controls; virtualization is a separate concern.",
    "implementation": "Render rows and cells using your own components. Connect search, sort, and filter controls to table state. For large datasets, decide between client-side data, server-side operations, and a separate virtualization layer.",
    "official": "https://tanstack.com/table/latest",
    "keywords": [
      "search sort filter",
      "large dataset",
      "headless",
      "custom table",
      "pagination"
    ],
    "sourceIds": [
      490
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tanstack-virtual",
    "name": "TanStack Virtual",
    "category": "performance",
    "description": "Headless utilities for rendering only visible items in large lists.",
    "goodFor": "Keeping long lists and tables responsive without choosing their visual design.",
    "monogram": "Ta",
    "kind": "Library / tool",
    "official": "https://tanstack.com/virtual/latest",
    "keywords": [],
    "sourceIds": [
      491
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "the-design-system-guide",
    "name": "The Design System Guide",
    "category": "learning",
    "description": "Guides and resources for creating and maintaining design systems.",
    "goodFor": "Planning component standards and a shared design workflow.",
    "monogram": "Th",
    "kind": "Learning resource",
    "official": "https://thedesignsystem.guide/",
    "keywords": [],
    "sourceIds": [
      136
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tiged",
    "name": "tiged",
    "category": "cli",
    "description": "A tool for downloading repository templates without their Git history.",
    "goodFor": "Starting projects from a remote example or starter directory.",
    "monogram": "ti",
    "kind": "CLI toolkit",
    "official": "https://github.com/tiged/tiged",
    "keywords": [],
    "sourceIds": [
      206
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tinybase",
    "name": "TinyBase",
    "category": "state",
    "description": "A reactive data store designed for local-first applications.",
    "goodFor": "Managing structured client data with reactive views and persistence.",
    "monogram": "Ti",
    "kind": "Library / tool",
    "official": "https://tinybase.org/",
    "keywords": [],
    "sourceIds": [
      96
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tinykeys",
    "name": "tinykeys",
    "category": "keyboard",
    "description": "A small library for keyboard shortcuts.",
    "goodFor": "Binding key combinations to actions in browser interfaces.",
    "monogram": "ti",
    "kind": "Library / tool",
    "official": "https://github.com/jamiebuilds/tinykeys",
    "keywords": [],
    "sourceIds": [
      393
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tinyqueue",
    "name": "TinyQueue",
    "category": "utilities",
    "description": "A binary-heap priority queue for JavaScript.",
    "goodFor": "Processing items in priority order without repeatedly sorting an array.",
    "monogram": "Ti",
    "kind": "Library / tool",
    "official": "https://github.com/mourner/tinyqueue",
    "keywords": [],
    "sourceIds": [
      87
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tldr-pages",
    "name": "tldr pages",
    "category": "cli",
    "description": "Community-written command examples that complement traditional manual pages.",
    "goodFor": "Looking up practical terminal usage quickly.",
    "monogram": "tl",
    "kind": "CLI toolkit",
    "official": "https://tldr.sh/#installation",
    "keywords": [],
    "sourceIds": [
      207
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tldraw",
    "name": "tldraw",
    "category": "graphics",
    "description": "An SDK and application for interactive drawing canvases.",
    "goodFor": "Building whiteboards and spatial interfaces with editable shapes.",
    "monogram": "tl",
    "kind": "Library / tool",
    "official": "https://github.com/tldraw/tldraw",
    "keywords": [],
    "sourceIds": [
      407
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tldts",
    "name": "tldts",
    "category": "utilities",
    "description": "A parser for domain names and public suffix information.",
    "goodFor": "Extracting hostnames, domains, and subdomains from URLs.",
    "monogram": "tl",
    "kind": "Library / tool",
    "official": "https://github.com/remusao/tldts",
    "keywords": [],
    "sourceIds": [
      80
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "toldo",
    "name": "Toldo",
    "category": "overlays",
    "description": "A dialog component for React.",
    "goodFor": "Adding a polished modal interaction to an application interface.",
    "monogram": "To",
    "kind": "Library / tool",
    "official": "https://github.com/raphaelsalaja/toldo",
    "keywords": [],
    "sourceIds": [
      398
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tonal",
    "name": "Tonal",
    "category": "media",
    "description": "A JavaScript library for music-theory calculations.",
    "goodFor": "Working with notes, chords, intervals, and scales in music software.",
    "monogram": "To",
    "kind": "Library / tool",
    "official": "https://tonaljs.github.io/tonal/",
    "keywords": [],
    "sourceIds": [
      45
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tone-js",
    "name": "Tone.js",
    "category": "media",
    "description": "A Web Audio framework for creating interactive music in the browser.",
    "goodFor": "Scheduling sound, synthesis, and musical interaction in web applications.",
    "monogram": "To",
    "kind": "Library / tool",
    "official": "https://tonejs.github.io/",
    "keywords": [],
    "sourceIds": [
      44
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "total-typescript-tsconfig",
    "name": "Total TypeScript TSConfig",
    "category": "typescript",
    "description": "Shared TypeScript configuration presets.",
    "goodFor": "Starting projects with consistent compiler settings.",
    "monogram": "To",
    "kind": "Library / tool",
    "official": "https://github.com/total-typescript/tsconfig",
    "keywords": [],
    "sourceIds": [
      575
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "transformers-js",
    "name": "Transformers.js",
    "category": "ai",
    "description": "Tools for running machine-learning models in JavaScript.",
    "goodFor": "Adding model inference to browser or JavaScript application workflows.",
    "monogram": "Tr",
    "kind": "Library / tool",
    "official": "https://github.com/xenova/transformers.js",
    "keywords": [],
    "sourceIds": [
      113
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tremor",
    "name": "Tremor",
    "category": "ui-kits",
    "description": "React components focused on dashboards and data presentation.",
    "goodFor": "Assembling application dashboards from coordinated UI building blocks.",
    "monogram": "Tr",
    "kind": "UI toolkit",
    "official": "https://www.tremor.so/",
    "keywords": [],
    "sourceIds": [
      317
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "trigger-dev",
    "name": "Trigger.dev",
    "category": "background-jobs",
    "description": "A platform for writing and operating background jobs in application code.",
    "goodFor": "Long-running tasks, scheduled work, and external API integrations.",
    "monogram": "Tr",
    "kind": "Library / tool",
    "official": "https://trigger.dev/",
    "keywords": [],
    "sourceIds": [
      20
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "true-myth",
    "name": "True Myth",
    "category": "typescript",
    "description": "Typed abstractions for optional values and recoverable errors.",
    "goodFor": "Representing absence and failure explicitly in TypeScript application logic.",
    "monogram": "Tr",
    "kind": "Library / tool",
    "official": "https://github.com/true-myth/true-myth",
    "keywords": [],
    "sourceIds": [
      573
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ts-expect",
    "name": "ts-expect",
    "category": "typescript",
    "description": "Utilities for asserting expected TypeScript types.",
    "goodFor": "Checking that public types behave as intended during compilation.",
    "monogram": "ts",
    "kind": "Library / tool",
    "official": "https://github.com/TypeStrong/ts-expect",
    "keywords": [],
    "sourceIds": [
      514,
      572
    ],
    "references": [
      "https://www.npmjs.com/package/ts-expect"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "ts-pattern",
    "name": "ts-pattern",
    "category": "typescript",
    "description": "A type-safe pattern-matching library.",
    "goodFor": "Expressing structured branching with exhaustive matching over TypeScript values.",
    "monogram": "ts",
    "kind": "Library / tool",
    "official": "https://github.com/gvergnaud/ts-pattern",
    "keywords": [],
    "sourceIds": [
      515
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ts-toolbelt",
    "name": "ts-toolbelt",
    "category": "typescript",
    "description": "A collection of advanced TypeScript type utilities.",
    "goodFor": "Building complex type transformations from reusable type-level operations.",
    "monogram": "ts",
    "kind": "Library / tool",
    "official": "https://github.com/millsp/ts-toolbelt",
    "keywords": [],
    "sourceIds": [
      517
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tsd",
    "name": "tsd",
    "category": "typescript",
    "description": "A tool for testing TypeScript declaration files.",
    "goodFor": "Protecting a library's exported types with compile-time assertions.",
    "monogram": "ts",
    "kind": "Library / tool",
    "official": "https://github.com/SamVerschueren/tsd",
    "keywords": [],
    "sourceIds": [
      516,
      574
    ],
    "references": [
      "https://github.com/tsdjs/tsd"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "tshy",
    "name": "tshy",
    "category": "packages",
    "description": "A TypeScript package builder for ESM and CommonJS outputs.",
    "goodFor": "Publishing a library that needs multiple module formats.",
    "monogram": "ts",
    "kind": "Library / tool",
    "official": "https://github.com/isaacs/tshy",
    "keywords": [],
    "sourceIds": [
      162
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tsup",
    "name": "tsup",
    "category": "packages",
    "description": "A bundler for TypeScript libraries with a compact configuration surface.",
    "goodFor": "Producing package bundles and type declarations from library source.",
    "monogram": "ts",
    "kind": "Library / tool",
    "official": "https://tsup.egoist.dev/",
    "keywords": [],
    "sourceIds": [
      164
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tsx",
    "name": "tsx",
    "category": "build-tools",
    "description": "A tool for executing TypeScript files in Node.js.",
    "goodFor": "Running development scripts and local TypeScript programs directly.",
    "monogram": "ts",
    "kind": "Library / tool",
    "official": "https://tsx.is/",
    "keywords": [],
    "sourceIds": [
      571
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "turso",
    "name": "Turso",
    "category": "databases",
    "description": "A database platform built around SQLite-compatible storage.",
    "goodFor": "Applications that want a hosted SQLite-oriented database workflow.",
    "monogram": "Tu",
    "kind": "Data tool",
    "official": "https://twitter.com/tursodatabase",
    "keywords": [],
    "sourceIds": [
      17
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tutorialspoint-express-tutorial",
    "name": "TutorialsPoint Express Tutorial",
    "category": "learning",
    "description": "An introductory tutorial for building servers with Express.",
    "goodFor": "Learning basic routing and server application structure.",
    "monogram": "Tu",
    "kind": "Learning resource",
    "official": "https://www.tutorialspoint.com/expressjs/index.htm",
    "keywords": [],
    "sourceIds": [
      148
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "tweakcn",
    "name": "tweakcn",
    "category": "styling",
    "description": "A visual theme editor for shadcn/ui applications.",
    "goodFor": "Trying design-token changes and exporting a coordinated theme.",
    "monogram": "tw",
    "kind": "Library / tool",
    "official": "https://tweakcn.com/",
    "keywords": [],
    "sourceIds": [
      532
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "type-fest",
    "name": "type-fest",
    "category": "typescript",
    "description": "A collection of reusable TypeScript utility types.",
    "goodFor": "Expressing common advanced type transformations without redefining them.",
    "monogram": "ty",
    "kind": "Library / tool",
    "official": "https://github.com/sindresorhus/type-fest",
    "keywords": [],
    "sourceIds": [
      513
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "typechat",
    "name": "TypeChat",
    "category": "ai",
    "description": "Tools for translating natural-language requests into typed structured data.",
    "goodFor": "Connecting language-model output to TypeScript-defined application operations.",
    "monogram": "Ty",
    "kind": "Library / tool",
    "official": "https://microsoft.github.io/TypeChat/docs/introduction/",
    "keywords": [],
    "sourceIds": [
      570
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "typescript-css-modules-plugin",
    "name": "TypeScript CSS Modules Plugin",
    "category": "developer-tools",
    "description": "A TypeScript language-service plugin for CSS Modules.",
    "goodFor": "Getting editor assistance for CSS class names imported into TypeScript.",
    "monogram": "Ty",
    "kind": "Developer tool",
    "official": "https://github.com/mrmckeb/typescript-plugin-css-modules",
    "keywords": [],
    "sourceIds": [
      462
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "typesense",
    "name": "Typesense",
    "category": "search",
    "description": "A search engine for fast, typo-tolerant search over indexed documents.",
    "goodFor": "Providing search across a server-managed collection of application data.",
    "monogram": "Ty",
    "kind": "Library / tool",
    "official": "https://github.com/typesense/typesense",
    "keywords": [],
    "sourceIds": [
      105
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "typespec",
    "name": "TypeSpec",
    "category": "api-tools",
    "description": "A language for describing APIs and generating specifications and clients.",
    "goodFor": "Maintaining an API contract that feeds multiple code generators.",
    "monogram": "Ty",
    "kind": "API tool",
    "official": "https://typespec.io/",
    "keywords": [],
    "sourceIds": [
      2
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "uaparser-js",
    "name": "UAParser.js",
    "category": "utilities",
    "description": "A parser for browser, operating-system, and device information from user agents.",
    "goodFor": "Interpreting user-agent strings in analytics or compatibility workflows.",
    "monogram": "UA",
    "kind": "Library / tool",
    "official": "https://github.com/faisalman/ua-parser-js",
    "keywords": [],
    "sourceIds": [
      133
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "uiverse",
    "name": "Uiverse",
    "category": "ui-kits",
    "description": "A community collection of CSS and Tailwind interface elements.",
    "goodFor": "Finding small reusable visual components and styling inspiration.",
    "monogram": "Ui",
    "kind": "UI toolkit",
    "official": "https://uiverse.io/",
    "keywords": [],
    "sourceIds": [
      492
    ],
    "references": [],
    "sourceStatus": "unconfirmed"
  },
  {
    "id": "umami",
    "name": "Umami",
    "category": "analytics",
    "description": "A web analytics application for understanding site usage.",
    "goodFor": "Tracking visits and events through a focused analytics dashboard.",
    "monogram": "Um",
    "kind": "Analytics tool",
    "official": "https://umami.is/",
    "keywords": [],
    "sourceIds": [
      286
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "unicorn-utterances",
    "name": "Unicorn Utterances",
    "category": "learning",
    "description": "Articles explaining programming concepts at several experience levels.",
    "goodFor": "Learning frontend development through detailed technical explanations.",
    "monogram": "Un",
    "kind": "Learning resource",
    "official": "https://unicorn-utterances.com/",
    "keywords": [],
    "sourceIds": [
      151
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "universal-router",
    "name": "Universal Router",
    "category": "routing",
    "description": "A framework-independent routing library.",
    "goodFor": "Resolving routes through composable application-defined logic.",
    "monogram": "Un",
    "kind": "Library / tool",
    "official": "https://www.kriasoft.com/universal-router/",
    "keywords": [],
    "sourceIds": [
      431
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "unocss",
    "name": "UnoCSS",
    "category": "styling",
    "description": "An on-demand atomic CSS engine.",
    "goodFor": "Configuring a utility-class workflow through presets and custom rules.",
    "monogram": "Un",
    "kind": "Library / tool",
    "official": "https://unocss.dev/",
    "keywords": [],
    "sourceIds": [
      475
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "uploadthing",
    "name": "UploadThing",
    "category": "files",
    "description": "A service and SDK for application file uploads.",
    "goodFor": "Adding typed upload endpoints and frontend upload controls.",
    "monogram": "Up",
    "kind": "Library / tool",
    "official": "https://uploadthing.com/",
    "keywords": [],
    "sourceIds": [
      347
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "uppy",
    "name": "Uppy",
    "category": "files",
    "description": "A modular file uploader with React integration.",
    "goodFor": "Building upload flows with selectable sources, progress, and file handling.",
    "monogram": "Up",
    "kind": "Library / tool",
    "official": "https://uppy.io/docs/react/",
    "keywords": [],
    "sourceIds": [
      349
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "upstash",
    "name": "Upstash",
    "category": "backend",
    "description": "Serverless-oriented data and messaging services with HTTP-friendly APIs.",
    "goodFor": "Adding caching, rate limiting, or queued work to serverless applications.",
    "monogram": "Up",
    "kind": "Library / tool",
    "official": "https://upstash.com/",
    "keywords": [],
    "sourceIds": [
      23
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "use-context-menu",
    "name": "use-context-menu",
    "category": "overlays",
    "description": "A React hook for implementing context menus.",
    "goodFor": "Showing custom actions when a user opens an element's context menu.",
    "monogram": "us",
    "kind": "Library / tool",
    "official": "https://use-context-menu.vercel.app/",
    "keywords": [],
    "sourceIds": [
      314
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "use-debounce",
    "name": "use-debounce",
    "category": "performance",
    "description": "React hooks for debouncing values and callbacks.",
    "goodFor": "Reducing repeated work while a user types or changes inputs.",
    "monogram": "us",
    "kind": "Library / tool",
    "official": "https://github.com/xnimorz/use-debounce",
    "keywords": [],
    "sourceIds": [
      380
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "usehooks",
    "name": "usehooks",
    "category": "utilities",
    "description": "A collection of React hooks for common application needs.",
    "goodFor": "Adding reusable browser and state behavior to components.",
    "monogram": "us",
    "kind": "Library / tool",
    "official": "https://github.com/uidotdev/usehooks",
    "keywords": [],
    "sourceIds": [
      382
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "usehooks-ts",
    "name": "usehooks-ts",
    "category": "utilities",
    "description": "A TypeScript-oriented collection of React hooks.",
    "goodFor": "Adding typed, reusable application behavior without writing every hook from scratch.",
    "monogram": "us",
    "kind": "Library / tool",
    "official": "https://github.com/juliencrn/usehooks-ts",
    "keywords": [],
    "sourceIds": [
      384
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "userfront",
    "name": "Userfront",
    "category": "auth",
    "description": "Hosted authentication tooling with frontend integration guides.",
    "goodFor": "Adding managed user sign-in to a React interface.",
    "monogram": "Us",
    "kind": "Library / tool",
    "caveat": "This entry covers Userfront's authentication tooling. The company homepage now describes a different product; check the original SDK before planning an integration.",
    "official": "https://github.com/userfront/userfront",
    "keywords": [],
    "sourceIds": [
      296
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "utf-8-validate",
    "name": "utf-8-validate",
    "category": "utilities",
    "description": "A utility for checking whether a buffer contains valid UTF-8.",
    "goodFor": "Validating incoming binary data before interpreting it as text.",
    "monogram": "ut",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/utf-8-validate",
    "keywords": [],
    "sourceIds": [
      273
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "uuidv4",
    "name": "uuidv4",
    "category": "utilities",
    "description": "A utility for generating version-four UUIDs.",
    "goodFor": "Creating identifiers for records and application objects.",
    "monogram": "uu",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/uuidv4",
    "keywords": [],
    "sourceIds": [
      274
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "uvcanvas",
    "name": "UVCanvas",
    "category": "graphics",
    "description": "A library of shader-driven canvas effects.",
    "goodFor": "Adding generative visual backgrounds and interactive graphic effects.",
    "monogram": "UV",
    "kind": "Library / tool",
    "official": "https://uvcanvas.com/",
    "keywords": [],
    "sourceIds": [
      372
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "valtio",
    "name": "Valtio",
    "category": "state",
    "description": "Proxy-based state management for React and JavaScript.",
    "goodFor": "Writing mutable-looking state updates with reactive snapshots for rendering.",
    "monogram": "Va",
    "kind": "Library / tool",
    "official": "https://valtio.pmnd.rs/",
    "keywords": [],
    "sourceIds": [
      458
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "vanilla-extract",
    "name": "vanilla-extract",
    "category": "styling",
    "description": "TypeScript tooling for generating static stylesheets.",
    "goodFor": "Writing typed styles and design tokens without runtime style generation.",
    "monogram": "va",
    "kind": "Library / tool",
    "official": "https://vanilla-extract.style/",
    "keywords": [],
    "sourceIds": [
      474
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "vercel",
    "name": "Vercel",
    "category": "hosting",
    "description": "A deployment platform focused on frontend applications and associated server functions.",
    "goodFor": "Preview deployments and production hosting for modern web frameworks.",
    "monogram": "Ve",
    "kind": "Infrastructure",
    "official": "https://vercel.com/",
    "keywords": [],
    "sourceIds": [
      35
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "vercel-ai-chatbot",
    "name": "Vercel AI Chatbot",
    "category": "open-source-apps",
    "description": "A reference chatbot application built with Vercel's AI tooling.",
    "goodFor": "Starting from a complete example of streaming chat UI and server integration.",
    "monogram": "Ve",
    "kind": "Reference app",
    "official": "https://github.com/vercel/ai-chatbot",
    "keywords": [],
    "sourceIds": [
      193
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "vercel-book-inventory",
    "name": "Vercel Book Inventory",
    "category": "open-source-apps",
    "description": "A sample application organized around a book inventory.",
    "goodFor": "Studying data-driven application screens through a focused example project.",
    "monogram": "Ve",
    "kind": "Reference app",
    "official": "https://github.com/vercel-labs/book-inventory",
    "keywords": [],
    "sourceIds": [
      195
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "vercel-og",
    "name": "Vercel OG",
    "category": "social-previews",
    "description": "Tools for generating Open Graph images from application code.",
    "goodFor": "Creating social-sharing images dynamically for pages and content.",
    "monogram": "Ve",
    "kind": "Library / tool",
    "official": "https://vercel.com/docs/functions/edge-functions/og-image-generation",
    "keywords": [],
    "sourceIds": [
      203
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "vercel-platforms-starter-kit",
    "name": "Vercel Platforms Starter Kit",
    "category": "frameworks",
    "description": "A starter application demonstrating a multi-tenant platform.",
    "goodFor": "Building separate customer sites or workspaces on one application.",
    "monogram": "Ve",
    "kind": "Framework / starter",
    "official": "https://github.com/vercel/platforms",
    "keywords": [],
    "sourceIds": [
      200
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "verifyfetch",
    "name": "verifyfetch",
    "category": "files",
    "description": "A browser download utility with resumable transfers and integrity verification.",
    "goodFor": "Downloading large model files while recovering from interrupted connections.",
    "monogram": "ve",
    "kind": "Library / tool",
    "official": "https://github.com/hamzaydia/verifyfetch",
    "keywords": [],
    "sourceIds": [
      66
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "vike",
    "name": "Vike",
    "category": "frameworks",
    "description": "A framework toolkit built on Vite for server rendering and application routing.",
    "goodFor": "Configuring an application rendering stack with modular integrations.",
    "monogram": "Vi",
    "kind": "Framework / starter",
    "official": "https://vite-plugin-ssr.com/",
    "keywords": [],
    "sourceIds": [
      427,
      432
    ],
    "references": [
      "https://vike.dev/"
    ],
    "sourceStatus": "available"
  },
  {
    "id": "visx",
    "name": "visx",
    "category": "charts",
    "description": "Low-level visualization components that combine React with D3 utilities.",
    "goodFor": "Building custom charts while owning the rendering and interaction design.",
    "monogram": "vi",
    "kind": "Library / tool",
    "official": "https://airbnb.io/visx/",
    "keywords": [],
    "sourceIds": [
      373
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "vits-web",
    "name": "vits-web",
    "category": "media",
    "description": "A project for running text-to-speech generation in the browser.",
    "goodFor": "Experimenting with local speech synthesis in web interfaces.",
    "monogram": "vi",
    "kind": "Library / tool",
    "official": "https://huggingface.co/spaces/diffusionstudio/vits-web",
    "keywords": [],
    "sourceIds": [
      114
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "w3schools",
    "name": "W3Schools",
    "category": "learning",
    "description": "Tutorials and references covering common web technologies.",
    "goodFor": "Looking up introductory examples while learning web development.",
    "monogram": "W3",
    "kind": "Learning resource",
    "official": "https://www.w3schools.com/",
    "keywords": [],
    "sourceIds": [
      138
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "w3schools-css-tutorial",
    "name": "W3Schools CSS Tutorial",
    "category": "learning",
    "description": "An introductory guide to CSS styling and layout.",
    "goodFor": "Learning selectors, visual styling, and browser layout techniques.",
    "monogram": "W3",
    "kind": "Learning resource",
    "official": "https://www.w3schools.com/css/default.asp",
    "keywords": [],
    "sourceIds": [
      144
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "w3schools-html-tutorial",
    "name": "W3Schools HTML Tutorial",
    "category": "learning",
    "description": "An introductory guide to HTML elements and document structure.",
    "goodFor": "Learning how to structure webpage content and forms.",
    "monogram": "W3",
    "kind": "Learning resource",
    "official": "https://www.w3schools.com/html/default.asp",
    "keywords": [],
    "sourceIds": [
      141
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "w3schools-javascript-tutorial",
    "name": "W3Schools JavaScript Tutorial",
    "category": "learning",
    "description": "An introductory tutorial and reference for JavaScript.",
    "goodFor": "Learning language basics through short examples and exercises.",
    "monogram": "W3",
    "kind": "Learning resource",
    "official": "https://www.w3schools.com/js/default.asp",
    "keywords": [],
    "sourceIds": [
      140
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "web-push",
    "name": "web-push",
    "category": "notifications",
    "description": "A Node.js library for sending Web Push messages.",
    "goodFor": "Delivering push notifications to subscribed browsers.",
    "monogram": "we",
    "kind": "Library / tool",
    "official": "https://github.com/web-push-libs/web-push",
    "keywords": [],
    "sourceIds": [
      276
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "web-dev",
    "name": "web.dev",
    "category": "learning",
    "description": "Guides to building modern, performant, and accessible websites.",
    "goodFor": "Improving real-world browser experiences with platform-focused guidance.",
    "monogram": "we",
    "kind": "Learning resource",
    "official": "https://web.dev/",
    "keywords": [],
    "sourceIds": [
      147
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "wireit",
    "name": "Wireit",
    "category": "build-tools",
    "description": "A task runner that enhances package scripts with dependency-aware execution.",
    "goodFor": "Coordinating build steps and avoiding repeated work.",
    "monogram": "Wi",
    "kind": "Library / tool",
    "official": "https://github.com/google/wireit",
    "keywords": [],
    "sourceIds": [
      218
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "workerpool",
    "name": "workerpool",
    "category": "background-jobs",
    "description": "A worker-pool library for browsers and Node.js.",
    "goodFor": "Moving expensive computation away from the main execution thread.",
    "monogram": "wo",
    "kind": "Library / tool",
    "official": "https://github.com/josdejong/workerpool?tab=readme-ov-file",
    "keywords": [],
    "sourceIds": [
      554
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "workos",
    "name": "WorkOS",
    "category": "auth",
    "description": "APIs for enterprise identity features such as SSO and directory synchronization.",
    "goodFor": "Making a SaaS application integrate with customers' identity systems.",
    "monogram": "Wo",
    "kind": "Library / tool",
    "official": "https://workos.com/",
    "keywords": [],
    "sourceIds": [
      15
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "ws",
    "name": "ws",
    "category": "server",
    "description": "A WebSocket client and server library for Node.js.",
    "goodFor": "Adding bidirectional realtime communication to a server application.",
    "monogram": "ws",
    "kind": "Library / tool",
    "official": "https://github.com/websockets/ws",
    "keywords": [],
    "sourceIds": [
      280
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "wxt",
    "name": "WXT",
    "category": "frameworks",
    "description": "A framework and build workflow for browser extensions.",
    "goodFor": "Building and packaging an extension with modern web tooling.",
    "monogram": "WX",
    "kind": "Framework / starter",
    "official": "https://wxt.dev/",
    "keywords": [],
    "sourceIds": [
      302
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "xstate-store",
    "name": "XState Store",
    "category": "state",
    "description": "A lightweight state store based on events and explicit transitions.",
    "goodFor": "Managing local or shared state with clearly defined update events.",
    "monogram": "XS",
    "kind": "Library / tool",
    "official": "https://stately.ai/blog/2024-04-10-xstate-store",
    "keywords": [],
    "sourceIds": [
      453
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "yalc",
    "name": "yalc",
    "category": "packages",
    "description": "A local package workflow for testing unpublished dependencies.",
    "goodFor": "Trying changes to a library in a consuming project before publishing.",
    "monogram": "ya",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/yalc",
    "keywords": [],
    "sourceIds": [
      155
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "yet-another-react-lightbox",
    "name": "Yet Another React Lightbox",
    "category": "media",
    "description": "A customizable lightbox component for React.",
    "goodFor": "Opening an image gallery in an extensible overlay viewer.",
    "monogram": "Ye",
    "kind": "Library / tool",
    "official": "https://yet-another-react-lightbox.com/",
    "keywords": [],
    "sourceIds": [
      396
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "yup",
    "name": "Yup",
    "category": "validation",
    "description": "A schema builder for parsing and validating values.",
    "goodFor": "Defining form constraints and reusable object validation rules.",
    "monogram": "Yu",
    "kind": "Library / tool",
    "official": "https://www.npmjs.com/package/yup",
    "keywords": [],
    "sourceIds": [
      125
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "zenstack",
    "name": "ZenStack",
    "category": "databases",
    "description": "A TypeScript data layer combining database access and authorization tooling.",
    "goodFor": "Keeping data models, access policies, and generated APIs aligned.",
    "monogram": "Ze",
    "kind": "Data tool",
    "official": "https://zenstack.dev/",
    "keywords": [],
    "sourceIds": [
      357
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "zip-js",
    "name": "zip.js",
    "category": "files",
    "description": "A JavaScript library for reading and writing ZIP archives.",
    "goodFor": "Creating or extracting compressed files in browser-based workflows.",
    "monogram": "zi",
    "kind": "Library / tool",
    "official": "https://gildas-lormeau.github.io/zip.js/",
    "keywords": [],
    "sourceIds": [
      130
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "zod",
    "name": "Zod",
    "category": "validation",
    "description": "A TypeScript-oriented schema validation library.",
    "goodFor": "Validating unknown data and deriving static types from schemas.",
    "monogram": "Zo",
    "kind": "Library / tool",
    "official": "https://zod.dev/",
    "keywords": [],
    "sourceIds": [
      128
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "zod-mock",
    "name": "Zod Mock",
    "category": "testing",
    "description": "A generator for mock values derived from Zod schemas.",
    "goodFor": "Creating fixtures that follow an existing validation schema.",
    "monogram": "Zo",
    "kind": "Testing tool",
    "official": "https://github.com/anatine/zod-plugins/tree/main/packages/zod-mock",
    "keywords": [],
    "sourceIds": [
      254
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "zshy",
    "name": "zshy",
    "category": "packages",
    "description": "A TypeScript library build tool based on the TypeScript compiler.",
    "goodFor": "Publishing packages without adopting a separate bundling workflow.",
    "monogram": "zs",
    "kind": "Library / tool",
    "official": "https://github.com/colinhacks/zshy",
    "keywords": [],
    "sourceIds": [
      569
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "zustand",
    "name": "Zustand",
    "category": "state",
    "description": "A small state-management library with hook-based access.",
    "goodFor": "Sharing application state through a straightforward external store.",
    "monogram": "Zu",
    "kind": "Library / tool",
    "official": "https://zustand.docs.pmnd.rs/",
    "keywords": [],
    "sourceIds": [
      454
    ],
    "references": [],
    "sourceStatus": "available"
  },
  {
    "id": "zx",
    "name": "zx",
    "category": "cli",
    "description": "A toolkit for writing shell-oriented scripts in JavaScript.",
    "goodFor": "Combining command execution with normal JavaScript control flow.",
    "monogram": "zx",
    "kind": "CLI toolkit",
    "official": "https://www.npmjs.com/package/zx",
    "keywords": [],
    "sourceIds": [
      268
    ],
    "references": [],
    "sourceStatus": "available"
  }
];
