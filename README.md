# cidbadge

Generate svg badges for IPFS content identifiers.

## Example Use

Install with `npm install --save cidbadge`.

```js
import cidbadge from 'cidbadge';

// the cid to render
const cid = 'QmWiNATFRiqGd1daYhno5DuHRCgJivQrRSToKW18GsHf9e';
// options are optional, only cid is required
const options = {
  targetLength: 12,
  href: `https://ipfs.io/ipfs/${cid}`
};
// Generated svg string
const svg = cidbadge(cid, options);
console.log(svg);
```

This will output the following svg text:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="147" height="20">\n  <a href="https://ipfs.io/ipfs/QmWiNATFRiqGd1daYhno5DuHRCgJivQrRSToKW18GsHf9e" target="_blank">\n    <linearGradient id="b" x2="0" y2="100%">\n      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>\n      <stop offset="1" stop-opacity=".1"/>\n    </linearGradient>\n    <mask id="a">\n      <rect width="147" height="20" rx="3" fill="#fff"/>\n    </mask>\n    <g mask="url(#a)">\n      <path fill="#555" d="M0 0h27v20H0z"/>\n      <path fill="#2EC8F7" d="M27 0h120v20H27z"/>\n      <path fill="url(#b)" d="M0 0h147v20H0z"/>\n    </g>\n    <g fill="#fff" text-anchor="middle" font-family="Verdana,DejaVu Sans,Geneva,sans-serif" font-size="11">\n      <text x="13.5" y="15" fill="#010101" fill-opacity=".3">cid</text>\n      <text x="13.5" y="14">cid</text>\n      <text x="87" y="15" fill="#010101" fill-opacity=".3">QmWiNA...8GsHf9</text>\n      <text x="87" y="14">QmWiNA...8GsHf9</text>\n    </g>\n  </a>\n</svg>
```

Renders as the following:
![](https://raw.githubusercontent.com/JChanceHud/cidbadge/master/badge.svg?sanitize=true)

## License
MIT
