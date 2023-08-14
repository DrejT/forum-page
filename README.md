### Contributing

#### Starting a local development server

```bash
$ git clone https://github.com/DrejT/forum-page/
```

```bash
$ cd client  # change to client directory
```

```bash
$ npm run dev  # start the local server
```

now, the visit http://localhost:5173

#### steps to create your own branch:

```bash
$ git branch  # list down all the local branches the current branch has a *
```

```bash
$ git branch <my_new_branch_name> # creates a new branch
```

```bash
$ git checkout -b <branch_name>   # switches your branch to the specified branch
```

this is how you can work with branches locally while developing

#### pushing changes

don't push to the main branch, instead create a new branch, develop on it.
For pushing those changes to your the github repository follow the below steps
as per your case

```bash
$ git push origin branchName  # use this if your local branch name and remote branch name are the same
```

```bash
$ git push origin localBranchName:remoteBranchName  # use this if the local branch name and remote branch names are not the same
```