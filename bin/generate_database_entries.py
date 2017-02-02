#!/usr/bin/env python
"""
This module is a command-line utility that writes to the SQLite database that
is used for lookup of documentation entries.
"""
import logging
import os
import sqlite3

def main():
    """This is the main entry point of the program."""
    logger = logging.getLogger(__name__)
    database_file_path = os.path.join(os.path.dirname(
                            os.path.dirname(os.path.abspath(__file__))
                        ),
                                      'maya-2016-cpp-reference.docset',
                                      'Contents',
                                      'Resources',
                                      'docSet.dsidx')
    if not os.path.isfile(database_file_path):
        raise IOError('The database file: {0} does not exist!'
                .format(database_file_path))

    logger.debug('Making connection to database...')
    conn = sqlite3.connect(database_file_path)

    conn.commit()
    logger.debug('Closing connection to database...')
    conn.close()

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    main()
