export type Role = {
  org: string;
  title: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const roles: Role[] = [
  {
    org: 'Bangunindo Teknusa Jaya',
    title: 'Technical Lead',
    location: 'Jakarta, Indonesia (Remote)',
    start: '2026-02',
    end: 'Present',
    bullets: [
      'Lead technical direction across projects, clearing blockers so teams stay focused and shipping.',
      'Drive delivery and maintenance of BLIV, the national data platform for Kemendagri.',
      'Translate stakeholder needs into clear technical initiatives for engineers.',
      'Keep service availability high so public-service operations stay online.',
    ],
  },
  {
    org: 'Bangunindo Teknusa Jaya',
    title: 'Data Engineer',
    location: 'Jakarta, Indonesia (Remote)',
    start: '2023-06',
    end: '2026-01',
    bullets: [
      'Designed and ran a ClickHouse warehouse processing 5+ TiB/day from Kafka, SFTP, Hadoop CDP, and scraping pipelines.',
      'Delivered and maintained 300+ Apache NiFi ETL pipelines covering ingestion, marts, and self-monitoring.',
      'Led a major cluster migration and recovered from node failures, replication mismatches, and restore-from-backup scenarios.',
      'Trained partner teams on ClickHouse and NiFi so the platform stayed usable without a bus factor of one.',
    ],
  },
  {
    org: 'Universa AI',
    title: 'AI Engineer',
    location: 'Cité, Geneva (Remote)',
    start: '2024-08',
    end: '2025-06',
    bullets: [
      'Extended a model-agnostic Graph-of-Thought and MCP-like framework so non-reasoning LLMs could produce structured software artifacts.',
      'Researched bioinformatics tooling and NVIDIA NIM; started work on autonomous research agents for life sciences.',
      'Prototyped a NumPy-based LLaMA-style transformer with encodings, forward pass, and quantization for internal R&D.',
      'Managed three intern squads (15+) delivering NLP classifiers, RAG, fine-tuning, and synthetic data pipelines.',
    ],
  },
  {
    org: 'Alterra Academy',
    title: 'Data Engineering Mentor',
    location: 'Malang, Indonesia (Remote)',
    start: '2024-05',
    end: '2024-07',
    bullets: [
      'Mentored 25+ students through Data Engineering courses and capstone projects.',
      'Designed lesson materials and case studies for students from mixed academic backgrounds.',
    ],
  },
  {
    org: 'Narasio Data',
    title: 'Data Engineering Mentor',
    location: 'Surabaya, Indonesia (Remote)',
    start: '2023-07',
    end: '2023-09',
    bullets: [
      'Improved learning materials and supported trainers during live sessions.',
      'Gave feedback on advanced capstone projects.',
    ],
  },
];
