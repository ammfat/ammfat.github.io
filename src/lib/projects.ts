import { getCollection } from 'astro:content';

const preferredOrder = [
  'bliv',
  'clickhouse-warehouse',
  'superset-tooling',
  'universa',
  'mood-tracker',
  'emotion-classifier',
  'himsika-feedback',
  'chinook-etl',
  'faang-serverless-etl',
];

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => {
    const ai = preferredOrder.indexOf(a.id);
    const bi = preferredOrder.indexOf(b.id);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });
}
