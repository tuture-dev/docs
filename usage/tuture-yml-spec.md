# tuture.yml Specification

**tuture.yml** contains metadata and everything needed to build your Tuture tutorial. Note that each field below can and should be written in the language claimed in the `language` field.

> **It's strongly advised not to edit this file manually.**. We recommend writing tutorials directly in our browser editor.

## A Full Example

```yaml
name: Name of this tutorial
version: 0.0.1
topics:
  - Topic A
  - Topic B
description: This is my first tutorial, come and read it!
maintainer: maintainer@example.com
steps:
  - name: Message of commit ae05546
    commit: ae05546
    explain:
      pre: Introduction placed at the top of this step
      post: Sumup placed at the bottom of this step
    diff:
      - file: Changed file A
        display: true
        section:
          start: 1
          end: 9
        explain:
          pre: Introduction before doing something to this part of A
      - file: Changed file A
        display: true
        section:
          start: 10
          end: 20
        explain:
          pre: Introduction before doing something to this part of A
      - file: Changed file B
        display: true
        explain:
          pre: Introduction before doing something to B
          post: Explanation after doing something to B
      - file: Changed file C
  - name: Message of commit ae05546
    commit: a45bec1
    explain:
      pre: Introduction placed at the top of this step
      post: Sumup placed at the bottom of this step
    diff:
      - file: Changed file A
        display: true
        explain:
          pre: Introduction before doing something to A
          post: Explanation after doing something to A
      - file: Changed file B
        display: true
        explain:
          pre: Introduction before doing something to B
      - file: Changed file C
        display: true
        explain:
          pre: Introduction before doing something to C
          post: Explanation after doing something to C
```

## Fields

### `name`

**[Required]** Name of your tutorial. By default it's *My Awesome Tutorial*.

**Advices**

- Try to be informative and attractive, such as *Build Your Own NoSQL Database with Python*
- Don't use general descriptions (or something like a book title), for instance *Learning JavaScript*.

### `version`

**[Required]** Version of your tutorial.

### `topics`

Topics covered in this tutorial.

Programming languages, libraries, frameworks, tools, software engineering and everything in between can serve as a valid topic.

### `description`

Short description of your tutorial.

This helps people quickly discover your tutorial and get interested in it.

### `email`

Maintainer email.

### `steps`

**[Required]** Steps for readers to follow.

**Notes**

- This field should contain at least one step
- Each step corresponds with one commit in your Git repo strictly

**Advices**

- For each step, stick to the renowned and respected UNIX philosiphy - **Do One Thing and Do It Well**
- Adjust the order of diff files for better illustration

**Tips**

- For commits not intended to be tracked by Tuture, just start commit message with `tuture:`

Here is the specification of a single step.

#### `name`

**[Required]** Name of this step. This will be automatically filled with corresponding commit message. You can rewrite this as you see fit.

#### `commit`

**[Required]** Corresponding commit ID. Please **do not** manually edit this field.

#### `explain`

Explanation for this step.

This field should be a **mapping** with keys `pre` (introduction  words placed at the top, *optional*) and `post` (sumup words placed at bottom, *optional*), with the value of each key being a **string**:

```yaml
explain:
  pre: Introduction at the top of this step
  post: Sumup at the bottom of this step
```

#### `outdated`

Whether this step is outdated due to Git rebase or else.

When you run `git commit --amend` or `git rebase -i`, some commits are swapped out and their corresponding steps will be marked as `outdated: true`. Generally you should remove outdated steps when you don't need them any more.

#### `diff`

Added or changed files in this step.

Each diff file has following fields:

##### `file`

**[Required]** Path to this changed file (from the tutorial root). Tuture will extract this information for you from Git logs.

#### `display`

Whether this file should be displayed in the tutorial.

Changes to following files will not be tracked by default.

```
tuture.yml
package-lock.json
yarn.lock
```

##### `section`

Specify which part of code diff should be displayed. This is quite handy when you have made changes to a large file and want to tear it apart for convenience of explanation.

You can select your desired part of code diff by providing following fields:

- `start`: Line number to start. If not given, this will be `1`
- `end`: Line number to stop. **This line is included**. If not given, this will be the total number of lines

##### `explain`

This is the same as `explain` of a step. You should provide a  **mapping** with optional keys `pre` and `post`.

## TypeScript Type Definition

Here is the type definition for `Tuture`:

```typescript
interface Explain {
  pre?: string;
  post?: string;
}

interface Section {
  start?: number;
  end?: number;
}

interface Diff {
  file: string;
  display?: boolean;
  section?: Section;
  explain?: Explain;
}

interface Step {
  name: string;
  commit: string;
  explain?: Explain;
  outdated?: boolean;
  diff: Diff[];
}

interface Tuture {
  name: string;
  language: string;
  version: string;
  topics?: string[];
  description?: string;
  email?: string;
  steps: Step[];
}
```
