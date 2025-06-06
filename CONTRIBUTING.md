# Contributing

Thank you for considering to contribute to the CirclCI MCP(Model Context Protocol) Cookbook! Before you
get started, we recommend taking a look at the guidelines below:

- [Have a Question?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Contributing](#contribute)
  - [Submission Guidelines](#guidelines)
  - [Release Process](#release)

## <a name="question"></a>Have a Question?

Have a question about the CirclCI MCP(Model Context Protocol) Cookbook?

### I have a general question.

Contact CircleCI's general support by filing a ticket here:
[Submit a request](https://support.circleci.com/hc/en-us/requests/new)

### I have a question about Typescript or best practices

Share your question with
[CircleCI's community Discuss forum](https://discuss.circleci.com/).

### I have a question about the CirclCI MCP(Model Context Protocol) Cookbook

You can always open a new [issue](https://github.com/CircleCI-Public/circleci-mcp-cookbook/issues/new/choose) on the repository on GitHub.

## <a name="issue"></a>Discover a Bug?

Find an issue or bug?

You can help us resolve the issue by
[submitting an issue](https://github.com/CircleCI-Public/circleci-mcp-cookbook/issues/new/choose)
on our GitHub repository.

Up for a challenge? If you think you can fix the issue, consider sending in a
[Pull Request](#pull).

## <a name="feature"></a>Missing Feature?

Is anything missing?

You can request a new feature by
[submitting an issue](https://github.com/CircleCI-Public/circleci-mcp-cookbook/issues/new/choose)
to our GitHub repository, utilizing the `Feature Request` template.

If you would like to instead contribute a pull request, please follow the
[Submission Guidelines](#guidelines)

## <a name="contribute"></a>Contributing

Thank you for contributing to the MCP Server CircleCI!

Before submitting any new Issue or Pull Request, search our repository for any
existing or previous related submissions.

- [Search Pull Requests](https://github.com/CircleCI-Public/circleci-mcp-cookbook/pulls?q=)
- [Search Issues](https://github.com/CircleCI-Public/circleci-mcp-cookbook/issues?q=)

### <a name="guidelines"></a>Submission Guidelines

#### <a name="commit"></a>Commit Conventions

This project strictly adheres to the
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
specification for creating human readable commit messages with appropriate
automation capabilities, such as changelog generation.

##### Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a
special format that includes a type, a scope and a subject:

```
<type>(optional <scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Footer should contain a
[closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/)
if any.

##### Breaking Change

Append a `!` to the end of the `type` in your commit message to suggest a
`BREAKING CHANGE`

```
<type>!(optional <scope>): <subject>
```

##### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies
  (example scopes: npm, eslint, prettier)
- **ci**: Changes to our CircleCI configuration files
- **chore**: No production code changes. Updates to readmes and meta documents
- **docs**: Changes to the API documentation or JSDoc/TSDoc comments
- **feat**: A new feature or capability for the MCP server
- **fix**: A bug fix in the server implementation
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
- **tools**: Changes to the CircleCI API tool implementations

#### <a name="pull"></a>Submitting a Pull Request

After searching for potentially existing pull requests or issues in progress, if
none are found, please open a new issue describing your intended changes and
stating your intention to work on the issue.

Creating issues helps us plan our next release and prevents folks from
duplicating work.

After the issue has been created, follow these steps to create a Pull Request.

1. Fork the
   [CircleCI-Public/circleci-mcp-cookbook](https://github.com/CircleCI-Public/circleci-mcp-cookbook)
   repo.
2. Clone your newly forked repository to your local machine.
3. Create a new branch for your changes: `git checkout -b fix_my_issue main`
4. Run `npm run setup`
5. Implement your change with appropriate test coverage.
6. Utilize our [commit message conventions](commit).
7. Run tests, linters, and formatters locally, with: `pnpm` scripts in `package.json`
8. Push all changes back to GitHub `git push origin fix_my_issue`
9. In GitHub, send a Pull Request to `circleci-mcp-cookbook:main`

Thank you for your contribution!
