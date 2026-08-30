import { stackGroups, type Depth, type StackItem } from './stack';

export const b2Headline =
  "Technical Lead at Bangunindo Teknusa Jaya for Indonesia's Ministry of Home Affairs: a national data platform for presidential-priority programs, and SIPD analytics for budget allocation and realization across local governments. Before that, a ClickHouse warehouse at Telkomsel ingesting 5+ TiB/day behind 300+ Apache NiFi pipelines.";

export const b2Metrics = [
  { label: 'ingest', value: '5+ TiB/day' },
  { label: 'pipelines', value: '300+ NiFi' },
  {
    label: 'cert',
    value: 'ClickHouse Certified Developer',
    href: 'https://www.credly.com/badges/2c1f5aec-be0f-4260-9c63-b04c85be5849',
  },
] as const;

export type B2NodeId = 'txn' | 'etl' | 'storage' | 'dashboard' | 'apis' | 'ai' | 'platform';

export const b2ToolLayers: Record<string, readonly B2NodeId[]> = {
  PostgreSQL: ['txn'],
  MongoDB: ['txn'],
  'Apache NiFi': ['etl'],
  'Apache Kafka': ['etl'],
  'Hadoop CDP / Hive': ['etl'],
  'Data Scraping': ['etl'],
  'Object Storage (MinIO, s3-compatibles)': ['storage'],
  'Google Cloud Storage': ['storage'],
  'Apache Airflow': ['etl'],
  'Google Cloud Composer': ['etl'],
  dbt: ['etl'],
  Mage: ['etl'],
  ClickHouse: ['storage'],
  BigQuery: ['storage'],
  'Apache Superset': ['dashboard'],
  'Looker Studio': ['dashboard'],
  Streamlit: ['dashboard'],
  FastAPI: ['apis'],
  Redis: ['apis'],
  'LLMs (OpenAI / Anthropic / Gemini)': ['ai'],
  FastMCP: ['ai'],
  Keras: ['ai'],
  Transformers: ['ai'],
  'Dify AI': ['ai'],
  'NVIDIA NIM': ['ai'],
  ChromaDB: ['ai'],
  Linux: ['platform'],
  Docker: ['platform'],
  'GitHub Actions': ['platform'],
  Ansible: ['platform'],
  Kubernetes: ['platform'],
  Grafana: ['platform'],
  'Weights & Biases': ['platform'],
  Python: ['etl', 'apis', 'ai'],
  SQL: ['etl', 'storage', 'dashboard'],
  Shell: ['platform'],
  Go: ['apis'],
};

export function b2LayersForTool(name: string): readonly B2NodeId[] {
  return b2ToolLayers[name] ?? [];
}

function stackItemByName(name: string): StackItem {
  for (const group of stackGroups) {
    const item = group.items.find((i) => i.name === name);
    if (item) return item;
  }
  throw new Error(`Unknown stack item for B2 shelf: ${name}`);
}

export type B2Shelf = {
  id: string;
  label: string;
  items: StackItem[];
};

/** B2-only display shelves. Does not mutate stack.ts. Pipeline order. */
export const b2StackShelves: B2Shelf[] = [
  {
    id: 'source-systems',
    label: 'Source Systems',
    items: ['PostgreSQL', 'MongoDB'].map(stackItemByName),
  },
  {
    id: 'etl',
    label: 'ETL (batch & stream)',
    items: ['Apache NiFi', 'Apache Kafka', 'Hadoop CDP / Hive', 'Data Scraping'].map(stackItemByName),
  },
  {
    id: 'orchestration',
    label: 'Orchestration',
    items: ['Apache Airflow', 'Google Cloud Composer', 'dbt', 'Mage'].map(stackItemByName),
  },
  {
    id: 'object-storage',
    label: 'Object Storage',
    items: ['Object Storage (MinIO, s3-compatibles)', 'Google Cloud Storage'].map(stackItemByName),
  },
  {
    id: 'analytical-store',
    label: 'Analytical Store',
    items: ['ClickHouse', 'BigQuery'].map(stackItemByName),
  },
  {
    id: 'cache',
    label: 'Cache',
    items: ['Redis'].map(stackItemByName),
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    items: ['Apache Superset', 'Looker Studio', 'Streamlit'].map(stackItemByName),
  },
  {
    id: 'apis',
    label: 'APIs',
    items: ['FastAPI'].map(stackItemByName),
  },
  {
    id: 'ai',
    label: 'Agentic AI',
    items: [
      'LLMs (OpenAI / Anthropic / Gemini)',
      'FastMCP',
      'Keras',
      'Transformers',
      'Dify AI',
      'NVIDIA NIM',
    ].map(stackItemByName),
  },
  {
    id: 'vector-store',
    label: 'Vector Store',
    items: ['ChromaDB'].map(stackItemByName),
  },
  {
    id: 'platform',
    label: 'Platform & Ops',
    items: ['Linux', 'Docker', 'GitHub Actions', 'Ansible', 'Kubernetes'].map(stackItemByName),
  },
  {
    id: 'observability',
    label: 'Observability',
    items: ['Grafana', 'Weights & Biases'].map(stackItemByName),
  },
  {
    id: 'languages',
    label: 'Languages',
    items: ['Python', 'SQL', 'Shell', 'Go'].map(stackItemByName),
  },
];

