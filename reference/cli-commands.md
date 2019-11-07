# CLI Commands

Following commands assume that you are working on a Git repo. If you does not have Git on your machine, please download it from [here](https://git-scm.com/downloads).

## init

Initialize a Tuture tutorial.

This command will go through following procedures:

1. Check if Git is installed on your machine. If not, Tuture will stop and output error message.

2. Check if current working directory is a Git repo. If you are not in a Git repo and `-y` option is not given, Tuture will ask for confirmation on whether you would like to initialize one. If your answer is no, Tuture will abort this command. Otherwise, Tuture will run `git init` in current working directory and move on.

3. Prompt you to answer following questions (if `-y` or `--yes` option is not given):

| Prompt         | Fields   | Required/Optional | Default             | Meaning                 |
| -------------- | -------- | ----------------- | ------------------- | ----------------------- |
| Tutorial Name? | `name`   | Required          | My Awesome Tutorial | Title of this tutorial  |
| Topics         | `topics` | Optional          | -                   | Topics of this tutorial |

::: tip
You can separate multiple topics with any non alphanumeric characters, like `JavaScipt,React,Mobx` or `Python/TensorFlow`.
:::

4. Create **tuture.yml** for storing your tutorial (refer to [tuture.yml Specification](tuture-yml-spec.md) for detailed information), and **.tuture** directory which houses diff data of each commit.

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

## reload

Update Tuture files to the latest repo.

Tuture will do following two things by extracting latest changes from Git logs:

- Add diff file of new commits
- Append new steps to **tuture.yml**

::: tip NOTE
This command will be automatically invoked after each commit. You can also run this command manually.
:::

::: warning
Current working directory should already be initialized with `tuture init`.
:::

### Options

#### `-h`, `--help`

Output usage information.

## up

Render your tutorial in the browser.

Whether you have initialized with `tuture init` or have just cloned a Tuture tutorial repository, running `tuture up` both suffices.

::: warning
Current working directory should already be a Git repository with **tuture.yml** present.
:::

### Options

#### `-p`, `--port`

The port to use for spinning up editor server.

#### `-h`, `--help`

Output usage information.

## destroy

Delete all tuture files.

Tuture will prompt you for confirmation. Type in truthy values (`y`, `yes` and `1`) will delete **.tuture** directory and **tuture.yml**. Type in falsy values (`n`, `no`, and `0`) or simply pressing Enter will cancel this command.

::: warning
Current working directory should already be initialized with `tuture init`.
:::

### Options

#### `-f`, `--force`

Destroy without confirmation.

#### `-h`, `--help`

Output usage information.

## build

Build the tutorial into a markdown document.

### Options

#### `-o`, `--output`

Path to output file.

#### `--assetsPath`

Path to assets root directory. This is used for replacing paths of all image assets in the markdown document. The assets root specified will be created relative to the output file.

#### `--hexo`

[Hexo](https://hexo.io) post building mode. This will add Hexo [front-matters](https://hexo.io/docs/front-matter) with meta data specified in **tuture.yml**.

::: warning
This feature is **experimental** and currently only used for building posts in [Tuture Hub](https://tuture.co).
:::

#### `-h`, `--help`

Output usage information.

## help

Print usage information for any command.

For example, `tuture help` will print usage of all sub-commands, and `tuture build <subcommand>` will output usage for a given `<subcommand>`.
