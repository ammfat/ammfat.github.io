export type Depth = 'production' | 'shipped' | 'explored';

export type StackItem = {
  name: string;
  depth: Depth;
  note?: string;
};

export type StackGroup = {
  id: string;
  label: string;
  items: StackItem[];
};

export const stackGroups: StackGroup[] = [
  {
    id: 'storage',
    label: 'Storage and query',
    items: [
      { name: 'ClickHouse', depth: 'production', note: '5+ TiB/day warehouse' },
      { name: 'PostgreSQL', depth: 'production' },
      { name: 'Object Storage (MinIO, s3-compatibles)', depth: 'production' },
      { name: 'Google Cloud Storage', depth: 'shipped' },
      { name: 'Redis', depth: 'production' },
      { name: 'BigQuery', depth: 'shipped' },
      { name: 'MongoDB', depth: 'shipped' },
      { name: 'ChromaDB', depth: 'shipped' },
    ],
  },
  {
    id: 'ingestion',
    label: 'Ingestion and streaming',
    items: [
      { name: 'Apache NiFi', depth: 'production', note: '300+ pipelines' },
      { name: 'Apache Kafka', depth: 'production' },
      { name: 'Hadoop CDP / Hive', depth: 'production' },
      { name: 'Data Scraping', depth: 'production' },
    ],
  },
  {
    id: 'orchestration',
    label: 'Orchestration',
    items: [
      { name: 'Apache Airflow', depth: 'shipped' },
      { name: 'Google Cloud Composer', depth: 'shipped' },
      { name: 'dbt', depth: 'explored' },
      { name: 'Mage', depth: 'explored' },
    ],
  },
  {
    id: 'web',
    label: 'Web',
    items: [
      { name: 'FastAPI', depth: 'shipped' },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics and interfaces',
    items: [
      { name: 'Apache Superset', depth: 'production' },
      { name: 'Looker Studio', depth: 'shipped' },
      { name: 'Streamlit', depth: 'shipped' },
    ],
  },
  {
    id: 'observability',
    label: 'Observability and monitoring',
    items: [
      { name: 'Grafana', depth: 'production' },
      { name: 'Weights & Biases', depth: 'shipped' },
    ],
  },
  {
    id: 'ai',
    label: 'AI and agents',
    items: [
      { name: 'LLMs (OpenAI / Anthropic / Gemini)', depth: 'production' },
      { name: 'FastMCP', depth: 'production' },
      { name: 'Keras', depth: 'shipped' },
      { name: 'Transformers', depth: 'shipped' },
      { name: 'Dify AI', depth: 'explored' },
      { name: 'NVIDIA NIM', depth: 'explored' },
    ],
  },
  {
    id: 'platform',
    label: 'Platform and ops',
    items: [
      { name: 'Linux', depth: 'production' },
      { name: 'Docker', depth: 'production' },
      { name: 'GitHub Actions', depth: 'shipped' },
      { name: 'Ansible', depth: 'explored' },
      { name: 'Kubernetes', depth: 'explored' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    items: [
      { name: 'Python', depth: 'production' },
      { name: 'SQL', depth: 'production' },
      { name: 'Shell', depth: 'production' },
      { name: 'Go', depth: 'explored' },
    ],
  },
];

export const depthOrder: Depth[] = ['production', 'shipped', 'explored'];
