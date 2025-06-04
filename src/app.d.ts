// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
}

declare module '*.md' {
	// "unknown" would be more type-safe than "any"
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const metadata: Record<string, any>;
	const default: import('svelte').ComponentType;
}
