"""
Minions Applications SDK — Type Schemas
Custom MinionType schemas for Minions Applications.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

application_type = MinionType(
    id="applications-application",
    name="Application",
    slug="application",
    description="A record of a submitted or planned job application.",
    icon="📨",
    schema=[
        FieldDefinition(name="jobId", type="string", label="jobId"),
        FieldDefinition(name="proposalId", type="string", label="proposalId"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="submittedAt", type="string", label="submittedAt"),
        FieldDefinition(name="platformReceipt", type="string", label="platformReceipt"),
        FieldDefinition(name="submittedBy", type="string", label="submittedBy"),
        FieldDefinition(name="approvalRequestId", type="string", label="approvalRequestId"),
    ],
)

submission_bundle_type = MinionType(
    id="applications-submission-bundle",
    name="Submission bundle",
    slug="submission-bundle",
    description="A packaged set of all assets required to submit a specific application.",
    icon="📦",
    schema=[
        FieldDefinition(name="applicationId", type="string", label="applicationId"),
        FieldDefinition(name="proposalId", type="string", label="proposalId"),
        FieldDefinition(name="resumeDocumentId", type="string", label="resumeDocumentId"),
        FieldDefinition(name="caseStudyIds", type="string", label="caseStudyIds"),
        FieldDefinition(name="answerSetId", type="string", label="answerSetId"),
        FieldDefinition(name="attachmentIds", type="string", label="attachmentIds"),
        FieldDefinition(name="assembledAt", type="string", label="assembledAt"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

application_event_type = MinionType(
    id="applications-application-event",
    name="Application event",
    slug="application-event",
    description="A timestamped event in the lifecycle of an application.",
    icon="📅",
    schema=[
        FieldDefinition(name="applicationId", type="string", label="applicationId"),
        FieldDefinition(name="eventType", type="select", label="eventType"),
        FieldDefinition(name="occurredAt", type="string", label="occurredAt"),
        FieldDefinition(name="notes", type="string", label="notes"),
        FieldDefinition(name="triggeredBy", type="string", label="triggeredBy"),
    ],
)

custom_types: list[MinionType] = [
    application_type,
    submission_bundle_type,
    application_event_type,
]

