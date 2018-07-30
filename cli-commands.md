# CLI Commands

Following commands assume that you are working on a Git repo. If you does not have Git on your machine, please download it from [here](https://git-scm.com/downloads).

## `tuture init`

Initialize a Tuture tutorial.

This command will go through following procedures:

1. Check if Git is installed on your machine. If not, Tuture will stop and output error message.

2. Check if current working directory is a Git repo. If you are not in a Git repo and `-y` option is not given, Tuture will ask for confirmation on whether you would like to initialize one. If your answer is no, Tuture will abort this command. Otherwise, Tuture will run `git init` in cwd and move on.

3. Prompt you to answer following questions (if `-y` or `--yes` option is not given):

| Prompt             | Fields     | Required/Optional | Default            | Meaning                                                      |
| ------------------ | ---------- | ----------------- | ------------------ | ------------------------------------------------------------ |
| Tutorial Name?     | `name`     | Required          | My Awesome Tutorial | Title of this tutorial                                       |
| Version | `version` | Required          | 0.0.1            | Version of this tutorial        |
| Tutorial Language? | `language` | Required  | en           | Language of this tutorial |
| Topics? | `topics` | Optional  | javascript,  git, cli | Topics of this tutorial, separated with spaces or commas, such as `express, mongodb` |
| Maintainer email? | `email` | Optional | me@example.com | Maintainer email of this tutorial |

4. Create **tuture.yml** which is everything you need to write your tutorial (refer to [tuture.yml Specification](TUTURE_YML_SPEC.md) for detailed information), and **.tuture** directory which houses diff data of each commit.

5. Append following rule to your `.gitignore` (Tuture will create one if not exists):

```
# Tuture supporting files

.tuture
```

6. Add Git post-commit hook for calling `tuture reload` after each commit (create one if not exists).

### Options

#### `-y`, `--yes`

Do not ask for prompts and fill in default values.

#### `-h`, `--help`

Output usage information.

## `tuture reload`

Update Tuture files to the latest repo.

Tuture will do following two things by extracting latest changes from Git logs:

- Add diff file of new commits
- Append new steps to **tuture.yml**

Note that this command will be automatically invoked after each commit. You can also run this command manually.

### Preconditions

Current working directory should already be initialized with `tuture init`.

### Options

#### `-h`, `--help`

Output usage information.

## `tuture up`

Render your tutorial in the browser.

Whether you have initialized with `tuture init` or have just cloned a Tuture tutorial repository, running `tuture up` both suffices.

> This command will invoke `tuture-renderer` under the hood, which should have been installed before `tuture`. If `tuture-renderer` is not available on your machine somehow, you can manually install it with **npm**:
> ```bash
> $ npm i -g tuture-renderer
> ```

### Preconditions

Current working directory should already be a Git repository with **tuture.yml** present.

### Options

#### `-h`, `--help`

Output usage information.

## `tuture destroy`

Delete all tuture files.

Tuture will prompt you for confirmation. Type in truthy values (`y`, `yes` and `1`) will delete **.tuture** directory and **tuture.yml**. Type in falsy values (`n`, `no`, and `0`) or simply pressing Enter will cancel this command.

### Preconditions

Current working directory should already be initialized with `tuture init`.

### Options

#### `-f`, `--force`

Destroy without confirmation.

#### `-h`, `--help`

Output usage information.