export const b2WorkLayerMap: Record<string, B2NodeId[]> = {
  ingestion: ['etl'],
  storage: ['storage'],
  analytics: ['dashboard'],
  ai: ['ai'],
  platform: ['platform'],
  orchestration: ['etl'],
  web: ['apis'],
  languages: [],
};

export const b2FlowNodes = [
  {
    key: 'txn',
    id: 'txn' as const,
    title: 'Source Systems',
    subtitle: 'Operational Databases',
    lane: 'spine',
    x: 16,
    y: 94,
    w: 120,
    h: 80,
  },
  {
    key: 'etl',
    id: 'etl' as const,
    title: 'ETL',
    subtitle: 'Batch and Stream',
    lane: 'spine',
    x: 156,
    y: 94,
    w: 120,
    h: 80,
  },
  {
    key: 'olap',
    id: 'storage' as const,
    title: 'Analytical Store',
    subtitle: 'Warehouse',
    lane: 'spine',
    x: 296,
    y: 94,
    w: 120,
    h: 80,
  },
  {
    key: 'dashboard',
    id: 'dashboard' as const,
    title: 'Dashboard',
    subtitle: 'Reports and Charts',
    lane: 'serve',
    x: 500,
    y: 16,
    w: 120,
    h: 68,
  },
  {
    key: 'apis',
    id: 'apis' as const,
    title: 'APIs',
    subtitle: 'Query and Serve',
    lane: 'serve',
    x: 500,
    y: 100,
    w: 120,
    h: 68,
  },
  {
    key: 'agents',
    id: 'ai' as const,
    title: 'Agentic AI',
    subtitle: 'Agents Over Data',
    lane: 'serve',
    x: 500,
    y: 184,
    w: 120,
    h: 68,
  },
] as const;

export const b2Chips = [
  { id: 'txn', label: 'Source Systems' },
  { id: 'etl', label: 'ETL' },
  { id: 'storage', label: 'Analytical Store' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'apis', label: 'APIs' },
  { id: 'ai', label: 'Agentic AI' },
  { id: 'platform', label: 'Platform & Ops' },
] as const;

export const b2Featured = [
  {
    id: 'telkomsel-ndm',
    title: 'Telkomsel: Near-realtime Data Warehouse',
    layers: ['etl', 'storage'] as const,
    stack: ['ClickHouse', 'Apache NiFi', 'Apache Kafka', 'Hadoop CDP', 'SFTP'],
    closed: true,
    summary:
      'Data engineer on Telkomsel’s near-realtime warehouse: ClickHouse ingest at 5+ TiB/day behind 300+ Apache NiFi pipelines.',
    body: [
      'Sources arrived as Kafka streams, SFTP drops, Hadoop CDP, and scraping jobs. NiFi owned ingestion, marts, and self-monitoring; ClickHouse was the analytical store the rest of the stack queried.',
      'The hard parts were operational: migrating to replicated engines without stranding consumers, recovering from node failures, repairing replication mismatches, and restoring from backup when the cluster lied about its own health.',
    ],
  },
  {
    id: 'kemendagri-datahub',
    title: 'Ministry of Home Affairs: Presidential-priority Programs',
    layers: ['etl', 'storage', 'platform', 'dashboard', 'ai'] as const,
    stack: ['ClickHouse', 'PostgreSQL', 'Apache Superset', 'FastMCP'],
    closed: true,
    summary:
      'Technical lead on progress-monitoring dashboards for presidential-priority programs, including how the public sees those programs and Kemendagri itself.',
    body: [
      'Dashboards track delivery of presidential-priority programs. The same serving layer supports monitoring of public perception — of the programs, and of the ministry.',
      'After Kemendagri licensed the platform, this team stays on for technical support: warehouse and BI uptime, and unblocking software and data engineers. Data science and AI engineering on the same program sit with a different technical lead. An MCP server exposes Superset so agents can ask the same data the dashboards already serve.',
    ],
  },
  {
    id: 'kemendagri-sipd-analytics',
    title: 'Ministry of Home Affairs: Analytics for Local-government Budgets',
    layers: ['etl', 'dashboard', 'storage'] as const,
    stack: ['ClickHouse', 'PostgreSQL', 'Apache Superset'],
    closed: true,
    summary:
      'Technical lead on analytics over SIPD: budget allocation and realization for Indonesia’s local governments — Postgres into ClickHouse, then dashboards. Not the transactional SIPD application itself.',
    body: [
      'Operational systems at each local government remain the source of truth. This work is the analytics path: Postgres into ClickHouse, then dashboards that compare plan versus spend across regions.',
      'The job is correctness under messy source systems — reconciling warehouse figures with the originating databases, and keeping the serving layer honest when schemas and stages change.',
    ],
  },
] as const;

export function mapProjectLayersToB2(legacy: string[]): B2NodeId[] {
  const mapped = new Set<B2NodeId>();
  for (const id of legacy) {
    const next = b2WorkLayerMap[id];
    if (next) for (const n of next) mapped.add(n);
  }
  return [...mapped];
}

export function b2NodeTitle(id: string) {
  if (id === 'platform') return 'Platform & Ops';
  return b2FlowNodes.find((n) => n.id === id)?.title ?? id;
}

export type { Depth };
