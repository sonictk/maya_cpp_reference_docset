# Readme

This is a [Dash](http://kapeli.com/dash)-compatible docset for the Maya C++ API reference. It has been
built against the 2016 documentation, but should work for 2017 as well. 


## Usage

Place the ``maya-2016-cpp-reference.docset`` folder in your directory that is 
used by Zeal/Dash/Velocity to lookup docsets. Please refer to your respective
application's documentation for how to install such things.


## Building

### Dependencies

You will need to install the dependencies listed in ``requirements.txt``
through ``pip`` or have it available on your ``PYTHONPATH``.

### Generating the docset

The Python scripts for building the database and formatting the documentation
to work in standalone mode are located in the ``bin`` directory. The Autodesk
documentation should be placed in the directory:
``maya-2016-cpp-reference.docset/Contents/Resources/Documents``.  Once that is
done, you should be able to run ``python clean_html_documentation.py`` and 
``python generate_database_entries.py`` in order to re-generate the docset. The
formatted HTML output will be placed in
``maya-2016-cpp-reference.docset/Contents/Resources/Documents/output``, which
you should move to the ``Documents`` directory instead.


## License

Except for the documentation itself (which belongs to Autodesk and is freely
available for download via their website), the license for the scripts in this
repository is viewable in the ``LICENSE`` file.


## Author
Siew Yi Liang
