# Installation

## Git

Tuture is based on the Git repositories for tutorial writing, so first make sure you have Git installed. If not, please visit [git-scm.com](https://git-scm.com/downloads) to download it. After that, run the following command in your terminal (console) to confirm the installation:

```bash
$ git version
```

::: tip
For Windows users, please run all commands in **Git Bash** shipped with Git Windows distributions.
:::

If you get version info, move on.

## Node.js

Tuture toolchain depends on Node environment, which can be downloaded on [nodejs.org](https://nodejs.org).

::: warning
Node version should be above 8.0.0!
:::

Again run following commands to confirm the installation:

```bash
$ node -v
$ npm -v
```

## tuture and tuture-cli

Finally, install **tuture** and **tuture-cli** globally via npm:

```bash
$ npm i -g tuture tuture-cli
```

::: tip
You may need `sudo` (or "Run As Administrator" for Windows users) to install npm packages globally.
:::

If you prefer [yarn](https://yarnpkg.com):

```bash
$ yarn global add tuture tuture-cli
```

## Install From Source

If you want to be exposed to newest features or contribute to tuture or tuture-cli, installing from source is recommended. Clone [tuture](https://github.com/tutureproject/tuture) and [tuture-cli](https://github.com/tutureproject/cli) from GitHub, `cd` into these repos and install them respectively:

```bash
$ npm i -g
```
