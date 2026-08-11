export const site = {
  name: 'Ahmad Maulana Malik Fattah',
  shortName: 'ammfat',
  role: 'Data & AI Platform Engineer',
  tagline:
    'I keep large analytical databases alive and make them answerable — by dashboards, by APIs, and lately by agents.',
  location: 'Karawang, Indonesia',
  headline:
    'Technical Lead at Bangunindo Teknusa Jaya, building and running BLIV, the national data platform for Indonesia\'s Ministry of Home Affairs (Kemendagri). Before that, a ClickHouse warehouse ingesting 5+ TiB/day behind 300+ Apache NiFi pipelines.',
  metrics: [
    { label: 'ingest', value: '5+ TiB/day' },
    { label: 'pipelines', value: '300+ NiFi' },
    { label: 'platform', value: 'BLIV / Kemendagri' },
  ],
  links: {
    github: 'https://github.com/ammfat',
    linkedin: 'https://linkedin.com/in/ammfat',
    medium: 'https://medium.com/@ammfat',
    credly: 'https://credly.com/users/ammfat',
    email: 'mailto:ahmad.mmfat@gmail.com',
  },
  openTo:
    'Open to conversations about data platform roles, and to selective consulting on ClickHouse migrations and Superset at scale.',
} as const;
