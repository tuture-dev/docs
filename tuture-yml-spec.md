# tuture.yml Specification

**tuture.yml** contains metadata and everything needed to build your Tuture tutorial. Note that each field below can and should be written in the language claimed in the `language` field.

A full example:

```yaml
name: Name of this tutorial
language: en-US
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
        section:
          start: 1
          end: 9
        explain: Introduction before doing something to this part of A
      - file: Changed file A
        section:
          start: 10
          end: 20
        explain: Introduction before doing something to this part of A
      - file: Changed file B
        explain:
          pre: Introduction before doing something to B
          post: Explanation after doing something to B
  - name: Message of commit ae05546
    commit: a45bec1
    explain:
      pre: Introduction placed at the top of this step
      post: Sumup placed at the bottom of this step
    diff:
      - file: Changed file A
        explain:
          pre: Introduction before doing something to A
          post: Explanation after doing something to A
      - file: Changed file B
        explain: Introduction before doing something to B
      - file: Changed file C
        explain:
          pre: Introduction before doing something to C
          post: Explanation after doing something to C
```

---

## `name`

**[Required]** Name of your tutorial.

This will be displayed as the title of your tutorial in [tuture-renderer](https://github.com/tutureproject/renderer). By default it's *My Awesome Tutorial*.

**Advices**

- Try to be informative and attractive, such as *Build Your Own NoSQL Database with Python*
- Don't use general descriptions (or something like a book title), for instance *Learning JavaScript*.

## `language`

**[Required]** Language of your tutorial.

Tuture fully appreciates the importance of internationlization (aka i18n), so tutorials will be divided into different groups by languages.

**Notes**

- This field is about **natural languages** that your tutorial is written in, not **programming languages** you've utilized in your tutorial.

## `version`

**[Required]** Version of your tutorial.

## `topics`

Topics covered in this tutorial.

Programming languages, libraries, frameworks, tools, software engineering and everything in between can serve as a valid topic.

## `description`

Short description of your tutorial.

This helps people quickly discover your tutorial and get interested in it.

## `email`

Maintainer email.

## `steps`

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

### `name`

**[Required]** Name of this step. This will be automatically filled with corresponding commit message. You can rewrite this as you see fit.

### `commit`

**[Required]** Corresponding commit ID. Please **do not** manually edit this field.

### `explain`

Explanation for this step. Here are two ways to add your narration:

- Provide a **string** for this field, and it will be placed at the top of this step

```yaml
explain: Introduction placed at the top of this step
```

- Provide an **array of strings** to add multiple paragraphs of explanation, which will be placed at the top of this step

```yaml
explain:
  - First paragraph
  - Second paragraph
  - Third paragrah
```

- Provide a **mapping** with keys `pre` (placed at top, *optional*) and `post` (placed at bottom, *optional*), with the value of each key being a **string** or an **array of strings**

```yaml
explain:
  pre: Introduction placed at the top of this step
  post:
    - First paragraph of sumup at the bottom of this step
    - Second paragraph of sumup at the bottom of this step
```

### `diff`

Added or changed files in this step.

**Notes**

Changes to following files will not be tracked by default.

```
tuture.yml
package-lock.json
yarn.lock
```

Each diff file has following fields:

#### `file`

**[Required]** Path to this changed file (from the tutorial root). Tuture will extract this information for you from Git logs.

#### `section`

Specify which part of code diff should be displayed. This is quite handy when you have made changes to a large file and want to tear it apart for convenience of explanation.

You can select your desired part of code diff by providing following fields:

- `start`: Line number to start. If not given, this will be `1`
- `end`: Line number to stop. **This line is included**. If not given, this will be the total number of lines

#### `explain`

This is the same as `explain` of a step. You can provide either a **string**, an **array of strings** or a **mapping** with keys `pre` and `post`.
