# Contributing

Contributions are always welcome, no matter how large or small.

**Working on your first Pull Request?** You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Code of Conduct

By participating, you are expected to uphold this [Contributor Covenant Code of Conduct](./other/code_of_conduct.md). Please report unacceptable behavior to [sharvita@gmail.com](mailto:sharvita@gmail.com).

## Project setup

First, [fork](https://guides.github.com/activities/forking) then clone the repo:

```sh
git clone https://github.com/your-username/node-mdl-starter
cd node-mdl-starter
git remote add upstream https://github.com/sharvit/node-mdl-starter
```

Install dependencies:

```sh
yarn
```

Run test suits to validate the project is working:

```sh
yarn test
# run test in watch mode
yarn test:watch
```

Build the project:

```sh
yarn build
# only build the dist folder from source
yarn webpack:build
# build webpack with a development mode and watch files
yarn webpack:develop
# only build the docs using esdocs
yarn docs:build
# build docs in watch mode
yarn docs:develop
```

Run linter to validate the project code:

```sh
yarn lint
# to fix linting errors
yarn lint --fix
```


Run linter to validate your commit message:

```sh
yarn lint:commit
```


## Committing and Pushing changes

Create a branch and start hacking:

```sh
git checkout -b my-branch
```

Commit and push your changes:

`generator-node-mdl` uses [commitizen](https://github.com/commitizen/cz-cli) to create commit messages so [semantic-release](https://github.com/semantic-release/semantic-release) can automatically create releases.

```sh
git add .

yarn commit
# answer the questions

git push origin my-branch
```

Open this project on [GitHub](https://github.com/sharvit/node-mdl-starter), then click “Compare & pull request”.

## Help needed

Please checkout the [`roadmap.md`](./other/roadmap.md) and the open issues.

Also, please watch the repo and respond to questions/bug reports/feature requests, Thanks!
