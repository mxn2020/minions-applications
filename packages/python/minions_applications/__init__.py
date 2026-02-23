"""
Minions Applications Python SDK

Application records, submission bundles, platform receipts, and status tracking
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Applications.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
