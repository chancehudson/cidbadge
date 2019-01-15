declare module 'cidbadge' {
  function cidbadge(cid: string, options?: {
    targetLength?: number,
    href?: string
  }): string;
  export = cidbadge;
}
