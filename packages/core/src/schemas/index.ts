/**
 * @module @minions-applications/sdk/schemas
 * Custom MinionType schemas for Minions Applications.
 */

import type { MinionType } from 'minions-sdk';

export const applicationType: MinionType = {
  id: 'applications-application',
  name: 'Application',
  slug: 'application',
  description: 'A record of a submitted or planned job application.',
  icon: '📨',
  schema: [
    { name: 'jobId', type: 'string', label: 'jobId' },
    { name: 'proposalId', type: 'string', label: 'proposalId' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'submittedAt', type: 'string', label: 'submittedAt' },
    { name: 'platformReceipt', type: 'string', label: 'platformReceipt' },
    { name: 'submittedBy', type: 'string', label: 'submittedBy' },
    { name: 'approvalRequestId', type: 'string', label: 'approvalRequestId' },
  ],
};

export const submissionbundleType: MinionType = {
  id: 'applications-submission-bundle',
  name: 'Submission bundle',
  slug: 'submission-bundle',
  description: 'A packaged set of all assets required to submit a specific application.',
  icon: '📦',
  schema: [
    { name: 'applicationId', type: 'string', label: 'applicationId' },
    { name: 'proposalId', type: 'string', label: 'proposalId' },
    { name: 'resumeDocumentId', type: 'string', label: 'resumeDocumentId' },
    { name: 'caseStudyIds', type: 'string', label: 'caseStudyIds' },
    { name: 'answerSetId', type: 'string', label: 'answerSetId' },
    { name: 'attachmentIds', type: 'string', label: 'attachmentIds' },
    { name: 'assembledAt', type: 'string', label: 'assembledAt' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const applicationeventType: MinionType = {
  id: 'applications-application-event',
  name: 'Application event',
  slug: 'application-event',
  description: 'A timestamped event in the lifecycle of an application.',
  icon: '📅',
  schema: [
    { name: 'applicationId', type: 'string', label: 'applicationId' },
    { name: 'eventType', type: 'select', label: 'eventType' },
    { name: 'occurredAt', type: 'string', label: 'occurredAt' },
    { name: 'notes', type: 'string', label: 'notes' },
    { name: 'triggeredBy', type: 'string', label: 'triggeredBy' },
  ],
};

export const customTypes: MinionType[] = [
  applicationType,
  submissionbundleType,
  applicationeventType,
];

