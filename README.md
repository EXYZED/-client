# @client via Project Echelon

### Quick Start -
Clone this repo in an empty dev space, preferably on an SSD or as such.
I recommend that you use GitHub Desktop to clone this repo into your desired dev space.

Once the repo has been cloned succesfully, open the directory in Visual Studio Code.

Open a new terminal inside of VSC and enter the following:
`npm install`

This is will install all the dependencies listed in the "package.json".
This means that they are referenced, but not installed, via the "package.json"

Once the modules have install you should see a "node_modules" folder and a "package-lock.json", appear.

You are now free to create a branch of this project, learn how it works or use it for reference.

### Documents -
You may notice that, on running the program, it tries to look for 'dir/' but cannot find it. This is because GitHub does let you upload empty folders sometimes. I trust that you can create an empty folder in the name of "dir" as shown below:



`/dir/`

After that, you can put any random files inside of the dir folder. All you will be using it for is watching for directory changes, additions, removals and ready events.


### Note -
This is part of a two-part installation that is needed for the entire application runtime (dev build) to run

#### @server via Project Echelon - 
https://github.com/brendanprice2003/-server
