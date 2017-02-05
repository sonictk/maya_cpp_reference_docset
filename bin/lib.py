#!/usr/bin/env python
"""
This module contains useful functions that are used by the generation scripts.
"""
def chunk(l, n):
    return [l[i:i+n] for i in range(0, len(l), n)]
