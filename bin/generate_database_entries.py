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
    cur = conn.cursor()

    # Clean database first
    try:
        logger.debug('Cleaning database...')
        cur.execute('DROP TABLE searchIndex;')
    except:
        raise RuntimeError('Failed to clear out database! Aborting operation!')
    finally:
        cur.execute('CREATE TABLE searchIndex(id INTEGER PRIMARY KEY, name TEXT, type TEXT, path TEXT);')
        cur.execute('CREATE UNIQUE INDEX anchor ON searchIndex (name, type, path);')

    # Write entries
    docs_root = os.path.join(os.path.dirname(database_file_path), 'Documents')

    if not os.path.isdir(docs_root):
        raise IOError('The documentation directory: {0} does not exist!'.format(docs_root))

    logger.debug('Inserting entries into database...')
    for f in os.listdir(docs_root):
        if os.path.splitext(f)[-1] == '.html':

            if '-members' in f:
                continue

            if f.startswith('class_'):
                class_name = ''.join([a[0].upper() + a[1:] for a in os.path.splitext(f)[0].split('class_')[-1].split('_')])
                cur.execute('INSERT OR IGNORE INTO searchIndex(name, type, path)'
                        ' VALUES (\'{name}\', \'Class\', \'{path}\')'.format(name=class_name, path=f))

            elif f.startswith('struct_'):
                struct_name = ''.join([a[0].upper() + a[1:] for a in os.path.splitext(f)[0].split('struct_')[-1].split('_') if a])
                cur.execute('INSERT OR IGNORE INTO searchIndex(name, type, path)'
                        ' VALUES (\'{name}\', \'Struct\', \'{path}\')'.format(name=struct_name, path=f))

            elif f.startswith('namespace'):
                namespace_name = ''.join([a[0].upper() + a[1:] for a in os.path.splitext(f)[0].replace('namespace', '').split('_') if a])
                cur.execute('INSERT OR IGNORE INTO searchIndex(name, type, path)'
                        ' VALUES (\'{name}\', \'Namespace\', \'{path}\')'.format(name=namespace_name, path=f))

            elif '-example' in f:
                example_name = ''.join([a[0].upper() + a[1:] for a in os.path.splitext(f)[0].split('-example')[0].split('_') if a]) + 'Example'
                cur.execute('INSERT OR IGNORE INTO searchIndex(name, type, path)'
                        ' VALUES (\'{name}\', \'Sample\', \'{path}\')'.format(name=example_name, path=f))

    conn.commit()
    logger.debug('Closing connection to database...')
    conn.close()

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    main()
