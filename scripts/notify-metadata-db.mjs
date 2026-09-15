import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

export async function notifyMetadataDb(env = process.env, transport = fetch) {
  const repository = env.METADATA_DB_REPOSITORY;
  const sourceRepository = env.GITHUB_REPOSITORY;
  const sourceRevision = env.METADATA_SOURCE_REVISION ?? execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  if (!env.METADATA_DB_TOKEN || !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository ?? "")) throw new Error("Configure MetadataDB dispatch repository and scoped token");
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(sourceRepository ?? "") || !/^[0-9a-f]{40}$/.test(sourceRevision)) throw new Error("Require exact source repository and revision");
  const response = await transport(`https://api.github.com/repos/${repository}/dispatches`, { method: "POST", headers: {
    Accept: "application/vnd.github+json", Authorization: `Bearer ${env.METADATA_DB_TOKEN}`, "Content-Type": "application/json", "X-GitHub-Api-Version": "2026-03-10",
  }, signal: AbortSignal.timeout(30000), body: JSON.stringify({ event_type: "metadata-db-source-changed", client_payload: { sourceRepository, sourceRevision } }) });
  if (response.status !== 204) throw new Error(`Source notification failed with HTTP ${response.status}; committed evidence remains available to scheduled reconciliation`);
  return { state: "notified", canonicalAcceptance: "pending", sourceRevision };
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  notifyMetadataDb().then((result) => console.log(JSON.stringify(result))).catch((error) => { console.error(error.message); process.exitCode = 1; });
}
