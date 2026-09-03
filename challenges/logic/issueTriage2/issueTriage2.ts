import { LABELS } from './models';

const patterns = {
  bug: /(error|bug)/i,
  enhancement: /(feature|add)/i,
  goodFirstIssue: /(simple|easy)/i,
  roadmap: /(planned|next)/i,
  security: /security/i,
};

// @CodeScene(disable:"Bumpy Road Ahead")
// @CodeScene(disable:"Complex Method")
export function triageIssue2(title: string, labels: LABELS[]): LABELS[] {
  const newLabels: Set<LABELS> = new Set([...labels]);

  if (newLabels.has(LABELS.NEEDS_TRIAGE)) {
    newLabels.delete(LABELS.NEEDS_TRIAGE);
    if (patterns.goodFirstIssue.test(title)) newLabels.add(LABELS.GOOD_FIRST_ISSUE);
    else newLabels.add(LABELS.HELP_WANTED);
  }

  if (newLabels.has(LABELS.DISCUSSING)) {
    newLabels.delete(LABELS.DISCUSSING);
    if (patterns.roadmap.test(title)) newLabels.add(LABELS.ON_THE_ROAD_MAP);
    else newLabels.add(LABELS.HELP_WANTED);
  }

  if (newLabels.size === 0) {
    if (patterns.bug.test(title)) {
      newLabels.add(LABELS.BUG);
      newLabels.add(LABELS.NEEDS_TRIAGE);
    }
    if (patterns.enhancement.test(title)) {
      newLabels.add(LABELS.ENHANCEMENT);
      newLabels.add(LABELS.DISCUSSING);
    }
  }

  if (patterns.security.test(title)) newLabels.add(LABELS.CRITICAL);

  return Array.from(newLabels);
}
