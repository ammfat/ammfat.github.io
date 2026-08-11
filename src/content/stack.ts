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
      { name: 'BigQuery', depth: 'shipped' },
      { name: 'Redis', depth: 'explored' },
      { name: 'MongoDB', depth: 'explored' },
      { name: 'ChromaDB', depth: 'explored' },
    ],
  },
  {
    id: 'ingestion',
    label: 'Ingestion and streaming',
    items: [
      { name: 'Apache NiFi', depth: 'production', note: '300+ pipelines' },
      { name: 'Apache Kafka', depth: 'production' },
      { name: 'Hadoop CDP / Hive', depth: 'shipped' },
      { name: 'SFTP', depth: 'shipped' },
      { name: 'Scraping pipelines', depth: 'shipped' },
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
    id: 'serving',
    label: 'Serving and interfaces',
    items: [
      { name: 'FastAPI', depth: 'shipped' },
      { name: 'Apache Superset', depth: 'production' },
      { name: 'Looker Studio', depth: 'shipped' },
      { name: 'Grafana', depth: 'explored' },
      { name: 'Streamlit', depth: 'shipped' },
      { name: 'Vue 3', depth: 'shipped' },
    ],
  },
  {
    id: 'ai',
    label: 'AI and agents',
    items: [
      { name: 'MCP', depth: 'shipped' },
      { name: 'RAG / agentic LLM systems', depth: 'shipped' },
      { name: 'Dify', depth: 'explored' },
      { name: 'NVIDIA NIM', depth: 'explored' },
      { name: 'Transformers', depth: 'shipped' },
      { name: 'Keras', depth: 'shipped' },
      { name: 'OpenAI / Anthropic / Gemini', depth: 'shipped' },
    ],
  },
  {
    id: 'platform',
    label: 'Platform and ops',
    items: [
      { name: 'Linux', depth: 'production' },
      { name: 'Docker', depth: 'production' },
      { name: 'Ansible', depth: 'production' },
      { name: 'GitHub Actions', depth: 'shipped' },
      { name: 'Keycloak', depth: 'explored' },
      { name: 'Kubernetes', depth: 'explored' },
      { name: 'Terraform', depth: 'explored' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    items: [
      { name: 'Python', depth: 'production' },
      { name: 'SQL', depth: 'production' },
      { name: 'Shell', depth: 'production' },
      { name: 'Java', depth: 'explored' },
      { name: 'Go', depth: 'explored' },
      { name: 'Dart', depth: 'explored' },
      { name: 'JavaScript', depth: 'explored' },
    ],
  },
];

export const depthOrder: Depth[] = ['production', 'shipped', 'explored'];
