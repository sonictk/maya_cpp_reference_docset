#!/usr/bin/env python
"""
This module is a command-line utility that cleans up the default HTML Maya
Doxygen documentation to be usable as standalone.
"""
import logging
import os
from bs4 import BeautifulSoup

def main():
    """This is the main entry point of the program."""

    logger = logging.getLogger(__name__)
    docs_path = os.path.join(os.path.dirname(
                            os.path.dirname(os.path.abspath(__file__))
                        ),
                          'maya-2016-cpp-reference.docset',
                          'Contents',
                          'Resources',
                          'Documents')

    if not os.path.isdir(docs_path):
        raise IOError('The directory: {0} does not exist!'
                .format(docs_path))

    logger.debug('Formatting documentation...')

    output_path = os.path.join(docs_path, 'output')
    if not os.path.isdir(output_path):
        os.makedirs(output_path)

    # Format all hyperlinks so that they work
    all_files = os.listdir(docs_path)
    total = len(all_files)
    for i, f in enumerate(all_files):
        logger.debug('Processing: {0} of {1}'.format(i, total))
        if os.path.splitext(f)[-1] != '.html':
            continue
        html = open(os.path.join(docs_path, f)).read()
        soup = BeautifulSoup(html, 'html.parser')
        for link in soup.find_all('a'):
            href = link.get('href')
            if href and '#!/url=./cpp_ref/' in href:
                new_href = href.replace('#!/url=./cpp_ref/', './')
                link['href'] = new_href

        with open(os.path.join(output_path, f), 'w') as of:
            of.write(soup.prettify().encode('utf8'))

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    main()
