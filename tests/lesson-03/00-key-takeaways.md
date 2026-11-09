## Git

# Undo things:
1. Commit message
- git commit --ammend -m"message": update the message for the latest commit

2. File staging -> working directory
- git restore --staged <file name>: bring back the <file name> from staging area to working directory (It could be happen when we wrong add a file to Staging by git add . then we bring back that file to working directory area)
- git restore --stage .: bring back all files from staging area to working directory

3. File repository -> working directory
- git reset HEAD~1: remove the latest commit. However, in the reality, we should not use this command since other member could be already pulled our code to their local, when reset coomit, that version is no longer visible in git, and hard to trace
- git reset HEAD~n: remove n latest commit

4. Git un-commit
- First commit cannot be reset
- If we want to reset the first commit, we need to delete folder <.git> the re-init git to our project

# Branching
1. Git pull: Pull code from server to our local
- git pull origin main

2. Git branching
- We use branch to create code version, this helps reduce risk to the initial version
- When init git, the default branch <main> will be created as well

3. Git branch command
- Config for default branch: git config --global init.defaultBranch main
- View list branch: git branch. We need at least one commit to be able to view the list branch
- Create new branch: git branch <branch_name>. New branch will clone the details of the current branch
- Checkout to other branch: git checkout <branch_name>
- Create new branch & checkout: git checkut -b <branch_name>
- Delete branch: git branch -D <branch_name>. We need to checkout to other branch before deleting.
* Note: Pull code before create new branch

# Git ignore
1. .gitignore
List all files/ folders that should not be put to Github. These should be sensitive or unnessessary files (temporatory files, dependencies folder, build files, configurator, logs)

2. Covention
- Comment: use # in the beginning
- Ignore specific file: <file name>
- Ignore all files have extension of .log: *.log
- Igore folder: <folder name>
- Ignore file from all sub-folders: **/*.tmp
- Do not ignore this file: !<file name>
- Ignore file from init folder: /TODO
- Ignore all file txt in doc: doc/**/*txt 

## Javascript

# Convention
- snake_case: rarely use
- kebab-case: file name, folder name
- camelCase: variable name, function name
- PascalCase: class name

# Console log
- console.log("message") helps debugging and trackking
- console.log fommats:
    + Normal text only: use '' "" to display message
    + With variable: console.log(`message ${variable}`)

# Object
- Save data in key-value format
- Syntax: 
    + const/let <variable_name> = {
        key1: value1,
        key2: value2,
        ...
    }
    + <key>: same convention with variable
    + <value>: same data type with variable or other object

# Logical operator
- &&: all clauses are correct
- ||: at least one clause is correct
- !: the opposite of the clause

# Array
1. Create array
const/ let <arrayName> 

2. Use array
<arrayName>

3. Check array length
array.length

4. Get array object by its index: array[index]. Note that, the first index should always be 0.

# Function
- A block of code that has name and can be reuse many times. It designed to implement a particular task.