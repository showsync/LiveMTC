During developing :

Because a M4L device is a project by default and is saved into a default Max for Live Device Projects folder while editing, we use a symlink in the default M4L Device folder pointing to our git repository. We do this to keep all the dependencies in one place for versioning and linking them to the actual .amxd project.
To create this symlink open the terminal and type :

ln -s <path of the MTC project folder> <path to the default Max for Live Device Projects folder>