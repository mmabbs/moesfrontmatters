# Site footer (local fork of @quartz-community/footer)

Local fork for moesfrontmatters.com. Renders the domain nav, a contact line and profile links in place of the upstream "Created with Quartz" credit. Options live in `quartz.config.yaml` (`nav`, `contactLabel`, `contact`, `links`); styling lives in `quartz/styles/custom.scss`.

`dist/` is committed because Quartz links local plugins without building them. After editing `src/`, run `npm install` (first time only) and `npm run build` in this folder.

The footer is not in `quartz.lock.json`: the build links `./plugins/footer` itself, so the deploy needs no lockfile entry.

---

Upstream README follows.

## Installation

```bash
npx quartz plugin add github:quartz-community/footer
```

## Usage

```yaml title="quartz.config.yaml"
plugins:
  - source: github:quartz-community/footer
    enabled: true
    options:
      links:
        GitHub: https://github.com/jackyzha0/quartz
        Discord Community: https://discord.gg/cRFFHYye7t
```

For advanced use cases, you can override in TypeScript:

```ts title="quartz.ts (override)"
import * as ExternalPlugin from "./.quartz/plugins";

ExternalPlugin.Footer({
  links: {
    GitHub: "https://github.com/jackyzha0/quartz",
    "Discord Community": "https://discord.gg/cRFFHYye7t",
  },
});
```

## Configuration

| Option  | Type                     | Default | Description                                                  |
| ------- | ------------------------ | ------- | ------------------------------------------------------------ |
| `links` | `Record<string, string>` | `{}`    | A map of link labels to their URLs to display in the footer. |

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/plugins/Footer) for more information.

## License

MIT
